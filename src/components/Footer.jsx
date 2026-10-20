import { Link } from "react-router-dom";
import BrandLink from "./BrandLink";

const companyLinks = [
  { href: "/support", label: "Support" },
  { href: "/how-to-delete-account", label: "Delete Account" },
  { href: "/child-safety-standards", label: "Child Safety" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <div className="mb-4">
              <BrandLink />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Find guy friends, plan kickbacks, and build real friendships.
              Where friendships start, plans happen, and good times follow.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-ink">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-ink">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-1 text-sm text-muted">
              <p>
                <a
                  href="mailto:saudchaudhary0@gmail.com"
                  className="transition-colors hover:text-ink"
                >
                  saudchaudhary0@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+18453004337"
                  className="transition-colors hover:text-ink"
                >
                  +1 (845) 300-4337
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} KVB Technology LLC. All rights
            reserved.
          </p>
          <p className="text-xs text-muted/80">KickBack — Find Guy Friends</p>
        </div>
      </div>
    </footer>
  );
}
