import { Link } from 'react-router-dom'
import {
  HiArrowRight,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineHandRaised,
  HiOutlineHeart,
  HiOutlineMegaphone,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from 'react-icons/hi2'
import PageHero, { heroOutlineButton, pageContainer } from '../components/PageHero'
import ComingSoonButton from '../components/ComingSoonButton'
import {
  ActionButton,
  ArrowLink,
  ImagePlaceholder,
  SectionEyebrow,
  SectionHeading,
  SectionIntro,
} from '../components/campaigns/CampaignUi'
import { getInvolvedPathwayImages } from '../data/campaignsData'

const GET_INVOLVED_HERO_IMAGE = '/gwtinvolvedhero.webp'

const pathwayCards = [
  {
    title: 'Volunteer With Us',
    description:
      'Share your time and skills to support our programs, events, and community initiatives. Volunteers help us reach more youth and create lasting change.',
    cta: 'Become a Volunteer',
    href: '/get-involved/volunteer-with-us',
    icon: HiOutlineUserGroup,
    image: getInvolvedPathwayImages.volunteerWithUs,
    imageAlt: 'Teacher engaging students in a classroom',
  },
  {
    title: 'Become a Mentor',
    description:
      'Guide and inspire youth through one-on-one or group mentoring. Help students build confidence, explore opportunities, and achieve their goals.',
    cta: 'Learn About Mentoring',
    href: '/contact',
    icon: HiOutlineUsers,
    image: getInvolvedPathwayImages.becomeAMentor,
    imageAlt: 'Mentor supporting students in a classroom',
  },
  {
    title: 'Partner With Us',
    description:
      'Schools, businesses, and community organizations can partner with us to expand educational opportunities and create greater impact together.',
    cta: 'Explore Partnerships',
    href: '/contact',
    icon: HiOutlineHandRaised,
    image: getInvolvedPathwayImages.partnerWithUs,
    imageAlt: 'Business partners shaking hands at a meeting',
  },
  {
    title: 'Support Our Programs',
    description:
      'Your financial support helps us deliver educational resources, scholarships, workshops, and mentorship programs to youth in need.',
    cta: 'Make a Donation',
    comingSoon: true,
    icon: HiOutlineHeart,
    image: getInvolvedPathwayImages.supportOurPrograms,
    imageAlt: 'Youth holding a sign about education changing lives',
  },
  {
    title: 'Donate Resources',
    description:
      'Help us by donating books, technology, school supplies, or other educational materials. Your in-kind donations directly support students and schools in our communities.',
    cta: 'View Donation Needs',
    href: '/donate',
    icon: HiOutlineAcademicCap,
    image: getInvolvedPathwayImages.donateResources,
    imageAlt: 'Stack of books for educational donation drives',
  },
  {
    title: 'Host a Workshop',
    description:
      'Share your expertise by hosting a workshop or training session. Help youth develop practical skills and knowledge for school, work, and life.',
    cta: 'Propose a Workshop',
    href: '/contact',
    icon: HiOutlineUserGroup,
    image: getInvolvedPathwayImages.hostAWorkshop,
    imageAlt: 'Children learning together in a workshop setting',
  },
  {
    title: 'Internship & Employer Partnerships',
    description:
      'Provide internships, job shadowing, or career opportunities for youth. Help bridge the gap between education and employment.',
    cta: 'Explore Opportunities',
    href: '/contact',
    icon: HiOutlineBriefcase,
    image: getInvolvedPathwayImages.employerPartnerships,
    imageAlt: 'Professional working at a computer in an office',
  },
]

const partnerLogos = [
  { src: '/get-involved/partners/tdsb.svg', alt: 'Toronto District School Board' },
  { src: '/get-involved/partners/rbc.svg', alt: 'RBC' },
  { src: '/get-involved/partners/microsoft.svg', alt: 'Microsoft' },
  { src: '/get-involved/partners/scotiabank.svg', alt: 'Scotiabank' },
  { src: '/get-involved/partners/suncor.svg', alt: 'Suncor' },
  { src: '/get-involved/partners/united-way-calgary.svg', alt: 'United Way Calgary and Area' },
]

const moreWays = [
  {
    title: 'Spread the Word',
    text: 'Help raise awareness by sharing our mission on social media.',
    Icon: HiOutlineUserGroup,
    iconWrap: 'bg-[#2E9A4A]',
  },
  {
    title: 'Attend Events',
    text: 'Join our community events and campaigns to show your support.',
    Icon: HiOutlineMegaphone,
    iconWrap: 'bg-[#1E4E8C]',
  },
  {
    title: 'Fundraise',
    text: 'Organize a fundraiser in your school, workplace, or community.',
    Icon: HiOutlineHeart,
    iconWrap: 'bg-[#7A62C4]',
  },
  {
    title: 'Advocate',
    text: 'Be a voice for education equity in your community and beyond.',
    Icon: HiOutlineStar,
    iconWrap: 'bg-[#E8A317]',
  },
]

const faqQuestions = [
  'Do I need special skills to volunteer?',
  'How much time do I need to commit?',
  'Can organizations partner with WES?',
  'What types of donations do you accept?',
]

function InvolvedStatsStrip() {
  return (
    <section className="bg-[#F7FBFE]">
      <div className={`${pageContainer} pb-10 pt-2 sm:pb-12`}>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#E6EEF4] bg-white shadow-[0_10px_30px_-24px_rgba(27,58,107,0.45)]">
          <div className="grid grid-cols-1 divide-y divide-[#E6EEF4] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="flex items-center justify-center gap-3 px-6 py-6 sm:py-7">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F2FC] text-[#1E4E8C]">
                <HiOutlineUserGroup className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="text-left">
                <p className="font-display text-lg font-bold leading-tight text-[#1B3A6B] sm:text-xl">25,000+</p>
                <p className="text-[13px] font-medium text-[#5C6B7C] sm:text-[14px]">Volunteer Hours</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-6 sm:py-7">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F2FC] text-[#1E4E8C]">
                <HiOutlineMegaphone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="text-left">
                <p className="font-display text-lg font-bold leading-tight text-[#1B3A6B] sm:text-xl">110+</p>
                <p className="text-[13px] font-medium text-[#5C6B7C] sm:text-[14px]">Community Campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqQuestionList() {
  return (
    <ul className="space-y-2.5">
      {faqQuestions.map((question) => (
        <li
          key={question}
          className="rounded-lg bg-[#EAF4FB] px-4 py-3.5 font-sans text-[13px] font-semibold text-[#1B3A6B] sm:px-5 sm:py-4 sm:text-[14px]"
        >
          {question}
        </li>
      ))}
    </ul>
  )
}

function PartnerLogoRow() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-10 lg:justify-between lg:gap-x-4">
      {partnerLogos.map((partner) => (
        <img
          key={partner.alt}
          src={partner.src}
          alt={partner.alt}
          className="h-9 w-auto max-w-[118px] object-contain object-center sm:h-10 sm:max-w-[132px] lg:h-11 lg:max-w-[150px]"
        />
      ))}
    </div>
  )
}

export default function GetInvolvedPage() {
  return (
    <div className="min-w-0 overflow-x-clip bg-[#FBF9F4] text-[#1B3A6B]">
      <PageHero
        title={
          <>
            Get Involved
            <span className="mt-2 block text-[1.05rem] font-semibold leading-snug text-[#2E9A4A] sm:text-[1.15rem] lg:text-[1.02rem] xl:text-[1.1rem] min-[1440px]:text-[1.2rem]">
              Help Create Educational Opportunity.
            </span>
          </>
        }
        description="Be part of a global movement to remove barriers, expand access, and empower young people through education. Whether you volunteer, mentor, donate, or partner with us, there's a meaningful way for you to make a difference."
        image={GET_INVOLVED_HERO_IMAGE}
        imageAlt="Diverse young people looking toward a city skyline together"
        imageLayout="full"
      >
        <Link to="/our-impact" className={heroOutlineButton}>
          <span>View Our Impact</span>
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>

      <InvolvedStatsStrip />

      <section id="pathways" className="scroll-mt-24 bg-[#FBF9F4] py-12 sm:py-16">
        <div className={pageContainer}>
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>GET INVOLVED</SectionEyebrow>
            <SectionHeading className="mt-2">Choose Your Pathway to Make a Difference</SectionHeading>
            <SectionIntro className="mx-auto mt-3">
              There are many ways to support World Education Society. Find the opportunity that matches your passions,
              skills, and goals — and help create a brighter future for youth.
            </SectionIntro>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pathwayCards.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E6EEF4] bg-white shadow-[0_12px_30px_-24px_rgba(27,58,107,0.45)]"
              >
                <ImagePlaceholder
                  src={card.image}
                  alt={card.imageAlt}
                  className="aspect-[4/3] w-full !rounded-none bg-[#E7EEF2]"
                />
                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F2FC] text-[#1E4E8C]">
                      <card.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-[1.25rem] font-bold leading-tight text-[#1B3A6B]">{card.title}</h3>
                  </div>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#5C6B7C]">{card.description}</p>
                  <div className="mt-5">
                    {card.comingSoon ? (
                      <ComingSoonButton
                        message="Online donations will be available soon. Thank you for your interest in supporting our work."
                        className={`${heroOutlineButton} !px-4 !py-2.5 !text-[13px]`}
                      >
                        <span>{card.cta}</span>
                        <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                      </ComingSoonButton>
                    ) : (
                      <ActionButton to={card.href} variant="outline" className="!px-4 !py-2.5 !text-[13px]">
                        {card.cta}
                      </ActionButton>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E6EEF4]/80 bg-[#FBF9F4] py-12 sm:py-16">
        <div className={pageContainer}>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading>Our Partners Make Greater Impact Possible</SectionHeading>
            <SectionIntro className="mx-auto mt-3 text-center">
              We&apos;re proud to work with schools, businesses, and community organizations who share our vision for a
              more equitable and educated future.
            </SectionIntro>
          </div>
          <PartnerLogoRow />
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-[#E6EEF4]/80 bg-white py-12 sm:py-16">
        <div className={pageContainer}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div>
              <SectionHeading>More Ways to Help</SectionHeading>
              <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 lg:grid-cols-4 lg:gap-x-2">
                {moreWays.map((item) => (
                  <li key={item.title} className="flex flex-col items-center text-center">
                    <span
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_8px_20px_-12px_rgba(27,58,107,0.45)] ${item.iconWrap}`}
                    >
                      <item.Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-sans text-[15px] font-bold text-[#1B3A6B]">{item.title}</h3>
                    <p className="mt-2 max-w-[220px] text-[13px] leading-relaxed text-[#5C6B7C]">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <SectionHeading className="!text-[1.65rem] sm:!text-[1.85rem]">Frequently Asked Questions</SectionHeading>
                <ArrowLink to="/resources" className="shrink-0 text-[13px]">
                  View All FAQs
                </ArrowLink>
              </div>
              <div className="mt-6">
                <FaqQuestionList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
