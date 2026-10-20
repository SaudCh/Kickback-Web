import { Link } from "react-router-dom";

export default function BrandLink({ className = "" }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/app-icon.png"
        alt=""
        className="h-9 w-9 rounded-xl shadow-sm ring-1 ring-line"
      />
      <span className="font-display text-lg font-bold tracking-tight text-ink">
        KickBack
      </span>
    </Link>
  );
}
