import { Link } from "react-router-dom";
import { footerLinks } from "../data/content";
import logo from "../assets/logo.png";

const socials = [
  {
    label: "Facebook",
    url: "#",
    icon: "M13 22v-8h3l1-4h-4V7.5C13 6.5 13.5 6 15 6h2V2.2C16.6 2.1 15.3 2 14 2 10.9 2 9 3.9 9 7.2V10H6v4h3v8h4z",
  },
  {
    label: "Instagram",
    url: "#",
    icon: "M12 2c2.7 0 3.05.01 4.12.06 1.07.05 1.8.22 2.44.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.44.05 1.07.06 1.42.06 4.12s-.01 3.05-.06 4.12c-.05 1.07-.22 1.8-.47 2.44a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.37.42-2.44.47-1.07.05-1.42.06-4.12.06s-3.05-.01-4.12-.06c-1.07-.05-1.8-.22-2.44-.47a4.9 4.9 0 01-1.77-1.15A4.9 4.9 0 011.9 18.6c-.25-.64-.42-1.37-.47-2.44C1.38 15.09 1.37 14.74 1.37 12s.01-3.05.06-4.12c.05-1.07.22-1.8.47-2.44A4.9 4.9 0 013.05 3.68 4.9 4.9 0 014.82 2.53c.64-.25 1.37-.42 2.44-.47C8.33 2.01 8.68 2 11.38 2H12zm0 1.8c-2.65 0-2.97.01-4.01.06-.98.04-1.5.2-1.86.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.36-.3.88-.34 1.86-.05 1.04-.06 1.36-.06 4.01s.01 2.97.06 4.01c.04.98.2 1.5.34 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.14.88.3 1.86.34 1.04.05 1.36.06 4.01.06s2.97-.01 4.01-.06c.98-.04 1.5-.2 1.86-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.36.3-.88.34-1.86.05-1.04.06-1.36.06-4.01s-.01-2.97-.06-4.01c-.04-.98-.2-1.5-.34-1.86a3.1 3.1 0 00-.75-1.15 3.1 3.1 0 00-1.15-.75c-.36-.14-.88-.3-1.86-.34-1.04-.05-1.36-.06-4.01-.06zM12 6.9a5.1 5.1 0 110 10.2 5.1 5.1 0 010-10.2zm0 1.8a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zm5.3-2a1.19 1.19 0 110 2.38 1.19 1.19 0 010-2.38z",
  },
  {
    label: "LinkedIn",
    url: "#",
    icon: "M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9.5 9h3.8v1.64h.05c.53-.99 1.83-2.03 3.76-2.03 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-16 text-white/70">
      <div className="container grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
        {/* Brand Section */}
        <div>
          <img
            src={logo}
            alt="World Education Society"
            className="h-20 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Helping students find and secure their place at universities and
            colleges worldwide, with honest guidance at every step.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerLinks.explore.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support & Offices */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Support
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerLinks.support.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-display text-sm font-semibold uppercase tracking-wide text-white">
            Offices
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerLinks.offices.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Stay updated
          </h4>
          <p className="mt-4 text-sm">
            Intake dates, scholarships and visa updates — no spam.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ocean-500 transition-colors hover:bg-ocean-600"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} World Education Society. All
            rights reserved.
          </p>
          <p>
            Partnerships with 70+ universities and 300+ colleges, subject to
            verification.
          </p>
        </div>
      </div>
    </footer>
  );
}