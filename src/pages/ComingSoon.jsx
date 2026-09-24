import { Link } from 'react-router-dom'

export default function ComingSoon() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#FBF9F4] px-6 pb-20 pt-32 text-center text-[#1B3A6B]">
      <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#D7ECF8]/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[#E5F3FB]/90 blur-3xl" />

      <div className="relative max-w-lg">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">
          Page in progress
        </p>
        <h1 className="mt-4 font-sans text-4xl font-bold tracking-tight text-[#1B3A6B] sm:text-5xl">
          This page is coming soon.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#5C6B7C]">
          We’re still building this part of World Education Society. In the meantime, you can return home or contact us.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#1E4E8C] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#183E72]"
          >
            Back to Homepage
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#D7E0E8] bg-white px-5 py-2.5 text-sm font-semibold text-[#1B3A6B] transition-colors hover:bg-[#F6F9FB]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
