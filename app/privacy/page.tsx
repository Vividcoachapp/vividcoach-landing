import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — VividCoach',
  description: 'VividCoach Privacy Policy — how we collect, use, and share your information.',
}

export default function PrivacyPage() {
  return (
    <>
      <nav className="nav">
        <a href="/" className="nav-logo">VividCoach</a>
        <a href="/#waitlist" className="nav-cta">Join beta</a>
      </nav>

      <main className="legal-main">
        <div className="legal-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <img src="/icon.png" alt="VividCoach" width={64} height={64} style={{ borderRadius: '14px' }} />
          </div>
          <p className="section-label">Legal</p>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Effective May 19, 2026 · Last Updated May 19, 2026</p>

          <div className="legal-body">

            <p>
              VividCoach ("we," "us," or "our") operates the VividCoach fitness coaching application ("App")
              and website at vivid-coach.com ("Site"). This Privacy Policy explains how we collect, use, and
              share information about you when you use our App or Site.
            </p>

            <p>
              <strong>Contact Us</strong><br />
              Email: <a href="mailto:vividcoachceo@proton.me">vividcoachceo@proton.me</a><br />
              Located in Huntsville, Alabama, United States
            </p>

            <section className="legal-section">
              <h2>1. Information We Collect</h2>

              <h3>Information You Provide to Us</h3>
              <ul>
                <li><strong>Account information:</strong> Email address, display name, and password when you create an account</li>
                <li><strong>Profile information:</strong> Fitness goals, current fitness level, and preferences you enter</li>
                <li><strong>Coaching conversations:</strong> Messages you send to and receive from the AI coaching system</li>
                <li><strong>Workout data:</strong> Workouts you log, complete, or that are generated for you</li>
                <li><strong>Body weight measurements:</strong> When you log your weight in-app, we store the reading (in pounds or kilograms), timestamp, and any optional notes you add</li>
                <li><strong>Meal/nutrition data:</strong> Meal type (breakfast/lunch/dinner/snack), free-text meal description, optional meal photo, and sentiment tag (light/good/heavy) for each meal you log</li>
                <li><strong>Waitlist sign-up:</strong> Email address if you join our waitlist at vivid-coach.com</li>
              </ul>

              <h3>Information We Collect Automatically</h3>
              <ul>
                <li><strong>Device information:</strong> Device type, operating system, and unique device identifiers</li>
                <li><strong>Usage data:</strong> App features used, workouts completed, and session duration</li>
                <li>
                  <strong>HealthKit data (iOS) — expanded:</strong> With your explicit permission, we read the following
                  categories from Apple HealthKit: <strong>step count</strong>, <strong>workouts</strong> (including
                  duration, type, calories, and heart rate during workouts), and <strong>body weight</strong>. We write
                  the following categories to Apple HealthKit: <strong>workouts you log in VividCoach</strong> and{' '}
                  <strong>body weight readings you log in VividCoach</strong>. You control every HealthKit category
                  individually in iOS Settings &gt; Privacy &amp; Security &gt; Health, and you can revoke any read or
                  write permission at any time. We do not store HealthKit data on our servers beyond what is needed for
                  contest administration and the in-app features that depend on it (such as workout history and weight
                  trends).
                </li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and improve the App and AI coaching services</li>
                <li>Generate personalized workout plans and coaching recommendations</li>
                <li>Provide nutrition tracking and meal coaching context</li>
                <li>Provide weight trend visualization and goal tracking</li>
                <li>Sync workout and weight data bidirectionally with Apple Health (when you grant permission)</li>
                <li>Process AI coaching requests using third-party AI services (see Section 4)</li>
                <li>Administer contests and sweepstakes (if you participate)</li>
                <li>Send push notifications (with your permission)</li>
                <li>Communicate with you about updates, features, and support</li>
                <li>Comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>3. AI Coaching Disclosure</h2>
              <p>VividCoach uses artificial intelligence to provide fitness coaching and workout recommendations.</p>
              <p>
                <strong>Important:</strong> When you send messages to the AI coach, your messages are transmitted to
                and processed by <strong>Anthropic PBC's</strong> AI API to generate responses. AI coaching responses
                are generated by AI models and are <strong>not</strong> provided by licensed personal trainers,
                physicians, dietitians, or other healthcare professionals.
              </p>
              <p>
                AI-generated content is for general fitness and wellness purposes only and <strong>does not constitute
                medical advice, physical therapy, nutritional counseling, or professional fitness instruction</strong>.
                Consult a qualified healthcare provider before beginning any new exercise program.
              </p>
              <p>
                Meal descriptions and weight readings you log may be summarized into prompts sent to the AI coach
                (Anthropic's API) to provide contextual coaching responses.
              </p>
              <p>
                <strong>ElevenLabs, Inc.</strong> — When you enable voice coaching, the coach's text response is
                transmitted to ElevenLabs' API for text-to-speech conversion. ElevenLabs processes this data as a
                service provider and does not use it for their own purposes. See the{' '}
                <a href="https://elevenlabs.io/privacy" target="_blank" rel="noopener noreferrer">ElevenLabs Privacy Policy</a>.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Information We Share With Third Parties</h2>
              <p>We do not sell your personal information. We share information with the following third-party service providers to operate our services:</p>
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Purpose</th>
                    <th>Data Shared</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Anthropic PBC</strong></td>
                    <td>AI coaching API</td>
                    <td>Your coaching messages</td>
                  </tr>
                  <tr>
                    <td><strong>ElevenLabs, Inc.</strong></td>
                    <td>Text-to-speech: converts coach response text to natural audio</td>
                    <td>Coach message text (generated AI output containing fitness coaching context)</td>
                  </tr>
                  <tr>
                    <td><strong>Supabase</strong></td>
                    <td>Database and authentication</td>
                    <td>Account data, workouts, coaching history</td>
                  </tr>
                  <tr>
                    <td><strong>Apple</strong></td>
                    <td>App Store and TestFlight distribution</td>
                    <td>As required by Apple's platform</td>
                  </tr>
                  <tr>
                    <td><strong>Expo/EAS</strong></td>
                    <td>App build and distribution</td>
                    <td>Minimal technical identifiers</td>
                  </tr>
                </tbody>
              </table>
              <p>
                We may also share information: with your consent; to comply with legal obligations; to protect
                rights, property, or safety; or in connection with a business transaction.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Contest Data</h2>
              <p>If you participate in VividCoach contests or sweepstakes:</p>
              <ul>
                <li>Your contest participation and performance (e.g., step counts during a contest period) may appear on a leaderboard visible to other participants</li>
                <li>Contest winners may be publicly announced within the App</li>
                <li>If you win prizes totaling $600 or more in a calendar year, we are required by federal law to collect your tax information and report it to the IRS</li>
              </ul>
              <p>
                For full contest rules, visit: <a href="/contest-rules">vivid-coach.com/contest-rules</a>
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Data Retention</h2>
              <p>
                We retain your information while your account is active. If you delete your account, we delete or
                anonymize your information within 30 days, except where we are legally required to retain it.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Your Privacy Rights</h2>

              <h3>All Users</h3>
              <ul>
                <li><strong>Access and correction:</strong> Update your account information within the App</li>
                <li><strong>Deletion:</strong> Request deletion of your account by emailing <a href="mailto:vividcoachceo@proton.me">vividcoachceo@proton.me</a></li>
                <li><strong>Notifications:</strong> Disable push notifications in your device settings</li>
              </ul>

              <h3>EU/EEA/UK Users (GDPR)</h3>
              <p>
                You have the right to: access your data; correct inaccuracies; request erasure; request data
                portability; restrict processing; and object to processing. Legal bases for processing include:
                contract performance, legitimate interests, and consent. To exercise these rights, contact{' '}
                <a href="mailto:vividcoachceo@proton.me">vividcoachceo@proton.me</a>.
              </p>

              <h3>California Residents (CCPA/CPRA)</h3>
              <p>
                You have the right to know, delete, correct, and opt out of sale of your personal information.
                We do not sell personal information. To exercise these rights, contact{' '}
                <a href="mailto:vividcoachceo@proton.me">vividcoachceo@proton.me</a>.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Children's Privacy</h2>
              <p>
                The App is not directed to children under 13. We do not knowingly collect personal information
                from children under 13. Contest features require participants to be 18 or older. If you believe
                your child under 13 has provided us personal information, contact{' '}
                <a href="mailto:vividcoachceo@proton.me">vividcoachceo@proton.me</a>.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures to protect your personal information.
                No method of internet transmission or electronic storage is completely secure.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. International Data Transfers</h2>
              <p>
                Our services are based in the United States. If you access the App from outside the United States,
                your information may be transferred to and processed in the U.S.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by
                updating the "Last Updated" date and, where appropriate, notifying you through the App or by email.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Contact Us</h2>
              <p>
                <strong>VividCoach</strong><br />
                Email: <a href="mailto:vividcoachceo@proton.me">vividcoachceo@proton.me</a><br />
                Website: <a href="https://vivid-coach.com">vivid-coach.com</a>
              </p>
              <p>
                <em>Note: A physical business address will be added once the company virtual mailbox is established.</em>
              </p>
            </section>

          </div>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-copy">© 2026 VividCoach. All rights reserved.</p>
        <nav className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
          <a href="/contest-rules" className="footer-link">Contest Rules</a>
          <a href="#support" className="footer-link">Support</a>
        </nav>
      </footer>
    </>
  )
}
