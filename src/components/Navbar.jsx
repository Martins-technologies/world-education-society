import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { nav } from '../data/content'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-[#E6F4FB] ${
        scrolled ? 'shadow-xs backdrop-blur-md py-2 sm:py-2.5' : 'py-3 sm:py-3.5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-[15px] sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 py-0.5">
          <img src={logo} alt="World Education Society" className="h-14 w-auto sm:h-16 lg:h-[4.25rem] object-contain transition-transform duration-200 hover:scale-[1.02]" />
        </Link>

        {/* Desktop Navigation Menu Bar */}
        <nav className="hidden items-center lg:flex bg-[#E6F4FB] rounded-lg overflow-hidden">
          {nav.map((item) => {
            const isActive =
              (item.href === '/' && location.pathname === '/') ||
              (item.href === '/about-us' && (location.pathname === '/about-us' || location.pathname === '/about')) ||
              (item.href === '/programs' && (location.pathname === '/programs' || location.pathname === '/our-programs')) ||
              (item.href === '/get-involved' && (location.pathname === '/get-involved' || location.pathname === '/getinvolved')) ||
              (item.href === '/contact' && (location.pathname === '/contact' || location.pathname === '/contact-us'))

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`relative px-5 py-3.5 text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#CBE7F7] text-[#1E293B]'
                    : 'text-[#1E293B] hover:bg-[#D8EFFC]'
                }`}
              >
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Desktop Get Support CTA Button */}
        <div className="hidden items-center lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-[#F4B826] px-8 py-3.5 text-sm font-bold text-[#1E293B] shadow-xs transition-colors hover:bg-[#e2a81f] rounded-lg"
          >
            Get Support
          </Link>
        </div>

        {/* Mobile menu hamburger toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1E293B]/20 lg:hidden bg-white/50"
        >
          <span className="relative block h-3.5 w-4">
            <span className={`absolute left-0 top-0 h-0.5 w-4 bg-[#1E293B] transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-4 bg-[#1E293B] transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-4 bg-[#1E293B] transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden bg-[#E6F4FB] shadow-md border-b border-[#1E293B]/10 lg:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1.5 px-6 pb-6 pt-3">
              {nav.map((item) => {
                const isActive =
                  (item.href === '/' && location.pathname === '/') ||
                  (item.href === '/about-us' && (location.pathname === '/about-us' || location.pathname === '/about')) ||
                  (item.href === '/programs' && (location.pathname === '/programs' || location.pathname === '/our-programs')) ||
                  (item.href === '/get-involved' && (location.pathname === '/get-involved' || location.pathname === '/getinvolved')) ||
                  (item.href === '/contact' && (location.pathname === '/contact' || location.pathname === '/contact-us'))

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-4 py-3 text-base font-bold transition-colors ${
                      isActive ? 'bg-[#CBE7F7] text-[#1E293B]' : 'text-[#1E293B] hover:bg-[#D8EFFC]'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-lg bg-[#F4B826] px-6 py-3 text-center text-sm font-bold text-[#1E293B] shadow-xs"
              >
                Get Support
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}