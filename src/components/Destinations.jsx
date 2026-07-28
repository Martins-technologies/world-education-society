import { motion } from 'framer-motion'
import { destinations } from '../data/content'

const flags = {
  Canada: '🇨🇦', USA: '🇺🇸', UK: '🇬🇧', Australia: '🇦🇺', 'New Zealand': '🇳🇿',
  Germany: '🇩🇪', Ireland: '🇮🇪', Europe: '🇪🇺', UAE: '🇦🇪',
}

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 sm:py-28">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf-500" />
              Where You Could Study
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold text-navy-800 sm:text-4xl">
              Popular study destinations
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-navy-600">
            Every destination comes with its own visa rules, intakes and living
            costs. We help you weigh them against your budget and goals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <motion.a
              href="#contact"
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-navy-800/8 bg-white p-5 transition-all duration-300 hover:border-transparent hover:shadow-card"
            >
              <span className="text-3xl">{flags[d.name] ?? '🌍'}</span>
              <div>
                <h3 className="font-display text-base font-semibold text-navy-800">{d.name}</h3>
                <p className="text-xs text-navy-500">{d.tagline}</p>
              </div>
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                className="ml-auto shrink-0 -translate-x-1 text-ocean-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
