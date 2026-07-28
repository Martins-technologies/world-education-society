import { motion } from 'framer-motion'
import { courses } from '../data/content'

const chipTones = [
  'border-ocean-300 text-ocean-600',
  'border-sun-300 text-sun-600',
  'border-leaf-300 text-leaf-600',
  'border-violet-300 text-violet-600',
]

export default function Courses() {
  return (
    <section id="courses" className="bg-sand py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-sun-500" />
            Featured Courses
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-navy-800 sm:text-4xl">
            Subjects students are choosing right now
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {courses.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`rounded-full border-2 bg-white px-5 py-2.5 text-sm font-semibold ${chipTones[i % chipTones.length]}`}
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
