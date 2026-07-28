import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* ambient brand-color glow, echoes the logo's globe */}
      <div className="pointer-events-none absolute -right-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-sun-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 rounded-full bg-ocean-300/20 blur-3xl" />

      <div className="container grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0} className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-sun-500" />
            International Education Consultancy
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-5 text-4xl font-semibold leading-[1.08] text-navy-800 sm:text-5xl lg:text-[3.4rem]"
          >
            Study abroad
            <span className="relative mx-3 inline-block whitespace-nowrap">
              with confidence
              <svg
                viewBox="0 0 300 14"
                className="absolute -bottom-2 left-0 h-3 w-full text-ocean-500"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 10 C 80 2, 220 2, 298 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            — anywhere in the world.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600"
          >
            Admissions to leading universities and colleges worldwide, with expert
            guidance, scholarships, and affordable study options — from your first
            question to your first day of class.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Apply Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="#contact" className="btn-secondary">
              Free Consultation
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-navy-600"
          >
            {[
              ['70+', 'Universities'],
              ['300+', 'Colleges'],
              ['15+', 'Countries'],
            ].map(([n, l]) => (
              <div key={l} className="flex items-baseline gap-2">
                <span className="font-display text-xl font-semibold text-navy-800">{n}</span>
                <span>{l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
        >
          {/* rotating dashed globe ring, direct nod to the logo mark */}
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full animate-spin-slow text-navy-800/10" aria-hidden="true">
            <circle cx="200" cy="200" r="188" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round" />
          </svg>

          <div className="absolute inset-[8%] overflow-hidden rounded-[2.5rem] shadow-card">
            <img
              src="https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Students walking together on a university campus"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-navy-900/0 to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:-left-8"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-navy-800">Visa Approved</p>
              <p className="text-xs text-navy-400">University of Toronto</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -right-4 bottom-10 rounded-2xl bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:-right-8"
          >
            <p className="font-display text-lg font-semibold text-navy-800">10,000+</p>
            <p className="text-xs text-navy-400">Students guided abroad</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
