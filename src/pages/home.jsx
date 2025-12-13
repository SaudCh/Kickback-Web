import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            KickBack
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
            Find guy friends, plan kickbacks, and build real friendships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://apps.apple.com/us/app/kickback-find-guy-friends/id6746941797"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Download on App Store
            </a>
            {/* <a
              href="#"
              className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Get it on Google Play
            </a> */}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">Discover</h3>
            <p className="text-gray-300">
              Find friends nearby who share your interests
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-white mb-2">Connect</h3>
            <p className="text-gray-300">
              Group chats or one-on-one conversations
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-xl font-bold text-white mb-2">Plan</h3>
            <p className="text-gray-300">
              Create or join kickbacks - gym sessions to game nights
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-white mb-2">Build</h3>
            <p className="text-gray-300">
              Real friendships with people who get you
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white/5 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Where Friendships Start, Plans Happen
          </h2>
          <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
            <p>
              Looking for real friendships with other guys? KickBack makes it
              easy to meet like-minded men in your area who are down to hang
              out, explore new hobbies, or just kick back and relax.
            </p>
            <p>
              Whether you've just moved to a new city, want to expand your
              circle, or are simply tired of plans that never make it out of the
              group chat - KickBack helps create actual friendships.
            </p>
            <p className="text-center text-xl font-semibold text-white pt-8">
              KickBack is built for guys who value real connection.
            </p>
            <p className="text-center text-xl text-purple-300">
              It's time to find your crew and finally take those plans out of
              the group chat.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Build Your Crew?
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Download KickBack today and start making real connections.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://apps.apple.com/us/app/kickback-find-guy-friends/id6746941797"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Download on App Store
          </a>
          {/* <a
            href="#"
            className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Get it on Google Play
          </a> */}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2025 KickBack. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/support"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Support
              </a>
              <a
                href="/how-to-delete-account"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Delete Account
              </a>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=51735f72-c6ab-4e8b-96cb-36c6cf73cdfd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=7e81b917-9676-4b18-88ac-fe3a3fc07c8f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
