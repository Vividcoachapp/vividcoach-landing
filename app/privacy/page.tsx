import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — VividCoach',
  description: 'How VividCoach collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  const effective = 'May 16, 2026';

  return (
    <main style={{ background: 'var(--navy)', minHeight: '100vh', padding: '6rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>

        <p className="section-label">Legal</p>
        <h1 style={{
          fontFamily: 'var(--font-fraunces, serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          marginBottom: '0.5rem',
        }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem', marginBottom: '3rem' }}>
          Effective {effective}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          <Section title="1. Who We Are">
            <p>VividCoach (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the VividCoach mobile application and the website at vivid-coach.com. We are committed to protecting your privacy and handling your personal information responsibly.</p>
            <p>Questions? Email us at <a href="mailto:support@vivid-coach.com" style={{ color: 'var(--cyan)' }}>support@vivid-coach.com</a>.</p>
          </Section>

          <Section title="2. Information We Collect">
            <Subsection title="Account Information">
              When you create an account, we collect your email address and password. You may optionally provide your name.
            </Subsection>
            <Subsection title="Health &amp; Fitness Data">
              With your permission, VividCoach reads data from Apple HealthKit including steps, sleep, calories burned, workout sessions, and heart rate. This data is used solely to give your AI coach full context so you don&rsquo;t have to log everything manually. We do not sell or share your HealthKit data with third parties.
            </Subsection>
            <Subsection title="Coaching Conversations">
              Messages you send to your AI coach are stored to enable long-term memory features, weekly recap generation, and to improve your coaching experience. Conversations are associated with your user account and are not used to train AI models beyond your own session.
            </Subsection>
            <Subsection title="Workout &amp; Nutrition Logs">
              Data you enter about workouts, meals, and body measurements is stored to power progress tracking, goal coaching, and your weekly recap card.
            </Subsection>
            <Subsection title="Usage &amp; Analytics">
              We collect anonymized events such as screen views, feature interactions, and conversion events (e.g., paywall views) to understand how the app is used and improve the product. This data does not include the content of your messages or health metrics.
            </Subsection>
            <Subsection title="Device &amp; Technical Information">
              We collect device type, operating system version, push notification token (for coach reminders), and crash reports to operate and improve the app.
            </Subsection>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              <li>Delivering personalized AI coaching responses and weekly recap cards</li>
              <li>Sending push notifications for daily check-ins, momentum nudges, and weekly recaps (you control the schedule)</li>
              <li>Processing subscription payments via RevenueCat</li>
              <li>Monitoring app health and diagnosing crashes</li>
              <li>Improving product features based on aggregated, anonymized usage analytics</li>
            </ul>
            <p>We do not use your personal data for advertising or sell it to third parties.</p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>We share data with the following services to operate the app:</p>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-dim)', lineHeight: 1.8, marginTop: '0.75rem' }}>
              <li><strong style={{ color: 'var(--text)' }}>Supabase</strong> — Cloud database and authentication. Stores your account, coaching history, and logs in an encrypted PostgreSQL database (us-west-2 region).</li>
              <li><strong style={{ color: 'var(--text)' }}>Anthropic / Claude</strong> — Powers your AI coach responses. Your messages and relevant context are sent to Anthropic&rsquo;s API to generate coaching replies. Anthropic does not store your data beyond the API call.</li>
              <li><strong style={{ color: 'var(--text)' }}>RevenueCat</strong> — Manages subscription purchases and entitlements. RevenueCat processes payment information through Apple&rsquo;s App Store; we do not store credit card data.</li>
              <li><strong style={{ color: 'var(--text)' }}>Apple HealthKit</strong> — Health data is read on-device only with your explicit permission. HealthKit data is never transmitted off your device to third parties other than being included in your coaching context sent to Anthropic.</li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>We retain your account and coaching data for as long as your account is active. If you delete your account, your personal data is deleted within 30 days, except where retention is required by law.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>Depending on your location, you may have rights to access, correct, or delete your personal data. To exercise these rights or request a copy of your data:</p>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-dim)', lineHeight: 1.8, marginTop: '0.75rem' }}>
              <li>Email us at <a href="mailto:support@vivid-coach.com" style={{ color: 'var(--cyan)' }}>support@vivid-coach.com</a></li>
              <li>Delete your account from the app&rsquo;s Profile &rsaquo; Settings screen</li>
              <li>Revoke HealthKit access at any time in iOS Settings &rsaquo; Privacy &rsaquo; Health</li>
              <li>Opt out of push notifications in iOS Settings or in the app&rsquo;s Notification Preferences screen</li>
            </ul>
          </Section>

          <Section title="7. Children's Privacy">
            <p>VividCoach is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.</p>
          </Section>

          <Section title="8. Security">
            <p>We use industry-standard security measures including encrypted data transmission (TLS), encrypted data storage (AES-256 via Supabase), and row-level security policies to ensure each user can only access their own data. No system is perfectly secure; if you discover a security issue, please contact us immediately at <a href="mailto:support@vivid-coach.com" style={{ color: 'var(--cyan)' }}>support@vivid-coach.com</a>.</p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via a notification in the app or by email. Continued use of VividCoach after changes constitutes your acceptance of the updated policy.</p>
          </Section>

          <Section title="10. Contact">
            <p>VividCoach<br />
            Email: <a href="mailto:support@vivid-coach.com" style={{ color: 'var(--cyan)' }}>support@vivid-coach.com</a><br />
            Website: <a href="https://vivid-coach.com" style={{ color: 'var(--cyan)' }}>vivid-coach.com</a>
            </p>
          </Section>

        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 style={{
        fontFamily: 'var(--font-fraunces, serif)',
        fontStyle: 'italic',
        fontSize: '1.25rem',
        fontWeight: 700,
        color: 'var(--cyan)',
        marginBottom: '0.875rem',
        letterSpacing: '-0.01em',
      }}>{title}</h2>
      <div style={{ color: 'var(--text-dim)', lineHeight: 1.75, fontSize: '0.9375rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {children}
      </div>
    </section>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.25rem' }}>{title}</p>
      <p>{children}</p>
    </div>
  );
}
