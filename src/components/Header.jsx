import { Link, useLocation } from "react-router-dom";
import BrandLink from "./BrandLink";

const navLinks = [
  { to: "/#features", label: "Features" },
  { to: "/#how-it-works", label: "How It Works" },
  { to: "/support", label: "Support" },
];

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-[4.25rem]">
        <BrandLink />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.to.startsWith("/#") && isHome ? (
              <a
                key={link.to}
                href={link.to.slice(1)}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href={isHome ? "#download" : "/#download"}
            className="rounded-lg bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:bg-ink/90"
          >
            Download
          </a>
        </nav>

        <a
          href={isHome ? "#download" : "/#download"}
          className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink/90 md:hidden"
        >
          Download
        </a>
      </div>
    </header>
  );
}
