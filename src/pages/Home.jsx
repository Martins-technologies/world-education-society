import { Link } from 'react-router-dom'
import { FaHandshake } from 'react-icons/fa'
import {
  HiAcademicCap,
  HiArrowRight,
  HiBookOpen,
  HiChartBar,
  HiCog6Tooth,
  HiHeart,
  HiLightBulb,
  HiMagnifyingGlass,
  HiUserGroup,
  HiUsers,
} from 'react-icons/hi2'
import PageHero, { heroOutlineButton, heroPrimaryButton } from '../components/PageHero'
import ComingSoonButton from '../components/ComingSoonButton'

const photos = {
  hero: '/homeupdated/01_Hero_Students.webp',
  purpose: '/homeupdated/02_Our_Purpose_Student.webp',
  language: '/homeupdated/03_Language_Communication.webp',
  digital: '/homeupdated/04_Digital_Skills.webp',
  academic: '/homeupdated/05_Academic_Support.webp',
  campaign: '/homeupdated/06_Current_Campaign_Back_to_Learning_Drive.webp',
  involved: '/homeupdated/07_Get_Involved_Volunteering.webp',
  story: '/homeupdated/08_Success_Story.webp',
}

const metrics = [
  { icon: HiUsers, value: '12,500+', label: 'Youth Supported' },
  { icon: HiBookOpen, value: '45,000+', label: 'Educational Resources Distributed' },
  { icon: HiUserGroup, value: '320+', label: 'Workshops & Programs' },
  { icon: HiAcademicCap, value: '1,800+', label: 'Internship Pathways' },
  { icon: HiHeart, value: '25,000+', label: 'Volunteer Hours' },
  { icon: HiChartBar, value: '110+', label: 'Community Campaigns' },
]

const purposePoints = [
  {
    icon: HiAcademicCap,
    wrap: 'bg-[#E7F1FB] text-[#1E4E8C]',
    title: 'Access to Education',
    text: 'Removing barriers and expanding opportunities.',
  },
  {
    icon: HiUserGroup,
    wrap: 'bg-[#E5F6EA] text-[#2E9A4A]',
    title: 'Stronger Communities',
    text: 'Building inclusion through education and partnership.',
  },
  {
    icon: SproutIcon,
    wrap: 'bg-[#FBF3E0] text-[#C9922A]',
    title: 'Brighter Futures',
    text: 'Empowering the next generation to reach their potential.',
  },
]

const programs = [
  {
    title: 'Language & Communication',
    text: 'Building essential language, literacy, and communication skills for everyday success.',
    image: photos.language,
    alt: 'Students building language and communication skills together',
    position: 'object-top',
  },
  {
    title: 'Digital Skills',
    text: 'Equipping learners with essential digital skills to thrive in a changing world.',
    image: photos.digital,
    alt: 'A mentor guiding a student through a hands-on technology workshop',
    position: 'object-top',
  },
  {
    title: 'Academic Support',
    text: 'Helping students build confidence and achieve their educational goals.',
    image: photos.academic,
    alt: 'Learners and a mentor reviewing work together at a community table',
    position: 'object-top',
  },
]

const steps = [
  {
    n: '1',
    icon: HiMagnifyingGlass,
    title: 'Identify Barriers',
    text: 'We listen and understand the educational, financial, and social barriers.',
    badge: 'bg-[#2F6FE4]',
    iconColor: 'text-[#2F6FE4]',
  },
  {
    n: '2',
    icon: HiLightBulb,
    title: 'Guide & Advise',
    text: 'We provide personalized guidance, resources and referrals.',
    badge: 'bg-[#2E9A4A]',
    iconColor: 'text-[#2E9A4A]',
  },
  {
    n: '3',
    icon: HiCog6Tooth,
    title: 'Build Skills',
    text: 'We offer training, workshops and learning opportunities to build confidence and skills.',
    badge: 'bg-[#E8A317]',
    iconColor: 'text-[#E8A317]',
  },
  {
    n: '4',
    icon: HiUserGroup,
    title: 'Connect Opportunities',
    text: 'We link students with scholarships, internships, mentors and programs.',
    badge: 'bg-[#7A62C4]',
    iconColor: 'text-[#7A62C4]',
  },
  {
    n: '5',
    icon: HiChartBar,
    title: 'Support Progress',
    text: 'We stay connected, celebrate progress and provide ongoing support.',
    badge: 'bg-[#148A9C]',
    iconColor: 'text-[#148A9C]',
  },
]

const involveRows = [
  { icon: HiHeart, title: 'Volunteer', text: 'Give your time and skills.' },
  { icon: FaHandshake, title: 'Partner With Us', text: 'Explore partnership opportunities.' },
  { icon: HiHeart, title: 'Support Our Programs', text: 'Help us create brighter futures.' },
]

const newsItems = [
  {
    title: 'World Education Society Launches Skills for Tomorrow Campaign',
    date: 'Oct 12, 2025',
  },
  {
    title: 'New Partnerships to Expand Educational Opportunities',
    date: 'Sep 28, 2025',
  },
]

function SproutIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21V11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 13c0-4 2.2-6.2 6.2-6.8-0.2 4.2-2.6 6.6-6.2 6.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M12 15c0-3.2-2-5.2-5.6-5.8 0.3 3.6 2.4 5.6 5.6 5.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowLink({ to, children }) {
  return (
    <Link to={to} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4E8C] transition-colors hover:text-[#163E70]">
      <span>{children}</span>
      <HiArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

function Pill({ to, children, tone = 'navy' }) {
  const tones = {
    navy: 'bg-[#1E4E8C] text-white hover:bg-[#183E72]',
    outline: 'border border-[#D7E0E8] bg-white text-[#1B3A6B] hover:bg-[#F6F9FB]',
    green: 'bg-[#2E9A4A] text-white hover:bg-[#267F3C]',
  }
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${tones[tone]}`}
    >
      <span>{children}</span>
      <HiArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

export default function Home() {
  return (
    <div className="bg-[#FBF9F4] text-[#1B3A6B]">
      <PageHero
        eyebrow="Learning. Belonging. Opportunity."
        title={
          <>
            Education Creates Opportunity.
            <span className="mt-2 block text-[1.05rem] leading-snug text-[#2E9A4A] sm:text-[1.15rem] lg:text-[1.02rem] xl:text-[1.1rem] min-[1440px]:text-[1.2rem]">
              We Help Make It Accessible.
            </span>
          </>
        }
        description="World Education Society advances education and supports youth by removing barriers, building skills, and creating opportunities through guidance, community partnerships, internships and educational access."
        image={photos.hero}
        imageAlt="Students smiling together outdoors, representing stronger students and stronger communities"
        imageLayout="full"
        footnote={
          <div className="flex max-w-[480px] items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E7F1FB] text-[#1E4E8C]">
              <HiUserGroup className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-[13px] leading-relaxed text-[#5C6B7C]">
              A non-profit organization helping people access educational opportunities through guidance, support and
              community partnerships.
            </p>
          </div>
        }
      >
        <Link to="/programs" className={heroPrimaryButton}>
          Explore Our Programs
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link to="/get-involved" className={heroOutlineButton}>
          Get Involved
        </Link>
      </PageHero>

      <section className="bg-[#F7FBFE]">
        <div className="relative mx-auto max-w-[1380px] px-6 pb-14 sm:px-8 lg:px-12 xl:px-16 lg:pb-16">
          <div className="grid grid-cols-2 divide-[#E6EEF4] overflow-hidden rounded-2xl border border-[#E6EEF4] bg-white shadow-[0_10px_30px_-24px_rgba(27,58,107,0.5)] sm:grid-cols-3 xl:grid-cols-6 xl:divide-x">
            {metrics.map((item) => (
              <div key={item.label} className="flex flex-col items-center px-3 py-5 text-center">
                <item.icon className="h-6 w-6 text-[#1E4E8C]" aria-hidden="true" />
                <p className="mt-2 font-sans text-xl font-bold tracking-tight text-[#1B3A6B]">{item.value}</p>
                <p className="mt-1 max-w-[9.5rem] text-[12px] leading-snug text-[#6A7A8A]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FBF9F4]">
        <div className="mx-auto max-w-[1380px] px-6 py-6 sm:px-8 lg:px-12 xl:px-16 lg:py-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Our Purpose</p>
          <h2 className="mt-3 font-sans text-[1.65rem] font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-[2.05rem]">
            Opportunity begins with support.
          </h2>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="max-w-md text-[15px] leading-relaxed text-[#5C6B7C]">
              World Education Society is a non-profit organization that helps people access educational opportunities through guidance, support and community partnerships. We work to remove barriers, expand access to education, build skills, and create inclusive pathways for youth and communities to thrive.
            </p>
            <div className="mt-6">
              <Pill to="/about-us">Learn More About Our Mission</Pill>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative mx-auto h-[240px] w-full max-w-[520px] overflow-hidden rounded-2xl bg-[#E7EEF2] sm:h-[260px] lg:h-[280px] lg:max-w-none">
              <img
                src={photos.purpose}
                alt="A student writing in a notebook during a learning session"
                className="h-full w-full object-cover object-[32%_28%]"
              />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-4">
            {purposePoints.map((point) => (
              <div key={point.title} className="flex items-start gap-4">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${point.wrap}`}>
                  <point.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-sans text-[15px] font-semibold text-[#1B3A6B]">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5C6B7C]">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FBF9F4]">
        <div className="mx-auto max-w-[1380px] px-6 py-12 sm:px-8 lg:px-12 xl:px-16 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Our Programs</p>
              <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-[#1B3A6B] sm:text-[2.15rem]">
                Programs That Make a Difference
              </h2>
            </div>
            <ArrowLink to="/programs">View All Programs</ArrowLink>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => (
              <article key={program.title} className="overflow-hidden rounded-2xl border border-[#E6EEF4] bg-white shadow-[0_12px_30px_-24px_rgba(27,58,107,0.55)]">
                <div className="h-64 overflow-hidden bg-[#E7EEF2]">
                  <img src={program.image} alt={program.alt} className={`h-full w-full object-cover ${program.position}`} />
                </div>
                <div className="px-5 py-5">
                  <h3 className="font-sans text-lg font-semibold text-[#1B3A6B]">{program.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6B7C]">{program.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-support" className="bg-[#F4F8FB]">
        <div className="mx-auto max-w-[1380px] px-6 py-12 sm:px-8 lg:px-12 xl:px-16 lg:py-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">How We Support</p>
          <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-[#1B3A6B] sm:text-[2.05rem]">
            Turning barriers into opportunity.
          </h2>

          <ol className="mt-10 flex flex-col xl:flex-row xl:items-start">
            {steps.map((step, index) => (
              <li key={step.n} className={`relative min-w-0 flex-1 ${index < steps.length - 1 ? 'xl:pr-6' : ''}`}>
                <div className="flex gap-2">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white ${step.badge}`}>
                    {step.n}
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <div className="flex items-center gap-1.5">
                      <step.icon className={`h-4 w-4 shrink-0 ${step.iconColor}`} aria-hidden="true" />
                      <h3 className="font-sans text-[13px] font-semibold leading-tight text-[#1B3A6B] xl:whitespace-nowrap">{step.title}</h3>
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#5C6B7C]">{step.text}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <>
                    <span className="flex justify-center py-3 text-[#3B82C4] xl:hidden" aria-hidden="true">
                      <HiArrowRight className="h-5 w-5 rotate-90" />
                    </span>
                    <span className="absolute right-0 top-1.5 hidden text-[#3B82C4] xl:block" aria-hidden="true">
                      <HiArrowRight className="h-5 w-5" />
                    </span>
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#FBF9F4]">
        <div className="mx-auto grid max-w-[1380px] gap-6 px-6 py-12 sm:px-8 lg:grid-cols-12 lg:px-12 xl:px-16 lg:py-14">
          <div className="lg:col-span-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7B8C9C]">Current Campaign</p>
              <ArrowLink to="/campaigns">View All Campaigns</ArrowLink>
            </div>
            <article className="overflow-hidden rounded-2xl border border-[#E6EEF4] bg-white shadow-[0_12px_30px_-24px_rgba(27,58,107,0.55)]">
              <div className="overflow-hidden bg-[#E7EEF2] lg:h-64">
                <img
                  src={photos.campaign}
                  alt="Students supported through the Back to Learning Drive"
                  className="block h-auto w-full lg:h-full lg:object-cover lg:object-top"
                />
              </div>
              <div className="px-5 py-5">
                <h3 className="font-sans text-xl font-semibold text-[#1B3A6B]">Back to Learning Drive</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5C6B7C]">
                  Help us provide school supplies, learning resources and support for students in need.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <ComingSoonButton
                    message="Online donations will be available soon. Thank you for your interest in supporting our work."
                    className="inline-flex items-center gap-2 rounded-full bg-[#2E9A4A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#267F3C]"
                  >
                    Donate Now
                    <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                  </ComingSoonButton>
                  <p className="text-sm font-semibold text-[#2E9A4A]">70% of goal</p>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E5F2E8]" aria-hidden="true">
                  <div className="h-full w-[70%] rounded-full bg-[#2E9A4A]" />
                </div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7B8C9C]">Get Involved</p>
            <article className="overflow-hidden rounded-2xl border border-[#E6EEF4] bg-white shadow-[0_12px_30px_-24px_rgba(27,58,107,0.55)]">
              <div className="h-64 overflow-hidden bg-[#E7EEF2]">
                <img
                  src={photos.involved}
                  alt="Volunteers and students walking together outdoors"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="px-5 py-5">
                <h3 className="font-sans text-xl font-semibold text-[#1B3A6B]">Get Involved. Make a Difference.</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5C6B7C]">
                  Volunteer, partner or support our programs. Your involvement helps create real opportunities for young people.
                </p>
                <div className="mt-4">
                  <ArrowLink to="/get-involved">Get Involved</ArrowLink>
                </div>
              </div>
            </article>
          </div>

          <div className="flex flex-col lg:col-span-3 lg:pt-8">
            <div className="flex h-full flex-col justify-center divide-y divide-[#E6EEF4] rounded-2xl border border-[#E6EEF4] bg-white px-4 shadow-[0_12px_30px_-24px_rgba(27,58,107,0.45)]">
              {involveRows.map((row) => (
                <Link key={row.title} to="/get-involved" className="flex items-center gap-3 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E7F1FB] text-[#1E4E8C]">
                    <row.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-sans text-sm font-semibold text-[#1B3A6B]">{row.title}</span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-[#5C6B7C]">{row.text}</span>
                  </span>
                  <HiArrowRight className="h-4 w-4 shrink-0 text-[#9AA8B6]" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FBF9F4]">
        <div className="mx-auto grid max-w-[1380px] gap-6 px-6 pb-16 sm:px-8 lg:grid-cols-3 lg:px-12 xl:px-16 lg:pb-20">
          <article>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7B8C9C]">Success Story</p>
            <div className="flex h-[calc(100%-1.75rem)] gap-4 rounded-2xl border border-[#E6EEF4] bg-white p-4 shadow-[0_12px_30px_-24px_rgba(27,58,107,0.45)]">
              <div className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-[#E7EEF2] sm:h-32 sm:w-28">
                <img
                  src={photos.story}
                  alt="Portrait of a World Education Society participant"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <p className="font-serif text-3xl leading-none text-[#1E4E8C]">“</p>
                <p className="text-[13px] leading-relaxed text-[#5C6B7C]">
                  With the support of World Education Society, I was able to access guidance, improve my skills and gain the confidence to pursue my goals. It changed the direction of my future.
                </p>
                <p className="mt-3 text-sm font-semibold text-[#1B3A6B]">WES Participant</p>
                <p className="text-[12px] text-[#7A8794]">Success Story</p>
              </div>
            </div>
          </article>

          <article>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7B8C9C]">Latest News</p>
            <div className="flex h-[calc(100%-1.75rem)] flex-col divide-y divide-[#E6EEF4] rounded-2xl border border-[#E6EEF4] bg-white px-4 shadow-[0_12px_30px_-24px_rgba(27,58,107,0.45)]">
              {newsItems.map((item) => (
                <div key={item.title} className="py-4">
                  <h3 className="font-sans text-[15px] font-semibold leading-snug text-[#1B3A6B]">{item.title}</h3>
                  <p className="mt-2 text-[12px] text-[#7A8794]">{item.date}</p>
                  <div className="mt-3">
                    <ComingSoonButton
                      message="Full news articles are coming soon."
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4E8C] transition-colors hover:text-[#163E70]"
                    >
                      <span>Read More</span>
                      <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                    </ComingSoonButton>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="flex flex-col justify-center rounded-2xl border border-[#D7E7F3] bg-[#EAF4FB] px-6 py-7 lg:mt-7">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-[#1B3A6B]">Need Educational Support?</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5C6B7C]">
              We’re here to help. Tell us what you’re trying to achieve and how we can support you.
            </p>
            <div className="mt-5">
              <ComingSoonButton
                message="Our support request portal is coming soon. Please contact us in the meantime."
                className="inline-flex items-center gap-2 rounded-full bg-[#1E4E8C] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#183E72]"
              >
                Request Support
                <HiArrowRight className="h-4 w-4" aria-hidden="true" />
              </ComingSoonButton>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
