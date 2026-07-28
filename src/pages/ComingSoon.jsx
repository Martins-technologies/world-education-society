import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ComingSoon() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-800 px-6 pt-24 text-center text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-ocean-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-sun-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <svg viewBox="0 0 200 200" className="mx-auto h-24 w-24 animate-spin-slow text-white/15" aria-hidden="true">
          <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round" />
        </svg>
        <p className="eyebrow mt-2 justify-center text-sun-300">
          <span className="h-1.5 w-1.5 rounded-full bg-sun-400" />
          Page in progress
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">This page is coming soon.</h1>
        <p className="mx-auto mt-4 max-w-md text-white/65">
          We're still building this part of the site. In the meantime, head back
          to the homepage or reach out to a counsellor directly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">Back to Homepage</Link>
          <a href="/#contact" className="btn-ghost-light">Contact a Counsellor</a>
        </div>
      </motion.div>
    </section>
  )
}
