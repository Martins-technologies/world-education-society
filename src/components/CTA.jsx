import { motion } from 'framer-motion'
import EnquiryForm from './EnquiryForm'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ocean-500 via-violet-500 to-sun-500 opacity-95" />
      <div className="pointer-events-none absolute inset-0 bg-navy-900/10" />

      <div className="container relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <p className="eyebrow text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Get Started
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Your free consultation starts with one form.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/85">
            Tell us where you'd like to study and what you'd like to study — a
            counsellor will map out your options and next steps.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-white/85">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4l6 5 6-5M2 4v8h12V4H2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
            </span>
            hello@worldeducationsociety.org
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl bg-white/95 p-6 shadow-card backdrop-blur sm:p-8"
        >
          <EnquiryForm tone="light" />
        </motion.div>
      </div>
    </section>
  )
}
