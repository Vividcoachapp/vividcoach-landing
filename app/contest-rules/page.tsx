import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Official Contest Rules — VividCoach',
  description: 'Official rules for VividCoach contests and sweepstakes.',
}

export default function ContestRulesPage() {
  return (
    <>
      <nav className="nav">
        <a href="/" className="nav-logo">VividCoach</a>
        <a href="/#waitlist" className="nav-cta">Join beta</a>
      </nav>

      <main className="legal-main">
        <div className="legal-container">
          <p className="section-label">Legal</p>
          <h1 className="legal-title">Official Contest Rules</h1>
          <p className="legal-updated">Effective May 16, 2026 — Amended</p>

          <div className="legal-notice">
            <strong>NO PURCHASE NECESSARY TO ENTER OR WIN. A PURCHASE DOES NOT IMPROVE YOUR CHANCES OF WINNING.</strong>
          </div>

          <div className="legal-body">

            <section className="legal-section">
              <h2>1. Eligibility</h2>
              <p>
                The VividCoach Contest ("Contest") is open only to legal residents of the fifty (50) United States
                and the District of Columbia who are at least eighteen (18) years of age at the time of entry.
                Employees of VividCoach, LLC ("Sponsor"), its affiliates, and their immediate family members are
                not eligible. Void where prohibited.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Sponsor</h2>
              <p>VividCoach, LLC — Huntsville, AL — vividcoachceo@proton.me</p>
            </section>

            <section className="legal-section">
              <h2>3. Contest Period</h2>
              <p>
                Each individual Contest will have a specific start date and end date announced in the VividCoach
                mobile application by Sponsor's Administrator. All times are Eastern Time (ET).
              </p>
            </section>

            <section className="legal-section">
              <h2>4. How to Enter</h2>
              <p>
                During the Contest Period, use the VividCoach mobile application (available on the Apple App Store)
                with a free account and sync your step data from Apple HealthKit. Your cumulative step count during
                the Contest Period, as recorded through Apple HealthKit (HKQuantityTypeIdentifierStepCount) and
                synced to the VividCoach platform, constitutes your Contest entry. No purchase is required.
              </p>
              <p>
                <strong>Step Data Integrity:</strong> Only step data sourced from Apple HealthKit is eligible.
                Manually entered step counts are not eligible and will result in disqualification.
              </p>
              <p className="legal-amendment">
                <strong>Alternative Entry (7-Day Streak Sweepstakes):</strong> Alternative entry: email{' '}
                <a href="mailto:vividcoachceo@proton.me">vividcoachceo@proton.me</a> with your name and Contest
                name. One alt entry per person per Contest week.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. How a Winner Is Determined</h2>
              <p>
                The participant with the highest verified cumulative step count during the Contest Period wins.
                Ties are resolved by the earliest time the tied participant reached the winning step count (per
                server timestamp). Sponsor's determination of step count totals is final and binding.
              </p>
              <p>
                <strong>Anti-Cheat:</strong> All entries are subject to review for anomalous submission patterns.
                Sponsor reserves the right, in its sole discretion, to disqualify any participant whose activity
                appears fraudulent, inconsistent with normal human activity, or manipulated.
              </p>
              <p className="legal-amendment">
                <strong>Judging Criteria (Caption Contest):</strong> Originality (40%), Humor/Entertainment (30%),
                Relevance to Theme (30%). All judging decisions are final.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Prize</h2>
              <p>
                One (1) winner per Contest will receive the cash prize (USD) stated in the Contest announcement
                within the App (e.g., $100.00 USD). No prize transfer, assignment, or substitution is permitted
                except at Sponsor's sole discretion. Sponsor may substitute a prize of equal or greater value if
                the stated prize becomes unavailable.
              </p>
              <p>
                <strong>Tax Liability:</strong> All federal, state, and local taxes on prizes are the winner's
                sole responsibility. Prizes valued at $600 or more in aggregate per recipient within a calendar
                year will be reported to the IRS as required by law. The winner must provide a completed IRS
                Form W-9 prior to prize payment for any such prize.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Winner Notification and Verification</h2>
              <p>
                The potential winner will be notified via in-app notification and/or the email address associated
                with their VividCoach account within five (5) days of the Contest Period ending. The potential
                winner must respond within 72 hours of notification or an alternate winner may be selected.
                Sponsor reserves the right to verify all eligibility and entry data before awarding any prize.
              </p>
              <p>
                <strong>For cumulative prizes of $600+ in a calendar year:</strong> Winner must submit a
                completed IRS Form W-9 to Sponsor before prize payment is processed. Failure to provide a W-9
                within 14 days of request forfeits the prize.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Release and Limitation of Liability</h2>
              <p>
                By participating, entrants agree to release and hold harmless Sponsor, its affiliates, employees,
                officers, and directors from any liability, injury, loss, or damage arising directly or indirectly
                from participation in the Contest or acceptance/use of any prize.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Data and Privacy</h2>
              <p>
                By entering the Contest, you agree that your step count data and contest participation information
                may be used for leaderboard display to other Contest participants and for anti-fraud review. All
                data collection and use is governed by VividCoach's Privacy Policy available in the App and at{' '}
                <a href="/privacy">vivid-coach.com/privacy</a>.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. General Conditions</h2>
              <p>
                Sponsor reserves the right to cancel, suspend, or modify the Contest, or any part of it, if fraud,
                technical failures, or any other factor impairs the integrity or proper functioning of the Contest.
                Sponsor may disqualify any individual who tampers with the entry process or acts in violation of
                these Official Rules or in an unsportsmanlike or disruptive manner.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Disputes</h2>
              <p>
                Except where prohibited, participant agrees that: (a) all disputes shall be resolved individually,
                without resort to class action; (b) all disputes shall be resolved exclusively by courts in
                Madison County, Alabama; and (c) any award shall be limited to actual out-of-pocket costs incurred.
                Participant waives all rights to indirect, punitive, incidental, and consequential damages.
              </p>
            </section>

            <section className="legal-section">
              <h2>Questions</h2>
              <p>
                Questions about these Official Rules? Contact us at{' '}
                <a href="mailto:vividcoachceo@proton.me">vividcoachceo@proton.me</a>.
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
