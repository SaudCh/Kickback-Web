import PageShell from "../components/PageShell";

export default function SupportPage() {
  return (
    <PageShell title="Support">
      <p className="mb-8">
        Welcome to KickBack Support! If you have any questions, issues, or
        feedback about our app, we're here to help.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
      <ul className="space-y-3 mb-8">
        <li>
          <span className="text-gray-500">Email:</span>{" "}
          <a
            className="text-primary hover:underline"
            href="mailto:saudchaudhary0@gmail.com"
          >
            saudchaudhary0@gmail.com
          </a>
        </li>
        <li>
          <span className="text-gray-500">Phone:</span>{" "}
          <a
            className="text-primary hover:underline"
            href="tel:+18453004337"
          >
            +1 (845) 300-4337
          </a>
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-white mt-8 mb-4">
        Frequently Asked Questions
      </h2>
      <ul className="space-y-3 mb-8">
        <li>
          <a
            className="text-primary hover:underline"
            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=51735f72-c6ab-4e8b-96cb-36c6cf73cdfd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            className="text-primary hover:underline"
            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=7e81b917-9676-4b18-88ac-fe3a3fc07c8f"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
        </li>
        <li>
          <a className="text-primary hover:underline" href="/how-to-delete-account">
            How to Delete Your Account
          </a>
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-white mt-8 mb-4">
        App Support
      </h2>
      <p>
        For technical support, troubleshooting, or to report a bug, please
        contact us using the information above. We aim to respond within 24
        hours.
      </p>
    </PageShell>
  );
}
