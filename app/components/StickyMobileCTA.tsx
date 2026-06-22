'use client'

import { useEffect, useState } from 'react'
import { track } from '@vercel/analytics/react'

const LAUNCH_STATE = (process.env.NEXT_PUBLIC_LAUNCH_STATE ?? 'waitlist') as 'waitlist' | 'live'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isLive = LAUNCH_STATE === 'live'
  const href = isLive ? 'https://apps.apple.com/app/vividcoach/id6744742860' : '#waitlist'
  const label = isLive ? 'Download free — App Store' : 'Join the beta waitlist'

  return (
    <div className={`sticky-cta${visible ? ' sticky-cta--visible' : ''}`} aria-hidden={!visible}>
      <a
        href={href}
        className="sticky-cta-btn"
        onClick={() => track(isLive ? 'appstore_cta_clicked' : 'waitlist_cta_clicked', { location: 'sticky' })}
        {...(isLive ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {label}
      </a>
    </div>
  )
}
