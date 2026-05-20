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
  metadataBase: new URL('https://www.vivid-coach.com'),
  openGraph: {
    title: 'VividCoach — A coach who actually gets you.',
    description:
      'Bad knee. Post-pregnancy comeback. Gym anxiety. VividCoach knows about it from day one.',
    url: 'https://www.vivid-coach.com',
    siteName: 'VividCoach',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VividCoach — A coach who actually gets you.',
    description:
      'Bad knee. Post-pregnancy comeback. Gym anxiety. VividCoach knows about it from day one.',
  },
  other: {
    'theme-color': '#07090F',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VividCoach',
  url: 'https://www.vivid-coach.com',
  description: 'AI fitness coaching that adapts to your body, injuries, and life.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@vivid-coach.com',
    contactType: 'customer support',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
