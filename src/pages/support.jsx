import React from "react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-blue-500">
          Support
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to Salsivo Support! If you have any questions, issues, or
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
              href="mailto:pinedajv02@gmail.com"
            >
              pinedajv02@gmail.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              className="text-blue-600 hover:underline"
              href="tel:+447481989909"
            >
              +44 7481 989909
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
            <a className="text-blue-600 hover:underline" href="/privacy-policy">
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              className="text-blue-600 hover:underline"
              href="/terms-and-conditions"
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
