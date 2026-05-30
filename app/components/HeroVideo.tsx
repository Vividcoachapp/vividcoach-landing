'use client'

export default function HeroVideo() {
  return (
    <video
      className="hero-video"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden
    >
      <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
  )
}
