import { Link } from 'react-router-dom'
import { HiArrowRight, HiAcademicCap, HiBookOpen, HiEye, HiGlobeAlt, HiHeart, HiUserGroup } from 'react-icons/hi2'
import PageHero, { heroOutlineButton, heroPrimaryButton } from '../components/PageHero'

const photos = {
  hero: '/aboutusupdated/wes_about_01_hero.webp',
  story: '/aboutusupdated/wes_about_02_our_story.webp',
  purpose: '/aboutusupdated/wes_about_03_why_we_exist.webp',
  quote: '/aboutusupdated/wes_about_04_graduation_quote.webp',
  serve: '/aboutusupdated/wes_about_09_partnerships.webp',
}

const principles = [
  {
    title: 'Our Mission',
    text: 'We advance education and empower youth by removing barriers and creating opportunities.',
    wrap: 'bg-[#FBF3E0] text-[#C9922A]',
    icon: HiUserGroup,
  },
  {
    title: 'Our Vision',
    text: 'A more inclusive world where every person has the opportunity to learn, contribute and thrive.',
    wrap: 'bg-[#E7F1FB] text-[#1E4E8C]',
    icon: HiEye,
  },
  {
    title: 'Our Values',
    text: 'Equity | Inclusion | Community Collaboration | Integrity | Opportunity',
    wrap: 'bg-[#E7F4FB] text-[#1E4E8C]',
    icon: DiamondIcon,
  },
]

const milestones = [
  { year: '2018', text: 'Founded in Calgary with a mission to expand educational opportunity.', dot: 'bg-[#2F6FE4]' },
  { year: '2019', text: 'Launched community education and student support programs.', dot: 'bg-[#2E9A4A]' },
  { year: '2020', text: 'Expanded partnerships with schools and community organizations.', dot: 'bg-[#E8A317]' },
  { year: '2022', text: 'Reached 10,000+ youth through our programs.', dot: 'bg-[#2F6FE4]' },
  { year: '2024', text: 'Launched new career development and internship pathways initiatives.', dot: 'bg-[#2E9A4A]' },
  { year: '2025', text: 'Continuing to grow a stronger, more inclusive future for young people.', dot: 'bg-[#148A9C]' },
]

const leaders = [
  {
    name: 'Sarah Chen',
    role: 'Board Chair',
    bio: 'Community leader with 15+ years in education and non-profit leadership.',
    image: '/aboutusupdated/wes_about_05_leadership_1.webp',
    alt: 'Portrait of Sarah Chen',
  },
  {
    name: 'David Kumar',
    role: 'Executive Director',
    bio: 'Passionate about youth empowerment and community partnerships.',
    image: '/aboutusupdated/wes_about_06_leadership_2.webp',
    alt: 'Portrait of David Kumar',
  },
  {
    name: 'Aisha Mohammed',
    role: 'Programs Director',
    bio: 'Expert in student support and community program development.',
    image: '/aboutusupdated/wes_about_07_leadership_3.webp',
    alt: 'Portrait of Aisha Mohammed',
  },
  {
    name: 'Michael Torres',
    role: 'Board Member',
    bio: 'Brings experience in education, finance and strategic planning.',
    image: '/aboutusupdated/wes_about_08_leadership_4.webp',
    alt: 'Portrait of Michael Torres',
  },
]

const audiences = [
  {
    title: 'Youth and Students',
    text: 'High school, post-secondary and lifelong learners.',
    icon: HiAcademicCap,
  },
  {
    title: 'Families',
    text: 'Parents and caregivers seeking educational support.',
    icon: HiHeart,
  },
  {
    title: 'Newcomers',
    text: 'Individuals and families navigating education in a new country.',
    icon: HiGlobeAlt,
  },
  {
    title: 'Underserved Communities',
    text: 'People facing financial, social or geographic barriers.',
    icon: HiUserGroup,
  },
  {
    title: 'Schools and Organizations',
    text: 'Educational institutions and community partners.',
    icon: HiBookOpen,
  },
]

const partners = [
  'Calgary Board of Education',
  'United Way Calgary and Area',
  'Alberta Government',
  'Community Partners',
]

function HandshakeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.2 13.2 5.4 10.6a1.6 1.6 0 0 1 0-2.3l.7-.7a1.6 1.6 0 0 1 2.2 0L10.6 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m10.6 10 1.2-1.2a1.7 1.7 0 0 1 2.4 0l.4.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8 13.2 18.6 10.6a1.6 1.6 0 0 0 0-2.3l-.7-.7a1.6 1.6 0 0 0-2.2 0L13.4 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9.2 12.2 1.5 1.5a2 2 0 0 0 2.8 0l1.3-1.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.4 15.6 5.8 17.2M16.6 15.6l1.6 1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

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
        title={
          <>
            About World Education Society
            <span className="mt-3 block text-[1.7rem] leading-tight text-[#2E9A4A] sm:text-4xl lg:text-[2.6rem]">
              Advancing education. Empowering youth. Creating opportunity.
            </span>
          </>
        }
        description="World Education Society is a non-profit organization helping people access educational opportunities through guidance, support and community partnerships."
        image={photos.hero}
        imageAlt="Students smiling together outdoors"
        imageLayout="full"
        imageNotes={
          <p className="absolute right-10 top-12 text-right font-hand text-[1.85rem] font-semibold leading-[1.15] text-white [text-shadow:0_2px_12px_rgba(15,40,70,0.55)] sm:right-14 sm:top-16 sm:text-[2.15rem]">
            People.
            <br />
            Education.
            <br />
            Stronger
            <br />
            Communities.
          </p>
        }
      >
        <a href="#our-story" className={heroPrimaryButton}>
          Get to Know Us
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <Link to="/our-impact" className={heroOutlineButton}>
          Our Impact
        </Link>
      </PageHero>

      <section id="our-story" className="scroll-mt-24 bg-[#FBF9F4]">
        <div className="mx-auto grid max-w-[1380px] items-center gap-10 px-6 py-14 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-16">
          <div className="lg:col-span-4">
            <div className="relative h-[280px] overflow-hidden rounded-[24px] bg-[#E7EEF2] sm:h-[320px] lg:h-[340px]">
              <img
                src={photos.story}
                alt="Students with backpacks looking toward the Calgary skyline"
                className="h-full w-full object-cover object-center"
              />
              <p className="absolute left-5 top-5 font-hand text-[2rem] font-semibold leading-tight text-white [text-shadow:0_2px_10px_rgba(15,40,70,0.45)] sm:text-[2.35rem]">
                Education
                <br />
                Changes Lives.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Our Story</p>
            <h2 className="mt-3 whitespace-nowrap font-sans text-[clamp(1.05rem,4.4vw,2rem)] font-bold leading-none tracking-tight text-[#1B3A6B]">
              A Brighter Future, Together.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5C6B7C]">
              World Education Society was founded on the belief that every young person deserves the chance to learn, grow and belong. What began as a local initiative has grown into a trusted non-profit organization supporting thousands of youth through education, guidance and community partnerships.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5C6B7C]">
              Today, we work with individuals, families, schools and community organizations to remove barriers to education and create pathways to brighter futures.
            </p>
            <div className="mt-6">
              <FilledAction to="#our-milestones">Our Journey</FilledAction>
            </div>
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
        <div className="relative mx-auto grid max-w-[1380px] items-stretch gap-5 px-6 py-8 sm:px-8 lg:grid-cols-[1.35fr_0.7fr_0.95fr] lg:gap-6 lg:px-10 lg:py-10">
          <div className="flex flex-col justify-center rounded-[26px] bg-[#E4F0FA] px-7 py-8 sm:px-8 sm:py-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E8AA3]">Why We Exist</p>
            <h2 className="mt-3 font-sans text-[1.65rem] font-bold leading-[1.15] tracking-tight text-[#1B3A6B] lg:text-[1.7rem]">
              Education Creates Stronger People and Communities.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5C6B7C]">
              We believe education is a fundamental right and a powerful tool for individual and community change. Many people face barriers such as financial hardship, lack of information, language challenges and limited access to resources. We exist to remove those barriers and create practical, supportive pathways to opportunity.
            </p>
            <div className="mt-6">
              <FilledAction to="/our-impact">Our Impact</FilledAction>
            </div>
          </div>

          <div className="relative min-h-[240px] overflow-hidden rounded-[22px] bg-[#E7EEF2] sm:min-h-[280px] lg:min-h-full">
            <img
              src={photos.purpose}
              alt="A student writing during a learning session"
              className="h-full w-full object-cover object-center"
            />
            <figure className="absolute right-3 top-3 max-w-[210px] rounded-xl bg-[#1B3A6B]/90 px-3 py-2.5 text-white shadow-lg">
              <blockquote className="text-[12px] font-medium leading-snug">
                “When young people are supported, communities thrive.”
              </blockquote>
            </figure>
          </div>

          <div className="flex flex-col justify-center lg:py-2 lg:pl-2">
            <h2 className="font-sans text-[1.65rem] font-bold leading-[1.15] tracking-tight text-[#1B3A6B] sm:text-[1.85rem]">
              International Education
              <br />
              is One Part of Our Work
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5C6B7C]">
              We support international education and study abroad as one of our program areas, helping students explore learning opportunities in Canada and around the world. While these programs create valuable experiences, they are not the sole focus of our organization. Our broader mandate is to improve access to education for all, locally and globally.
            </p>
            <div className="mt-5">
              <TextAction to="/programs">Learn About Our Programs</TextAction>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#FBF8F3]">
        <img
          src={photos.quote}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[62%] bg-gradient-to-r from-transparent via-[#FBF8F3]/75 to-[#FBF8F3] sm:w-[55%]" />
        <div className="relative mx-auto flex min-h-[220px] max-w-[1380px] items-center justify-end px-6 py-8 sm:min-h-[250px] sm:px-8 lg:min-h-[300px] lg:px-10">
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
              <p className="mt-3 text-sm font-semibold text-[#5C6B7C]">— World Education Society</p>
              <span className="mt-4 block h-[3px] w-14 rounded-full bg-[#E2A322]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section id="our-milestones" className="scroll-mt-24 bg-[#FBF9F4]">
        <div className="mx-auto max-w-[1380px] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Our Milestones</p>
          <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-[#1B3A6B] sm:text-[2.15rem]">A Journey of Growing Impact</h2>

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

      <section className="bg-white">
        <div className="mx-auto max-w-[1380px] px-6 pb-6 pt-12 sm:px-8 lg:px-10 lg:pb-4 lg:pt-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Our Leadership</p>
              <h2 className="mt-2 font-sans text-[1.85rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[2.05rem]">
                Guided by Experience. United by Purpose.
              </h2>
            </div>
            <TextAction to="/governance">Our Governance</TextAction>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {leaders.map((person) => (
              <li key={person.name} className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_28px_rgba(27,58,107,0.06)] ring-1 ring-[#E8EEF4]">
                <div className="aspect-[5/4] overflow-hidden bg-[#E7EEF2]">
                  <img
                    src={person.image}
                    alt={person.alt}
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                </div>
                <div className="px-4 py-3.5">
                  <h3 className="font-sans text-[15px] font-bold leading-tight text-[#1B3A6B]">{person.name}</h3>
                  <p className="mt-1 text-[13px] leading-snug text-[#8A97A6]">{person.role}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5C6B7C]">{person.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="who-we-serve" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1380px] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Who We Serve</p>
              <h2 className="mt-2 max-w-xl font-sans text-[1.85rem] font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-[2.05rem]">
                Who We Serve Communities
              </h2>
            </div>
            <TextAction to="#who-we-serve">Learn More About Who We Serve</TextAction>
          </div>

          <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((item) => (
              <li key={item.title} className="rounded-2xl bg-[#F3F7FB] px-5 py-6">
                <item.icon className="h-7 w-7 text-[#1E4E8C]" aria-hidden="true" />
                <h3 className="mt-4 font-sans text-[15px] font-bold text-[#1B3A6B]">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5C6B7C]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1380px] items-stretch gap-5 px-6 pb-14 pt-2 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.15fr)_minmax(0,0.95fr)] lg:items-center lg:gap-8 lg:px-10 lg:pb-16">
          <div className="h-[220px] overflow-hidden rounded-[22px] bg-[#E7EEF2] sm:h-[250px] lg:h-[230px]">
            <img
              src={photos.serve}
              alt="Students and partners working together"
              className="h-full w-full object-cover object-[center_40%]"
            />
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Our Partnerships</p>
            <h2 className="mt-2 font-sans text-[1.85rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[2.05rem]">
              Stronger Together
            </h2>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-[#5C6B7C]">
              We work with schools, community organizations, businesses, governments and individual supporters to expand access to education and create lasting impact. Together, we can build more inclusive, resilient communities.
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              {partners.map((name) => (
                <li key={name} className="font-sans text-[13px] font-bold leading-tight text-[#1B3A6B]">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[22px] bg-[#F4F8FC] px-6 py-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E7F1FB] text-[#1E4E8C]">
              <HandshakeIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-sans text-lg font-bold text-[#1B3A6B]">Partner With Us</h3>
            <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-[#5C6B7C]">
              Building stronger communities through collaboration.
            </p>
            <div className="mt-4">
              <TextAction to="/get-involved">Partner With Us</TextAction>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
