import Image from 'next/image'
import { createClient } from '@supabase/supabase-js'
import WaitlistForm from './components/WaitlistForm'
import HeroMockup from './components/HeroMockup'
import AnimatedCounter from './components/AnimatedCounter'

async function getWaitlistCount(): Promise<number> {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const { data, error } = await supabase.rpc('get_waitlist_count')
    if (error) return 0
    return data ?? 0
  } catch {
    return 0
  }
}

export const revalidate = 60

const LAUNCH_STATE = (process.env.NEXT_PUBLIC_LAUNCH_STATE ?? 'waitlist') as 'waitlist' | 'live'

// Chloe (warm) | Carmen (direct) | Andre (intense) — vibe spectrum, all free tier
const coaches = [
  {
    name: 'Chloe',
    specialty: 'Group fitness & real relationships',
    image: '/coaches/chloe.png',
    quote:
      'Most fitness struggles aren\'t about willpower — they\'re about finding the right approach for the right person.',
  },
  {
    name: 'Carmen',
    specialty: 'Strength & performance',
    image: '/coaches/carmen.png',
    quote:
      'I don\'t soften feedback. I respect you enough to be direct — and that\'s exactly why people hit their goals with me.',
  },
  {
    name: 'Andre',
    specialty: 'HIIT & conditioning',
    image: '/coaches/andre.png',
    quote:
      'The sessions that change you are the ones you didn\'t think you could finish. I\'ll be there for every one of those.',
  },
]

export default async function Home() {
  const count = await getWaitlistCount()

  return (
    <>
      {/* ── NAV ─────────────────────────────────────────── */}
      <nav className="nav">
        <a href="/" className="nav-logo">VividCoach</a>
        {LAUNCH_STATE === 'live' ? (
          <a
            href="https://apps.apple.com/app/vividcoach/id6744742860"
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download free
          </a>
        ) : (
          <a href="#waitlist" className="nav-cta">Join beta</a>
        )}
      </nav>

      <main>
        {/* ── HERO ──────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-bg" aria-hidden />
          <div className="hero-glow" aria-hidden />
          <div className="hero-glow-2" aria-hidden />
          <div className="hero-orb-1" aria-hidden />
          <div className="hero-orb-2" aria-hidden />
          <div className="hero-orb-3" aria-hidden />

          {/* Left column: copy */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden />
              {LAUNCH_STATE === 'live' ? 'Now available on iOS' : 'Beta waitlist now open'}
            </div>

            <h1 className="hero-headline">
              A coach who actually <em>gets you.</em>
            </h1>

            <p className="hero-sub">
              Bad knee. Post-pregnancy comeback. Gym anxiety. VividCoach knows
              about it from day one.
            </p>

            {LAUNCH_STATE === 'live' ? (
              <a
                href="https://apps.apple.com/app/vividcoach/id6744742860"
                className="hero-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download on the App Store
                <svg className="hero-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ) : (
              <a href="#waitlist" className="hero-cta">
                Join the beta waitlist
                <svg className="hero-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}

            <p className="hero-campaign">
              Your last fitness app didn&rsquo;t get you. VividCoach does.
            </p>
          </div>

          {/* Right column: animated app mockup (desktop only) */}
          <div className="hero-visual" aria-hidden>
            <HeroMockup />
          </div>

          <div className="hero-scroll-hint" aria-hidden>
            <span>scroll</span>
            <div className="hero-scroll-arrow" />
          </div>
        </section>

        {/* ── STATS BAR ─────────────────────────────────── */}
        <div className="stats-bar">
          <div className="stats-inner">
            <div className="stat-item">
              <span className="stat-number">
                <AnimatedCounter target={30} /><span className="stat-plus">+</span>
              </span>
              <span className="stat-label">AI coaches, all included</span>
            </div>
            <div className="stat-divider" aria-hidden />
            <div className="stat-item">
              <span className="stat-number">Day&nbsp;1</span>
              <span className="stat-label">knows your injuries & limits</span>
            </div>
            <div className="stat-divider" aria-hidden />
            <div className="stat-item">
              <span className="stat-number">$12.99</span>
              <span className="stat-label">per month, cancel anytime</span>
            </div>
          </div>
        </div>

        {/* ── BRAND STORY ───────────────────────────────── */}
        <section className="story" id="story">
          <div className="story-header">
            <p className="section-label">Built for real bodies</p>
            <h2 className="story-title">
              Coaching that meets the body you actually have.
            </h2>
          </div>

          <div className="story-grid">
            <div className="story-card">
              <div className="story-card-accent" aria-hidden />
              <span className="story-card-number" aria-hidden>01</span>
              <div className="story-card-problem">Bad knee.</div>
              <p className="story-card-body">
                Not &quot;just avoid squats.&quot; VividCoach knows your knee, builds around
                it, and adapts every session so you can still move forward.
              </p>
            </div>

            <div className="story-card">
              <div className="story-card-accent" aria-hidden />
              <span className="story-card-number" aria-hidden>02</span>
              <div className="story-card-problem">Post-pregnancy comeback.</div>
              <p className="story-card-body">
                Your body changed. Your old routine doesn&apos;t fit anymore.
                VividCoach starts from where you actually are — not where you used
                to be.
              </p>
            </div>

            <div className="story-card">
              <div className="story-card-accent" aria-hidden />
              <span className="story-card-number" aria-hidden>03</span>
              <div className="story-card-problem">Gym anxiety.</div>
              <p className="story-card-body">
                Walking in without a plan is hard. Your coach helps you show up
                with one every single time — so you can focus on moving, not
                figuring it out.
              </p>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── COACHES ───────────────────────────────────── */}
        <section className="coaches" id="coaches">
          <div className="coaches-header">
            <p className="section-label">Meet your coaches</p>
            <h2 className="coaches-title">
              Real coaches. Real <em>connection.</em>
            </h2>
            <p className="coaches-sub">
              Every VividCoach coach is matched to your specific situation — not
              assigned randomly. The bond starts before your first session.
            </p>
          </div>

          <div className="coaches-list">
            {coaches.map((coach, i) => (
              <div key={coach.name} className={`coach-row${i % 2 === 1 ? ' coach-row-reverse' : ''}`}>
                <div className="coach-row-photo">
                  <Image
                    src={coach.image}
                    alt={`${coach.name}, VividCoach`}
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="coach-photo"
                  />
                  <div className="coach-photo-overlay" aria-hidden />
                </div>
                <div className="coach-row-content">
                  <div className="coach-specialty">{coach.specialty}</div>
                  <div className="coach-name">{coach.name}</div>
                  <blockquote className="coach-quote">
                    &ldquo;{coach.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <p className="coaches-more">
            And 27 more coaches in the app — each with their own specialty, voice, and approach.
          </p>
        </section>

        <div className="divider" />

        {/* ── ANTI-POSITIONING ──────────────────────────── */}
        <section className="not-section" id="not">
          <div className="not-header">
            <p className="section-label not-label">What VividCoach is not</p>
            <h2 className="not-title">
              Not another app that forgets <em>you exist.</em>
            </h2>
          </div>
          <ul className="not-list">
            <li className="not-item">
              <span className="not-x" aria-hidden>✕</span>
              <div>
                <strong>Not a generic plan generator.</strong> Every session is shaped by what your coach knows about your body, history, and goals — not an algorithm guessing.
              </div>
            </li>
            <li className="not-item">
              <span className="not-x" aria-hidden>✕</span>
              <div>
                <strong>Not a library of videos.</strong> You don&rsquo;t need more content to scroll. You need a coach who tells you exactly what to do today.
              </div>
            </li>
            <li className="not-item">
              <span className="not-x" aria-hidden>✕</span>
              <div>
                <strong>Not built for the already-fit.</strong> VividCoach starts from where you actually are — injuries, limitations, life — and builds from there.
              </div>
            </li>
            <li className="not-item">
              <span className="not-x" aria-hidden>✕</span>
              <div>
                <strong>Not subscription bait.</strong> One price. No upsells. Cancel anytime. The coach relationship is the product.
              </div>
            </li>
          </ul>
        </section>

        <div className="divider" />

        {/* ── PRICING ───────────────────────────────────── */}
        <section className="pricing" id="pricing">
          <p className="section-label">Pricing</p>
          <h2 className="pricing-title">Simple. Honest. No games.</h2>
          <div className="pricing-card">
            <div className="pricing-amount">
              <span className="pricing-monthly">$12.99<span className="pricing-period">/month</span></span>
              <span className="pricing-or">or</span>
              <span className="pricing-yearly">$99<span className="pricing-period">/year</span></span>
            </div>
            <p className="pricing-note">No upsells. Cancel anytime.</p>
          </div>
        </section>

        <div className="divider" />

        {/* ── QUOTE ─────────────────────────────────────── */}
        <section className="quote-section">
          <div className="quote-inner">
            <p className="quote-text">
              Most apps give you a plan. VividCoach gives you a coach who actually knows your story.
            </p>
            <p className="quote-attribution">— What our {LAUNCH_STATE === 'live' ? 'users' : 'beta testers'} keep telling us</p>
          </div>
        </section>

        <div className="divider" />

        {/* ── WAITLIST / DOWNLOAD ───────────────────────── */}
        <section className="waitlist" id="waitlist">
          {LAUNCH_STATE === 'live' ? (
            <>
              <p className="section-label">Available now</p>
              <h2 className="waitlist-title">
                Start with VividCoach today.
              </h2>
              <p className="waitlist-sub">
                Free to download. Your first session is on us.
              </p>
              <a
                href="https://apps.apple.com/app/vividcoach/id6744742860"
                className="hero-cta"
                style={{ display: 'inline-flex', marginTop: '2rem' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download on the App Store
                <svg className="hero-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </>
          ) : (
            <>
              <p className="section-label">Beta waitlist</p>
              <h2 className="waitlist-title">
                Get early access to VividCoach.
              </h2>
              <p className="waitlist-sub">
                We&apos;re opening beta to a small group. Drop your email and
                we&apos;ll reach out when your spot is ready.
              </p>
              <WaitlistForm initialCount={count} />
            </>
          )}
        </section>

        <div className="divider" />

        {/* ── SUPPORT ───────────────────────────────────── */}
        <section className="support" id="support">
          <p className="section-label">Support</p>
          <h2 className="support-title">Need help?</h2>
          <p className="support-body">
            We&apos;re a small team and we read every message. Reach out and
            we&apos;ll get back to you as fast as we can.
          </p>
          <a href="mailto:support@vivid-coach.com" className="support-link">
            support@vivid-coach.com
          </a>

          <div className="feedback-block">
            <p className="section-label" style={{ marginTop: '2.5rem' }}>Share ideas</p>
            <p className="support-body">
              Have a feature idea or feedback for the beta? We&apos;d love to hear it.
            </p>
            <a href="mailto:feedback@vivid-coach.com" className="support-link">
              feedback@vivid-coach.com
            </a>
          </div>
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer className="footer">
        <p className="footer-copy">© 2026 VividCoach. All rights reserved.</p>
        <nav className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Use</a>
          <a href="/contest-rules" className="footer-link">Contest Rules</a>
          <a href="#support" className="footer-link">Support</a>
        </nav>
      </footer>
    </>
  )
}
