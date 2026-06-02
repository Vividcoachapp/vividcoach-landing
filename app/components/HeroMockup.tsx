'use client'

import { useEffect, useRef, useState } from 'react'

const SEQUENCE = [
  { delay: 900, type: 'coach' as const, text: "I see you've got a bad knee. Let's build your plan around it." },
  { delay: 2700, type: 'user' as const, text: "That's exactly what I needed to hear." },
  { delay: 4000, type: 'coach' as const, text: "Today: zero-impact mobility + upper body. 24 min. Ready?" },
]

const LAST_DELAY = Math.max(...SEQUENCE.map(m => m.delay))
const LOOP_PAUSE = 3200

export default function HeroMockup() {
  const [shown, setShown] = useState<number[]>([])
  const [typing, setTyping] = useState(false)
  const [loopCount, setLoopCount] = useState(0)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    function clearAll() {
      timersRef.current.forEach(clearTimeout)
      timersRef.current = []
    }

    function runSequence() {
      clearAll()
      setShown([])
      setTyping(false)
      setLoopCount(c => c + 1)

      const timers: ReturnType<typeof setTimeout>[] = []

      SEQUENCE.forEach((msg, i) => {
        if (msg.type === 'coach') {
          timers.push(setTimeout(() => setTyping(true), msg.delay - 700))
        }
        timers.push(
          setTimeout(() => {
            setTyping(false)
            setShown(prev => [...prev, i])
          }, msg.delay)
        )
      })

      timers.push(setTimeout(runSequence, LAST_DELAY + LOOP_PAUSE))
      timersRef.current = timers
    }

    runSequence()
    return clearAll
  }, [])

  return (
    <div className="hmk" aria-hidden>
      <div className="hmk-bar">
        <div className="hmk-bar-dot" />
        <div className="hmk-bar-dot" />
        <div className="hmk-bar-dot" />
      </div>

      <div className="hmk-header">
        <div className="hmk-avatar">A</div>
        <div className="hmk-info">
          <div className="hmk-name">Andre</div>
          <div className="hmk-online">
            <span className="hmk-online-dot" />
            Active now
          </div>
        </div>
        <div className="hmk-chip">Your Coach</div>
      </div>

      <div className="hmk-messages">
        {SEQUENCE.map((msg, i) =>
          shown.includes(i) ? (
            <div key={i} className={`hmk-bubble hmk-bubble-${msg.type} hmk-in`}>
              {msg.text}
            </div>
          ) : null
        )}
        {typing && (
          <div className="hmk-bubble hmk-bubble-coach hmk-in">
            <span className="hmk-dot-1" />
            <span className="hmk-dot-2" />
            <span className="hmk-dot-3" />
          </div>
        )}
      </div>

      <div className="hmk-metrics">
        <div className="hmk-metric">
          <span className="hmk-metric-val">4</span>
          <span className="hmk-metric-lbl">workouts</span>
        </div>
        <div className="hmk-metric-sep" />
        <div className="hmk-metric">
          <span className="hmk-metric-val">12<small>d</small></span>
          <span className="hmk-metric-lbl">streak</span>
        </div>
        <div className="hmk-metric-sep" />
        <div className="hmk-metric">
          <svg key={loopCount} className="hmk-ring-svg" viewBox="0 0 40 40" aria-hidden>
            <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3.5" />
            <circle
              className="hmk-ring-arc"
              cx="20" cy="20" r="16"
              fill="none"
              stroke="var(--cyan)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="75 26"
              transform="rotate(-90 20 20)"
            />
          </svg>
          <div className="hmk-ring-text">
            <span className="hmk-metric-val">75%</span>
            <span className="hmk-metric-lbl">goal</span>
          </div>
        </div>
      </div>
    </div>
  )
}
