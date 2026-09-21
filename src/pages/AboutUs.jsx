import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

export default function AboutUs() {
  return (
    <div className="bg-[#FBF9F4] min-h-screen text-[#242A38]">
      
      {/* 1) HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20 bg-[#FBF9F4]">
        <div className="container mx-auto px-[15px] sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Text Block */}
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-4">
                ABOUT WORLD EDUCATION SOCIETY
              </p>

              <h1 className="text-4xl font-bold leading-[1.1] text-[#242A38] sm:text-5xl lg:text-[3.6rem] font-sans">
                People.<br />
                Education.<br />
                <span className="text-[#0D90C4]">Stronger Communities.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#5B6478] sm:text-lg">
                World Education Society is a non-profit organization dedicated to helping individuals and communities access educational opportunities through guidance, support and collaboration.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center rounded-full bg-[#0D90C4] px-7 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#0B76A3]"
                >
                  Explore Our Programs
                </Link>
                <Link
                  to="/get-involved"
                  className="inline-flex items-center justify-center rounded-full border border-[#242A38] px-7 py-3.5 text-sm font-semibold text-[#242A38] transition-colors hover:bg-[#242A38] hover:text-white"
                >
                  Get Involved
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
                    src="/about-us/01_about_us_hero.webp"
                    alt="Group of students walking together on campus"
                    className="h-full w-full object-cover object-center absolute inset-0 rounded-[28px]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2) OUR STORY SECTION */}
      <section className="py-16 sm:py-24 border-t border-[#242A38]/5">
        <div className="container mx-auto px-[15px] sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Supporting Image */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[24px] bg-gray-100 aspect-[1.33/1] shadow-xs">
                <img
                  src="/about-us/02_our_story_PREVIEW.webp"
                  alt="Mentor guiding students in a classroom environment"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
                OUR STORY
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#242A38] sm:text-4xl font-sans mb-3">
                A shared belief<br />
                in the power of education.
              </h2>

              {/* Accent Line Bar */}
              <div className="h-1 w-10 rounded-full bg-[#EC9136] mb-5" />

              <p className="max-w-lg text-base leading-relaxed text-[#5B6478] mb-6">
                World Education Society was founded with a simple idea — that education can create opportunities and stronger communities. We work with individuals, community partners and volunteers to remove barriers and support lifelong learning for people of all backgrounds.
              </p>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D90C4] cursor-default transition-colors hover:text-[#0B76A3]"
              >
                <span>Learn more about our journey</span>
                <HiArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* 3) MISSION + VISION SECTION */}
      <section className="py-16 sm:py-24 bg-[#FBF9F4] border-t border-[#242A38]/5">
        <div className="container mx-auto px-[15px] sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Block: OUR MISSION */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
                OUR MISSION
              </p>

              <h2 className="text-2xl font-bold leading-tight text-[#242A38] sm:text-3xl font-sans mb-3">
                Create opportunities<br />
                through education.
              </h2>

              <div className="h-1 w-10 rounded-full bg-[#EC9136] mb-5" />

              <p className="text-sm leading-relaxed text-[#5B6478] mb-6">
                We are committed to expanding access to learning, resources and support so individuals and communities can build brighter, more inclusive futures.
              </p>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D90C4] cursor-default transition-colors hover:text-[#0B76A3]"
              >
                <span>Learn more about our work</span>
                <HiArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Center: Supporting Image */}
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-[24px] bg-gray-100 aspect-[1.15/1] shadow-xs">
                <img
                  src="/about-us/03_mission_vision_PREVIEW.webp"
                  alt="Young student writing in notebook"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right Block: OUR VISION */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
                OUR VISION
              </p>

              <h2 className="text-2xl font-bold leading-tight text-[#242A38] sm:text-3xl font-sans mb-3">
                A more inclusive<br />
                and equitable tomorrow.
              </h2>

              <div className="h-1 w-10 rounded-full bg-[#EC9136] mb-5" />

              <p className="text-sm leading-relaxed text-[#5B6478] mb-6">
                We envision communities where everyone has the opportunity to learn, grow and contribute, regardless of their background or circumstances.
              </p>

              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D90C4] transition-colors hover:text-[#0B76A3]"
              >
                <span>Explore our programs</span>
                <HiArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* 4) OUR VALUES SECTION */}
      <section className="py-16 sm:py-24 border-t border-[#242A38]/5">
        <div className="container mx-auto px-[15px] sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
              OUR VALUES
            </p>
            <h2 className="text-3xl font-bold text-[#242A38] sm:text-4xl font-sans">
              What guides our work.
            </h2>
          </div>

          {/* 4-Column Grid with subtle vertical dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#242A38]/10 gap-8 lg:gap-0">
            
            {/* Value 1: Inclusion */}
            <div className="flex flex-col items-center text-center lg:px-6 pt-4 sm:pt-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E5F5FC] text-[#0D90C4] mb-5">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#242A38] mb-2">Inclusion</h3>
              <p className="text-sm text-[#5B6478] leading-relaxed max-w-xs">
                We welcome and support individuals from all backgrounds.
              </p>
            </div>

            {/* Value 2: Opportunity */}
            <div className="flex flex-col items-center text-center lg:px-6 pt-6 sm:pt-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF2FF] text-[#61589B] mb-5">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#242A38] mb-2">Opportunity</h3>
              <p className="text-sm text-[#5B6478] leading-relaxed max-w-xs">
                We believe in the power of education to create change.
              </p>
            </div>

            {/* Value 3: Community */}
            <div className="flex flex-col items-center text-center lg:px-6 pt-6 sm:pt-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F8EE] text-[#4FAA4A] mb-5">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                  <path d="m7 21 1.6-1.4c.4-.4.6-.9.6-1.4v-2.2c0-.6.4-1 1-1h1.7c.6 0 1.1-.2 1.4-.6L18 9" />
                  <path d="M15 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#242A38] mb-2">Community</h3>
              <p className="text-sm text-[#5B6478] leading-relaxed max-w-xs">
                We work together with partners and volunteers.
              </p>
            </div>

            {/* Value 4: Integrity */}
            <div className="flex flex-col items-center text-center lg:px-6 pt-6 sm:pt-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E0F2FE] text-[#0284C7] mb-5">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#242A38] mb-2">Integrity</h3>
              <p className="text-sm text-[#5B6478] leading-relaxed max-w-xs">
                We are committed to transparency, respect and meaningful impact.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 5) OUR APPROACH SECTION */}
      <section className="py-16 sm:py-24 border-t border-[#242A38]/5">
        <div className="container mx-auto px-[15px] sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Supporting Image */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[24px] bg-gray-100 aspect-[1.33/1] shadow-xs">
                <img
                  src="/about-us/04_our_approach_PREVIEW.webp"
                  alt="Team and volunteers collaborating around table"
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
                Collaboration for<br />
                lasting impact.
              </h2>

              <div className="h-1 w-10 rounded-full bg-[#EC9136] mb-5" />

              <p className="max-w-lg text-base leading-relaxed text-[#5B6478] mb-6">
                We partner with educational institutions, community organizations and dedicated volunteers to provide guidance, resources and support. Together, we help individuals take meaningful steps toward their goals and contribute to stronger, more inclusive communities.
              </p>

              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D90C4] transition-colors hover:text-[#0B76A3]"
              >
                <span>Get involved</span>
                <HiArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* 6) BOTTOM CTA BAND */}
      <section className="bg-[#242A38] py-16 sm:py-20 text-white">
        <div className="container mx-auto px-[15px] sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            
            {/* Left Text Block */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4B826] mb-3">
                LET'S BUILD BRIGHTER FUTURES
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl font-sans text-white">
                Be part of the change.
              </h2>
              <p className="mt-2 text-base text-white/80 font-normal">
                Support education. Strengthen communities.
              </p>
            </div>

            {/* Right Button */}
            <div className="flex items-center md:justify-end">
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-[#F4B826] px-8 py-3.5 text-sm font-bold text-[#242A38] shadow-xs transition-colors hover:bg-[#e2a81f]"
              >
                <span>Get Involved</span>
                <HiArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
