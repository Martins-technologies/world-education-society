import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

const waysList = [
  {
    title: 'Volunteer With Us',
    desc: 'Share your time and skills to support students and community programs.',
  },
  {
    title: 'Partner With Us',
    desc: 'Collaborate with us to expand opportunities through schools, organizations, and businesses.',
  },
  {
    title: 'Support Our Programs',
    desc: 'Help fund educational opportunities and essential resources for students and communities.',
  },
  {
    title: 'Community Partnerships',
    desc: 'Work together to create stronger, more inclusive communities through local initiatives.',
  },
]

export default function GetInvolvedPage() {
  return (
    <div className="bg-[#FBF9F4] min-h-screen text-[#242A38]">
      
      {/* 1) HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20 bg-[#FBF9F4]">
        <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Text Block */}
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-4">
                GET INVOLVED
              </p>

              <h1 className="text-4xl font-bold leading-[1.1] text-[#242A38] sm:text-5xl lg:text-[3.6rem] font-sans">
                Get involved.<br />
                Help <span className="text-[#0D90C4]">opportunity grow.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#5B6478] sm:text-lg">
                Support students and communities through volunteering, partnerships, and program support. Together, we can create more opportunities for brighter futures.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0D90C4] px-7 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#0B76A3]"
                >
                  Ways to Get Involved
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#242A38] px-7 py-3.5 text-sm font-semibold text-[#242A38] transition-colors hover:bg-[#242A38] hover:text-white"
                >
                  Partner With Us
                </Link>
              </div>

              <p className="mt-8 text-xs font-medium text-[#5B6478]/80 sm:text-sm">
                For students. For communities. For a fairer future.
              </p>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-xl lg:max-w-none">
                <div className="relative overflow-hidden rounded-[28px] bg-[#EFECE4] aspect-[4/3] shadow-xs">
                  <img
                    src="/get-involved/hero.webp"
                    alt="Volunteers tending to plants outdoors together"
                    className="h-full w-full object-cover object-center absolute inset-0 rounded-[28px]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2) OUR APPROACH SECTION */}
      <section className="py-16 sm:py-24 border-t border-[#242A38]/5">
        <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Supporting Image */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[28px] bg-gray-100 aspect-[1.33/1] shadow-xs">
                <img
                  src="/get-involved/approach.webp"
                  alt="Team members collaborating around laptop"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
                OUR APPROACH
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#242A38] sm:text-4xl font-sans mb-3">
                Every contribution<br />
                creates <span className="text-[#0D90C4]">connection.</span>
              </h2>

              <div className="h-1 w-10 rounded-full bg-[#EC9136] mb-5" />

              <p className="max-w-lg text-base leading-relaxed text-[#5B6478]">
                Your time, knowledge, partnerships, and support help create access to education, build skills, and strengthen communities. There are many ways to get involved, and every contribution makes a meaningful difference.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 3) WAYS TO GET INVOLVED SECTION */}
      <section className="py-16 sm:py-24 border-t border-[#242A38]/5 bg-[#FBF9F4]">
        <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 items-center">
            
            {/* Left Content Column (Heading + 2x2 Grid) */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
                WAYS TO GET INVOLVED
              </p>
              <h2 className="text-3xl font-bold text-[#242A38] sm:text-4xl font-sans mb-3">
                Choose how you can help.
              </h2>

              <div className="h-1 w-10 rounded-full bg-[#EC9136] mb-4" />

              <p className="text-base text-[#5B6478] mb-8 max-w-xl">
                Whether you have time to give, skills to share, or a desire to support our work, there's a place for you in our community.
              </p>

              {/* 2x2 Grid of 4 SEPARATE Items */}
              <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {waysList.map((item, idx) => (
                  <div key={idx} className="flex flex-col pt-1">
                    <div className="h-1 w-8 rounded-full bg-[#0D90C4] mb-3" />
                    <h3 className="text-lg font-bold text-[#242A38] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5B6478] flex-1">
                      {item.desc}
                    </p>
                    <div className="mt-3">
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D90C4] cursor-default hover:underline"
                      >
                        <span>Learn more</span>
                        <HiArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Supporting Image */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[28px] bg-gray-100 aspect-[1.15/1] shadow-xs">
                <img
                  src="/get-involved/ways_side.webp"
                  alt="Mentor sitting with student writing"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 4) OUR IMPACT SECTION */}
      <section className="py-16 sm:py-24 border-t border-[#242A38]/5">
        <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Supporting Image */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[28px] bg-gray-100 aspect-[1.33/1] shadow-xs">
                <img
                  src="/get-involved/impact.webp"
                  alt="Volunteers organizing supplies and books together"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
                OUR IMPACT
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#242A38] sm:text-4xl font-sans mb-4">
                <span className="whitespace-nowrap">Small actions. Shared <span className="text-[#0D90C4]">impact.</span></span>
              </h2>

              <div className="h-1 w-10 rounded-full bg-[#EC9136] mb-4" />

              <p className="max-w-lg text-base leading-relaxed text-[#5B6478] mb-8">
                By getting involved, you help remove barriers to education and create more opportunities for individuals, families, and communities to thrive.
              </p>

              {/* 3 Icon Concepts Row */}
              <div className="grid grid-cols-3 divide-x divide-[#242A38]/10 pt-2 border-t border-[#242A38]/10">
                
                {/* Concept 1 */}
                <div className="flex flex-col items-center text-center px-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E5F5FC] text-[#0D90C4] mb-3">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-[#242A38]">Share Time</span>
                </div>

                {/* Concept 2 */}
                <div className="flex flex-col items-center text-center px-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E5F5FC] text-[#0D90C4] mb-3">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-[#242A38]">Build Partnerships</span>
                </div>

                {/* Concept 3 */}
                <div className="flex flex-col items-center text-center px-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E5F5FC] text-[#0D90C4] mb-3">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-[#242A38]">Support Learning</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 5) BOTTOM CTA BAND */}
      <section className="bg-[#242A38] py-16 sm:py-20 text-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            
            {/* Left Text Block */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4B826] mb-3">
                GET STARTED
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl font-sans text-white">
                Ready to make a difference?
              </h2>
              <p className="mt-2 text-base text-white/80 font-normal">
                Join us in expanding education opportunities.
              </p>
            </div>

            {/* Right Button */}
            <div className="flex items-center md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-[#F4B826] px-8 py-3.5 text-sm font-bold text-[#242A38] shadow-xs transition-colors hover:bg-[#e2a81f]"
              >
                <span>Contact Us</span>
                <HiArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
