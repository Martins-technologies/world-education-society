import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2'
import logo from '../assets/logo.png'
import { footerLinks } from '../data/content'

const socials = [
  { label: 'Facebook', Icon: FaFacebookF },
  { label: 'Instagram', Icon: FaInstagram },
  { label: 'LinkedIn', Icon: FaLinkedinIn },
  { label: 'YouTube', Icon: FaYoutube },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#E7E2D8] bg-[#FBF9F4] text-[#1B3A6B]">
      <div className="mx-auto max-w-[1380px] px-6 pb-6 pt-12 sm:px-8 lg:px-12 xl:px-16 lg:pt-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Link to="/" className="inline-block">
              <img src={logo} alt="World Education Society" className="h-14 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-[#5C6B7C]">
              A non-profit organization helping people access educational opportunities through guidance, support and community partnerships.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socials.map(({ label, Icon }) => (
                <span
                  key={label}
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#D5DEE8] text-[#1B3A6B]"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="sr-only">{label}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-[13px] font-semibold text-[#1B3A6B]">Quick Links</h2>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              <ul className="space-y-2.5">
                {footerLinks.quick.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-[13px] text-[#5C6B7C] transition-colors hover:text-[#1E4E8C]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {footerLinks.more.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-[13px] text-[#5C6B7C] transition-colors hover:text-[#1E4E8C]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-sans text-[13px] font-semibold text-[#1B3A6B]">Our Programs</h2>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[13px] text-[#5C6B7C] transition-colors hover:text-[#1E4E8C]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-sans text-[13px] font-semibold text-[#1B3A6B]">Get Involved</h2>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.involved.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[13px] text-[#5C6B7C] transition-colors hover:text-[#1E4E8C]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-sans text-[13px] font-semibold text-[#1B3A6B]">Contact Us</h2>
            <ul className="mt-4 space-y-3 text-[13px] text-[#5C6B7C]">
              <li className="flex items-start gap-2.5">
                <HiEnvelope className="mt-0.5 h-4 w-4 shrink-0 text-[#1E4E8C]" aria-hidden="true" />
                <a href={`mailto:${footerLinks.contactInfo.email}`} className="transition-colors hover:text-[#1E4E8C]">
                  {footerLinks.contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <HiPhone className="mt-0.5 h-4 w-4 shrink-0 text-[#1E4E8C]" aria-hidden="true" />
                <a href="tel:+15874384634" className="transition-colors hover:text-[#1E4E8C]">
                  {footerLinks.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <HiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1E4E8C]" aria-hidden="true" />
                <address className="not-italic leading-relaxed">{footerLinks.contactInfo.address}</address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#E7E2D8] pt-5 text-[12px] text-[#7A8794] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} World Education Society. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {footerLinks.legal.map((link, index) => (
              <span key={link.label} className="inline-flex items-center gap-3">
                {index > 0 && <span aria-hidden="true">|</span>}
                <Link to={link.href} className="transition-colors hover:text-[#1E4E8C]">
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
