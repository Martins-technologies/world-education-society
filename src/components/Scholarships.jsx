import { motion } from 'framer-motion'

const items = [
  { title: 'Merit-Based Awards', desc: 'Funding tied to academic performance and test scores.' },
  { title: 'Institution-Specific Grants', desc: 'Scholarships offered directly by partner universities.' },
  { title: 'Affordability Planning', desc: 'A realistic budget that blends tuition, living costs and aid.' },
]

export default function Scholarships() {
  return (
    <section id="scholarships" className="relative overflow-hidden bg-navy-800 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-sun-500/15 blur-3xl" />

      <div className="container relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow text-sun-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sun-400" />
            Scholarships & Funding
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Studying abroad should stretch your budget further, not thinner.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
            We match you against merit-based and institution-specific scholarships,
            and help you plan around free or low-cost course opportunities where
            they're available — so cost doesn't quietly rule out a good option.
          </p>
          <a href="#contact" className="btn-ghost-light mt-7">
            Check my eligibility
          </a>
        </motion.div>

        <div className="grid gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
