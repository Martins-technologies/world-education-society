import { useMemo, useState } from 'react'
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
import PageHero from '../components/PageHero'

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
  blue: 'bg-[#E8F2FC] text-[#2F6FE4]',
  green: 'bg-[#E7F7EC] text-[#2E9A4A]',
  gold: 'bg-[#FBF4E4] text-[#D4A017]',
  purple: 'bg-[#F3EEF8] text-[#7A62C4]',
}

const programs = [
  {
    id: 'education-guidance',
    title: 'Education Guidance',
    desc: 'Personalized guidance to help students navigate educational pathways.',
    eligibility: 'Students of all ages',
    delivery: 'One-on-one & online',
    image: '/programsupdated/02_Education_Guidance.webp',
    alt: 'A student writing in a notebook during a learning session',
    audiences: ['students', 'lifelong'],
    categories: ['education'],
    tint: 'blue',
    Icon: HiOutlineBookOpen,
  },
  {
    id: 'student-support',
    title: 'Student Support',
    desc: 'Academic, social and wellness support to help youth succeed.',
    eligibility: 'Youth (ages 12–29)',
    delivery: 'In-person & virtual',
    image: '/programsupdated/03_Student_Support.webp',
    alt: 'Students talking together during a support session',
    audiences: ['students', 'youth'],
    categories: ['youth'],
    tint: 'blue',
    Icon: HiOutlineUserGroup,
  },
  {
    id: 'study-opportunities',
    title: 'Study Opportunities',
    desc: 'Information and support for international and domestic study options (including study abroad).',
    eligibility: 'High school & post-secondary students',
    delivery: 'Online & in-person',
    image: '/programsupdated/04_Study_Opportunities.webp',
    alt: 'A student with a backpack looking toward a city skyline',
    audiences: ['students', 'youth', 'lifelong'],
    categories: ['education', 'funding'],
    tint: 'blue',
    Icon: PlaneIcon,
  },
  {
    id: 'scholarships-funding',
    title: 'Scholarships & Funding',
    desc: 'Connecting students with scholarships, bursaries and other funding opportunities.',
    eligibility: 'Qualified students',
    delivery: 'Online application and guidance',
    image: '/programsupdated/05_Scholarships_and_Funding.webp',
    alt: 'A graduate in a cap and gown',
    audiences: ['students'],
    categories: ['funding'],
    tint: 'blue',
    Icon: HiOutlineAcademicCap,
    action: 'Apply Now',
    href: '/get-involved',
  },
  {
    id: 'career-skills',
    title: 'Career & Skills Development',
    desc: 'Workshops, training and mentorship to build real-world skills.',
    eligibility: 'Youth and emerging professionals',
    delivery: 'In-person & virtual',
    image: '/programsupdated/07_Career_and_Skills_Development.webp',
    alt: 'Students collaborating during a skills workshop',
    audiences: ['youth', 'lifelong'],
    categories: ['skills'],
    tint: 'blue',
    Icon: HiOutlineChartBar,
  },
  {
    id: 'community-education',
    title: 'Community Education',
    desc: 'Programs and resources that strengthen communities through learning.',
    eligibility: 'Community members of all ages',
    delivery: 'In-person & community partnerships',
    image: '/programsupdated/06_Community_Education.webp',
    alt: 'People learning together in a community setting',
    audiences: ['communities', 'lifelong'],
    categories: ['community'],
    tint: 'blue',
    Icon: HiOutlineUsers,
  },
  {
    id: 'vernacular-learning',
    title: 'Vernacular Learning Support',
    desc: 'Language support and culturally responsive resources to make education more accessible.',
    eligibility: 'Newcomers, multilingual learners and underserved communities',
    delivery: 'In-person & online',
    image: '/programsupdated/08_Vernacular_Learning_Support.webp',
    alt: 'Learners studying together with notebooks',
    audiences: ['communities', 'lifelong', 'students'],
    categories: ['community', 'education'],
    tint: 'blue',
    Icon: ChatIcon,
  },
  {
    id: 'transportation-assistance',
    title: 'Transportation Assistance',
    desc: 'Helping reduce transportation barriers so students can participate in education.',
    eligibility: 'Students facing transportation barriers',
    delivery: 'Support programs & partnerships',
    image: '/programsupdated/09_Transportation_Assistance.webp',
    alt: 'Students riding public transit together',
    href: '/programs/transportation-assistance',
    audiences: ['students', 'communities'],
    categories: ['other'],
    tint: 'blue',
    Icon: BusIcon,
  },
  {
    id: 'youth-internship',
    title: 'Youth Internship Pathways',
    desc: 'Connecting youth with real-world experience and career growth.',
    eligibility: 'Youth (ages 15–30)',
    delivery: 'Partner organizations & placements',
    image: '/programsupdated/11_Youth_Internship_Pathways.webp',
    alt: 'A young person with a backpack ready for an internship',
    audiences: ['youth'],
    categories: ['youth', 'skills'],
    tint: 'blue',
    Icon: HiOutlineUserGroup,
  },
  {
    id: 'digital-skills',
    title: 'Digital Skills for Tomorrow',
    desc: 'Hands-on digital literacy and technology skills for a brighter future.',
    eligibility: 'Youth and adult learners',
    delivery: 'In-person, hybrid & online',
    image: '/programsupdated/10_Digital_Skills_for_Tomorrow.webp',
    alt: 'A learner using a laptop with headphones',
    audiences: ['youth', 'lifelong'],
    categories: ['skills'],
    tint: 'blue',
    Icon: HiOutlineComputerDesktop,
  },
  {
    id: 'pathways-post-secondary',
    title: 'Pathways to Post-Secondary',
    desc: 'Guidance, resources and support to help students transition to college, university and beyond.',
    eligibility: 'High school students and recent graduates',
    delivery: 'One-on-one, workshops & online',
    image: '/programsupdated/12_Pathways_to_Post_Secondary.webp',
    alt: 'Students studying together on a campus',
    audiences: ['students', 'youth'],
    categories: ['education', 'youth'],
    tint: 'blue',
    Icon: HiOutlineChartBar,
  },
]

const outcomes = [
  { value: '12,500+', label: 'Youth Supported', Icon: HiOutlineBookOpen, color: 'text-[#2F6FE4]' },
  { value: '1,800+', label: 'Internships Facilitated', Icon: HiOutlineUserGroup, color: 'text-[#5B6FD6]' },
  { value: '3,200+', label: 'Scholarships & Opportunities', Icon: HiOutlineAcademicCap, color: 'text-[#3B82C4]' },
  { value: '85%', label: 'Program Participants Report Greater Confidence', Icon: HiOutlineChartBar, color: 'text-[#2F6FE4]' },
]

const highlights = [
  {
    title: 'Global Learning',
    text: 'Experience new cultures and perspectives.',
    Icon: HiOutlineGlobeAlt,
    wrap: 'bg-[#E8F2FC] text-[#2F6FE4]',
  },
  {
    title: 'Personal Growth',
    text: 'Build confidence, independence and skills.',
    Icon: HiOutlineUsers,
    wrap: 'bg-[#F3EEF8] text-[#7A62C4]',
  },
  {
    title: 'Greater Opportunities',
    text: 'Open doors to future education and career paths.',
    Icon: HiOutlineBriefcase,
    wrap: 'bg-[#E8F2FC] text-[#2F6FE4]',
  },
]

function PlaneIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3.5 12.2 21 5.5l-6.2 13.2-2.4-5.1-5.1-1.4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12.4 13.6 9.2 19.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function ChatIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5.5 6.5h9.2A1.8 1.8 0 0 1 16.5 8.3v4.2a1.8 1.8 0 0 1-1.8 1.8H9.2L6.2 17v-2.7H5.5A1.8 1.8 0 0 1 3.7 12.5V8.3A1.8 1.8 0 0 1 5.5 6.5Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.2 5h8.3A2 2 0 0 1 19.5 7v4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function PinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 20.5s5.2-4.6 5.2-9A5.2 5.2 0 0 0 6.8 11.5c0 4.4 5.2 9 5.2 9Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="11.2" r="1.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8.5V12l2.6 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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

function LearnMore({ href, label = 'Learn More' }) {
  const className =
    'inline-flex items-center gap-1.5 rounded-lg border border-[#D5E4F7] bg-white px-3.5 py-1.5 text-[13px] font-semibold text-[#2F6FE4] transition-colors hover:border-[#2F6FE4] hover:bg-[#F4F8FE]'
  const content = (
    <>
      {label}
      <HiArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
    </>
  )
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {content}
    </a>
  )
}

function SoftBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#E7F3FB] blur-3xl" />
      <div className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-[#EAF4FC] blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#F3F8FD] blur-3xl" />
    </div>
  )
}

export default function OurPrograms() {
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
        program.desc.toLowerCase().includes(needle) ||
        program.eligibility.toLowerCase().includes(needle) ||
        program.delivery.toLowerCase().includes(needle)
      return audienceOk && categoryOk && searchOk
    })
  }, [audience, category, query])

  return (
    <div className="bg-[#F7FBFE] text-[#1B3A6B]">
      <PageHero
        title={
          <>
            Our Programs
            <span className="mt-2 block text-[1.2rem] font-semibold leading-snug text-[#2E9A4A] sm:text-[1.45rem] lg:text-[1.35rem] xl:text-[1.5rem] min-[1440px]:text-[1.65rem]">
              Education Creates Opportunity.
              <span className="mt-1 block">Programs for Brighter Futures.</span>
            </span>
          </>
        }
        description="Our programs are built around educational access, youth support, practical skills, and opportunity. We work with individuals, families and communities to remove barriers and create pathways to a brighter, more equitable future."
        image="/programsupdated/01_Hero_Our_Programs.webp"
        imageAlt="Students smiling together on a campus"
        imageLayout="full"
        imagePosition="40% center"
        breadcrumb={
          <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-[#8A97A6]">
            <Link to="/" className="transition-colors hover:text-[#1E4E8C]">
              Home
            </Link>
            <span className="mx-1.5" aria-hidden="true">
              ›
            </span>
            <span className="text-[#5C6B7C]">Our Programs</span>
          </nav>
        }
      />

      <section className="border-y border-[#E6EEF4] bg-white">
        <div className="mx-auto flex max-w-[1380px] gap-1 overflow-x-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {audiences.map(({ id, label, Icon }) => {
            const active = audience === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => setAudience(id)}
                className={`flex min-w-[148px] flex-1 flex-col items-center gap-2 border-b-[3px] px-3 py-4 text-[13px] font-semibold transition-colors ${
                  active
                    ? 'border-[#2F6FE4] text-[#2F6FE4]'
                    : 'border-transparent text-[#7B8B9A] hover:text-[#1B3A6B]'
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="whitespace-nowrap">{label}</span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="relative scroll-mt-24 overflow-hidden bg-[#F7FBFE] py-12 sm:py-14">
        <SoftBlobs />
        <div className="relative mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-5 lg:grid-cols-[auto_minmax(0,1fr)_260px] lg:gap-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A97A6]">Programs</p>
              <h2 className="mt-1.5 whitespace-nowrap font-display text-[2rem] font-bold leading-none tracking-tight text-[#1B3A6B] sm:text-[2.15rem]">
                Explore Our Programs
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#6A7786] lg:justify-self-center lg:text-center">
              From guidance and practical skills to scholarships and community support, our programs help remove barriers and create real opportunities for individuals and communities to learn, grow and thrive.
            </p>
            <label className="relative block w-full">
              <span className="sr-only">Search programs</span>
              <HiOutlineMagnifyingGlass className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A97A6]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search programs..."
                className="w-full rounded-full border border-[#E1E8F0] bg-white py-2.5 pl-10 pr-4 text-sm text-[#1B3A6B] shadow-[0_1px_2px_rgba(27,58,107,0.04)] outline-none placeholder:text-[#9AA6B2] focus:border-[#2F6FE4]"
              />
            </label>
          </div>

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
                      ? 'bg-[#2F6FE4] text-white shadow-sm'
                      : 'border border-[#E3EAF2] bg-white text-[#3E5164] hover:border-[#C9D6E4]'
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
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {visible.map((program) => (
                <article
                  key={program.id}
                  id={program.id}
                  className="flex flex-col rounded-2xl border border-[#E7EEF5] bg-white p-2.5 shadow-[0_12px_32px_-22px_rgba(27,58,107,0.45)]"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-[#E7EEF2]">
                    <img src={program.image} alt={program.alt} className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="flex flex-1 flex-col px-2 pb-2 pt-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${tints[program.tint]}`}>
                        <program.Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <h3 className="font-sans text-[15px] font-bold leading-snug text-[#2456C9]">{program.title}</h3>
                    </div>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#6A7786]">{program.desc}</p>
                    <ul className="mt-3 flex-1 space-y-1.5 text-[12px] leading-snug text-[#5C6B7C]">
                      <li className="flex items-start gap-1.5">
                        <PinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2F6FE4]" />
                        <span>
                          <span className="font-semibold text-[#3E5164]">Eligibility:</span> {program.eligibility}
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <ClockIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2F6FE4]" />
                        <span>
                          <span className="font-semibold text-[#3E5164]">Delivery:</span> {program.delivery}
                        </span>
                      </li>
                    </ul>
                    <div className="mt-3.5">
                      <LearnMore href={program.href || `#${program.id}`} label={program.action || 'Learn More'} />
                    </div>
                  </div>
                </article>
              ))}
              {audience === 'all' && category === 'all' && !query.trim() ? (
                <article className="flex flex-col justify-between rounded-2xl border border-[#D5EDDC] bg-[#F3FBF4] p-6 shadow-[0_12px_32px_-22px_rgba(27,58,107,0.45)]">
                  <div>
                    <h3 className="font-display text-[1.65rem] font-bold italic leading-tight tracking-tight text-[#1B3A6B]">
                      More Than Programs.
                      <span className="mt-1 block text-[#1F8A4C] underline decoration-[#1F8A4C] decoration-2 underline-offset-4">
                        Brighter Futures.
                      </span>
                    </h3>
                    <div className="mt-5 flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E7F3FB] text-[#2F6FE4]">
                        <HiOutlineUserGroup className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <p className="text-[13px] leading-relaxed text-[#5C6B7C]">
                        Every program is part of our larger mission to make education accessible for all. Explore, get involved, or reach out to learn how we can support you.
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/get-involved"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-[#2E9A4A] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#267F3C]"
                  >
                    Get Support
                    <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ) : null}
            </div>
          )}
        </div>
      </section>

      <section id="international" className="relative scroll-mt-24 overflow-hidden bg-[#F4F9FD] py-12 sm:py-16">
        <SoftBlobs />
        <div className="relative mx-auto grid max-w-[1380px] items-center gap-8 px-6 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.05fr)_minmax(220px,0.72fr)] lg:gap-10 lg:px-12 xl:px-16">
          <div className="h-[260px] overflow-hidden rounded-[22px] bg-[#E7EEF2] sm:h-[340px] lg:h-[360px]">
            <img
              src="/programsupdated/13_International_Education.webp"
              alt="A student with a backpack looking toward a historic university"
              className="h-full w-full object-cover object-[center_40%]"
            />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1F8A4C]">International Education</p>
            <h2 className="mt-3 font-display text-[1.85rem] font-bold leading-[1.15] tracking-tight text-[#1B3A6B] sm:text-[2.15rem]">
              A Global Perspective.
              <span className="mt-1 block">A Brighter Tomorrow.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#5C6B7C] sm:text-[15px]">
              Studying abroad is one of many ways we help students access life-changing educational opportunities. We provide information, guidance and support for international study options as part of our broader commitment to educational access for all.
            </p>
          </div>

          <ul className="space-y-6">
            {highlights.map((item) => (
              <li key={item.title} className="flex gap-3.5">
                <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.wrap}`}>
                  <item.Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-sans text-[15px] font-bold text-[#1B3A6B]">{item.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#5C6B7C]">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F7FBFE] py-12 sm:py-14">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 xl:px-16">
          <div className="max-w-sm shrink-0">
            <h2 className="font-display text-[2rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[2.15rem]">
              Program Outcomes
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#5C6B7C] sm:text-[15px]">
              Our programs create real change in the lives of students, youth and communities.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {outcomes.map((item) => (
              <div key={item.label}>
                <item.Icon className={`h-7 w-7 ${item.color}`} aria-hidden="true" />
                <p className="mt-2 font-sans text-[1.7rem] font-bold leading-none tracking-tight text-[#1B3A6B] sm:text-[1.9rem]">
                  {item.value}
                </p>
                <p className="mt-2 max-w-[150px] text-[13px] leading-snug text-[#6A7786]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
