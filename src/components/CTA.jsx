import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="bg-[#242A38] py-16 sm:py-20 text-white">
      <div className="container mx-auto px-[15px] sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* Left Text Block */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EC9136] mb-3">
              LET'S TALK
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl font-sans text-white">
              A question can be the start<br />
              of something better.
            </h2>
          </div>

          {/* Right Button & Subtext */}
          <div className="flex flex-col items-start md:items-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#F4B826] px-8 py-3.5 text-sm font-bold text-[#242A38] shadow-sm transition-colors hover:bg-[#e2a81f]"
            >
              Contact Us
            </Link>
            <p className="mt-3 text-xs sm:text-sm text-white/75 font-medium">
              Students, families and partners are welcome.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}