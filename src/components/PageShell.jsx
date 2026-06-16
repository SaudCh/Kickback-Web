import Layout from "./Layout";
import { Link } from "react-router-dom";

export default function PageShell({ title, accent = "primary", children }) {
  const accentColors = {
    primary: "border-primary",
    red: "border-red-500",
    blue: "border-blue-500",
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
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

          <div className="card-shine rounded-2xl p-8 md:p-12">
            <h1
              className={`text-3xl md:text-4xl font-bold text-white mb-2 pb-4 border-b-2 ${accentColors[accent] || accentColors.primary}`}
            >
              {title}
            </h1>
            <div className="text-gray-300 leading-relaxed">{children}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
