import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { footerLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-[#FBF9F4] pt-16 pb-8 text-[#242A38] border-t border-[#242A38]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12 pb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="World Education Society"
                className="h-12 w-auto sm:h-14"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm font-semibold text-[#5B6478] leading-relaxed">
              Education. Opportunity.<br />
              Stronger communities.
            </p>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-[#242A38] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[#5B6478] transition-colors hover:text-[#0D90C4] font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Info */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-[#242A38] uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-sm text-[#5B6478] font-medium leading-relaxed">
              <p>
                <a
                  href={`mailto:${footerLinks.contactInfo.email}`}
                  className="transition-colors hover:text-[#0D90C4]"
                >
                  {footerLinks.contactInfo.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${footerLinks.contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="transition-colors hover:text-[#0D90C4]"
                >
                  {footerLinks.contactInfo.phone}
                </a>
              </p>
              <address className="not-italic whitespace-pre-line text-[#5B6478] pt-1">
                {footerLinks.contactInfo.address}
              </address>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="border-t border-[#242A38]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B6478]">
          <p>
            &copy; {new Date().getFullYear()} World Education Society. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/privacy" className="transition-colors hover:text-[#0D90C4]">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="transition-colors hover:text-[#0D90C4]">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}