const ITEMS = [
  '30+ AI Coaches',
  'Day 1 Context',
  '$12.99 / month',
  'No Generic Plans',
  'Cancel Anytime',
  'Built for Real Bodies',
  'Your Story, Remembered',
  'Personalized Daily',
  'Zero Upsells',
  'Injury-Aware Training',
  'Real Connection',
  'Adapts as You Grow',
]

export default function Marquee() {
  return (
    <div className="marquee-outer" aria-hidden>
      <div className="marquee-inner">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-sep" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
