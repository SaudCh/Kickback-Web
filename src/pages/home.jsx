import Layout from "../components/Layout";
import StoreButtons from "../components/StoreButtons";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Discover Nearby",
    description:
      "Find like-minded guys in your area who share your interests and are ready to hang out.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Connect & Chat",
    description:
      "Start group chats or one-on-one conversations to break the ice before you meet up.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Plan Kickbacks",
    description:
      "Create or join kickbacks — from gym sessions and game nights to coffee runs and hikes.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Build Your Crew",
    description:
      "Form real friendships with people who get you — not just another group chat that goes nowhere.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Showcase your interests, hobbies, and what you're looking for in a friendship.",
  },
  {
    number: "02",
    title: "Explore the Map",
    description:
      "Discover guys nearby on the interactive map and find people who share your vibe.",
  },
  {
    number: "03",
    title: "Take Plans Offline",
    description:
      "Connect, chat, and turn those group chat ideas into real hangouts.",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative hero-glow pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-gray-300 font-medium">
                Now on App Store & Google Play
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Find Your Crew.
              <br />
              <span className="text-gradient">Plan Real Hangouts.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              KickBack makes it easy to meet like-minded guys nearby, connect
              through chat, and finally take those plans out of the group chat.
            </p>

            <StoreButtons size="large" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28 bg-surface-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Real Connection
            </h2>
            <p className="text-gray-400 text-lg">
              Whether you just moved to a new city or want to expand your
              circle, KickBack helps you build actual friendships.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-shine rounded-2xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-gray-400 text-lg">
              Three simple steps to go from strangers to real friends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center md:text-left">
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28 bg-surface-muted">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Where Friendships Start,
            <br />
            Plans Happen
          </h2>
          <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
            <p>
              Looking for real friendships with other guys? KickBack makes it
              easy to meet like-minded men in your area who are down to hang
              out, explore new hobbies, or just kick back and relax.
            </p>
            <p>
              Whether you've just moved to a new city, want to expand your
              circle, or are simply tired of plans that never make it out of the
              group chat — KickBack helps create actual friendships.
            </p>
          </div>
          <p className="mt-10 text-xl font-semibold text-white">
            KickBack is built for guys who value real connection.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 relative text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Build Your Crew?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Download KickBack today and start making real connections in your
            area.
          </p>
          <StoreButtons size="large" />
        </div>
      </section>
    </Layout>
  );
}
