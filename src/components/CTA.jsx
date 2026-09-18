import { motion } from 'framer-motion'
import EnquiryForm from './EnquiryForm'
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'

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

          {/* Contact Information */}
          <div className="mt-8 space-y-3 text-sm text-white/85">
            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                <HiMail size={16} />
              </span>
              <a
                href="mailto:hello@worldeducationsociety.org"
                className="transition-colors hover:text-white"
              >
                info@worldeducationsociety.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                <HiPhone size={16} />
              </span>
              <div className="flex flex-col gap-0.5">
                <a
                  href="tel:+15874384634"
                  className="transition-colors hover:text-white"
                >
                  +1 587-438-4634
                </a>
                <a
                  href="tel:+15874431498"
                  className="transition-colors hover:text-white"
                >
                  +1 587-443-1498
                </a>
              </div>
            </div>

            {/* Address with correct map link */}
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                <HiLocationMarker size={16} />
              </span>
              <a
                href="https://www.google.com/maps?q=345+3016+5th+Ave+NE+Calgary+AB+T2A+5L7"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed w-3/4 transition-colors hover:text-white"
              >
                345, 3016, 5Th Ave, NE Calgary AB T2A 5L7
              </a>
            </div>
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