import { motion } from 'framer-motion'
import { services } from '../data/content'

const accents = [
  { bar: 'bg-ocean-500', barHover: 'group-hover:w-14' },
  { bar: 'bg-sun-500', barHover: 'group-hover:w-14' },
  { bar: 'bg-leaf-500', barHover: 'group-hover:w-14' },
  { bar: 'bg-violet-500', barHover: 'group-hover:w-14' },
]

export default function Services() {
  return (
    <section id="services" className="bg-sand py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-ocean-500" />
            What We Do
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-navy-800 sm:text-4xl">
            Everything between "I want to study abroad" and moving day.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => {
            const accent = accents[i % accents.length]
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: (i % 5) * 0.07 }}
                className={`group rounded-2xl bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 ${i >= 5 ? 'lg:col-span-1' : ''}`}
              >
                <span className={`block h-1 w-8 rounded-full ${accent.bar} transition-all duration-300 group-hover:w-14`} />
                <h3 className="mt-4 font-display text-base font-semibold text-navy-800">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
