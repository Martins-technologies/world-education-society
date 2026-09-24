import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HiArrowRight,
  HiChevronRight,
  HiOutlineAcademicCap,
  HiOutlineArrowDownTray,
  HiOutlineBookOpen,
  HiOutlineBriefcase,
  HiOutlineBuildingLibrary,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineHeart,
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
  HiOutlineMagnifyingGlass,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineQuestionMarkCircle,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from 'react-icons/hi2'
import PageHero, { pageContainer } from '../components/PageHero'

const topics = [
  'Scholarships',
  'Post-Secondary',
  'Resume Help',
  'Financial Aid',
  'Study Tips',
  'Transportation',
  'FAQs',
]

const categories = [
  { title: 'Education Planning Guides', Icon: HiOutlineBookOpen },
  { title: 'Scholarships & Funding Information', Icon: HiOutlineAcademicCap },
  { title: 'Student Support Resources', Icon: HiOutlineUserGroup },
  { title: 'Post-Secondary Readiness', Icon: HiOutlineChartBar },
  { title: 'Career & Resume Tools', Icon: HiOutlineBriefcase },
  { title: 'Workshop Materials', Icon: HiOutlineDocumentText },
  { title: 'Community Education Toolkits', Icon: HiOutlineUsers },
  { title: 'Vernacular / Multilingual Learning Resources', Icon: HiOutlineGlobeAlt },
  { title: 'Library & Study Access Support', Icon: HiOutlineBuildingLibrary },
  { title: 'Transportation Support Information', Icon: BusIcon },
  { title: 'FAQs', Icon: HiOutlineQuestionMarkCircle },
]

const filters = ['All Resources', 'Guides', 'Articles', 'Tools & Templates', 'Videos', 'Infographics']

const latest = [
  {
    group: 'guide',
    kind: 'GUIDE',
    kindClass: 'text-[#2E9A4A]',
    title: 'How to Apply for Scholarships',
    description: 'Step-by-step guidance on finding and applying for scholarships.',
    image: '/resourcesupdated/03_how_to_apply_for_scholarships.webp',
    alt: 'Students reviewing scholarship papers beside a laptop',
    position: 'center 38%',
    meta: [
      { icon: 'pdf', label: 'PDF' },
      { label: '1.8 MB' },
    ],
    action: 'Download',
  },
  {
    group: 'article',
    kind: 'ARTICLE',
    kindClass: 'text-[#1E4E8C]',
    title: '10 Study Tips for Academic Success',
    description: 'Practical strategies to help you stay focused and succeed in school.',
    image: '/resourcesupdated/04_10_study_tips_academic_success.webp',
    alt: 'A student writing notes on campus steps',
    position: 'center 36%',
    meta: [{ icon: 'date', label: 'Oct 8, 2025' }],
    action: 'Read More',
  },
  {
    group: 'template',
    kind: 'TEMPLATE',
    kindClass: 'text-[#1A8A7A]',
    title: 'Resume Template for Students',
    description: 'Customizable resume template designed for youth and entry-level roles.',
    image: '/programsupdated/07_Career_and_Skills_Development.webp',
    alt: 'Students working together at a workshop table',
    position: 'center 30%',
    meta: [
      { icon: 'pdf', label: 'DOCX' },
      { label: '320 KB' },
    ],
    action: 'Download',
  },
  {
    group: 'video',
    kind: 'VIDEO',
    kindClass: 'text-[#6B4C9A]',
    title: 'Exploring Post-Secondary Pathways',
    description: 'Learn about college, university and skilled trades options in Canada.',
    image: '/programsupdated/04_Study_Opportunities.webp',
    alt: 'A student and mentor reviewing post-secondary options',
    position: 'center 28%',
    meta: [{ icon: 'time', label: '8 min' }],
    action: 'Watch Now',
  },
  {
    group: 'guide',
    kind: 'GUIDE',
    kindClass: 'text-[#2E9A4A]',
    title: 'Transportation Support Guide',
    description: 'Information on transit assistance programs and eligibility.',
    image: '/resourcesupdated/05_transportation_support_guide.webp',
    alt: 'A student walking beside a city bus',
    position: '40% 18%',
    meta: [
      { icon: 'pdf', label: 'PDF' },
      { label: '1.1 MB' },
    ],
    action: 'Download',
  },
  {
    group: 'article',
    kind: 'ARTICLE',
    kindClass: 'text-[#1E4E8C]',
    title: 'Building a Brighter Future Together',
    description: 'How community support creates more opportunities for youth.',
    image: '/programsupdated/06_Community_Education.webp',
    alt: 'A community learning group gathered around a table',
    position: 'center 30%',
    meta: [{ icon: 'date', label: 'Oct 1, 2025' }],
    action: 'Read More',
  },
]

const popular = [
  { title: 'Financial Aid and Grants Overview', Icon: HiOutlineDocumentText },
  { title: 'Choosing the Right Program for You', Icon: HiOutlineBuildingLibrary },
  { title: 'Mental Health and Student Wellness Resources', Icon: HiOutlineHeart },
  { title: 'Community Learning Opportunities', Icon: HiOutlineUsers },
  { title: 'Frequently Asked Questions (FAQs)', Icon: HiOutlineQuestionMarkCircle },
]

function BusIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="12.5" rx="2" />
      <path d="M3.5 11.5h17M7 16.5v2.2M17 16.5v2.2" strokeLinecap="round" />
      <circle cx="7.5" cy="13.6" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="13.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function MetaIcon({ type }) {
  if (type === 'pdf') return <HiOutlineDocumentText className="h-3.5 w-3.5" aria-hidden="true" />
  if (type === 'date') return <HiOutlineCalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
  if (type === 'time') return <HiOutlineClock className="h-3.5 w-3.5" aria-hidden="true" />
  return null
}

export default function Resources() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All Resources')
  const groupByFilter = {
    Guides: 'guide',
    Articles: 'article',
    'Tools & Templates': 'template',
    Videos: 'video',
    Infographics: 'infographic',
  }
  const visibleLatest = filter === 'All Resources' ? latest : latest.filter((item) => item.group === groupByFilter[filter])

  return (
    <div className="min-w-0 overflow-x-clip bg-white text-[#1B3A6B]">
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Resources
            <span className="mt-2 block text-[0.58em] font-semibold leading-[1.15] text-[#2E9A4A]">
              Knowledge Today.
              <span className="block">Brighter Tomorrows.</span>
            </span>
          </>
        }
        description="Find practical guidance, information and tools for students, youth, families and communities. Our resources are designed to help you navigate education pathways, access opportunities and overcome barriers."
        image="/resourcesupdated/01_resources_hero.webp"
        imageAlt="Students gathered around a laptop on a campus patio"
        imageLayout="full"
        imageFit="contain"
        imagePosition="center center"
      >
        <div className="relative z-20 w-full lg:w-[min(920px,68vw)] lg:translate-x-[20%] lg:translate-y-[10vh]">
          <form
            className="flex w-full items-center gap-2 rounded-full border border-[#D7E3EE] bg-white py-1.5 pl-4 pr-1.5 shadow-[0_10px_28px_-16px_rgba(27,58,107,0.45)]"
            onSubmit={(event) => event.preventDefault()}
          >
            <HiOutlineMagnifyingGlass className="h-5 w-5 shrink-0 text-[#8AA0B5]" aria-hidden="true" />
            <label htmlFor="resource-search" className="sr-only">
              Search resources
            </label>
            <input
              id="resource-search"
              size={1}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search resources (e.g. scholarships, resumes, study tips...)"
              className="w-full min-w-0 flex-1 bg-transparent py-2 text-[13px] text-[#1B3A6B] placeholder:text-[#8AA0B5] focus:outline-none sm:text-[14px]"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-[#1E6FBF] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#185fa6]"
            >
              Search
            </button>
          </form>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:flex-nowrap lg:justify-start">
            <span className="mr-1 whitespace-nowrap text-[13px] font-semibold text-[#1B3A6B]">Popular topics:</span>
            {topics.map((topic) => (
              <span
                key={topic}
                className="whitespace-nowrap rounded-full border border-[#D5E2EE] bg-white px-3 py-1 text-[12px] font-medium text-[#1B3A6B] shadow-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="bg-white py-14 sm:py-16">
        <div className={pageContainer}>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="max-w-full font-display text-[1.55rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[2.05rem]">
              Browse Resources by Category
            </h2>
            <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#1E6FBF]">
              View All Resources
              <HiArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-6">
            {categories.map(({ title, Icon }) => (
              <div
                key={title}
                className="flex min-h-[158px] flex-col items-center justify-center rounded-2xl border border-[#E4EDF5] bg-white px-3 py-7 text-center shadow-[0_10px_30px_-24px_rgba(27,58,107,0.55)] sm:px-4"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center text-[#1B3A6B]">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <p className="mt-3 text-[13.5px] font-semibold leading-snug text-[#1B3A6B]">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-6">
        <div className={pageContainer}>
          <div className="grid items-center gap-8 overflow-hidden rounded-[28px] bg-[#E7F3FB] px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:px-10 lg:py-8">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#1E6FBF]">Featured Resource</p>
              <h2 className="mt-3 max-w-[520px] font-display text-[1.7rem] font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-[2rem]">
                Post-Secondary Planning Guide&nbsp;2025
              </h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-[#4A6078]">
                A comprehensive guide to help students explore their options, understand application processes, and prepare for a successful transition to college, university or skilled trades.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#1B3A6B] px-4 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#152E56]"
                >
                  <HiOutlineArrowDownTray className="h-4 w-4" aria-hidden="true" />
                  Download Guide (PDF)
                </button>
                <span className="text-[13px] text-[#6B7C8D]">2.4 MB</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/resourcesupdated/02_post_secondary_planning_guide.webp"
                alt="A student writing notes beside a laptop in a library"
                className="h-[240px] w-full object-cover sm:h-[280px] lg:h-[300px]"
                style={{ objectPosition: '62% 40%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className={pageContainer}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[2.05rem]">
              Latest Resources
            </h2>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {filters.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setFilter(label)}
                  className={`pb-1 text-[14px] font-medium ${
                    filter === label
                      ? 'border-b-2 border-[#1E6FBF] font-semibold text-[#1B3A6B]'
                      : 'text-[#7A8B9A] hover:text-[#1B3A6B]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#1E6FBF]">
              View All Resources
              <HiArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleLatest.map((item) => (
              <article
                key={item.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E4EDF5] bg-white shadow-[0_14px_34px_-26px_rgba(27,58,107,0.6)]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-[190px] w-full object-cover sm:h-[210px]"
                  style={{ objectPosition: item.position }}
                />
                <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                  <p className={`text-[11px] font-bold uppercase tracking-[0.12em] ${item.kindClass}`}>{item.kind}</p>
                  <h3 className="mt-2 text-[17px] font-semibold leading-snug text-[#1B3A6B]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#5C6E80]">{item.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#7A8B9A]">
                    {item.meta.map((meta) => (
                      <span key={meta.label} className="inline-flex items-center gap-1.5">
                        <MetaIcon type={meta.icon} />
                        {meta.label}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="mt-5 inline-flex w-fit items-center rounded-lg border border-[#D5DEE8] px-4 py-2 text-[13px] font-semibold text-[#1B3A6B] transition-colors hover:bg-[#F4F8FC]"
                  >
                    {item.action}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 pt-2 sm:pb-20">
        <div className={`${pageContainer} grid items-start gap-10 lg:grid-cols-3 lg:gap-8`}>
          <div>
            <h2 className="font-display text-[1.65rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[1.85rem]">
              Popular Resources
            </h2>
            <ul className="mt-4">
              {popular.map(({ title, Icon }) => (
                <li key={title} className="flex items-center gap-3 border-b border-[#E6EEF4] py-3.5">
                  <Icon className="h-5 w-5 shrink-0 text-[#1E6FBF]" aria-hidden="true" />
                  <span className="flex-1 text-[14px] font-medium text-[#1B3A6B]">{title}</span>
                  <HiChevronRight className="h-4 w-4 shrink-0 text-[#8AA0B5]" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-[1.65rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[1.85rem]">
              Resource Spotlight
            </h2>
            <img
              src="/resourcesupdated/06_community_education_toolkit.webp"
              alt="A mentor helping two students around a laptop in a library"
              className="mt-4 h-[210px] w-full rounded-2xl object-cover"
              style={{ objectPosition: 'center 34%' }}
            />
            <h3 className="mt-4 text-[18px] font-semibold text-[#1B3A6B]">Community Education Toolkit</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[#5C6E80]">
              Resources for community organizations to support local learning initiatives and youth programs.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-[#1E6FBF]">
              Download Toolkit
              <HiArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>

          <div>
            <div className="rounded-[24px] bg-[#E7F3FB] px-6 py-7 sm:px-7 sm:py-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1E6FBF]">
                <HiOutlineUserGroup className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-[1.55rem] font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-[1.7rem]">
                Need personalized guidance?
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-[#4A6078]">
                Our team is here to help you find the right resources, answer your questions, and connect you with support services.
              </p>
              <Link
                to="/get-support"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#C5D7E8] bg-white px-5 py-2.5 text-[14px] font-semibold text-[#1B3A6B] transition-colors hover:bg-[#F7FBFE]"
              >
                Get Support
                <HiArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 px-1">
              <h3 className="text-[15px] font-semibold text-[#1B3A6B]">Other Ways to Get Help</h3>
              <ul className="mt-4 space-y-3 text-[14px] text-[#4A6078]">
                <li className="flex items-start gap-2.5">
                  <HiOutlinePhone className="mt-0.5 h-4 w-4 shrink-0 text-[#1E6FBF]" aria-hidden="true" />
                  <a href="tel:+15874384634" className="hover:text-[#1E4E8C]">
                    +1 587-438-4634
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <HiOutlineEnvelope className="mt-0.5 h-4 w-4 shrink-0 text-[#1E6FBF]" aria-hidden="true" />
                  <a href="mailto:info@worldeducationsociety.com" className="break-all hover:text-[#1E4E8C]">
                    info@worldeducationsociety.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <HiOutlineMapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1E6FBF]" aria-hidden="true" />
                  <address className="not-italic leading-relaxed">345, 3016, 5th Ave NE, Calgary, AB T2A 5L7</address>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
