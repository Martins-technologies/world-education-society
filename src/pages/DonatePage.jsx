import { Link } from 'react-router-dom'
import { HiArrowRight, HiOutlineHeart, HiOutlineSparkles, HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2'
import { pageContainer } from '../components/PageHero'

export default function DonatePage() {
  return (
    <div className="min-h-[75vh] min-w-0 bg-[#FBF9F4] pb-24 pt-[74px] text-[#1B3A6B]">
      {/* Background ambient gradient blurs */}
      <div className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#D7ECF8]/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#FCE8D3]/60 blur-3xl" />

        <div className={`${pageContainer} relative z-10`}>
          <div className="mx-auto max-w-2xl text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E2A52E]/30 bg-[#FEF6E9] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-[#A06C0C]">
              <HiOutlineSparkles className="h-4 w-4" />
              Coming Soon
            </span>

            {/* Title */}
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-[#1B3A6B] sm:text-5xl">
              Support Our Mission
            </h1>

            {/* Heart Icon Circle */}
            <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1B3A6B] text-[#E2A52E] shadow-md">
              <HiOutlineHeart className="h-8 w-8" />
            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-[#5C6B7C] sm:text-lg">
              Our online donation system is currently under development. Soon, you will be able to easily make secure financial contributions and donate educational supplies to support youth and communities across Canada.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E6EEF4] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-base font-semibold text-[#1B3A6B]">
                Interested in supporting our work today?
              </h2>
              <p className="mt-2 text-sm text-[#5C6B7C]">
                If you would like to donate educational materials, organize a supply drive, or partner with us, please reach out to our team directly.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm font-medium text-[#1E4E8C]">
                <a
                  href="mailto:info@worldeducationsociety.com"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D5DEE8] bg-[#F7FBFE] px-4 py-2 hover:bg-[#EBF4FA]"
                >
                  <HiOutlineEnvelope className="h-4 w-4" />
                  info@worldeducationsociety.com
                </a>
                <a
                  href="tel:+15874384634"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D5DEE8] bg-[#F7FBFE] px-4 py-2 hover:bg-[#EBF4FA]"
                >
                  <HiOutlinePhone className="h-4 w-4" />
                  +1 587-438-4634
                </a>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="mt-10 flex flex-wrap justify-center gap-3.5">
              <Link
                to="/campaigns"
                className="inline-flex items-center gap-2 rounded-full bg-[#1E4E8C] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#183E72]"
              >
                <span>Back to Campaigns</span>
                <HiArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#D7E0E8] bg-white px-6 py-3 text-sm font-semibold text-[#1B3A6B] transition-colors hover:bg-[#F6F9FB]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
