import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Salsivo
          </h1>
          <p className="text-2xl font-semibold text-gray-200 mb-4">
            Your Salsa Training & Choreography App
          </p>
          <p className="text-xl text-purple-400 mb-8">Dance More, Worry Less</p>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to take your salsa dancing to the next level?{" "}
            <span className="font-semibold text-white">Salsivo</span> is the
            all-in-one{" "}
            <span className="font-semibold text-white">salsa training app</span>{" "}
            designed for beginner to intermediate dancers and teachers. Create,
            review, and practice your favorite salsa moves — anytime, anywhere.
          </p>
          <p className="text-md text-gray-400 mb-8 max-w-3xl mx-auto">
            Whether you're rehearsing for social dancing or planning a class
            routine, Salsivo helps you{" "}
            <span className="font-semibold text-white">
              build choreographies, refresh your memory, and boost your
              confidence
            </span>{" "}
            on the dance floor.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Get Started
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why Dancers Love Salsivo
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Salsivo was created by dancers, for dancers — to make salsa more
          accessible and stress-free
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-all">
            <div className="text-4xl mb-4">💃</div>
            <h3 className="text-2xl font-semibold mb-3">
              Create Salsa Choreographies Easily
            </h3>
            <p className="text-gray-400">
              Combine moves like building blocks in a fun, game-like way.
              Instantly view or save your choreography for future practice.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-all">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-2xl font-semibold mb-3">
              Comprehensive Salsa Move Library
            </h3>
            <p className="text-gray-400">
              Access a growing database of salsa moves — or add your own custom
              moves to personalize your training.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-all">
            <div className="text-4xl mb-4">🎧</div>
            <h3 className="text-2xl font-semibold mb-3">
              Playback Control for Precision
            </h3>
            <p className="text-gray-400">
              Slow down or speed up videos to study technique and transitions in
              detail.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-all">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-2xl font-semibold mb-3">Guided Warm-Ups</h3>
            <p className="text-gray-400">
              Get your body and mind ready with structured warm-up routines
              designed by salsa enthusiasts.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-all">
            <div className="text-4xl mb-4">🕺</div>
            <h3 className="text-2xl font-semibold mb-3">
              Perfect for Teachers & Students
            </h3>
            <p className="text-gray-400">
              Teachers can use Salsivo to create lesson plans and
              choreographies, while students can review class moves and stay
              sharp between sessions.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-all">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-semibold mb-3">
              Instant Refresher for Social Dancing
            </h3>
            <p className="text-gray-400">
              Forgot a move right before hitting the floor? Quickly search and
              review any step, pattern, or variation in seconds.
            </p>
          </div>
        </div>
      </div>

      {/* Perfect For Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-center mb-8">Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="text-2xl">✅</span>
              <p className="text-lg text-gray-300">
                Beginner & intermediate salsa dancers
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✅</span>
              <p className="text-lg text-gray-300">
                Salsa teachers and instructors
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✅</span>
              <p className="text-lg text-gray-300">
                Latin dance students looking to improve flow and variety
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✅</span>
              <p className="text-lg text-gray-300">
                Social dancers wanting quick move references
              </p>
            </div>
            <div className="flex items-start gap-4 md:col-span-2 justify-center">
              <span className="text-2xl">✅</span>
              <p className="text-lg text-gray-300">
                Anyone passionate about learning salsa at their own pace
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Dancing?</h2>
          <p className="text-xl mb-4 opacity-90">
            Your pocket salsa trainer and choreography builder
          </p>
          <p className="text-lg mb-8 opacity-90">
            No more forgetting moves or losing confidence mid-song. With
            Salsivo, you'll dance more and worry less, every time.
          </p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all">
            Download Salsivo Today
          </button>
          <p className="text-sm mt-4 opacity-75">
            👉 Dance more. Worry less. Feel the rhythm with Salsivo.
          </p>
        </div>
      </div>

      {/* Download Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Download the App</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get Salsivo on your mobile device and start learning anytime,
            anywhere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all border border-gray-700 hover:border-gray-600"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all border border-gray-700 hover:border-gray-600"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-500 border-t border-gray-800">
        <p>&copy; 2025 Salsivo. All rights reserved.</p>
      </footer>
    </div>
  );
}
