import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

export default function TermsAndConditions() {
  return (
    <PageShell title="Terms & Conditions">
      <div className="mb-8 text-muted space-y-1 text-sm">
        <p>
          <span className="text-muted/80">App Name:</span> KickBack — Find Guy
          Friends
        </p>
        <p>
          <span className="text-muted/80">Operator:</span> KVB Technology LLC
        </p>
        <p>
          <span className="text-muted/80">Last Updated:</span> 3 September 2026
        </p>
      </div>

      <p className="mb-8">
        These Terms & Conditions (“Terms”) govern your access to and use of the
        KickBack mobile app and website operated by KVB Technology LLC. By
        creating an account or using KickBack, you agree to these Terms and our{" "}
        <Link to="/privacy-policy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-ink mb-4">
          1. Eligibility
        </h2>
        <p className="text-muted">
          KickBack is for adults only. You must be at least 18 years old to
          create an account or use the app. By using KickBack, you represent
          that you are 18 or older and that the information you provide is
          accurate.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-ink mb-4">2. Your Account</h2>
        <ul className="list-disc list-inside space-y-2 text-muted">
          <li>You are responsible for keeping your login credentials secure</li>
          <li>You are responsible for activity that occurs on your account</li>
          <li>
            You must not impersonate another person or create an account for
            anyone other than yourself
          </li>
          <li>
            You may delete your account at any time from Privacy settings. See{" "}
            <Link
              to="/how-to-delete-account"
              className="text-primary hover:underline"
            >
              How to Delete Your Account
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-ink mb-4">
          3. The KickBack Service
        </h2>
        <p className="text-muted">
          KickBack helps users discover nearby people, chat, and plan hangouts.
          We may change, suspend, or discontinue features at any time. Some
          features may require location permission, camera or photo access, or
          a paid subscription processed through Apple or Google.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-ink mb-4">
          4. Acceptable Use
        </h2>
        <p className="mb-4">You agree not to:</p>
        <ul className="list-disc list-inside space-y-2 text-muted">
          <li>Harass, threaten, stalk, or harm other users</li>
          <li>Post illegal, hateful, violent, or sexually explicit content involving minors</li>
          <li>Spam, scam, or solicit money, crypto, or commercial services without permission</li>
          <li>Share another person’s private information without consent</li>
          <li>Use KickBack for dating that misrepresents the app’s purpose, or for any illegal purpose</li>
          <li>Interfere with the app, scrape data, or reverse engineer KickBack</li>
          <li>Create multiple accounts to evade bans or restrictions</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-red-400 mb-4">
          5. Child Safety and Zero Tolerance for CSAE
        </h2>
        <p className="mb-4 text-muted">
          KickBack has a zero-tolerance policy for child sexual abuse and
          exploitation. Content or behavior involving CSAM, grooming, or harm
          to minors will result in immediate account removal and, where
          required, reports to NCMEC and law enforcement.
        </p>
        <p>
          Read the full{" "}
          <Link
            to="/child-safety-standards"
            className="text-primary hover:underline"
          >
            Child Safety Standards & CSAE Policy
          </Link>
          .
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-ink mb-4">
          6. User Content
        </h2>
        <p className="text-muted">
          You retain ownership of photos, messages, and other content you post.
          You grant KickBack a license to host, display, and distribute that
          content as needed to operate the service. You represent that you have
          the right to post your content and that it does not violate these
          Terms or anyone else’s rights. We may remove content that violates
          these Terms.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-ink mb-4">
          7. In-Person Meetups
        </h2>
        <p className="text-muted">
          KickBack helps you plan hangouts. We do not supervise, verify, or
          control in-person meetings. You are solely responsible for your
          safety and for any interactions that happen off the app. Use common
          sense: meet in public places, tell a friend where you are going, and
          leave if you feel uncomfortable.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-ink mb-4">
          8. Subscriptions and Payments
        </h2>
        <p className="text-muted">
          Paid features are billed through the Apple App Store or Google Play.
          Prices, billing periods, auto-renewal, cancellation, and refunds are
          governed by Apple’s or Google’s terms. Manage or cancel a
          subscription in your device’s store account settings.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-ink mb-4">
          9. Termination
        </h2>
        <p className="text-muted">
          You may stop using KickBack and delete your account at any time. We
          may suspend or terminate accounts that violate these Terms, pose a
          safety risk, or are inactive. We may also suspend the service for
          maintenance, legal, or operational reasons.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-ink mb-4">
          10. Disclaimers
        </h2>
        <p className="text-muted">
          KickBack is provided “as is” and “as available.” We do not warrant
          that the app will be uninterrupted, error-free, or that other users’
          profiles or statements are accurate. To the fullest extent permitted
          by law, we disclaim implied warranties of merchantability, fitness
          for a particular purpose, and non-infringement.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-ink mb-4">
          11. Limitation of Liability
        </h2>
        <p className="text-muted">
          To the fullest extent permitted by law, KVB Technology LLC and its
          officers, employees, and partners are not liable for indirect,
          incidental, special, consequential, or punitive damages, or for any
          loss of data, profits, or goodwill arising from your use of KickBack,
          including interactions with other users. Our total liability for any
          claim related to KickBack will not exceed the greater of the amounts
          you paid us in the 12 months before the claim or one hundred U.S.
          dollars ($100).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-ink mb-4">
          12. Changes to These Terms
        </h2>
        <p className="text-muted">
          We may update these Terms from time to time. The “Last Updated” date
          will change when we do. If you continue using KickBack after an
          update, you accept the revised Terms.
        </p>
      </section>

      <section className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-ink mb-4">13. Contact Us</h2>
        <p className="mb-4 text-muted">
          Questions about these Terms can be sent to KVB Technology LLC:
        </p>
        <div className="space-y-2">
          <p>
            <span className="text-muted/80">Email:</span>{" "}
            <a
              href="mailto:saudchaudhary0@gmail.com"
              className="text-primary hover:underline"
            >
              saudchaudhary0@gmail.com
            </a>
          </p>
          <p>
            <span className="text-muted/80">Phone:</span>{" "}
            <a
              href="tel:+18453004337"
              className="text-primary hover:underline"
            >
              +1 (845) 300-4337
            </a>
          </p>
          <p>
            <span className="text-muted/80">Support:</span>{" "}
            <Link to="/support" className="text-primary hover:underline">
              KickBack Support
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
