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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FBF9F4]/95 shadow-sm backdrop-blur-md py-2.5' : 'bg-[#FBF9F4] py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="World Education Society" className="h-12 w-auto sm:h-14" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const isActive = location.pathname === item.href || (item.href === '/' && location.pathname === '/')
            return (
              <Link
                key={item.label}
                to={item.href}
                className="relative py-1 text-sm font-semibold text-[#242A38] transition-colors hover:text-[#0D90C4]"
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#0D90C4]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Get Support CTA */}
        <div className="hidden items-center lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F4B826] px-7 py-3 text-sm font-bold text-[#242A38] shadow-sm transition-all duration-200 hover:bg-[#e2a81f] active:scale-[0.98]"
          >
            Get Support
          </Link>
        </div>

        {/* Mobile menu hamburger toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242A38]/20 lg:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span className={`absolute left-0 top-0 h-0.5 w-4 bg-[#242A38] transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-4 bg-[#242A38] transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-4 bg-[#242A38] transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
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
            className="overflow-hidden bg-[#FBF9F4] shadow-lg border-b border-[#242A38]/10 lg:hidden"
          >
            <div className="container mx-auto flex flex-col gap-2 px-6 pb-6 pt-3">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-semibold text-[#242A38] hover:bg-[#242A38]/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-[#F4B826] px-6 py-3 text-center text-sm font-bold text-[#242A38] shadow-sm"
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