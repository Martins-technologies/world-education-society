import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { HiChevronDown, HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { nav, navMenus } from '../data/content'
import logo from '../assets/logo.png'

function isActivePath(href, pathname) {
  if (href === '/') return pathname === '/'
  if (href === '/about-us') return pathname === '/about-us' || pathname === '/about'
  if (href === '/programs') return pathname === '/programs' || pathname === '/our-programs'
  if (href === '/get-involved') return pathname === '/get-involved' || pathname === '/getinvolved'
  if (href === '/contact') return pathname === '/contact' || pathname === '/contact-us'
  return pathname === href
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(null)
  const location = useLocation()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E6EEF4]/80 bg-white">
      <div className="relative mx-auto flex h-[74px] w-full max-w-[1380px] items-center px-6 sm:px-8 lg:px-10">
        <Link to="/" className="relative z-10 shrink-0 py-1">
          <img
            src={logo}
            alt="World Education Society"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        <nav className="ml-6 hidden flex-1 items-center justify-start gap-3 xl:flex 2xl:ml-10 2xl:gap-4">
          {nav.filter((item) => item.label !== 'Get Support').map((item) => {
            const active = isActivePath(item.href, location.pathname)
            const menu = navMenus[item.label]
            return (
              <div key={item.label} className="group relative">
                <Link
                  to={item.href}
                  className={`inline-flex items-center gap-0.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-medium transition-colors ${
                    active
                      ? 'bg-[#D9EEF8] text-[#1B3A6B]'
                      : 'text-[#1B3A6B] hover:bg-[#F3F8FC]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.caret && <HiChevronDown className="h-3.5 w-3.5 text-[#1B3A6B]/70" aria-hidden="true" />}
                </Link>
                {menu && (
                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[248px] rounded-2xl border border-[#E6EEF4] bg-white py-2 shadow-[0_18px_40px_-24px_rgba(27,58,107,0.55)]">
                      {menu.map((link) => (
                        <Link
                          key={link.label}
                          to={link.href}
                          className="block px-4 py-2 text-[13px] font-medium text-[#1B3A6B] transition-colors hover:bg-[#F3F8FC]"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <span
            className="hidden h-9 w-9 items-center justify-center text-[#1B3A6B] xl:inline-flex"
            aria-hidden="true"
          >
            <HiOutlineMagnifyingGlass className="h-[18px] w-[18px]" />
          </span>
          <Link
            to="/get-support"
            className="hidden items-center justify-center rounded-full border border-[#D5DEE8] bg-white px-4 py-2 text-[13px] font-semibold text-[#1B3A6B] transition-colors hover:bg-[#F3F8FC] xl:inline-flex"
          >
            Get Support
          </Link>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center rounded-full bg-[#E2A52E] px-3.5 py-2 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-[#d1961f] sm:px-5"
          >
            Donate
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1B3A6B]/15 xl:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span className={`absolute left-0 top-0 h-0.5 w-4 bg-[#1B3A6B] transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-4 bg-[#1B3A6B] transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-3 h-0.5 w-4 bg-[#1B3A6B] transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-[#E6EEF4] bg-white xl:hidden"
          >
            <div className="mx-auto flex max-w-[1380px] flex-col gap-1 px-6 py-4 sm:px-8 lg:px-10">
              {nav.map((item) => {
                const active = isActivePath(item.href, location.pathname)
                const menu = navMenus[item.label]
                const isExpanded = expanded === item.label
                return (
                  <div key={item.label}>
                    <div className={`flex items-center rounded-xl ${active ? 'bg-[#D9EEF8]' : ''}`}>
                      <Link
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className="flex flex-1 items-center px-4 py-3 text-[15px] font-medium text-[#1B3A6B]"
                      >
                        {item.label}
                      </Link>
                      {menu && (
                        <button
                          type="button"
                          aria-label={`${isExpanded ? 'Hide' : 'Show'} ${item.label} menu`}
                          aria-expanded={isExpanded}
                          onClick={() => setExpanded(isExpanded ? null : item.label)}
                          className="mr-2 inline-flex h-9 w-9 items-center justify-center text-[#1B3A6B]"
                        >
                          <HiChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                        </button>
                      )}
                    </div>
                    {menu && isExpanded && (
                      <div className="mb-1 ml-4 flex flex-col border-l border-[#E6EEF4] pl-3">
                        {menu.map((link) => (
                          <Link
                            key={link.label}
                            to={link.href}
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-3 py-2 text-[14px] text-[#1B3A6B]"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
