import React from "react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-blue-500">
          Support
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to KickBack Support! If you have any questions, issues, or
          feedback about our app, we're here to help.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Contact Us
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-gray-700">
          <li>
            Email:{" "}
            <a
              className="text-blue-600 hover:underline"
              href="mailto:saudchaudhary0@gmail.com"
            >
              saudchaudhary0@gmail.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              className="text-blue-600 hover:underline"
              href="tel:+18453004337"
            >
              +1 845-300-4337
            </a>
          </li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Frequently Asked Questions
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-gray-700">
          {/* <li>
            <a className="text-blue-600 hover:underline" href="/faq">
              Visit our FAQ page
            </a>
          </li> */}
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://app.termly.io/policy-viewer/policy.html?policyUUID=51735f72-c6ab-4e8b-96cb-36c6cf73cdfd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="https://app.termly.io/policy-viewer/policy.html?policyUUID=7e81b917-9676-4b18-88ac-fe3a3fc07c8f"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          App Support
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          For technical support, troubleshooting, or to report a bug, please
          contact us using the information above. We aim to respond within 24
          hours.
        </p>
      </div>
    </div>
  );
}
