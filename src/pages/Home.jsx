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
import PageHero, { heroPrimaryButton, heroTextLink } from '../components/PageHero'

const photos = {
  purpose: '/extras/13_a_bright_modern_educational_workshop_setting_in_a.webp',
  language: '/Home/01_a_bright_modern_indoor_study_learning_scene_in_a.webp',
  digital: '/extras/12_hands_on_robotics_workshop_mentorship.webp',
  academic: '/Home/07_warm_community_study_session.webp',
  campaign: '/Home/05_a_bright_realistic_high_resolution_outdoor_campu.webp',
  involved: '/Home/14_collaborative_community_vision_board.webp',
  story: '/Home/15_outdoor_graduation_portrait_scene_on_a_college_cam.webp',
  news: '/Home/programs-side.jpg',
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
    alt: 'A mentor and students working together around a laptop in a bright classroom',
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
    featured: true,
  },
]

const steps = [
  {
    n: '1',
    icon: HiMagnifyingGlass,
    title: 'Identify Barriers',
    text: 'We listen and understand challenges.',
    badge: 'bg-[#2F6FE4]',
    iconColor: 'text-[#2F6FE4]',
  },
  {
    n: '2',
    icon: HiLightBulb,
    title: 'Guide & Advise',
    text: 'We provide personalized support and resources.',
    badge: 'bg-[#2E9A4A]',
    iconColor: 'text-[#2E9A4A]',
  },
  {
    n: '3',
    icon: HiCog6Tooth,
    title: 'Build Skills',
    text: 'We offer training and learning opportunities.',
    badge: 'bg-[#E8A317]',
    iconColor: 'text-[#E8A317]',
  },
  {
    n: '4',
    icon: HiUserGroup,
    title: 'Connect Opportunities',
    text: 'We link individuals with pathways to growth.',
    badge: 'bg-[#7A62C4]',
    iconColor: 'text-[#7A62C4]',
  },
  {
    n: '5',
    icon: HiChartBar,
    title: 'Support Progress',
    text: 'We stay engaged to help create lasting change.',
    badge: 'bg-[#148A9C]',
    iconColor: 'text-[#148A9C]',
  },
]

const involveRows = [
  { icon: HiHeart, title: 'Volunteer', text: 'Give your time and skills.' },
  { icon: FaHandshake, title: 'Partner With Us', text: 'Explore partnership opportunities.' },
  { icon: HiHeart, title: 'Support Our Work', text: 'Help us create brighter futures.' },
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
            Education
            <br />
            Creates
            <br />
            Opportunity.
          </>
        }
        description="We help people access educational opportunities through guidance, support and community partnerships. For students. For communities. For a fairer future."
        image="/homehero.webp"
        imageAlt="Students and community members gathered together"
        imagePosition="center 40%"
      >
        <Link to="/programs" className={heroPrimaryButton}>
          Explore Our Programs
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link to="/get-involved" className={heroTextLink}>
          Get Involved
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="bg-[#F7FBFE]">
        <div className="relative mx-auto max-w-[1200px] px-6 pb-14 sm:px-8 lg:px-10 lg:pb-16">
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
        <div className="mx-auto max-w-[1200px] px-6 py-6 sm:px-8 lg:px-10 lg:py-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C]">Our Purpose</p>
          <h2 className="mt-3 font-sans text-[1.65rem] font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-[2.05rem]">
            Education for a More Equitable World
          </h2>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="max-w-md text-[15px] leading-relaxed text-[#5C6B7C]">
              We believe in the power of education to unlock potential, build confidence, and create opportunities for a fairer, more inclusive world. Through programs, partnerships, and community support, we help individuals gain the skills and knowledge needed to create lasting change.
            </p>
            <div className="mt-6">
              <Pill to="/about-us">Learn More About Us</Pill>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="mx-auto h-[240px] w-full max-w-[520px] overflow-hidden rounded-2xl bg-[#E7EEF2] sm:h-[260px] lg:h-[280px] lg:max-w-none">
              <img
                src={photos.purpose}
                alt="Learners writing and studying together in a community workshop"
                className="h-full w-full object-cover object-[center_28%]"
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
        <div className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
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
                <div className="relative h-64 overflow-hidden bg-[#E7EEF2]">
                  <img src={program.image} alt={program.alt} className={`h-full w-full object-cover ${program.position}`} />
                  {program.featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1E4E8C]">
                      Featured Program
                    </span>
                  )}
                </div>
                <div className="px-5 py-5">
                  <h3 className="font-sans text-lg font-semibold text-[#1B3A6B]">{program.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6B7C]">{program.text}</p>
                  <div className="mt-4">
                    <ArrowLink to="/programs">Learn More</ArrowLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-support" className="bg-[#F4F8FB]">
        <div className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
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
        <div className="mx-auto grid max-w-[1200px] gap-6 px-6 py-12 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-14">
          <div className="lg:col-span-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7B8C9C]">Current Campaign</p>
              <ArrowLink to="/campaigns">View All Campaigns</ArrowLink>
            </div>
            <article className="overflow-hidden rounded-2xl border border-[#E6EEF4] bg-white shadow-[0_12px_30px_-24px_rgba(27,58,107,0.55)]">
              <div className="h-64 overflow-hidden bg-[#E7EEF2]">
                <img
                  src={photos.campaign}
                  alt="Students studying together with a laptop on a campus lawn"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="px-5 py-5">
                <h3 className="font-sans text-xl font-semibold text-[#1B3A6B]">Back to Learning Drive</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5C6B7C]">
                  Help us provide school supplies, learning resources and support for students in need.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <Pill to="/donate" tone="green">Donate Now</Pill>
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
                  alt="Community members collaborating around a planning board"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="px-5 py-5">
                <h3 className="font-sans text-xl font-semibold text-[#1B3A6B]">Many Ways to Make a Difference</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5C6B7C]">
                  Volunteer, partner, or support our programs. Your involvement helps create real opportunities in our communities.
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
        <div className="mx-auto grid max-w-[1200px] gap-6 px-6 pb-16 sm:px-8 lg:grid-cols-3 lg:px-10 lg:pb-20">
          <article>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7B8C9C]">Success Story</p>
            <div className="flex h-[calc(100%-1.75rem)] gap-4 rounded-2xl border border-[#E6EEF4] bg-white p-4 shadow-[0_12px_30px_-24px_rgba(27,58,107,0.45)]">
              <div className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-[#E7EEF2] sm:h-32 sm:w-28">
                <img
                  src={photos.story}
                  alt="Portrait of a smiling graduate on campus"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <p className="font-serif text-3xl leading-none text-[#1E4E8C]">“</p>
                <p className="text-[13px] leading-relaxed text-[#5C6B7C]">
                  With the support of World Education Society, I gained the confidence, skills, and guidance to pursue my goals. It changed the direction of my future.
                </p>
                <p className="mt-3 text-sm font-semibold text-[#1B3A6B]">Aisha M.</p>
                <p className="text-[12px] text-[#7A8794]">Program Participant</p>
              </div>
            </div>
          </article>

          <article>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7B8C9C]">Latest News</p>
            <div className="flex h-[calc(100%-1.75rem)] flex-col rounded-2xl border border-[#E6EEF4] bg-white p-4 shadow-[0_12px_30px_-24px_rgba(27,58,107,0.45)] sm:flex-row sm:items-center sm:gap-4">
              <div className="mb-3 h-28 overflow-hidden rounded-xl bg-[#E7EEF2] sm:mb-0 sm:h-24 sm:w-32 sm:shrink-0">
                <img
                  src={photos.news}
                  alt="A student with a backpack on a campus walkway"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-sans text-[15px] font-semibold leading-snug text-[#1B3A6B]">
                  World Education Society Launches Skills for Tomorrow Campaign
                </h3>
                <p className="mt-2 text-[12px] text-[#7A8794]">Oct 12, 2025</p>
                <div className="mt-3">
                  <ArrowLink to="/campaigns">Read More</ArrowLink>
                </div>
              </div>
            </div>
          </article>

          <article className="flex flex-col justify-center rounded-2xl border border-[#D7E7F3] bg-[#EAF4FB] px-6 py-7 lg:mt-7">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-[#1B3A6B]">Need Educational Support?</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5C6B7C]">
              We’re here to help. Tell us what you’re trying to achieve and how we can support you.
            </p>
            <div className="mt-5">
              <Pill to="/get-support">Request Support</Pill>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
