import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import StoreButtons from "../components/StoreButtons";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2400&q=80";

const features = [
  {
    title: "Discover nearby",
    description:
      "Find like-minded guys in your area who share your interests and are ready to hang out.",
  },
  {
    title: "Connect & chat",
    description:
      "Start group chats or one-on-one conversations to break the ice before you meet up.",
  },
  {
    title: "Plan kickbacks",
    description:
      "Create or join kickbacks — from gym sessions and game nights to coffee runs and hikes.",
  },
  {
    title: "Build your crew",
    description:
      "Form real friendships with people who get you — not just another group chat that goes nowhere.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Showcase your interests, hobbies, and what you're looking for in a friendship.",
  },
  {
    number: "02",
    title: "Explore the map",
    description:
      "Discover guys nearby and find people who share your vibe.",
  },
  {
    number: "03",
    title: "Take plans offline",
    description:
      "Connect, chat, and turn those ideas into real hangouts.",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero — one composition */}
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="hero-scrim absolute inset-0" />

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-32">
          <div className="mx-auto w-full max-w-6xl">
            <p className="hero-enter font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-8xl lg:text-9xl">
              KickBack
            </p>
            <h1 className="hero-enter hero-enter-delay-1 mt-4 max-w-2xl font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              Find your crew. Plan real hangouts.
            </h1>
            <p className="hero-enter hero-enter-delay-2 mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
              Meet like-minded guys nearby, connect through chat, and finally
              take those plans out of the group chat.
            </p>
            <div className="hero-enter hero-enter-delay-3 mt-8">
              <StoreButtons size="large" tone="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-line bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mb-14 max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Built for real connection
            </h2>
            <p className="mt-3 text-lg text-muted">
              Whether you just moved or want a wider circle, KickBack helps you
              build friendships that show up in person.
            </p>
          </Reveal>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {features.map((feature, index) => (
              <Reveal key={feature.title} className="min-w-0">
                <p className="font-display text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-b border-line bg-paper-deep py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mb-14 max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              How it works
            </h2>
            <p className="mt-3 text-lg text-muted">
              Three simple steps from strangers to real friends.
            </p>
          </Reveal>

          <div className="grid gap-0 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal
                key={step.number}
                className={`py-6 md:px-8 md:py-0 ${
                  index > 0 ? "border-t border-line md:border-l md:border-t-0" : ""
                } ${index === 0 ? "md:pl-0" : ""} ${
                  index === steps.length - 1 ? "md:pr-0" : ""
                }`}
              >
                <p className="font-display text-4xl font-bold text-primary/25">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-line bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Where friendships start, plans happen
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Looking for real friendships with other guys? KickBack makes it
                easy to meet like-minded men in your area who are down to hang
                out, explore new hobbies, or just kick back and relax.
              </p>
              <p>
                Whether you've just moved to a new city, want to expand your
                circle, or are simply tired of plans that never leave the group
                chat — KickBack helps create actual friendships.
              </p>
            </div>
            <p className="mt-10 font-display text-xl font-semibold text-ink">
              Built for guys who value real connection.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Download CTA */}
      <section
        id="download"
        className="bg-ink py-20 text-white md:py-28"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Ready to build your crew?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Download KickBack today and start making real connections in your
              area.
            </p>
            <div className="mt-10">
              <StoreButtons size="large" tone="light" />
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
