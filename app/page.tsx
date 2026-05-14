import { createClient } from '@supabase/supabase-js'
import WaitlistForm from './components/WaitlistForm'

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

const coaches = [
  {
    name: 'Zoe',
    specialty: 'HIIT & functional training',
    image: '/coaches/zoe.png',
    quote:
      'My sessions leave people exhausted, proud, and already thinking about the next one.',
  },
  {
    name: 'Chloe',
    specialty: 'Group fitness & real relationships',
    image: '/coaches/chloe.png',
    quote:
      'Most fitness struggles aren\'t about willpower — they\'re about finding the right approach for the right person.',
  },
  {
    name: 'Carmen',
    specialty: 'Biomechanics & performance',
    image: '/coaches/carmen.png',
    quote:
      'I explain the why behind everything. My clients leave every session smarter than they arrived.',
  },
]

export default async function Home() {
  const count = await getWaitlistCount()

  return (
    <>
      {/* ── NAV ─────────────────────────────────────────── */}
      <nav className="nav">
        <a href="/" className="nav-logo">VividCoach</a>
        <a href="#waitlist" className="nav-cta">Join beta</a>
      </nav>

      <main>
        {/* ── HERO ──────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-glow" aria-hidden />

          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden />
            Beta waitlist now open
          </div>

          <h1 className="hero-headline">
            A coach who actually <em>gets you.</em>
          </h1>

          <p className="hero-sub">
            Bad knee. Post-pregnancy comeback. Gym anxiety. VividCoach knows
            about it from day one.
          </p>

          <a href="#waitlist" className="hero-cta">
            Join the beta waitlist
          </a>

          <div className="hero-scroll-hint" aria-hidden>
            <span>scroll</span>
            <div className="hero-scroll-arrow" />
          </div>
        </section>

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
              <div className="story-card-problem">Bad knee.</div>
              <p className="story-card-body">
                Not &quot;just avoid squats.&quot; VividCoach knows your knee, builds around
                it, and adapts every session so you can still move forward.
              </p>
            </div>

            <div className="story-card">
              <div className="story-card-accent" aria-hidden />
              <div className="story-card-problem">Post-pregnancy comeback.</div>
              <p className="story-card-body">
                Your body changed. Your old routine doesn&apos;t fit anymore.
                VividCoach starts from where you actually are — not where you used
                to be.
              </p>
            </div>

            <div className="story-card">
              <div className="story-card-accent" aria-hidden />
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

          <div className="coaches-grid">
            {coaches.map((coach) => (
              <div key={coach.name} className="coach-card">
                <div className="coach-photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={coach.image}
                    alt={`${coach.name}, VividCoach`}
                    className="coach-photo"
                  />
                  <div className="coach-photo-overlay" aria-hidden />
                </div>
                <div className="coach-caption">
                  <div className="coach-name">{coach.name}</div>
                  <div className="coach-specialty">{coach.specialty}</div>
                  <blockquote className="coach-quote">
                    &ldquo;{coach.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ── WAITLIST ──────────────────────────────────── */}
        <section className="waitlist" id="waitlist">
          <p className="section-label">Beta waitlist</p>
          <h2 className="waitlist-title">
            Be the first to coach with VividCoach.
          </h2>
          <p className="waitlist-sub">
            We&apos;re opening beta to a small group. Drop your email and
            we&apos;ll reach out when your spot is ready.
          </p>

          <WaitlistForm initialCount={count} />
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
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer className="footer">
        <p className="footer-copy">© 2026 VividCoach. All rights reserved.</p>
        <nav className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="#support" className="footer-link">Support</a>
        </nav>
      </footer>
    </>
  )
}
