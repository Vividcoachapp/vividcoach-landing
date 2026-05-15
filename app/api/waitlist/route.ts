import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  if (
    typeof body !== 'object' ||
    body === null ||
    typeof (body as Record<string, unknown>).email !== 'string'
  ) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  }

  const email = ((body as Record<string, unknown>).email as string).trim().toLowerCase()

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { error: insertError } = await supabase
    .from('waitlist')
    .insert({ email })

  if (insertError) {
    if (insertError.code === '23505') {
      // Unique violation — already signed up. Still return current count.
      const { data: countData } = await supabase.rpc('get_waitlist_count')
      return NextResponse.json(
        { error: 'This email is already on the list.', count: countData ?? 0 },
        { status: 409 }
      )
    }
    console.error('Waitlist insert error:', insertError)
    return NextResponse.json({ error: 'Could not save your email. Please try again.' }, { status: 500 })
  }

  const { data: countData } = await supabase.rpc('get_waitlist_count')

  // Fire-and-forget CEO notification — requires RESEND_API_KEY in Vercel env vars
  if (process.env.RESEND_API_KEY) {
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'VividCoach Waitlist <waitlist@vivid-coach.com>',
        to: 'vividcoachceo@proton.me',
        subject: `New beta signup: ${email}`,
        text: `${email} just joined the VividCoach beta waitlist.\n\nTotal on waitlist: ${countData ?? 1}`,
      }),
    }).catch((err) => console.error('CEO notification email failed:', err))
  }

  return NextResponse.json({ success: true, count: countData ?? 1 }, { status: 201 })
}
