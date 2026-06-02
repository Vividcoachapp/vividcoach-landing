'use client'

import { useState } from 'react'

interface WaitlistFormProps {
  initialCount: number
}

export default function WaitlistForm({ initialCount }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [count, setCount] = useState(initialCount)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setCount(data.count)
      setStatus('success')
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
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
      {count > 0 && (
        <div className="waitlist-counter">
          <span className="waitlist-counter-number">{count.toLocaleString()}</span>
          <span>people already on the list</span>
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
