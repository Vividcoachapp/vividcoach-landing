'use client'

import { useState } from 'react'
import { track } from '@vercel/analytics/react'

export default function AndroidNotifyForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    track('android_notify_submitted')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          utm_source: 'android_notify',
          utm_content: 'android_notify',
        }),
      })
      if (res.ok || res.status === 409) {
        setStatus('success')
        track('android_notify_success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <p className="android-notify-success">Got it — we&apos;ll email you when Android launches.</p>
  }

  return (
    <form className="android-notify-form" onSubmit={handleSubmit} noValidate>
      <p className="android-notify-label">No iPhone? Get notified when Android launches.</p>
      <div className="android-notify-row">
        <input
          className="android-notify-input"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          inputMode="email"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          className="android-notify-btn"
          disabled={status === 'loading' || !email.trim()}
        >
          {status === 'loading' ? '…' : 'Notify me'}
        </button>
      </div>
      {status === 'error' && (
        <p className="android-notify-error">Something went wrong — try again.</p>
      )}
    </form>
  )
}
