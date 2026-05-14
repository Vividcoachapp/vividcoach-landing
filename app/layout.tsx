import type { Metadata } from 'next'
import { Fraunces, Inter_Tight } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VividCoach — A coach who actually gets you.',
  description:
    'Bad knee. Post-pregnancy comeback. Gym anxiety. VividCoach knows about it from day one. Join the beta waitlist.',
  openGraph: {
    title: 'VividCoach — A coach who actually gets you.',
    description:
      'Bad knee. Post-pregnancy comeback. Gym anxiety. VividCoach knows about it from day one.',
    url: 'https://vivid-coach.com',
    siteName: 'VividCoach',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  )
}
