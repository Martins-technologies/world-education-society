import { Link } from 'react-router-dom'
import { HiArrowRight, HiAcademicCap, HiBookOpen, HiEye, HiGlobeAlt, HiUserGroup, HiUsers } from 'react-icons/hi2'
import PageHero, { heroPrimaryButton, heroTextLink } from '../components/PageHero'

const photos = {
  hero: '/about-us/hero-students.jpg',
  story: '/extras/17_a_bright_modern_community_classroom_workshop_scen.webp',
  purpose: '/extras/06_focused_study_in_warm_daylight.webp',
  serve: '/extras/10_welcoming_community_learning_hub.webp',
}

const principles = [
  {
    title: 'Our Mission',
    text: 'To empower individuals and communities through education.',
    wrap: 'bg-[#FBF3E0] text-[#C9922A]',
    icon: HiUserGroup,
  },
  {
    title: 'Our Vision',
    text: 'A more equitable world where everyone has the opportunity to learn and grow.',
    wrap: 'bg-[#E7F1FB] text-[#1E4E8C]',
    icon: HiEye,
  },
  {
    title: 'Our Values',
    text: 'Inclusivity, collaboration, integrity and a commitment to lasting change.',
    wrap: 'bg-[#E7F4FB] text-[#1E4E8C]',
    icon: DiamondIcon,
  },
]

const milestones = [
  { year: '2018', text: 'Launched with a commitment to accessible education', dot: 'bg-[#2F6FE4]' },
  { year: '2019', text: 'Expanded community programs', dot: 'bg-[#2E9A4A]' },
  { year: '2020', text: 'Strengthened partnerships and outreach', dot: 'bg-[#E8A317]' },
  { year: '2022', text: 'Increased support for learners and communities', dot: 'bg-[#2F6FE4]' },
  { year: '2024', text: 'Broadened international education initiatives', dot: 'bg-[#2E9A4A]' },
  { year: '2025', text: 'Continuing to create greater opportunities for the future', dot: 'bg-[#148A9C]' },
]

const leaders = [
  {
    name: 'Priya Sharma',
    role: 'Executive Director',
    image: '/priya.webp',
    alt: 'Portrait of Priya Sharma',
  },
  {
    name: 'Ahmed Khan',
    role: 'Program Director',
    image: '/ahmed.webp',
    alt: 'Portrait of Ahmed Khan',
  },
  {
    name: 'Maria Lopez',
    role: 'Community Engagement Director',
    image: '/lopez.webp',
    alt: 'Portrait of Maria Lopez',
  },
  {
    name: 'Daniel Okafor',
    role: 'Partnerships Director',
    image: '/daniel.webp',
    alt: 'Portrait of Daniel Okafor',
  },
]

const audiences = [
  {
    title: 'Students',
    text: 'Children, youth and adults seeking educational growth.',
    icon: HiAcademicCap,
    wrap: 'bg-[#E7F1FB] text-[#1E4E8C]',
  },
  {
    title: 'Educators',
    text: 'Teachers and mentors building stronger learning environments.',
    icon: HiBookOpen,
    wrap: 'bg-[#E5F6EA] text-[#2E9A4A]',
  },
  {
    title: 'Families',
    text: 'Families looking for resources and support.',
    icon: HiUsers,
    wrap: 'bg-[#FBF3E0] text-[#C9922A]',
  },
  {
    title: 'Communities',
    text: 'Local and global communities facing barriers to education.',
    icon: HiUserGroup,
    wrap: 'bg-[#E7F1FB] text-[#1E4E8C]',
  },
  {
    title: 'International Learners',
    text: 'Students from around the world.',
    icon: HiGlobeAlt,
    wrap: 'bg-[#E6F6F6] text-[#148A9C]',
  },
]

function DiamondIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3.5 20 12 12 20.5 4 12 12 3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

function FilledAction({ to, children, className = '' }) {
  const classes = `inline-flex items-center gap-2 rounded-full bg-[#1E4E8C] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#183E72] ${className}`
  const inner = (
    <>
      <span>{children}</span>
      <HiArrowRight className="h-4 w-4" aria-hidden="true" />
    </>
  )
  if (to?.startsWith('#')) {
    return <a href={to} className={classes}>{inner}</a>
  }
  return <Link to={to} className={classes}>{inner}</Link>
}

function TextAction({ to, children }) {
  const classes = 'inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4E8C] transition-colors hover:text-[#163E70]'
  const inner = (
    <>
      <span>{children}</span>
      <HiArrowRight className="h-4 w-4" aria-hidden="true" />
    </>
  )
  if (to?.startsWith('#')) {
    return <a href={to} className={classes}>{inner}</a>
  }
  return <Link to={to} className={classes}>{inner}</Link>
}

export default function AboutUs() {
  return (
    <div className="bg-[#FBF9F4] text-[#1B3A6B]">
      <PageHero
        eyebrow="People. Education. Stronger Communities."
        title="About Us"
        description="We are a non-profit organization dedicated to creating educational opportunities for individuals and communities through guidance, support and partnerships."
        image={photos.hero}
        imageAlt="Students talking together outside a university building"
        imagePosition="60% 40%"
      >
        <a href="#our-story" className={heroPrimaryButton}>
          Get to Know Us
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <Link to="/our-impact" className={heroTextLink}>
          Our Impact
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>

      <section id="our-story" className="scroll-mt-24 bg-[#FBF9F4]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-14 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-16">
          <div className="lg:col-span-5">
            <div className="h-[340px] overflow-hidden rounded-[24px] bg-[#E7EEF2] sm:h-[420px]">
              <img
                src={photos.story}
                alt="Learners writing together in a community classroom, including a woman in a hijab"
                className="h-full w-full object-cover object-[center_30%]"
              />
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Our Story</p>
            <h2 className="mt-3 font-sans text-3xl font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-[2.15rem]">
              A Brighter Future, Together
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5C6B7C]">
              World Education Society was founded with a simple yet powerful belief — that education can change lives. What began as a small effort to support learners has grown into a wider movement, connecting people, resources and opportunities across communities.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5C6B7C]">
              Today, we continue to work with dedication, compassion and collaboration to help individuals build brighter futures through education.
            </p>
          </div>

          <div className="space-y-7 lg:col-span-3">
            {principles.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${item.wrap}`}>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-sans text-[15px] font-semibold text-[#1B3A6B]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5C6B7C]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-we-exist" className="relative scroll-mt-24 overflow-hidden bg-[#FBF9F4]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 top-1/2 h-64 w-36 -translate-y-1/2 bg-[#D6EAF8]"
          style={{ borderRadius: '0 72% 68% 0 / 0 48% 52% 0' }}
        />
        <div className="relative mx-auto grid max-w-[1200px] items-stretch gap-5 px-6 py-8 sm:px-8 lg:grid-cols-[1.35fr_0.7fr_0.95fr] lg:gap-6 lg:px-10 lg:py-10">
          <div className="flex flex-col justify-center rounded-[26px] bg-[#E4F0FA] px-7 py-8 sm:px-8 sm:py-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E8AA3]">Why We Exist</p>
            <h2 className="mt-3 font-sans text-[1.65rem] font-bold leading-[1.15] tracking-tight text-[#1B3A6B] lg:whitespace-nowrap lg:text-[1.7rem]">
              Education Creates Opportunity
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5C6B7C]">
              We exist to remove barriers to education and help individuals develop the skills, confidence and knowledge they need to create better futures for themselves, their families and their communities.
            </p>
            <div className="mt-6">
              <FilledAction to="#our-story">Learn More About Our Purpose</FilledAction>
            </div>
          </div>

          <div className="min-h-[240px] overflow-hidden rounded-[22px] bg-[#E7EEF2] sm:min-h-[280px] lg:min-h-full">
            <img
              src={photos.purpose}
              alt="A student writing at a desk, with a globe on the shelf behind her"
              className="h-full w-full object-cover object-[center_18%]"
            />
          </div>

          <div className="flex flex-col justify-center lg:py-2 lg:pl-2">
            <h2 className="font-sans text-[1.65rem] font-bold leading-[1.15] tracking-tight text-[#1B3A6B] sm:text-[1.85rem]">
              International Education
              <br />
              is One Part of Our Work
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5C6B7C]">
              Through international education, we build global understanding, cultural exchange and lifelong opportunities that benefit individuals and strengthen communities here and abroad.
            </p>
            <div className="mt-5">
              <TextAction to="/programs#international">Explore International Education</TextAction>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#FBF8F3]">
        <img
          src="/about-us/quote-banner.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[left_18%]"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[62%] bg-gradient-to-r from-transparent via-[#FBF8F3]/75 to-[#FBF8F3] sm:w-[55%]" />
        <div className="relative mx-auto flex min-h-[220px] max-w-[1200px] items-center justify-end px-6 py-8 sm:min-h-[250px] sm:px-8 lg:min-h-[300px] lg:px-10">
          <div className="flex max-w-[520px] items-start gap-2 sm:gap-3">
            <span className="mt-0.5 font-serif text-4xl leading-none text-[#E2A322] sm:text-5xl" aria-hidden="true">
              “
            </span>
            <div>
              <p className="font-sans text-[1.45rem] font-bold leading-[1.25] tracking-tight text-[#1B3A6B] sm:text-[1.75rem] lg:text-[1.95rem]">
                Education is not a privilege.
                <br />
                It’s a possibility for everyone.
              </p>
              <span className="mt-4 block h-[3px] w-14 rounded-full bg-[#E2A322]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FBF9F4]">
        <div className="mx-auto max-w-[1200px] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Our Journey</p>
          <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-[#1B3A6B] sm:text-[2.15rem]">Key Milestones</h2>

          <ol className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            <span className="absolute left-0 right-0 top-[5px] hidden h-px bg-[#E3E8EE] lg:block" aria-hidden="true" />
            {milestones.map((item) => (
              <li key={item.year} className="relative">
                <span className={`relative z-10 block h-3 w-3 rounded-full ring-4 ring-[#FBF9F4] ${item.dot}`} />
                <p className="mt-4 font-sans text-lg font-bold text-[#1B3A6B]">{item.year}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#5C6B7C]">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#FBF9F4]">
        <div className="mx-auto max-w-[1200px] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Our Leadership</p>
              <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-[#1B3A6B] sm:text-[2.15rem]">
                Meet Our Leadership Team
              </h2>
            </div>
            <TextAction to="/governance">Our Governance</TextAction>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
            {leaders.map((person) => (
              <li key={person.name} className="flex flex-col items-center text-center">
                <div className="h-36 w-36 overflow-hidden rounded-full bg-[#E7EEF2] sm:h-40 sm:w-40">
                  <img
                    src={person.image}
                    alt={person.alt}
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                </div>
                <h3 className="mt-4 font-sans text-[15px] font-bold leading-tight text-[#1B3A6B]">{person.name}</h3>
                <p className="mt-1 text-[13px] leading-snug text-[#8A97A6]">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="who-we-serve" className="scroll-mt-24 bg-[#FBF9F4]">
        <div className="mx-auto max-w-[1200px] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Who We Serve</p>
              <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-[#1B3A6B] sm:text-[2.15rem]">
                Creating Opportunities for Diverse Communities
              </h2>
            </div>
            <TextAction to="#who-we-serve">Learn More About Who We Serve</TextAction>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((item) => (
              <li key={item.title} className="rounded-2xl border border-[#E6EEF4] bg-white px-5 py-6">
                <span className={`flex h-11 w-11 items-center justify-center rounded-full ${item.wrap}`}>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-sans text-[15px] font-semibold text-[#1B3A6B]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5C6B7C]">{item.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 h-[280px] overflow-hidden rounded-[24px] bg-[#E7EEF2] sm:h-[380px]">
            <img
              src={photos.serve}
              alt="Students and staff in a bright community learning hub"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8F4]">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-10 lg:py-16">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Our Partnerships</p>
            <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-[#1B3A6B] sm:text-[2.15rem]">Stronger Together</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#5C6B7C]">
              We collaborate with educational institutions, community organizations and like-minded partners to expand opportunities and create meaningful change.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 text-[#8A97A6]">
              <p className="font-serif text-2xl tracking-tight">Georgian</p>
              <p className="font-sans text-sm font-bold tracking-[0.14em]">
                YORK
                <span className="mt-0.5 block text-[10px] font-semibold tracking-[0.22em]">UNIVERSITY</span>
              </p>
              <p className="font-sans text-2xl font-semibold tracking-tight">Seneca</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E7F1FB] text-[#1E4E8C]">
                <HiUserGroup className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-sans text-lg font-semibold text-[#1B3A6B]">Partner With Us</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5C6B7C]">
                  Together, we can create more opportunities and stronger communities.
                </p>
                <div className="mt-4">
                  <FilledAction to="/get-involved">Explore Partnerships</FilledAction>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
