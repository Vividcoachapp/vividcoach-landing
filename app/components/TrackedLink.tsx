'use client'

import { track } from '@vercel/analytics/react'
import { AnchorHTMLAttributes } from 'react'

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string
  eventProps?: Record<string, string | number>
}

export default function TrackedLink({ eventName, eventProps, onClick, children, ...rest }: TrackedLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    track(eventName, eventProps)
    onClick?.(e)
  }
  return <a onClick={handleClick} {...rest}>{children}</a>
}
