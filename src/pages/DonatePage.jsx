import { Link } from 'react-router-dom'
import { FaHandshake } from 'react-icons/fa'
import {
  HiArrowRight,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineGift,
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from 'react-icons/hi2'
import PageHero, { pageContainer } from '../components/PageHero'

const donateButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-lg bg-[#E2A52E] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#d1961f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2A52E]'

const benefits = [
  {
    title: 'Expand Learning Opportunities',
    text: 'Helps students access education guidance, resources and skills development.',
    icon: HiOutlineAcademicCap,
    wrap: 'bg-[#E7F3FB] text-[#1E4E8C]',
  },
  {
    title: 'Stronger Communities',
    text: 'Supports programs that empower individuals and build resilient communities.',
    icon: HiOutlineUserGroup,
    wrap: 'bg-[#E7F6EA] text-[#2E9A4A]',
  },
  {
    title: 'Greater Equity',
    text: 'Helps remove barriers and create a more inclusive future.',
    icon: HiOutlineHeart,
    wrap: 'bg-[#E7F3FB] text-[#1E4E8C]',
  },
  {
    title: 'Lasting Impact',
    text: 'Invests in people and communities for future generations.',
    icon: LeafIcon,
    wrap: 'bg-[#E7F6EA] text-[#2E9A4A]',
  },
]

function LeafIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 19c8 0 13-6 14-14-8 1-14 6-14 14Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M8.5 15.5c2-2 4.2-3.4 7-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export default function DonatePage() {
  return (
    <div className="min-w-0 overflow-x-clip bg-[#F7FBFE] text-[#1B3A6B]">
      <PageHero
        eyebrow="Support Our Mission"
        eyebrowClassName="!text-[#2E9A4A]"
        title="Help Create Brighter Futures"
        description="Your generosity helps us expand educational opportunities, support students and strengthen communities for future generations."
        image="/donatehero.webp"
        imageAlt="Volunteers packing and sharing donated supplies with the community"
        imageLayout="full"
        imageFit="cover"
        imagePosition="center"
        imageFetchPriority="high"
      />

      <section className="bg-[#F7FBFE]">
        <div className={`${pageContainer} py-12 lg:py-16`}>
          <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#122B52] via-[#1B3A6B] to-[#0E2342] p-6 text-white shadow-[0_20px_45px_-15px_rgba(27,58,107,0.45)] sm:p-8">
              {/* Subtle background ambient glows */}
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#E2A52E]/15 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-[#2E9A4A]/20 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2E9A4A]/50 bg-[#2E9A4A]/20 px-3 py-1 text-xs font-semibold text-[#5BE37C]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5BE37C]" />
                    Direct Impact
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70">
                    Community First
                  </span>
                </div>

                <h2 className="mt-4 font-display text-[1.8rem] font-bold leading-tight tracking-tight text-white sm:text-[2.1rem]">
                  Every Contribution <br className="hidden sm:inline" />
                  <span className="text-[#F6C65C]">Creates Real Change</span>
                </h2>

                <p className="mt-3 text-[14.5px] leading-relaxed text-white/80">
                  Your support directly equips students with essential learning supplies, academic mentorship, and scholarship grants to unlock their full potential.
                </p>

                {/* 2x2 Aesthetic Feature Grid */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur-sm transition-colors hover:bg-white/[0.1]">
                    <div className="flex items-center gap-2.5 text-[#F6C65C]">
                      <HiOutlineAcademicCap className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">Student Grants</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">
                      Direct tuition assistance & study supplies.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur-sm transition-colors hover:bg-white/[0.1]">
                    <div className="flex items-center gap-2.5 text-[#5BE37C]">
                      <HiOutlineBookOpen className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">Learning Kits</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">
                      Textbooks, digital tools & stationery.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur-sm transition-colors hover:bg-white/[0.1]">
                    <div className="flex items-center gap-2.5 text-[#5BE37C]">
                      <HiOutlineSparkles className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">Mentorship</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">
                      Guidance workshops & career pathway support.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur-sm transition-colors hover:bg-white/[0.1]">
                    <div className="flex items-center gap-2.5 text-[#F6C65C]">
                      <HiOutlineShieldCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">Transparency</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">
                      100% accountable, community-rooted allocation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-7 border-t border-white/10 pt-5">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E2A52E] px-5 py-3.5 text-sm font-bold text-[#102544] shadow-md transition-all hover:bg-[#F3B740] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2A52E]"
                >
                  <span>Connect With Our Team to Contribute</span>
                  <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-white/60">
                  <HiOutlineHeart className="h-4 w-4 shrink-0 text-[#5BE37C]" aria-hidden="true" />
                  Together building equitable, community-powered education.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-[#E6EEF4] bg-white px-5 py-6 shadow-[0_12px_30px_-24px_rgba(27,58,107,0.45)] sm:px-7 sm:py-8">
              <span className="inline-block rounded-full bg-[#E7F3FB] px-3 py-1 text-xs font-semibold text-[#1E4E8C]">
                Our Focus
              </span>
              <h2 className="mt-3 font-display text-[1.7rem] font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-[2rem]">
                Your Support Helps
              </h2>
              <ul className="mt-6 space-y-6">
                {benefits.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${item.wrap}`}>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-sans text-[15px] font-semibold text-[#1B3A6B]">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#5C6B7C]">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F4F9FC]">
        <div className="absolute inset-y-0 z-0 hidden overflow-hidden rounded-r-full left-6 w-[calc(60%-1.5rem)] sm:left-8 sm:w-[calc(60%-2rem)] lg:left-12 lg:block lg:w-[calc(60%-3rem)] xl:left-[max(4rem,calc((100%-1380px)/2+4rem))] xl:w-[calc(60%-max(4rem,calc((100%-1380px)/2+4rem)))]">
          <img
            src="/students.webp"
            alt="Students studying together outdoors"
            className="h-full w-full object-cover object-[42%_15%]"
          />
        </div>
        <div className="relative z-10 lg:ml-[60%]">
          <div className="ml-6 h-[280px] w-[calc(100%-1.5rem)] overflow-hidden rounded-r-full sm:ml-8 sm:h-[340px] sm:w-[calc(100%-2rem)] lg:hidden">
            <img
              src="/students.webp"
              alt="Students studying together outdoors"
              className="h-full w-full object-cover object-[42%_15%]"
            />
          </div>
          <div className="flex items-center px-6 py-12 sm:px-8 lg:min-h-[460px] lg:px-10 lg:py-16 xl:pr-[max(4rem,calc((100vw-1380px)/2+4rem))]">
            <div className="max-w-[440px]">
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#2E9A4A] sm:text-[13px]">
                Invest in People
              </p>
              <h2 className="mt-4 font-display text-[1.85rem] font-bold leading-[1.12] tracking-tight text-[#1B3A6B] sm:text-[2.15rem]">
                Together We Can Do More
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#3E5670]">
                Your support helps us reach more students, create stronger communities and build a more equitable and
                sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FBFE]">
        <div className={`${pageContainer} py-12 lg:py-16`}>
          <div className="rounded-[28px] bg-[#EAF4FB] px-5 py-8 sm:px-8 sm:py-10">
            <h2 className="font-display text-[1.7rem] font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-[2rem]">
              Other Ways to Support
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-[#5C6B7C]">
              There are many meaningful ways to contribute to our work.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link
                to="/contact"
                className="flex h-full items-start gap-4 rounded-2xl bg-white px-5 py-5 text-left shadow-[0_12px_30px_-24px_rgba(27,58,107,0.4)] transition-colors hover:bg-[#F7FBFE]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E7F3FB] text-[#1E4E8C]">
                  <HiOutlineUserGroup className="h-6 w-6" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-sans text-[15px] font-semibold text-[#1B3A6B]">Monthly Giving & Sponsorship</span>
                  <span className="mt-1 block text-sm leading-relaxed text-[#5C6B7C]">
                    Provide ongoing support to help us plan sustainable, long-term educational initiatives.
                  </span>
                </span>
              </Link>
              <Link
                to="/campaigns"
                className="flex h-full items-start gap-4 rounded-2xl bg-white px-5 py-5 text-left shadow-[0_12px_30px_-24px_rgba(27,58,107,0.4)] transition-colors hover:bg-[#F7FBFE]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E7F6EA] text-[#2E9A4A]">
                  <FaHandshake className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-sans text-[15px] font-semibold text-[#1B3A6B]">Support a Campaign</span>
                  <span className="mt-1 block text-sm leading-relaxed text-[#5C6B7C]">
                    Contribute directly to targeted community programs and student drives.
                  </span>
                </span>
              </Link>
              <Link
                to="/get-involved"
                className="flex h-full items-start gap-4 rounded-2xl bg-white px-5 py-5 text-left shadow-[0_12px_30px_-24px_rgba(27,58,107,0.4)] transition-colors hover:bg-[#F7FBFE]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E7F3FB] text-[#1E4E8C]">
                  <HiOutlineGift className="h-6 w-6" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-sans text-[15px] font-semibold text-[#1B3A6B]">In-Kind & Resource Donation</span>
                  <span className="mt-1 block text-sm leading-relaxed text-[#5C6B7C]">
                    Donate books, learning devices, and classroom materials for schools and youth.
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
