import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineBriefcase,
  HiOutlineBuildingLibrary,
  HiOutlineChartBar,
  HiOutlineComputerDesktop,
  HiOutlineGlobeAlt,
  HiOutlineMagnifyingGlass,
  HiOutlineSquares2X2,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from 'react-icons/hi2'
import { HiArrowRight } from 'react-icons/hi'
import PageHero, { heroPrimaryButton, heroTextLink } from '../components/PageHero'

const audiences = [
  { id: 'all', label: 'All Programs', Icon: HiOutlineSquares2X2 },
  { id: 'students', label: 'For Students', Icon: HiOutlineUser },
  { id: 'youth', label: 'For Youth', Icon: HiOutlineUsers },
  { id: 'communities', label: 'For Communities', Icon: HiOutlineBuildingLibrary },
  { id: 'lifelong', label: 'For Lifelong Learners', Icon: HiOutlineAcademicCap },
]

const categories = [
  { id: 'all', label: 'All Programs' },
  { id: 'education', label: 'Education Access' },
  { id: 'youth', label: 'Youth Support' },
  { id: 'skills', label: 'Skills Development' },
  { id: 'funding', label: 'Funding & Opportunities' },
  { id: 'community', label: 'Community Support' },
  { id: 'other', label: 'Other Support' },
]

const tints = {
  blue: 'bg-[#E7F1FB] text-[#1E4E8C]',
  green: 'bg-[#E5F6EA] text-[#2E9A4A]',
  gold: 'bg-[#FBF3E0] text-[#C9922A]',
  purple: 'bg-[#F3EEF8] text-[#6E4C9A]',
}

const programs = [
  {
    id: 'education-guidance',
    title: 'Education Guidance',
    desc: 'Personalized guidance to help students navigate educational pathways.',
    image: '/extras/08_supportive_mentorship_over_papers.webp',
    alt: 'A mentor reviewing documents with a student at a desk',
    audiences: ['students', 'lifelong'],
    categories: ['education'],
    tint: 'blue',
    Icon: HiOutlineBookOpen,
    position: 'object-[center_35%]',
  },
  {
    id: 'student-support',
    title: 'Student Support',
    desc: 'Academic, social and wellness support to help students succeed.',
    image: '/extras/01_a_bright_modern_indoor_study_learning_scene_in_a.webp',
    alt: 'A mentor helping students study together around a laptop',
    audiences: ['students', 'youth'],
    categories: ['youth', 'education'],
    tint: 'green',
    Icon: HiOutlineUser,
    position: 'object-[center_30%]',
  },
  {
    id: 'study-opportunities',
    title: 'Study Opportunities',
    desc: 'Information and support for international and domestic study options.',
    image: '/extras/22_wide_well_lit_indoor_scene_in_a_library_or_learni.webp',
    alt: 'A student studying with a mentor in a bright library',
    audiences: ['students', 'lifelong'],
    categories: ['education', 'funding'],
    tint: 'gold',
    Icon: HiOutlineAcademicCap,
    position: 'object-[center_40%]',
  },
  {
    id: 'scholarships-funding',
    title: 'Scholarships & Funding',
    desc: 'Connecting students with scholarships, bursaries and other funding opportunities.',
    image: '/extras/15_outdoor_graduation_portrait_scene_on_a_college_cam.webp',
    alt: 'A graduate in a cap and gown holding a diploma folder',
    audiences: ['students'],
    categories: ['funding'],
    tint: 'blue',
    Icon: HiOutlineDocumentIcon,
    position: 'object-[center_20%]',
  },
  {
    id: 'community-education',
    title: 'Community Education',
    desc: 'Programs and resources that strengthen communities through learning.',
    image: '/extras/03_wide_well_lit_outdoor_community_volunteer_scene_i.webp',
    alt: 'Community volunteers packing supplies together outdoors',
    audiences: ['communities', 'lifelong'],
    categories: ['community'],
    tint: 'blue',
    Icon: HiOutlineUserGroup,
    position: 'object-[center_30%]',
  },
  {
    id: 'career-skills',
    title: 'Career & Skills Development',
    desc: 'Workshops, training and mentorship to build real-world skills.',
    image: '/extras/18_collaborative_community_planning_session.webp',
    alt: 'Adults collaborating around a table during a skills workshop',
    audiences: ['youth', 'communities', 'lifelong'],
    categories: ['skills'],
    tint: 'green',
    Icon: HiOutlineChartBar,
    position: 'object-[center_25%]',
  },
  {
    id: 'vernacular-learning',
    title: 'Vernacular Learning Support',
    desc: 'Language support and culturally responsive resources to make education more accessible.',
    image: '/extras/23_warm_welcome_in_a_cozy_community_space.webp',
    alt: 'Two women greeting each other in a community learning space',
    audiences: ['communities', 'lifelong'],
    categories: ['community'],
    tint: 'purple',
    Icon: HiOutlineBookOpen,
    position: 'object-[center_20%]',
  },
  {
    id: 'transportation-assistance',
    title: 'Transportation Assistance',
    desc: 'Helping reduce transportation barriers so students can participate in education.',
    image: '/extras/05_a_bright_realistic_high_resolution_outdoor_campu.webp',
    alt: 'Students with backpacks gathered on a campus lawn',
    audiences: ['students', 'communities'],
    categories: ['other'],
    tint: 'blue',
    Icon: BusIcon,
    position: 'object-[center_35%]',
  },
  {
    id: 'digital-skills',
    title: 'Digital Skills for Tomorrow',
    desc: 'Hands-on digital literacy and technology skills for a brighter future.',
    image: '/extras/12_hands_on_robotics_workshop_mentorship.webp',
    alt: 'A mentor guiding a young person through a hands-on technology workshop',
    audiences: ['youth', 'lifelong'],
    categories: ['skills'],
    tint: 'blue',
    Icon: HiOutlineComputerDesktop,
    position: 'object-[center_25%]',
  },
  {
    id: 'youth-internship',
    title: 'Youth Internship Pathways',
    desc: 'Connecting youth with real-world experience and career growth.',
    image: '/extras/19_outdoor_community_garden_scene_in_bright_daylight.webp',
    alt: 'Young people and mentors working together on a community project',
    audiences: ['youth'],
    categories: ['youth'],
    tint: 'gold',
    Icon: HiOutlineBriefcase,
    position: 'object-[center_30%]',
  },
  {
    id: 'pathways-post-secondary',
    title: 'Pathways to Post-Secondary',
    desc: 'Guidance, resources and support to help students transition to college, university and beyond.',
    image: '/extras/10_welcoming_community_learning_hub.webp',
    alt: 'Students arriving in a bright campus learning building',
    audiences: ['students', 'youth'],
    categories: ['education', 'youth'],
    tint: 'blue',
    Icon: HiOutlineAcademicCap,
    position: 'object-[center_30%]',
  },
]

const outcomes = [
  { value: '12,500+', label: 'Youth Supported', color: 'text-[#2E9A4A]' },
  { value: '1,800+', label: 'Internships Facilitated', color: 'text-[#1E4E8C]' },
  { value: '3,200+', label: 'Scholarships & Opportunities', color: 'text-[#D39A1D]' },
  { value: '85%', label: 'Program Participants Report Greater Confidence', color: 'text-[#1E4E8C]' },
]

function HiOutlineDocumentIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 3.75h7.2L19 8.4V20.25H7A1.25 1.25 0 0 1 5.75 19V5A1.25 1.25 0 0 1 7 3.75Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 3.9V8.5h4.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 12.5h7M8.5 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function BusIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4.5" width="16" height="12.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 10.5h16M7.5 17v2M16.5 17v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="8" cy="14" r="0.9" fill="currentColor" />
      <circle cx="16" cy="14" r="0.9" fill="currentColor" />
    </svg>
  )
}

function LearnMore({ href }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1E4E8C] transition-colors hover:text-[#163E70]">
      Learn More
      <HiArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  )
}

export default function OurPrograms() {
  const exploreRef = useRef(null)
  const [audience, setAudience] = useState('all')
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return programs.filter((program) => {
      const audienceOk = audience === 'all' || program.audiences.includes(audience)
      const categoryOk = category === 'all' || program.categories.includes(category)
      const searchOk =
        !needle ||
        program.title.toLowerCase().includes(needle) ||
        program.desc.toLowerCase().includes(needle)
      return audienceOk && categoryOk && searchOk
    })
  }, [audience, category, query])

  function showStudyOpportunities() {
    setAudience('all')
    setCategory('all')
    setQuery('')
    window.requestAnimationFrame(() => {
      document.getElementById('study-opportunities')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  return (
    <div className="bg-[#F7F6F2] text-[#1B3A6B]">
      <PageHero
        eyebrow="Education Creates Opportunity."
        title="Our Programs"
        description="Our programs are designed to remove barriers to education through guidance, resources and community support. We work with individuals, families and communities to help people learn, grow and build brighter futures."
        image="/extras/02_a_bright_modern_outdoor_university_campus_like_s.webp"
        imageAlt="Students talking together outside a university building"
      >
        <button
          type="button"
          onClick={() => exploreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className={heroPrimaryButton}
        >
          Explore Our Programs
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
        <Link to="/our-impact" className={heroTextLink}>
          Our Impact
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="border-y border-[#E6EEF4] bg-white">
        <div className="mx-auto flex max-w-[1380px] gap-1 overflow-x-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {audiences.map(({ id, label, Icon }) => {
            const active = audience === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => setAudience(id)}
                className={`flex min-w-[140px] flex-1 flex-col items-center gap-2 border-b-2 px-3 py-4 text-[13px] font-semibold transition-colors ${
                  active
                    ? 'border-[#1E4E8C] text-[#1E4E8C]'
                    : 'border-transparent text-[#5C6B7C] hover:text-[#1B3A6B]'
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="whitespace-nowrap">{label}</span>
              </button>
            )
          })}
        </div>
      </section>

      <section ref={exploreRef} className="relative scroll-mt-24 overflow-hidden bg-[#F7F6F2] py-12 sm:py-16">
        <div className="pointer-events-none absolute -left-10 top-24 h-48 w-48 rounded-full bg-[#E7F3FB]/90 blur-3xl" />
        <div className="relative mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A97A6]">Programs</p>
              <h2 className="mt-2 font-sans text-3xl font-bold tracking-tight text-[#1B3A6B] sm:text-4xl">
                Explore Our Programs
              </h2>
            </div>
            <label className="relative block w-full lg:w-[280px]">
              <span className="sr-only">Search programs</span>
              <HiOutlineMagnifyingGlass className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A97A6]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search programs..."
                className="w-full rounded-full border border-[#E1E6EE] bg-white py-2.5 pl-10 pr-4 text-sm text-[#1B3A6B] outline-none placeholder:text-[#9AA6B2] focus:border-[#1E4E8C]"
              />
            </label>
          </div>

          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#6A7786] sm:text-[15px]">
            From guidance and practical skills to scholarships and community support, our programs help remove barriers and create real opportunities for individuals and communities to learn, grow and thrive.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((item) => {
              const active = category === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCategory(item.id)}
                  className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                    active
                      ? 'bg-[#2F6FE4] text-white'
                      : 'border border-[#E1E6EE] bg-white text-[#3E5164] hover:border-[#C9D6E4]'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          {visible.length === 0 ? (
            <p className="mt-10 text-center text-sm text-[#5C6B7C]">No programs match your search.</p>
          ) : (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {visible.map((program) => (
                <article
                  key={program.id}
                  id={program.id}
                  className="flex flex-col rounded-2xl border border-[#E7EEF5] bg-white p-3 shadow-[0_10px_30px_-24px_rgba(27,58,107,0.45)]"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-[#E7EEF2]">
                    <img
                      src={program.image}
                      alt={program.alt}
                      className={`h-full w-full object-cover ${program.position}`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                    <div className="flex items-start gap-3">
                      <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${tints[program.tint]}`}>
                        <program.Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <h3 className="pt-1 font-sans text-[15px] font-bold leading-snug text-[#1B3A6B]">
                        {program.title}
                      </h3>
                    </div>
                    <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[#5C6B7C]">{program.desc}</p>
                    <div className="mt-4">
                      <LearnMore href={`#${program.id}`} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="international" className="relative scroll-mt-24 overflow-hidden bg-[#F3F8FC] py-14 sm:py-16">
        <div className="pointer-events-none absolute -right-10 top-0 h-56 w-56 rounded-full bg-white/70 blur-3xl" />
        <div className="mx-auto grid max-w-[1380px] items-center gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)_minmax(220px,0.7fr)] lg:gap-10 lg:px-12 xl:px-16">
          <div className="h-[280px] overflow-hidden rounded-[24px] bg-[#E7EEF2] sm:h-[360px] lg:h-[420px]">
            <img
              src="/extras/11_exploring_the_historic_university_quad.webp"
              alt="A student with a backpack looking toward a historic university building"
              className="h-full w-full object-cover object-[center_45%]"
            />
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A97A6]">International Education</p>
            <h2 className="mt-3 font-sans text-3xl font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-4xl">
              A Global Perspective.
              <span className="mt-1 block text-[#1E8A4A]">A Brighter Tomorrow.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#5C6B7C] sm:text-[15px]">
              Studying abroad is one of many ways we help students access life-changing educational opportunities. We provide information, guidance and support for international study options as part of our broader commitment to educational access for all.
            </p>
            <button
              type="button"
              onClick={showStudyOpportunities}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1E4E8C] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#183E70]"
            >
              Learn More About Study Opportunities
              <HiArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <ul className="space-y-6">
            <li className="flex gap-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E7F1FB] text-[#1E4E8C]">
                <HiOutlineGlobeAlt className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-sans text-sm font-bold text-[#1B3A6B]">Global Learning</p>
                <p className="mt-1 text-[13px] leading-relaxed text-[#5C6B7C]">Experience new cultures and perspectives.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E5F6EA] text-[#2E9A4A]">
                <HiOutlineUser className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-sans text-sm font-bold text-[#1B3A6B]">Personal Growth</p>
                <p className="mt-1 text-[13px] leading-relaxed text-[#5C6B7C]">Build confidence, independence and skills.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FBF3E0] text-[#C9922A]">
                <HiOutlineAcademicCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-sans text-sm font-bold text-[#1B3A6B]">Greater Opportunities</p>
                <p className="mt-1 text-[13px] leading-relaxed text-[#5C6B7C]">Opens doors to future education and career paths.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-[#F7F6F2] py-14 sm:py-16">
        <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-[#1B3A6B] sm:text-4xl">Program Outcomes</h2>
          <p className="mt-2 text-sm text-[#5C6B7C] sm:text-[15px]">
            Our programs create real change in the lives of students, youth and communities.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <div key={item.label}>
                <p className={`font-sans text-3xl font-bold tracking-tight sm:text-4xl ${item.color}`}>{item.value}</p>
                <p className="mt-2 max-w-[180px] text-sm leading-snug text-[#5C6B7C]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
