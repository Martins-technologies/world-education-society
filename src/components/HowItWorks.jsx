import { motion } from 'framer-motion'
import { steps } from '../data/content'

const tones = ['bg-ocean-500', 'bg-sun-500', 'bg-leaf-500', 'bg-violet-500', 'bg-ocean-600', 'bg-sun-600']

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-navy-600" />
            The Process
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-navy-800 sm:text-4xl">
            From first call to first class, in six steps
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-navy-800/10 lg:block" />

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="relative rounded-2xl border border-navy-800/8 bg-white p-6 shadow-soft"
              >
                <span className={`flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold text-white ${tones[i]}`}>
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-800">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
