import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Open the KickBack App",
    description: "Launch the KickBack application on your mobile device.",
  },
  {
    title: "Navigate to Settings",
    description: "Go to your profile and tap on the Settings icon.",
  },
  {
    title: "Go to Privacy Settings",
    description:
      'Tap on "Privacy" to access your privacy and account settings.',
  },
  {
    title: "Select Delete Account",
    description:
      'Scroll down and tap on "Delete Account" at the bottom of the Privacy settings.',
  },
  {
    title: "Confirm Deletion",
    description:
      'A confirmation dialog will appear. Tap "Delete" to permanently delete your account.',
  },
];

export default function DeleteAccount() {
  return (
    <PageShell title="How to Delete Your Account" accent="red">
      <div className="bg-accent/10 border border-accent/25 rounded-xl p-4 mb-8">
        <p className="text-ink text-sm font-medium">
          Warning: This action is permanent and cannot be undone.
        </p>
      </div>

      <h2 className="text-xl font-semibold text-ink mb-6">
        Steps to Delete Your KickBack Account
      </h2>

      <div className="space-y-6 mb-10">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
              {index + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink mb-1">
                {step.title}
              </h3>
              <p className="text-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold text-ink mt-10 mb-4">
        What Happens When You Delete Your Account?
      </h2>
      <ul className="space-y-2 mb-10 text-muted">
        <li>Your profile and all personal information will be permanently deleted</li>
        <li>All your messages and conversations will be removed</li>
        <li>Your kickback events and RSVPs will be deleted</li>
        <li>Your connections and friend list will be removed</li>
        <li>You will be logged out of all devices</li>
        <li>This action cannot be reversed or undone</li>
      </ul>

      <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-ink mb-3">Need Help?</h3>
        <p className="text-muted mb-4">
          If you're having trouble deleting your account or have questions,
          please contact our support team:
        </p>
        <div className="space-y-2 text-muted">
          <p>
            <span className="text-muted/80">Email:</span>{" "}
            <a
              className="text-primary hover:underline"
              href="mailto:saudchaudhary0@gmail.com"
            >
              saudchaudhary0@gmail.com
            </a>
          </p>
          <p>
            <span className="text-muted/80">Phone:</span>{" "}
            <a
              className="text-primary hover:underline"
              href="tel:+18453004337"
            >
              +1 (845) 300-4337
            </a>
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          to="/"
          className="inline-block bg-paper-deep hover:bg-line text-ink px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          Back to Home
        </Link>
        <Link
          to="/support"
          className="inline-block rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Contact Support
        </Link>
      </div>
    </PageShell>
  );
}
