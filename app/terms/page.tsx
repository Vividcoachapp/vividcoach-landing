import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — VividCoach',
  description: 'The terms governing your use of VividCoach.',
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem', marginBottom: '3rem' }}>
          Effective {effective}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          <Section title="1. Acceptance of Terms">
            <p>By downloading, installing, or using the VividCoach mobile application or website (collectively, the &ldquo;Service&rdquo;), you agree to these Terms of Service. If you do not agree, do not use the Service.</p>
          </Section>

          <Section title="2. Description of Service">
            <p>VividCoach is a personalized AI fitness coaching application that provides coaching conversations, workout and nutrition logging, progress tracking, and accountability features. The AI coach is powered by large language models and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
          </Section>

          <Section title="3. Eligibility">
            <p>You must be at least 13 years old to use VividCoach. By using the Service, you represent that you meet this requirement. If you are under 18, you represent that your parent or legal guardian has reviewed and agreed to these Terms.</p>
          </Section>

          <Section title="4. Health Disclaimer">
            <p>VividCoach provides general fitness guidance through AI coaching. This is <strong style={{ color: 'var(--text)' }}>not medical advice</strong>. Always consult a qualified healthcare professional before beginning any exercise or nutrition program, especially if you have pre-existing medical conditions. VividCoach is not responsible for any injury, illness, or adverse health outcome resulting from your use of the Service.</p>
          </Section>

          <Section title="5. Account Registration">
            <p>You must create an account to use most features of VividCoach. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately at <a href="mailto:support@vivid-coach.com" style={{ color: 'var(--cyan)' }}>support@vivid-coach.com</a> if you suspect unauthorized access.</p>
          </Section>

          <Section title="6. Subscriptions and Billing">
            <p>VividCoach offers subscription plans (Premium) that unlock additional features. Subscriptions are processed through Apple&rsquo;s App Store. By subscribing, you agree to Apple&rsquo;s payment terms.</p>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              <li>Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date.</li>
              <li>Manage or cancel subscriptions in your Apple ID account settings.</li>
              <li>Refunds are governed by Apple&rsquo;s refund policy. Contact Apple Support for refund requests.</li>
              <li>We may change subscription pricing with advance notice. Continued use after a price change constitutes acceptance.</li>
            </ul>
          </Section>

          <Section title="7. Acceptable Use">
            <p>You agree not to:</p>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to reverse engineer, decompile, or extract the source code of the app</li>
              <li>Share your account with others or resell access to the Service</li>
              <li>Submit false, misleading, or harmful content through the coaching interface</li>
              <li>Attempt to circumvent rate limits, subscription gates, or other access controls</li>
              <li>Use automated scripts or bots to interact with the Service</li>
            </ul>
          </Section>

          <Section title="8. Intellectual Property">
            <p>All content, design, code, and features of VividCoach are owned by or licensed to us. The AI coaching responses generated for you are provided for your personal use only and may not be reproduced or distributed commercially without our written permission.</p>
            <p>You retain ownership of data you input into VividCoach (your workout logs, goals, conversations). You grant us a limited license to use that data to operate and improve the Service as described in our Privacy Policy.</p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>To the maximum extent permitted by law, VividCoach and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service, including but not limited to health outcomes, data loss, or service interruptions. Our total liability for any claim shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
          </Section>

          <Section title="10. Disclaimer of Warranties">
            <p>The Service is provided &ldquo;as is&rdquo; without warranties of any kind. We do not warrant that the Service will be uninterrupted, error-free, or that AI coaching responses will be accurate or appropriate for your specific situation.</p>
          </Section>

          <Section title="11. Termination">
            <p>We reserve the right to suspend or terminate your account if you violate these Terms. You may delete your account at any time from the app&rsquo;s Profile screen or by contacting us. Upon termination, your access to the Service ends immediately.</p>
          </Section>

          <Section title="12. Changes to Terms">
            <p>We may update these Terms from time to time. We will notify you of material changes via the app or email. Continued use of the Service after changes constitutes your acceptance of the updated Terms.</p>
          </Section>

          <Section title="13. Governing Law">
            <p>These Terms are governed by the laws of the United States. Any disputes shall be resolved through binding arbitration or in courts of competent jurisdiction in the United States.</p>
          </Section>

          <Section title="14. Contact">
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
