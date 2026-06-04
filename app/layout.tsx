import type { Metadata } from 'next'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import CursorGlow from './components/CursorGlow'
import ScrollAnimations from './components/ScrollAnimations'

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
    'Bad knee. Post-pregnancy comeback. Gym anxiety. VividCoach knows about it from day one. AI fitness coaching that adapts to your body, injuries, and life.',
  metadataBase: new URL('https://www.vivid-coach.com'),
  alternates: {
    canonical: 'https://www.vivid-coach.com',
  },
  keywords: ['AI fitness coach', 'personal trainer app', 'AI personal trainer', 'fitness coaching app', 'workout app', 'VividCoach', 'injury-aware fitness'],
  openGraph: {
    title: 'VividCoach — A coach who actually gets you.',
    description:
      'Bad knee. Post-pregnancy comeback. Gym anxiety. VividCoach knows about it from day one.',
    url: 'https://www.vivid-coach.com',
    siteName: 'VividCoach',
    type: 'website',
    images: [{
      url: '/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'VividCoach — AI personal coaching that knows your body',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VividCoach — A coach who actually gets you.',
    description:
      'Bad knee. Post-pregnancy comeback. Gym anxiety. VividCoach knows about it from day one.',
    images: ['/opengraph-image'],
  },
  other: {
    'theme-color': '#07090F',
  },
}

const jsonLd = [
  {
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
  },
  {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'VividCoach',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS',
    description: 'AI personal coaching that adapts to your body, injuries, and limitations from day one. Choose from 30 coaches with distinct personalities.',
    url: 'https://apps.apple.com/app/vividcoach/id6744742860',
    offers: {
      '@type': 'Offer',
      price: '12.99',
      priceCurrency: 'USD',
    },
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CursorGlow />
        <ScrollAnimations />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
