import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import PageHero, { heroPrimaryButton } from '../components/PageHero'

const photos = {
  hero: '/our-impact/impact-hero.png',
  girl: '/our-impact/impact-outcome-girl.png',
  laptop: '/our-impact/impact-outcome-laptop.png',
  group: '/our-impact/impact-outcome-group.png',
  grad: '/our-impact/impact-outcome-grad.png',
  daniel: '/our-impact/impact-daniel.png',
  aisha: '/our-impact/impact-aisha.png',
  marcus: '/our-impact/impact-marcus.png',
  tutor: '/our-impact/impact-action-tutor.png',
  library: '/our-impact/impact-action-library.png',
  mentor: '/our-impact/impact-action-mentor.png',
  workshop: '/our-impact/impact-action-workshop.png',
}

const glance = [
  {
    value: '12,500+',
    title: 'Youth Supported',
    text: 'Young people gaining access to education and opportunities.',
    color: '#2E9A4A',
    icon: 'people',
  },
  {
    value: '45,000+',
    title: 'Educational Resources Distributed',
    text: 'Books, digital tools and learning materials shared worldwide.',
    color: '#1E4E8C',
    icon: 'book',
  },
  {
    value: '320+',
    title: 'Workshops & Programs',
    text: 'Interactive learning experiences delivered in communities.',
    color: '#E0A11B',
    icon: 'laptop',
  },
  {
    value: '1,800+',
    title: 'Internship Pathways',
    text: 'Connections to real-world experience and career growth.',
    color: '#1E4E8C',
    icon: 'briefcase',
  },
  {
    value: '25,000+',
    title: 'Volunteer Hours',
    text: 'Individuals giving their time and skills to create change.',
    color: '#2E9A4A',
    icon: 'heart',
  },
  {
    value: '110+',
    title: 'Community Campaigns',
    text: 'Awareness and advocacy initiatives for stronger, more inclusive communities.',
    color: '#E0A11B',
    icon: 'megaphone',
  },
]

const highlights = [
  {
    value: '28%',
    text: 'Increase in youth supported from 2023',
    color: '#2E9A4A',
    icon: 'chart',
  },
  {
    value: '60+',
    text: 'New community partners joined',
    color: '#1E4E8C',
    icon: 'people',
  },
  {
    value: '12',
    text: 'New educational resources developed',
    color: '#E0A11B',
    icon: 'document',
  },
  {
    value: '8',
    text: 'New regions reached globally',
    color: '#1E4E8C',
    icon: 'globe',
  },
]

const outcomes = [
  {
    image: photos.girl,
    alt: 'A young student smiling outdoors while holding books',
    value: '89%',
    text: 'of program participants report increased confidence in their future',
  },
  {
    image: photos.laptop,
    alt: 'A young man with glasses working on a laptop',
    value: '76%',
    text: 'developed new skills relevant to education or career goals',
  },
  {
    image: photos.group,
    alt: 'Three young adults collaborating around a laptop',
    value: '82%',
    text: 'gained access to new education or career opportunities',
  },
  {
    image: photos.grad,
    alt: 'A graduate in a cap and gown smiling outdoors',
    value: '93%',
    text: 'would recommend our programs to other young people',
  },
]

const stories = [
  {
    image: photos.aisha,
    alt: 'Portrait of Aisha M.',
    quote:
      'With the support of World Education Society, I was able to access language training, improve my skills and secure an internship. It changed the direction of my future.',
    name: 'Aisha M.',
    role: 'Program Participant',
    place: 'Toronto, ON',
  },
  {
    image: photos.marcus,
    alt: 'Portrait of Marcus T.',
    quote:
      'I gained practical skills, a supportive mentor and the confidence to pursue my career goals. WES gave me the opportunity to believe in myself.',
    name: 'Marcus T.',
    role: 'Youth Program Participant',
    place: 'Calgary, AB',
  },
  {
    image: photos.girl,
    alt: 'Portrait of Sofia L.',
    quote:
      'Through WES, I found a community that believes in young people. The workshops helped me discover my passion and gave me the tools to succeed.',
    name: 'Sofia L.',
    role: 'Workshop Participant',
    place: 'Vancouver, BC',
  },
]

const journey = [
  {
    title: 'Before',
    color: '#1E4E8C',
    icon: 'sit',
    points: [
      'Limited access to resources',
      'Financial constraints',
      'Lack of information',
      'Fewer opportunities',
    ],
  },
  {
    title: 'With Our Support',
    color: '#1E4E8C',
    icon: 'run',
    points: [
      'Access to education and resources',
      'Skills development and mentoring',
      'Supportive community',
      'Pathways to internships and careers',
    ],
  },
  {
    title: 'Brighter Futures',
    color: '#2E9A4A',
    icon: 'celebrate',
    points: [
      'Greater confidence',
      'Increased opportunities',
      'Stronger communities',
      'Long-term success',
    ],
  },
]

const actionPhotos = [
  {
    image: photos.tutor,
    alt: 'A mentor helping a young student with schoolwork in a library',
  },
  {
    image: photos.library,
    alt: 'A mentor in a hijab standing with two students holding books',
  },
  {
    image: photos.mentor,
    alt: 'A mentor in a turban reviewing a laptop with a student',
  },
  {
    image: photos.workshop,
    alt: 'A facilitator guiding two students through a hands-on workshop',
  },
]

const pins = [
  { left: '15%', top: '36%', color: '#1E4E8C' },
  { left: '22%', top: '40%', color: '#2E9A4A' },
  { left: '27%', top: '34%', color: '#E0A11B' },
  { left: '21%', top: '48%', color: '#1E4E8C' },
  { left: '28%', top: '60%', color: '#2E9A4A' },
  { left: '31%', top: '74%', color: '#1E4E8C' },
  { left: '48%', top: '32%', color: '#1E4E8C' },
  { left: '53%', top: '36%', color: '#2E9A4A' },
  { left: '51%', top: '50%', color: '#E0A11B' },
  { left: '55%', top: '60%', color: '#2E9A4A' },
  { left: '52%', top: '70%', color: '#1E4E8C' },
  { left: '68%', top: '36%', color: '#E0A11B' },
  { left: '76%', top: '40%', color: '#2E9A4A' },
  { left: '72%', top: '48%', color: '#1E4E8C' },
  { left: '84%', top: '70%', color: '#1E4E8C' },
]

function Icon({ name, className = 'h-7 w-7' }) {
  const common = { viewBox: '0 0 24 24', fill: 'none', className, 'aria-hidden': true }
  if (name === 'people') {
    return (
      <svg {...common}>
        <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="8.5" r="1.8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.2 17.5c.6-2.4 2.2-3.6 3.8-3.6s3.2 1.2 3.8 3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M13.2 14.2c1.3-.4 2.6-.2 3.5.8.8.9 1.2 2 1.4 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'book') {
    return (
      <svg {...common}>
        <path d="M5 5.5h6.2c1.2 0 2.3.7 2.3 2.1V19c-.7-.6-1.6-.9-2.6-.9H5V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M19 5.5h-6.2C11.6 5.5 10.5 6.2 10.5 7.6V19c.7-.6 1.6-.9 2.6-.9H19V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'laptop') {
    return (
      <svg {...common}>
        <rect x="6.5" y="6" width="11" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 17.5h15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="4.2" r="1.3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10.2 6.2c.4-.5 1-.8 1.8-.8s1.4.3 1.8.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'briefcase') {
    return (
      <svg {...common}>
        <rect x="3.5" y="8" width="17" height="11" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 8V6.6A1.6 1.6 0 0 1 10.6 5h2.8A1.6 1.6 0 0 1 15 6.6V8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 13h17" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  if (name === 'heart') {
    return (
      <svg {...common}>
        <path d="M12 18.5s-5.6-3.4-7.2-6.2C3.4 10 4.2 7.4 6.6 6.8c1.4-.3 2.7.2 3.4 1.3.7-1.1 2-1.6 3.4-1.3 2.4.6 3.2 3.2 1.8 5.5-1.6 2.8-7.2 6.2-7.2 6.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M5 19.2c1.2.6 2.6.5 3.6-.2M15.2 19c1 .7 2.4.8 3.6.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'megaphone') {
    return (
      <svg {...common}>
        <path d="M5 10.5v3.2c0 .6.4 1.1 1 1.2l2.2.4 1.2 3.2c.2.6.9.8 1.4.5l1.4-1-1.5-3.8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8.2 9.2 18 6.2v11.6l-9.8-3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M18.5 9.2h1.2M18.5 12h1.8M18.5 14.8h1.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'chart') {
    return (
      <svg {...common}>
        <path d="M4 17.5h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6.5 14.5v-3M11 14.5V8.5M15.5 14.5V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 11.5 10.2 8.2 14.2 10.2 19 6.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'document') {
    return (
      <svg {...common}>
        <path d="M7 4.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5.5 19V6A1.5 1.5 0 0 1 7 4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M14 4.8V8.5h3.6M8.2 12.2h7.2M8.2 15.4h5.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'globe') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="7.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 4.8c2 2.1 3 4.5 3 7.2s-1 5.1-3 7.2c-2-2.1-3-4.5-3-7.2s1-5.1 3-7.2Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5.2 12h13.6M6.4 8.4h11.2M6.4 15.6h11.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'sit') {
    return (
      <svg {...common} viewBox="0 0 48 48">
        <circle cx="18" cy="10" r="5" fill="currentColor" />
        <path d="M16 17c-6 1.2-9 5-9 10v3h8l2 10h6l-2-8 8 2 3-5-8-3 1-9h-9Z" fill="currentColor" />
      </svg>
    )
  }
  if (name === 'run') {
    return (
      <svg {...common} viewBox="0 0 48 48">
        <circle cx="30" cy="8" r="4.5" fill="currentColor" />
        <path d="M22 18 16 22l-6 1 2 4 8-2 4 6-7 3 2 4 10-4 4 8h6l-6-12 6-3-3-4-8 2-2-7Z" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg {...common} viewBox="0 0 48 48">
      <circle cx="24" cy="9" r="5" fill="currentColor" />
      <path d="M24 16c-3 4-10 6-14 6l2 6 8-2v14h8V26l8 2 2-6c-4 0-11-2-14-6Z" fill="currentColor" />
    </svg>
  )
}

function ArrowLink({ to, children }) {
  const classes = 'inline-flex shrink-0 items-center gap-1.5 text-[12.5px] font-semibold text-[#1E5AAF] transition-colors hover:text-[#163E70]'
  const inner = (
    <>
      <span>{children}</span>
      <HiArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
    </>
  )
  if (to.startsWith('#')) {
    return <a href={to} className={classes}>{inner}</a>
  }
  return <Link to={to} className={classes}>{inner}</Link>
}

function SectionHeading({ title, action, to }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 lg:flex-nowrap">
      <h2 className="font-sans text-[1.35rem] font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-[1.45rem] lg:whitespace-nowrap lg:text-[1.4rem]">
        {title}
      </h2>
      <ArrowLink to={to}>{action}</ArrowLink>
    </div>
  )
}

function WorldMap() {
  return (
    <div className="relative">
      <img src="/our-impact/impact-world-map.png" alt="" className="h-auto w-full" />
      {pins.map((pin) => (
        <svg
          key={`${pin.left}-${pin.top}`}
          viewBox="0 0 24 32"
          className="absolute h-5 w-4 -translate-x-1/2 -translate-y-full drop-shadow-sm"
          style={{ left: pin.left, top: pin.top }}
          aria-hidden="true"
        >
          <path d="M12 31c6-8 10-13 10-19a10 10 0 1 0-20 0c0 6 4 11 10 19Z" fill={pin.color} />
          <circle cx="12" cy="12" r="3.4" fill="#fff" />
        </svg>
      ))}
    </div>
  )
}

function PartnerRow() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:justify-between lg:gap-x-6">
      <div className="flex items-center gap-2 text-[#1F8A4C]">
        <svg viewBox="0 0 28 28" className="h-8 w-8" aria-hidden="true">
          <path d="M6 16c2-8 8-12 14-10-4 2-6 6-5 12 4-2 8-1 10 3-6 1-12 0-19-5Z" fill="#2E9A4A" />
          <path d="M8 20c4 3 10 3 14 0" stroke="#2E9A4A" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
        <span className="font-sans text-[22px] font-semibold tracking-tight">Georgian</span>
      </div>

      <div className="flex items-center gap-2 text-[#C8102E]">
        <div className="leading-none">
          <p className="font-sans text-[18px] font-extrabold tracking-[0.12em]">YORK</p>
          <p className="font-sans text-[8px] font-semibold tracking-[0.18em]">UNIVERSITY</p>
        </div>
        <span className="inline-flex h-8 w-8 items-center justify-center bg-[#C8102E] font-sans text-lg font-bold text-white">U</span>
      </div>

      <p className="font-sans text-[28px] font-bold tracking-tight text-[#C8102E]">Seneca</p>

      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 36 36" className="h-9 w-9" aria-hidden="true">
          <rect width="36" height="36" rx="4" fill="#005DAA" />
          <path d="M8 24c2-8 6-12 10-12 2 4 1 8-1 11 3-1 6 0 8 3-5 1-11 1-17-2Z" fill="#F5C518" />
          <text x="7" y="32" fill="#fff" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="700">RBC</text>
        </svg>
      </div>

      <div className="flex items-center gap-2">
        <span className="grid grid-cols-2 gap-0.5">
          <span className="h-3 w-3 bg-[#F25022]" />
          <span className="h-3 w-3 bg-[#7FBA00]" />
          <span className="h-3 w-3 bg-[#00A4EF]" />
          <span className="h-3 w-3 bg-[#FFB900]" />
        </span>
        <span className="font-sans text-[18px] font-semibold text-[#5E5E5E]">Microsoft</span>
      </div>

      <div className="flex items-center gap-2">
        <svg viewBox="0 0 36 36" className="h-9 w-9" aria-hidden="true">
          <circle cx="18" cy="18" r="16" fill="#E11D2E" />
          <path d="M18 26c-5-3-8-6-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 4-3 7-8 10Z" fill="#fff" />
        </svg>
        <div className="leading-tight text-[#E11D2E]">
          <p className="font-sans text-[13px] font-extrabold uppercase tracking-wide">United Way</p>
          <p className="font-sans text-[10px] font-semibold">Greater Toronto</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <svg viewBox="0 0 36 36" className="h-9 w-9" aria-hidden="true">
          <path d="M28 8a16 16 0 1 0 2 18" fill="none" stroke="#2E9A4A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="30" cy="10" r="2.2" fill="#2E9A4A" />
          <circle cx="18" cy="28" r="2.2" fill="#2E9A4A" />
        </svg>
        <p className="max-w-[92px] font-sans text-[11px] font-semibold leading-tight text-[#1B3A6B]">
          Toronto District School Board
        </p>
      </div>
    </div>
  )
}

export default function OurImpact() {
  return (
    <div className="bg-[#FBF9F4] text-[#1B3A6B]">
      <PageHero
        eyebrow="Our Impact"
        title={
          <>
            Real People.
            <br />
            Brighter Futures.
            <br />
            <span className="text-[#2E9A4A]">Measurable Change.</span>
          </>
        }
        description="At World Education Society, we measure our impact by the access we create, the resources we share, the skills we develop, and the opportunities we unlock for youth and communities around the world."
        image={photos.hero}
        imageAlt="Students smiling together outdoors"
        imageLayout="full"
        imagePosition="68% 42%"
      >
        <Link to="/resources" className={heroPrimaryButton}>
          Read Our Annual Report
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="bg-white">
        <div className="mx-auto max-w-[1380px] px-6 py-12 sm:px-8 lg:px-12 xl:px-16 lg:py-14">
          <SectionHeading title="Our Impact at a Glance" action="All Impact Metrics" to="/resources" />
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 xl:grid-cols-6">
            {glance.map((item, index) => (
              <div
                key={item.title}
                className={`px-2 text-center ${index > 0 ? 'xl:border-l xl:border-[#E6EEF5]' : ''}`}
              >
                <span className="inline-flex text-current" style={{ color: item.color }}>
                  <Icon name={item.icon} className="mx-auto h-8 w-8" />
                </span>
                <p className="mt-3 font-sans text-[1.55rem] font-bold leading-none tracking-tight text-[#1B3A6B]">{item.value}</p>
                <p className="mt-2 text-[13px] font-semibold leading-snug text-[#1B3A6B]">{item.title}</p>
                <p className="mx-auto mt-1.5 max-w-[150px] text-[12px] leading-snug text-[#7B8B9A]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FBF9F4]">
        <div className="mx-auto grid max-w-[1380px] gap-10 px-6 py-12 sm:px-8 lg:grid-cols-12 lg:px-12 xl:px-16 lg:py-14">
          <div className="lg:col-span-5">
            <SectionHeading title="2024 Annual Highlights" action="View Full Annual Report" to="/resources" />
            <p className="mt-3 text-[14px] leading-relaxed text-[#5C6B7C]">
              Together, we made significant progress in expanding educational opportunities and building stronger, more inclusive communities.
            </p>
            <div className="mt-6 rounded-[28px] bg-[#F3F8FC] px-3 py-8 sm:px-5">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-4">
                {highlights.map((item) => (
                  <div key={item.text} className="px-1 text-center">
                    <span style={{ color: item.color }}>
                      <Icon name={item.icon} className="mx-auto h-7 w-7" />
                    </span>
                    <p className="mt-3 font-sans text-[1.7rem] font-bold leading-none text-[#1B3A6B]">{item.value}</p>
                    <p className="mx-auto mt-2 max-w-[120px] text-[12px] leading-snug text-[#6A7A8A]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading title="Program Outcomes" action="View All Program Outcomes" to="/programs" />
            <p className="mt-3 text-[14px] leading-relaxed text-[#5C6B7C]">
              Our programs create real, measurable change in the lives of young people.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {outcomes.map((item) => (
                <article key={item.value}>
                  <div className="h-[132px] overflow-hidden rounded-2xl bg-[#E7EEF2] sm:h-[148px]">
                    <img src={item.image} alt={item.alt} className="h-full w-full object-cover object-[center_18%]" />
                  </div>
                  <p className="mt-3 font-sans text-[1.45rem] font-bold leading-none text-[#1B3A6B]">{item.value}</p>
                  <p className="mt-2 text-[12px] leading-snug text-[#6A7A8A]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F4F9FC]">
        <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#E3F2FB]" />
        <div className="relative mx-auto grid max-w-[1380px] gap-10 px-6 py-12 sm:px-8 lg:grid-cols-12 lg:px-12 xl:px-16 lg:py-14">
          <div id="community-reach" className="scroll-mt-24 lg:col-span-5">
            <SectionHeading title="Our Community Reach" action="View All Regions" to="#community-reach" />
            <p className="mt-3 text-[14px] leading-relaxed text-[#5C6B7C]">
              From local neighborhoods to global communities.
            </p>
            <div className="mt-4 grid items-center gap-4 sm:grid-cols-[1fr_150px]">
              <div>
                <WorldMap />
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-[#5C6B7C]">
                  <li className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1E4E8C]" />
                    Current Reach
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2E9A4A]" />
                    Expanding in 2025
                  </li>
                </ul>
              </div>
              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <Icon name="globe" className="h-7 w-7 shrink-0 text-[#1E4E8C]" />
                  <p>
                    <span className="block font-sans text-lg font-bold leading-none text-[#1B3A6B]">15+</span>
                    <span className="mt-1 block text-[12px] text-[#6A7A8A]">Countries Reached</span>
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="people" className="h-7 w-7 shrink-0 text-[#1E4E8C]" />
                  <p>
                    <span className="block font-sans text-lg font-bold leading-none text-[#1B3A6B]">250+</span>
                    <span className="mt-1 block text-[12px] text-[#6A7A8A]">Partner Communities</span>
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 text-[#1E4E8C]" fill="none" aria-hidden="true">
                    <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  <p>
                    <span className="block font-sans text-lg font-bold leading-none text-[#1B3A6B]">6</span>
                    <span className="mt-1 block text-[12px] text-[#6A7A8A]">Regional Hubs</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div id="impact-stories" className="scroll-mt-24 lg:col-span-7">
            <SectionHeading title="Impact Stories" action="View More Stories" to="#impact-stories" />
            <p className="mt-3 text-[14px] leading-relaxed text-[#5C6B7C]">
              Real stories from the young people and communities we serve.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {stories.map((story) => (
                <article key={story.name} className="flex gap-3 rounded-2xl border border-[#E4EEF6] bg-white p-3 shadow-[0_10px_30px_-24px_rgba(27,58,107,0.8)]">
                  <img
                    src={story.image}
                    alt={story.alt}
                    className="h-[92px] w-[72px] shrink-0 rounded-xl object-cover object-[center_18%]"
                  />
                  <div className="min-w-0">
                    <p className="text-[11.5px] leading-snug text-[#4E6072]">“{story.quote}”</p>
                    <p className="mt-2 text-[13px] font-bold text-[#1B3A6B]">{story.name}</p>
                    <p className="text-[11px] text-[#7B8B9A]">{story.role}</p>
                    <p className="text-[11px] text-[#7B8B9A]">{story.place}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1380px] px-6 py-12 sm:px-8 lg:px-12 xl:px-16 lg:py-16">
          <h2 className="font-sans text-[1.7rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[2rem]">
            A Journey From Barriers to Opportunity
          </h2>
          <p className="mt-2 text-[15px] text-[#5C6B7C]">
            Our support helps remove barriers and creates real pathways to brighter futures.
          </p>
          <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_minmax(210px,0.8fr)] lg:gap-3">
            {journey.map((step, index) => (
              <div key={step.title} className="contents">
                <article className="flex gap-4 rounded-2xl border border-[#E3EEF6] bg-white px-4 py-5 shadow-[0_10px_24px_-22px_rgba(27,58,107,0.9)]">
                  <span style={{ color: step.color }} className="shrink-0">
                    <Icon name={step.icon} className="h-12 w-12" />
                  </span>
                  <div>
                    <h3 className="font-sans text-[15px] font-bold text-[#1B3A6B]">{step.title}</h3>
                    <ul className="mt-2 space-y-1">
                      {step.points.map((point) => (
                        <li key={point} className="flex gap-2 text-[13px] leading-snug text-[#4E6072]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: step.color }} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
                {index < journey.length - 1 && (
                  <div className="flex items-center justify-center text-[#1E5AAF] lg:px-1">
                    <HiArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
            <blockquote className="flex items-center rounded-2xl bg-[#F3F8FC] px-5 py-6">
              <p className="font-display text-[1.35rem] font-semibold italic leading-snug text-[#1B3A6B] sm:text-[1.5rem]">
                “Education turns barriers into possibilities.”
                <span className="mt-3 block font-sans text-[13px] font-semibold not-italic text-[#5C6B7C]">— WES Participant</span>
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="impact-action" className="scroll-mt-24 bg-[#F4F9FC]">
        <div className="mx-auto max-w-[1380px] px-6 py-12 sm:px-8 lg:px-12 xl:px-16 lg:py-14">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-sans text-[1.7rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[1.85rem]">Impact in Action</h2>
              <p className="mt-1 text-[14px] text-[#5C6B7C]">Moments from our programs, workshops and community initiatives.</p>
            </div>
            <ArrowLink to="#impact-action">View More Photos</ArrowLink>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {actionPhotos.map((photo) => (
              <div key={photo.alt} className="h-[168px] overflow-hidden rounded-2xl bg-[#E7EEF2] sm:h-[180px]">
                <img src={photo.image} alt={photo.alt} className="h-full w-full object-cover object-[center_22%]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1380px] px-6 py-12 sm:px-8 lg:px-12 xl:px-16 lg:py-14">
          <h2 className="font-sans text-[1.7rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[1.85rem]">
            Our Partner Organizations
          </h2>
          <p className="mt-2 max-w-3xl text-[15px] text-[#5C6B7C]">
            We collaborate with schools, community groups, businesses and government partners to expand our impact.
          </p>
          <PartnerRow />
        </div>
      </section>
    </div>
  )
}
