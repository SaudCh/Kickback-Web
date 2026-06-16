import { Link } from "react-router-dom";

const footerLinks = [
  { href: "/support", label: "Support", internal: true },
  { href: "/how-to-delete-account", label: "Delete Account", internal: true },
  { href: "/child-safety-standards", label: "Child Safety", internal: true },
  {
    href: "https://app.termly.io/policy-viewer/policy.html?policyUUID=51735f72-c6ab-4e8b-96cb-36c6cf73cdfd",
    label: "Privacy Policy",
    internal: false,
  },
  {
    href: "https://app.termly.io/policy-viewer/policy.html?policyUUID=7e81b917-9676-4b18-88ac-fe3a3fc07c8f",
    label: "Terms & Conditions",
    internal: false,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-muted">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="KickBack" className="h-8 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Find guy friends, plan kickbacks, and build real friendships.
              Where friendships start, plans happen, and good times follow.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-1 text-sm text-gray-500">
              <p>
                <a
                  href="mailto:saudchaudhary0@gmail.com"
                  className="hover:text-gray-300 transition-colors"
                >
                  saudchaudhary0@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+18453004337"
                  className="hover:text-gray-300 transition-colors"
                >
                  +1 (845) 300-4337
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} KVB Technology LLC. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-xs">
            KickBack — Find Guy Friends
          </p>
        </div>
      </div>
    </footer>
  );
}
