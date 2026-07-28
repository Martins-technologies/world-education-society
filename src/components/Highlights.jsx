import { motion } from 'framer-motion'
import { highlights } from '../data/content'

const dot = {
  ocean: 'bg-ocean-500',
  sun: 'bg-sun-500',
  leaf: 'bg-leaf-500',
  violet: 'bg-violet-500',
}

export default function Highlights() {
  return (
    <section className="relative -mt-1 bg-navy-800 py-14 sm:py-16">
      <div className="container grid grid-cols-2 gap-8 sm:grid-cols-4">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center sm:text-left"
          >
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <span className={`h-2 w-2 rounded-full ${dot[h.color]}`} />
              <span className="font-display text-3xl font-semibold text-white sm:text-4xl">{h.value}</span>
            </div>
            <p className="mt-1 text-sm text-white/60">{h.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
