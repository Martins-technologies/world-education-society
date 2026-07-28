import { motion } from 'framer-motion'
import { aboutPoints } from '../data/content'

const colorMap = {
  ocean: 'bg-ocean-100 text-ocean-600',
  sun: 'bg-sun-100 text-sun-600',
  leaf: 'bg-leaf-100 text-leaf-600',
  violet: 'bg-violet-100 text-violet-600',
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            About WES
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy-800 sm:text-4xl">
            An education consultancy built around one goal — your admission letter.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-600">
            World Education Society helps students secure admissions at leading
            universities and colleges across the globe. Our counsellors work
            through every stage with you: choosing a course, preparing documents,
            applying for scholarships, and getting visa-ready — so studying abroad
            feels like a plan, not a gamble.
          </p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ocean-600">
            Talk to a counsellor
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {aboutPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-navy-800/8 bg-white p-6 shadow-soft"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold ${colorMap[point.color]}`}>
                {point.title.charAt(0)}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-800">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
