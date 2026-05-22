import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'VividCoach — A coach who actually gets you.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: 'linear-gradient(135deg, #07090F 0%, #0D1729 60%, #07090F 100%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow orb */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: 80,
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,240,228,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Chartreuse accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 72,
            left: 80,
            width: 56,
            height: 6,
            borderRadius: 3,
            background: '#D4FF3E',
          }}
        />

        {/* Logo */}
        <div
          style={{
            position: 'absolute',
            top: 72,
            left: 160,
            fontSize: 26,
            fontWeight: 700,
            color: '#F4F6FA',
            letterSpacing: '-0.5px',
          }}
        >
          VividCoach
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#F4F6FA',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            maxWidth: 720,
            marginBottom: 28,
          }}
        >
          A coach who actually{' '}
          <span style={{ color: '#00F0E4' }}>gets you.</span>
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: 'rgba(244,246,250,0.7)',
            maxWidth: 600,
            marginBottom: 0,
            lineHeight: 1.4,
          }}
        >
          Bad knee. Post-pregnancy comeback. Gym anxiety.
          VividCoach knows from day one.
        </div>
      </div>
    ),
    { ...size },
  )
}
