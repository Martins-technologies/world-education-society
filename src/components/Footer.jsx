import { Link } from "react-router-dom";
import { footerLinks } from "../data/content";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const socials = [
  {
    label: "Facebook",
    url: "#",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    url: "#",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    url: "#",
    icon: FaLinkedin,
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
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
                >
                  <Icon size={15} />
                </a>
              );
            })}
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
        </div>

        {/* Contact & Information */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Contact Us
          </h4>
          
          {/* Address */}
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <HiLocationMarker className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <address className="not-italic leading-relaxed">
                <a 
                  href="https://maps.google.com/?q=123+Education+Street,+New+York,+NY+10001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  123 Education Street,<br />
                  New York, NY 10001,<br />
                  United States
                </a>
              </address>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <HiPhone className="h-4 w-4 shrink-0 text-white/40" />
              <a 
                href="tel:+1234567890" 
                className="transition-colors hover:text-white"
              >
                +1 (000) 000-000
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <HiMail className="h-4 w-4 shrink-0 text-white/40" />
              <a 
                href="mailto:info@worldeducationsociety.org" 
                className="transition-colors hover:text-white"
              >
                info@worldeducationsociety.org
              </a>
            </div>
          </div>
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