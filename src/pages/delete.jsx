import React from "react";

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-red-500">
          How to Delete Your Account
        </h1>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700 font-semibold">
                Warning: This action is permanent and cannot be undone.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
            Steps to Delete Your KickBack Account
          </h2>

          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Open the KickBack App
                </h3>
                <p className="text-gray-700">
                  Launch the KickBack application on your mobile device.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Navigate to Settings
                </h3>
                <p className="text-gray-700">
                  Go to your profile and tap on the Settings icon.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Go to Privacy Settings
                </h3>
                <p className="text-gray-700">
                  Tap on "Privacy" to access your privacy and account settings.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Select Delete Account
                </h3>
                <p className="text-gray-700">
                  Scroll down and tap on "Delete Account" at the bottom of the
                  Privacy settings.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Confirm Deletion
                </h3>
                <p className="text-gray-700">
                  A confirmation dialog will appear. Tap "Delete" to permanently
                  delete your account.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-12 mb-4">
            What Happens When You Delete Your Account?
          </h2>

          <ul className="list-disc list-inside space-y-3 mb-8 ml-4 text-gray-700">
            <li>
              Your profile and all personal information will be permanently
              deleted
            </li>
            <li>All your messages and conversations will be removed</li>
            <li>Your kickback events and RSVPs will be deleted</li>
            <li>Your connections and friend list will be removed</li>
            <li>You will be logged out of all devices</li>
            <li>This action cannot be reversed or undone</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Need Help?
            </h3>
            <p className="text-gray-700 mb-4">
              If you're having trouble deleting your account or have questions,
              please contact our support team:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="mailto:saudchaudhary0@gmail.com"
                >
                  saudchaudhary0@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong>{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="tel:+18453004337"
                >
                  +1 845-300-4337
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <a
              href="/"
              className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Back to Home
            </a>
            <a
              href="/support"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
