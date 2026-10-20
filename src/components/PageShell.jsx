import Layout from "./Layout";
import { Link } from "react-router-dom";

export default function PageShell({ title, accent = "primary", children }) {
  const accentColors = {
    primary: "border-primary",
    red: "border-red-500",
    blue: "border-primary",
  };

  return (
    <Layout>
      <div className="pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>

          <article>
            <h1
              className={`mb-2 border-b-2 pb-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl ${
                accentColors[accent] || accentColors.primary
              }`}
            >
              {title}
            </h1>
            <div className="prose-kickback leading-relaxed text-muted">
              {children}
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}
