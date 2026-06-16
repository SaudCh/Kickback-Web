import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/#features", label: "Features" },
  { to: "/#how-it-works", label: "How It Works" },
  { to: "/support", label: "Support" },
];

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="KickBack"
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            {isHome ? (
              <a
                href="#download"
                className="text-sm bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-semibold transition-colors"
              >
                Download
              </a>
            ) : (
              <Link
                to="/"
                className="text-sm bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-semibold transition-colors"
              >
                Download
              </Link>
            )}
          </nav>

          <a
            href={isHome ? "#download" : "/#download"}
            className="md:hidden text-sm bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
}
