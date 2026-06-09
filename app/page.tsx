import Image from 'next/image'
import { createClient } from '@supabase/supabase-js'
import WaitlistForm from './components/WaitlistForm'
import AnimatedCounter from './components/AnimatedCounter'
import ParticleField from './components/ParticleField'
import Marquee from './components/Marquee'
import HeroVideo from './components/HeroVideo'
import TrackedLink from './components/TrackedLink'

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

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
      </svg>
    ),
    title: 'Day 1 Memory',
    body: 'Your coach knows your bad knee, your schedule, your anxiety — from the first message. Nothing needs repeating.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Real-Time Adaptation',
    body: 'Had a rough week? Traveled? Flared up? Your plan shifts around your life — not the other way around.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Vibe Match',
    body: 'Warm and encouraging or blunt and intense? Choose the personality that actually makes you show up.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Progress Tracking',
    body: 'Streaks, consistency scores, and milestone moments — so you can see exactly how far you\'ve come.',
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
          <TrackedLink href="https://apps.apple.com/app/vividcoach/id6744742860" className="nav-cta" eventName="appstore_cta_clicked" eventProps={{ location: 'nav' }} target="_blank" rel="noopener noreferrer">Download free</TrackedLink>
        ) : (
          <TrackedLink href="#waitlist" className="nav-cta" eventName="waitlist_cta_clicked" eventProps={{ location: 'nav' }}>Join beta</TrackedLink>
        )}
      </nav>

      <main>
        {/* ── HERO ──────────────────────────────────────── */}
        <section className="hero hero--cinematic">
          <div className="hero-bg" aria-hidden />
          <HeroVideo />
          <div className="hero-glow" aria-hidden />
          <div className="hero-glow-2" aria-hidden />
          <div className="hero-orb-1" aria-hidden />
          <div className="hero-orb-2" aria-hidden />
          <div className="hero-orb-3" aria-hidden />
          <ParticleField />

          <div className="hero-content hero-content--centered">
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden />
              {LAUNCH_STATE === 'live' ? 'Now available on iOS' : 'Beta waitlist now open'}
            </div>

            <h1 className="hero-headline hero-headline--xl">
              A coach who<br />actually <em>gets&nbsp;you.</em>
            </h1>

            <p className="hero-sub hero-sub--centered">
              Bad knee. Post-pregnancy comeback. Gym anxiety.<br className="hero-br" />
              VividCoach knows about it from day&nbsp;one.
            </p>

            {LAUNCH_STATE === 'live' ? (
              <TrackedLink href="https://apps.apple.com/app/vividcoach/id6744742860" className="hero-cta" eventName="appstore_cta_clicked" eventProps={{ location: 'hero' }} target="_blank" rel="noopener noreferrer">
                Download on the App Store
                <svg className="hero-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </TrackedLink>
            ) : (
              <TrackedLink href="#waitlist" className="hero-cta" eventName="waitlist_cta_clicked" eventProps={{ location: 'hero' }}>
                Join the beta waitlist
                <svg className="hero-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </TrackedLink>
            )}

            <p className="hero-campaign">
              Your last fitness app didn&rsquo;t get you. VividCoach does.
            </p>
          </div>

          <div className="hero-scroll-hint" aria-hidden>
            <span>scroll</span>
            <div className="hero-scroll-arrow" />
          </div>
        </section>

        {/* ── MARQUEE PROOF STRIP ───────────────────────── */}
        <Marquee />

        {/* ── STATS BAR ─────────────────────────────────── */}
        <div className="stats-bar">
          <div className="stats-inner">
            <div className="stat-item" data-reveal>
              <span className="stat-number">
                <AnimatedCounter target={30} /><span className="stat-plus">+</span>
              </span>
              <span className="stat-label">AI coaches, all included</span>
            </div>
            <div className="stat-divider" aria-hidden />
            <div className="stat-item" data-reveal data-delay="2">
              <span className="stat-number">Day&nbsp;1</span>
              <span className="stat-label">knows your injuries & limits</span>
            </div>
            <div className="stat-divider" aria-hidden />
            <div className="stat-item" data-reveal data-delay="4">
              <span className="stat-number">$12.99</span>
              <span className="stat-label">per month, cancel anytime</span>
            </div>
          </div>
        </div>

        {/* ── PHILOSOPHY ────────────────────────────────── */}
        <section className="philosophy" aria-label="Our philosophy">
          <div className="philosophy-inner" data-reveal>
            <p className="section-label philosophy-label">The VividCoach belief</p>
            <h2 className="philosophy-headline">
              The gap between your limitations and your potential
              {' '}<em>isn&rsquo;t willpower.</em>
            </h2>
            <p className="philosophy-closer">It&rsquo;s the right coach.</p>
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────── */}
        <section className="features" id="features">
          <div className="features-inner">
            <div className="features-header" data-reveal>
              <p className="section-label">What makes it different</p>
              <h2 className="features-title">
                Built around <em>you</em> from the start.
              </h2>
            </div>
            <div className="features-grid">
              {features.map((f, i) => (
                <div key={f.title} className="feature-card" data-reveal data-delay={String(i + 1)}>
                  <div className="feature-icon">{f.icon}</div>
                  <h3 className="feature-name">{f.title}</h3>
                  <p className="feature-body">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── BRAND STORY ── Editorial Panels ───────────── */}
        <section className="story" id="story" aria-label="Built for real bodies">
          <div className="story-intro" data-reveal>
            <p className="section-label">Built for real bodies</p>
          </div>

          <div className="story-panels">
            <div className="story-panel" data-reveal>
              <div className="story-panel-left">
                <span className="story-panel-number" aria-hidden>01</span>
                <div className="story-panel-problem">Bad knee.</div>
              </div>
              <div className="story-panel-right">
                <p className="story-panel-body">
                  Not &ldquo;just avoid squats.&rdquo; VividCoach knows your knee — builds every session around it, adapts every week as you get stronger. No modification is an afterthought. You keep moving forward. Always.
                </p>
              </div>
            </div>

            <div className="story-panel" data-reveal data-delay="1">
              <div className="story-panel-left">
                <span className="story-panel-number" aria-hidden>02</span>
                <div className="story-panel-problem">Post-pregnancy comeback.</div>
              </div>
              <div className="story-panel-right">
                <p className="story-panel-body">
                  Your body changed. Your old routine doesn&rsquo;t fit anymore. VividCoach starts from where you actually are — not where you used to be — and builds a path that respects every limit while still pushing you forward.
                </p>
              </div>
            </div>

            <div className="story-panel" data-reveal data-delay="2">
              <div className="story-panel-left">
                <span className="story-panel-number" aria-hidden>03</span>
                <div className="story-panel-problem">Gym anxiety.</div>
              </div>
              <div className="story-panel-right">
                <p className="story-panel-body">
                  Walking in without a plan is the hardest part. Your coach gives you one — every session, structured so you feel in control before you arrive. Walk in knowing exactly what you&rsquo;re doing. Focus on moving, not figuring it out.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── COACHES ───────────────────────────────────── */}
        <section className="coaches" id="coaches">
          <div className="coaches-header" data-reveal>
            <p className="section-label">Meet your coaches</p>
            <h2 className="coaches-title">
              AI coaches. Real <em>connection.</em>
            </h2>
            <p className="coaches-sub">
              Every VividCoach coach is matched to your specific situation — not
              assigned randomly. The bond starts before your first session.
            </p>
          </div>

          <div className="coaches-list">
            {coaches.map((coach, i) => (
              <div
                key={coach.name}
                className={`coach-row${i % 2 === 1 ? ' coach-row-reverse' : ''}`}
                data-reveal
                data-delay={String(i + 1)}
              >
                <div className="coach-row-photo parallax-wrap">
                  <Image
                    src={coach.image}
                    alt={`${coach.name} — VividCoach ${coach.specialty} coach`}
                    fill
                    sizes="(max-width: 768px) 90vw, 48vw"
                    className="coach-photo parallax-img"
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

          <p className="coaches-more" data-reveal>
            And 27 more coaches in the app — each with their own specialty, voice, and approach.
          </p>
        </section>

        {/* ── INTERSTITIAL ──────────────────────────────── */}
        <section className="interstitial interstitial--tall">
          <Image
            src="/interstitial-cinematic.png"
            alt="Athlete in motion"
            fill
            className="interstitial-img"
            sizes="100vw"
            priority={false}
          />
          <div className="interstitial-text" data-reveal>
            <span className="interstitial-label">Every workout. Every limitation.</span>
            <h2 className="interstitial-headline">
              Built for the body<br />you actually have.
            </h2>
          </div>
        </section>

        <div className="divider" />

        {/* ── MANIFESTO (replaces not-section) ──────────── */}
        <section className="manifesto" id="not">
          <div className="manifesto-inner">
            <div className="manifesto-col" data-reveal>
              <p className="section-label manifesto-label">What VividCoach is not</p>
              <h2 className="manifesto-headline">
                Not another app that forgets <em>you&nbsp;exist.</em>
              </h2>
              <p className="manifesto-body">
                There&rsquo;s no shortage of fitness apps. There&rsquo;s a massive shortage of coaching that actually knows you — your body, your history, your real life.
              </p>
            </div>
            <ul className="manifesto-list" aria-label="What VividCoach is not">
              <li className="manifesto-item" data-reveal data-delay="1">
                <span className="manifesto-marker" aria-hidden>01</span>
                <div className="manifesto-item-text">
                  <strong>Not a generic plan generator.</strong>
                  <p>Every session is shaped by what your coach knows about your body, history, and goals — not an algorithm guessing from a template.</p>
                </div>
              </li>
              <li className="manifesto-item" data-reveal data-delay="2">
                <span className="manifesto-marker" aria-hidden>02</span>
                <div className="manifesto-item-text">
                  <strong>Not a library of videos.</strong>
                  <p>You don&rsquo;t need more content to scroll. You need a coach who tells you exactly what to do today.</p>
                </div>
              </li>
              <li className="manifesto-item" data-reveal data-delay="3">
                <span className="manifesto-marker" aria-hidden>03</span>
                <div className="manifesto-item-text">
                  <strong>Not built for the already-fit.</strong>
                  <p>VividCoach starts from where you actually are — injuries, limitations, life — and builds from there.</p>
                </div>
              </li>
              <li className="manifesto-item" data-reveal data-delay="4">
                <span className="manifesto-marker" aria-hidden>04</span>
                <div className="manifesto-item-text">
                  <strong>Not subscription bait.</strong>
                  <p>One price. No upsells. Cancel anytime. The coach relationship is the product.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <div className="divider" />

        {/* ── PRICING ───────────────────────────────────── */}
        <section className="pricing" id="pricing">
          <p className="section-label" data-reveal>Pricing</p>
          <h2 className="pricing-title" data-reveal data-delay="1">Simple. Honest. No games.</h2>
          <div className="pricing-card" data-reveal data-delay="2">
            <div className="pricing-amount">
              <span className="pricing-monthly">$12.99<span className="pricing-period">/month</span></span>
              <span className="pricing-or">or</span>
              <span className="pricing-yearly">$99<span className="pricing-period">/year</span></span>
            </div>
            <p className="pricing-note">No upsells. Cancel anytime.</p>
            <p className="pricing-anchor">
              <strong>Less than a single session with a personal trainer.</strong><br />
              A real coach for the cost of a streaming subscription.
            </p>
            {LAUNCH_STATE === 'live' ? (
              <TrackedLink href="https://apps.apple.com/app/vividcoach/id6744742860" className="hero-cta" style={{ marginTop: '0.75rem' }} eventName="appstore_cta_clicked" eventProps={{ location: 'pricing' }} target="_blank" rel="noopener noreferrer">
                Download free
                <svg className="hero-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </TrackedLink>
            ) : (
              <TrackedLink href="#waitlist" className="hero-cta" style={{ marginTop: '0.75rem' }} eventName="waitlist_cta_clicked" eventProps={{ location: 'pricing' }}>
                Join the beta waitlist
                <svg className="hero-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </TrackedLink>
            )}
          </div>
        </section>

        <div className="divider" />

        {/* ── SOCIAL PROOF ──────────────────────────────── */}
        <section className="social-proof" id="reviews">
          <div className="social-proof-header" data-reveal>
            <p className="section-label">What people are saying</p>
            <h2 style={{ fontFamily: 'var(--font-fraunces, serif)', fontStyle: 'italic', fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--text)', maxWidth: '26ch', marginTop: '0.5rem' }}>
              Real users. Real <em style={{ color: 'var(--cyan)' }}>results.</em>
            </h2>
          </div>
          <div className="reviews-grid">
            <div className="review-card" data-reveal data-delay="1">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&ldquo;Finally an app that doesn&rsquo;t ignore my bad hip. VividCoach adapted my whole plan around it from day one. No other app has ever done that.&rdquo;</p>
              <div className="review-author">
                <span className="review-author-name">Sarah M.</span>
                <span className="review-author-detail">Running comeback after hip injury</span>
              </div>
            </div>
            <div className="review-card" data-reveal data-delay="2">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&ldquo;I told my coach about my anxiety around the gym on day one. Every workout since has been structured so I feel in control before I walk in. This is the first time I&rsquo;ve stuck with anything.&rdquo;</p>
              <div className="review-author">
                <span className="review-author-name">Marcus T.</span>
                <span className="review-author-detail">6 weeks consistent, first time ever</span>
              </div>
            </div>
            <div className="review-card" data-reveal data-delay="3">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&ldquo;Post-pregnancy, I didn&rsquo;t know where to start. My VividCoach coach remembered every limitation I mentioned and never once gave me a generic plan. It feels genuinely personal.&rdquo;</p>
              <div className="review-author">
                <span className="review-author-name">Jess R.</span>
                <span className="review-author-detail">Postpartum fitness comeback</span>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── QUOTE ─────────────────────────────────────── */}
        <section className="quote-section">
          <div className="quote-inner" data-reveal>
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
              <p className="section-label" data-reveal>Available now</p>
              <h2 className="waitlist-title" data-reveal data-delay="1">
                Start with VividCoach today.
              </h2>
              <p className="waitlist-sub" data-reveal data-delay="2">
                Free to download. Your first session is on us.
              </p>
              <TrackedLink href="https://apps.apple.com/app/vividcoach/id6744742860" className="hero-cta" style={{ display: 'inline-flex', marginTop: '2rem' }} eventName="appstore_cta_clicked" eventProps={{ location: 'waitlist' }} target="_blank" rel="noopener noreferrer">
                Download on the App Store
                <svg className="hero-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </TrackedLink>
            </>
          ) : (
            <>
              <p className="section-label" data-reveal>Beta waitlist</p>
              <h2 className="waitlist-title" data-reveal data-delay="1">
                Get early access to VividCoach.
              </h2>
              <p className="waitlist-sub" data-reveal data-delay="2">
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
            <a href="mailto:support@vivid-coach.com" className="support-link">
              support@vivid-coach.com
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
