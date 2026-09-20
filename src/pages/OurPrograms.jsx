import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

const programsList = [
  {
    id: 'education-guidance',
    title: 'Education Guidance',
    desc: 'Explore courses and pathways that fit your interests and goals.',
    color: '#0D90C4',
    image: '/our-programs/01_education_guidance.webp',
  },
  {
    id: 'student-support',
    title: 'Student Support',
    desc: 'Get help understanding applications, documents and next steps.',
    color: '#4FAA4A',
    image: '/our-programs/02_student_support.webp',
  },
  {
    id: 'study-opportunities',
    title: 'Study Opportunities',
    desc: 'Learn about study options, institutions and destinations.',
    color: '#EC9136',
    image: '/our-programs/03_study_opportunities.webp',
  },
  {
    id: 'scholarships-funding',
    title: 'Scholarships & Funding',
    desc: 'Find information about funding options and eligibility.',
    color: '#61589B',
    image: '/our-programs/04_scholarships_funding.webp',
  },
  {
    id: 'career-skills',
    title: 'Career & Skills Development',
    desc: 'Build confidence and explore practical skills for your next chapter.',
    color: '#4FAA4A',
    image: '/our-programs/05_career_skills.webp',
  },
  {
    id: 'community-education',
    title: 'Community Education Programs',
    desc: 'Connect through shared learning, workshops and local initiatives.',
    color: '#0D90C4',
    image: '/our-programs/06_community_education.webp',
  },
]

export default function OurPrograms() {
  return (
    <div className="bg-[#FBF9F4] min-h-screen text-[#242A38]">
      
      {/* 1) HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="container mx-auto px-[15px] sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Text Content */}
            <div className="lg:col-span-6 pr-2 lg:pr-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-4">
                OUR PROGRAMS
              </p>

              <h1 className="text-3xl font-bold leading-[1.15] text-[#242A38] sm:text-4xl lg:text-[2.6rem] xl:text-[3.1rem] font-sans">
                Learning today.<br />
                Brighter <span className="text-[#0D90C4]">tomorrows.</span>
              </h1>

              {/* Accent Line Bar */}
              <div className="mt-4 h-1 w-12 rounded-full bg-[#EC9136]" />

              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#5B6478] sm:text-lg">
                Our programs are designed to remove barriers, create opportunities and empower individuals and communities through education, support and collaboration.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 justify-center rounded-full bg-[#0D90C4] px-7 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#0B76A3]"
                >
                  <span>Get Support</span>
                  <HiArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-xs font-medium text-[#5B6478]/80 sm:text-sm">
                  For students. For communities. For a fairer future.
                </p>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-6 flex lg:justify-end">
              <div className="relative w-full max-w-xl lg:max-w-md xl:max-w-lg">
                <div className="overflow-hidden rounded-t-[70px] rounded-b-[36px] sm:rounded-t-[95px] sm:rounded-b-[44px] bg-gray-100 aspect-[1.35/1] w-full shadow-xs">
                  <img
                    src="/our-programs/hero.webp"
                    alt="Group of students smiling together with a laptop outdoors"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2) PROGRAMS INTRO & 3) GRID */}
      <section className="py-16 sm:py-24 border-t border-[#242A38]/5 bg-[#FBF9F4]">
        <div className="container mx-auto px-[15px] sm:px-6 lg:px-8">
          
          {/* Header Block */}
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
              OUR PROGRAMS
            </p>
            <h2 className="text-3xl font-bold text-[#242A38] sm:text-4xl font-sans mb-3">
              Support at every stage.
            </h2>
            <p className="text-base text-[#5B6478] max-w-2xl">
              From learning opportunities to real-world skills, our programs are built to help individuals and communities thrive.
            </p>
          </div>

          {/* 3-Column Program Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programsList.map((item) => (
              <div key={item.id} className="flex flex-col group">
                
                {/* Card Top Image */}
                <div className="overflow-hidden rounded-[20px] bg-gray-100 aspect-[1.33/1] mb-5 shadow-xs">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Accent Line Underline */}
                <div
                  className="h-1 w-10 rounded-full mb-3"
                  style={{ backgroundColor: item.color }}
                />

                {/* Title */}
                <h3 className="text-xl font-bold text-[#242A38]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-[#5B6478] flex-1">
                  {item.desc}
                </p>

                {/* Learn More Link (inactive until detail route confirmed) */}
                <div className="mt-4">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D90C4] cursor-default transition-colors hover:text-[#0B76A3]"
                  >
                    <span>Learn more</span>
                    <HiArrowRight className="h-4 w-4" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 4) OUR IMPACT SECTION */}
      <section className="py-16 sm:py-24 border-t border-[#242A38]/5">
        <div className="container mx-auto px-[15px] sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Supporting Image */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[28px] bg-gray-100 aspect-[1.33/1] shadow-xs">
                <img
                  src="/our-programs/impact.webp"
                  alt="Volunteers organizing and supporting community initiatives"
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
                Education creates<br />
                stronger communities.
              </h2>

              <p className="max-w-lg text-base leading-relaxed text-[#5B6478] mb-8">
                By supporting individuals with the right resources and opportunities, we help build confident learners, stronger families and more inclusive communities.
              </p>

              {/* 3 Icon Concepts Row */}
              <div className="grid grid-cols-3 divide-x divide-[#242A38]/10 pt-2 border-t border-[#242A38]/10">
                
                {/* Concept 1 */}
                <div className="flex flex-col items-center text-center px-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E5F5FC] text-[#0D90C4] mb-3">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-[#242A38]">More Opportunities</span>
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
                  <span className="text-xs font-semibold text-[#242A38]">Stronger Communities</span>
                </div>

                {/* Concept 3 */}
                <div className="flex flex-col items-center text-center px-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E5F5FC] text-[#0D90C4] mb-3">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22v-9" />
                      <path d="M12 13a6 6 0 0 0 6-6c0-3-2.5-4-6-4s-6 1-6 4a6 6 0 0 0 6 6z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-[#242A38]">Brighter Futures</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 5) BOTTOM CTA BAND */}
      <section className="bg-[#242A38] py-16 sm:py-20 text-white">
        <div className="container mx-auto px-[15px] sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            
            {/* Left Text Block */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4B826] mb-3">
                GET STARTED
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl font-sans text-white">
                Ready to explore our programs?
              </h2>
              <p className="mt-2 text-base text-white/80 font-normal">
                Take the next step toward your goals. We are here to help.
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
