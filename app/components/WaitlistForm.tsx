'use client'

import { useState, useEffect, useRef } from 'react'
import { track } from '@vercel/analytics/react'

interface WaitlistFormProps {
  initialCount: number
}

interface UtmParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
}

export default function WaitlistForm({ initialCount }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [count, setCount] = useState(initialCount)
  const utmRef = useRef<UtmParams>({})

  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    const utm: UtmParams = {}
    if (p.get('utm_source')) utm.utm_source = p.get('utm_source')!
    if (p.get('utm_medium')) utm.utm_medium = p.get('utm_medium')!
    if (p.get('utm_campaign')) utm.utm_campaign = p.get('utm_campaign')!
    if (p.get('utm_content')) utm.utm_content = p.get('utm_content')!
    utmRef.current = utm
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    setErrorMsg('')
    track('waitlist_form_submitted')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase(), ...utmRef.current }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
        track('waitlist_signup_error', { error: data.error ?? 'unknown' })
        return
      }

      setCount(data.count)
      setStatus('success')
      track('waitlist_signup_success', { count: data.count })
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
      track('waitlist_signup_error', { error: 'network_error' })
    }
  }

  if (status === 'success') {
    return (
      <div className="waitlist-success">
        <div className="waitlist-success-icon">✓</div>
        <div className="waitlist-success-title">You&apos;re on the list.</div>
        <p className="waitlist-success-sub">
          We&apos;ll reach out when beta opens.{' '}
          <span style={{ color: 'var(--cyan)' }}>{count.toLocaleString()} people</span> are ahead of you
          — this will be worth the wait.
        </p>
      </div>
    )
  }

  return (
    <>
      {count >= 50 ? (
        <div className="waitlist-counter">
          <span className="waitlist-counter-number">{count.toLocaleString()}</span>
          <span>people already on the list</span>
        </div>
      ) : (
        <div className="waitlist-counter">
          <span>Beta opens to a limited group — spots are limited.</span>
        </div>
      )}

      <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
        <input
          className="waitlist-input"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          required
          autoComplete="email"
          inputMode="email"
          disabled={status === 'loading'}
        />
        <button
          className="waitlist-submit"
          type="submit"
          disabled={status === 'loading' || !email.trim()}
        >
          {status === 'loading' ? 'Joining…' : 'Join the beta waitlist'}
        </button>
      </form>

      {status === 'error' && (
        <p className="waitlist-error" style={{ marginTop: '0.75rem' }}>
          {errorMsg}
        </p>
      )}
    </>
  )
}
