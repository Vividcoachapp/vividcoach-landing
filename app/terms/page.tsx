import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — VividCoach',
  description: 'VividCoach Terms of Service — the legal agreement governing your use of the VividCoach app.',
}

export default function TermsPage() {
  return (
    <>
      <nav className="nav">
        <a href="/" className="nav-logo">VividCoach</a>
        <a href="/#waitlist" className="nav-cta">Join beta</a>
      </nav>

      <main className="legal-main">
        <div className="legal-container">
          <p className="section-label">Legal</p>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-updated">Effective May 19, 2026 · Last Updated May 19, 2026</p>

          <div className="legal-body">

            <p>
              These Terms of Service ("Terms") are a legal agreement between you and VividCoach ("we," "us," or "our")
              governing your use of the VividCoach fitness coaching application ("App") and website at vivid-coach.com ("Site").
            </p>

            <p>
              <strong>By creating an account or using the App, you agree to these Terms. If you do not agree, do not use the App.</strong>
            </p>

            <p>
              <strong>Contact:</strong>{' '}
              <a href="mailto:vividcoachceo@proton.me">vividcoachceo@proton.me</a>{' '}
              | vivid-coach.com | Huntsville, Alabama, United States
            </p>

            <section className="legal-section">
              <h2>1. Eligibility</h2>
              <p>
                You must be at least 18 years old to use VividCoach or participate in contests. By using the App, you
                represent that you are 18 or older and have the legal capacity to enter into these Terms. The App is
                intended for users in the United States; use outside the United States is at your own risk and subject
                to local laws.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Account Registration</h2>
              <p>You must create an account to use the App. You agree to:</p>
              <ul>
                <li>Provide accurate and complete registration information</li>
                <li>Keep your password secure and confidential</li>
                <li>Notify us immediately of any unauthorized access at <a href="mailto:vividcoachceo@proton.me">vividcoachceo@proton.me</a></li>
                <li>Not share your account with anyone else</li>
              </ul>
              <p>You are responsible for all activity under your account.</p>
            </section>

            <section className="legal-section">
              <h2>3. Subscription and Billing</h2>

              <h3>3.1 Subscription Plans</h3>
              <p>
                VividCoach offers a free tier and paid Premium subscription plans. Current pricing is displayed in the
                App and on the App Store listing. Prices may change with notice.
              </p>

              <h3>3.2 Billing and Auto-Renewal</h3>
              <p>
                Paid subscriptions are billed through Apple's App Store. Your subscription will automatically renew
                unless you cancel at least 24 hours before the end of the current billing period. Apple handles all
                billing, refunds, and subscription management.
              </p>

              <h3>3.3 Cancellation</h3>
              <p>
                To cancel your subscription, go to your device's Settings &gt; Apple ID &gt; Subscriptions. Cancellation
                takes effect at the end of the current billing period. We do not offer refunds for partial subscription
                periods, except where required by law.
              </p>

              <h3>3.4 Free Trials</h3>
              <p>
                If we offer a free trial, it will convert to a paid subscription at the end of the trial period unless
                you cancel before the trial ends.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. AI Coaching — Important Disclaimer</h2>
              <p>VividCoach uses artificial intelligence to provide fitness coaching and workout recommendations.</p>

              <p><strong>AI-generated coaching content is NOT:</strong></p>
              <ul>
                <li>Medical advice, physical therapy, or healthcare services</li>
                <li>Advice from licensed personal trainers, dietitians, or healthcare professionals</li>
                <li>A substitute for consultation with a qualified healthcare provider</li>
              </ul>

              <p>
                <strong>Before beginning any exercise program, consult a qualified healthcare provider</strong>, especially
                if you have any medical conditions, injuries, or health concerns. You assume all risk of injury or health
                effects from following AI coaching recommendations.
              </p>

              <p>
                When you use the AI coaching feature, your messages are processed by Anthropic PBC's AI API. See our{' '}
                <a href="/privacy">Privacy Policy</a> for details.
              </p>

              <p>
                <strong>Nutrition and weight tracking.</strong> Nutrition tracking and weight tracking features in the
                App are for personal logging and AI-coaching-context purposes only. They are <strong>NOT</strong>{' '}
                nutritional counseling, dietary advice from a registered dietitian, or medical weight-management
                treatment. AI-generated suggestions about meals or weight trends are general fitness coaching content,
                not clinical recommendations. Consult a qualified healthcare provider or registered dietitian for
                medical nutrition therapy, eating disorder concerns, or any health condition affected by diet or weight.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Contests and Sweepstakes</h2>
              <p>
                VividCoach may offer fitness contests and sweepstakes. All contests are governed by the{' '}
                <a href="/contest-rules">Official Contest Rules</a>, which are incorporated into these Terms. By
                participating in any contest, you agree to the Official Contest Rules.
              </p>
              <p>Key contest requirements:</p>
              <ul>
                <li>Participants must be 18 or older and legal U.S. residents</li>
                <li>Cash prizes of $600 or more per year require IRS tax reporting (we will collect your tax information before paying)</li>
                <li>VividCoach reserves the right to disqualify participants who violate contest rules or these Terms</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>6. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the App for any unlawful purpose</li>
                <li>Attempt to reverse engineer, decompile, or hack the App</li>
                <li>Scrape, copy, or redistribute App content</li>
                <li>Use automated means to access the App without permission</li>
                <li>Post false, misleading, or harmful content</li>
                <li>Attempt to access other users' accounts</li>
                <li>Use the App in any way that could damage, disable, or impair our systems</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>7. Intellectual Property</h2>
              <p>
                The App, including its content, features, and functionality, is owned by VividCoach and protected by
                copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive,
                non-transferable license to use the App for personal, non-commercial fitness purposes.
              </p>
              <p>
                You retain ownership of content you submit (such as coaching messages and workout logs). By submitting
                content, you grant VividCoach a license to use it to provide and improve our services.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Privacy</h2>
              <p>
                Our <a href="/privacy">Privacy Policy</a> explains how we collect, use, and share your information. By
                using the App, you agree to our Privacy Policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Disclaimer of Warranties</h2>
              <p>
                THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
                INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
                NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE ERROR-FREE, UNINTERRUPTED, OR FREE OF VIRUSES.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, VIVIDCOACH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT
                OF OR RELATING TO YOUR USE OF THE APP. OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING FROM THESE TERMS
                OR YOUR USE OF THE APP SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS BEFORE THE CLAIM.
              </p>
              <p>
                SOME JURISDICTIONS DO NOT ALLOW LIMITATION OF LIABILITY FOR CERTAIN TYPES OF DAMAGES, SO SOME OF THE
                ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless VividCoach and its officers, directors, employees, and agents
                from any claims, damages, liabilities, and expenses (including attorneys' fees) arising from your use
                of the App, your violation of these Terms, or your violation of any third-party rights.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms are governed by the laws of the State of Alabama, without regard to conflict of law
                principles. Any dispute arising from these Terms or your use of the App shall be resolved by binding
                arbitration in Huntsville, Alabama, under the rules of the American Arbitration Association, except
                that either party may seek injunctive relief in a court of competent jurisdiction.
              </p>
              <p>You waive any right to participate in a class action lawsuit or class-wide arbitration.</p>
            </section>

            <section className="legal-section">
              <h2>13. Termination</h2>
              <p>
                We may suspend or terminate your account at any time for violation of these Terms. You may delete your
                account by contacting <a href="mailto:vividcoachceo@proton.me">vividcoachceo@proton.me</a>. Upon
                termination, your right to use the App ends immediately. Sections 4, 9, 10, 11, and 12 survive
                termination.
              </p>
            </section>

            <section className="legal-section">
              <h2>14. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of material changes by updating the
                "Last Updated" date and, where appropriate, through the App or by email. Continued use of the App
                after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>15. Contact Us</h2>
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
