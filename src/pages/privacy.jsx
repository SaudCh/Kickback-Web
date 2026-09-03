import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

export default function PrivacyPolicy() {
  return (
    <PageShell title="Privacy Policy">
      <div className="mb-8 text-gray-400 space-y-1 text-sm">
        <p>
          <span className="text-gray-500">App Name:</span> KickBack — Find Guy
          Friends
        </p>
        <p>
          <span className="text-gray-500">Operator:</span> KVB Technology LLC
        </p>
        <p>
          <span className="text-gray-500">Last Updated:</span> 3 September 2026
        </p>
      </div>

      <p className="mb-8">
        This Privacy Policy explains how KVB Technology LLC (“KickBack,” “we,”
        “us,” or “our”) collects, uses, shares, and protects information when
        you use the KickBack mobile app and website. KickBack is a social
        platform that helps adult men meet nearby, chat, and plan real-world
        hangouts (“kickbacks”).
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We collect information you provide, information created through your
          use of KickBack, and information from your device when you allow it.
        </p>
        <h3 className="text-lg font-semibold text-white mb-3">
          Account and profile
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-400">
          <li>Name, email address, and password</li>
          <li>
            Profile details such as photos, bio, interests, and what you are
            looking for in a friendship
          </li>
          <li>Messages you send and receive in chats</li>
          <li>Kickbacks you create, join, or RSVP to</li>
        </ul>
        <h3 className="text-lg font-semibold text-white mb-3">
          Location and device
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-400">
          <li>
            Approximate or precise location, if you grant permission, so we can
            show nearby people and places
          </li>
          <li>
            Photos from your camera or library if you choose to upload them
          </li>
          <li>
            Device and app information such as device type, operating system,
            and crash or diagnostic data
          </li>
          <li>Push notification tokens if you enable notifications</li>
        </ul>
        <h3 className="text-lg font-semibold text-white mb-3">Payments</h3>
        <p className="text-gray-400">
          If you subscribe to KickBack, purchases are processed by Apple App
          Store or Google Play. We receive subscription status from those
          stores. We do not collect or store your full payment card details.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          2. How We Use Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>Create and maintain your account and profile</li>
          <li>
            Show nearby users, maps, and hangout suggestions based on location
          </li>
          <li>Enable chat, kickbacks, and other in-app features</li>
          <li>Provide customer support and respond to reports</li>
          <li>Moderate content and enforce our policies, including child safety</li>
          <li>Improve, secure, and debug the app and website</li>
          <li>Process subscriptions and restore purchases</li>
          <li>Comply with law and protect users, KickBack, and the public</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          3. How We Share Information
        </h2>
        <p className="mb-4">
          We do not sell your personal information. We may share information in
          these cases:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>
            With other KickBack users, as part of your public profile, chats,
            and kickbacks you join
          </li>
          <li>
            With service providers that help us host, store, map, message, or
            operate the app
          </li>
          <li>With Apple or Google for app distribution and subscriptions</li>
          <li>
            With law enforcement, NCMEC, or other authorities when required by
            law or to report child sexual abuse material
          </li>
          <li>
            In connection with a merger, acquisition, or other corporate
            transaction, subject to this policy
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          4. Location Information
        </h2>
        <p className="text-gray-400">
          KickBack uses location to help you discover guys and hangouts nearby.
          You can deny or later revoke location permission in your device
          settings. Some map and nearby features will not work without it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          5. Retention and Deletion
        </h2>
        <p className="mb-4 text-gray-400">
          We keep your information for as long as your account is active and as
          needed to provide KickBack, resolve disputes, enforce our terms, and
          meet legal obligations. When you delete your account, we permanently
          remove your profile, messages, kickbacks, and related personal
          information, except where we must retain limited records (for
          example, to comply with law or complete a safety investigation).
        </p>
        <p>
          For step-by-step instructions, see{" "}
          <Link
            to="/how-to-delete-account"
            className="text-primary hover:underline"
          >
            How to Delete Your Account
          </Link>
          .
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          6. Children’s Privacy
        </h2>
        <p className="text-gray-400">
          KickBack is intended for adults only. We do not knowingly collect
          personal information from anyone under 18. If we learn that a minor
          has created an account, we will delete it. See our{" "}
          <Link
            to="/child-safety-standards"
            className="text-primary hover:underline"
          >
            Child Safety Standards
          </Link>{" "}
          for more detail.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">7. Security</h2>
        <p className="text-gray-400">
          We use reasonable administrative, technical, and physical safeguards
          to protect your information. No method of transmission or storage is
          completely secure, so we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          8. Your Choices
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>Update your profile and privacy settings in the app</li>
          <li>Control location, camera, photos, and notifications on your device</li>
          <li>Delete your account from Privacy settings in the app</li>
          <li>
            Contact us to ask questions about the information we hold about you
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          9. Changes to This Policy
        </h2>
        <p className="text-gray-400">
          We may update this Privacy Policy from time to time. The “Last
          Updated” date at the top of this page will change when we do. Continued
          use of KickBack after an update means you accept the revised policy.
        </p>
      </section>

      <section className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">10. Contact Us</h2>
        <p className="mb-4 text-gray-400">
          If you have questions about this Privacy Policy or your information,
          contact KVB Technology LLC:
        </p>
        <div className="space-y-2">
          <p>
            <span className="text-gray-500">Email:</span>{" "}
            <a
              href="mailto:saudchaudhary0@gmail.com"
              className="text-primary hover:underline"
            >
              saudchaudhary0@gmail.com
            </a>
          </p>
          <p>
            <span className="text-gray-500">Phone:</span>{" "}
            <a
              href="tel:+18453004337"
              className="text-primary hover:underline"
            >
              +1 (845) 300-4337
            </a>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
