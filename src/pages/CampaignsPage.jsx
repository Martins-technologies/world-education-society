import { Link } from 'react-router-dom'

import { HiArrowRight } from 'react-icons/hi2'

import PageHero, { heroGreenButton, heroOutlineButton } from '../components/PageHero'

import {

  ActionButton,

  ArrowLink,

  CampaignCard,

  CampaignMeta,

  ImagePlaceholder,

  ImpactStatIcon,

  pageContainer,

  ProgressBar,

  SectionEyebrow,

  SectionHeading,

  SectionIntro,

  CampaignSplitSectionHeader,

  PastCampaignHighlightCard,

  UpcomingEventHighlightCard,

} from '../components/campaigns/CampaignUi'

import {

  campaignImages,

  campaignImpactStats,

  communityEvents,

  currentCampaigns,

  featuredCampaign,

  howCampaignsWork,

  pastCampaigns,

  resourceDistributionBanner,

} from '../data/campaignsData'



const mainCampaigns = currentCampaigns.filter((c) => c.showOnMain)

const mainPastCampaign = pastCampaigns.find((c) => c.showOnMain) ?? pastCampaigns[0]

const mainEvent = communityEvents.find((e) => e.showOnMain) ?? communityEvents[0]

/** /campaigns only — highlight cards use dedicated images (not shared with archive/events). */
const CAMPAIGNS_PAGE_PAST_CARD_IMAGE =
  'https://cdn.pixabay.com/photo/2017/09/08/00/38/friend-2727307_1280.jpg'
const CAMPAIGNS_PAGE_UPCOMING_CARD_IMAGE =
  'https://cdn.pixabay.com/photo/2020/01/15/16/46/children-4768404_1280.jpg'



export default function CampaignsPage() {
  return (

    <div className="min-w-0 overflow-x-clip bg-[#FBF9F4] text-[#1B3A6B]">

      <PageHero
        eyebrow="People. Opportunities. Brighter Communities."
        title={
          <>
            Campaigns
            <span className="mt-2 block text-[1.05rem] font-semibold leading-snug text-[#1B3A6B] sm:text-[1.15rem] lg:text-[1.02rem] xl:text-[1.1rem] min-[1440px]:text-[1.2rem]">
              Bringing Resources, <span className="text-[#2E9A4A]">Learning</span> and{' '}
              <span className="text-[#2E9A4A]">Opportunity</span> Into Communities.
            </span>
          </>
        }
        description="World Education Society leads community-driven campaigns to remove barriers to education. Through resource distribution, donation drives and local partnerships, we bring learning opportunities directly to the youth who need them most."
        image={campaignImages.backToLearningHero}
        imageAlt="Students with backpacks ready for the school year"
        imageLayout="full"
        imagePosition="center"
      >
        <Link to="/get-involved" className={heroOutlineButton}>
          <span>Get Involved</span>
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link to="/donate" className={heroGreenButton}>
          <span>Support Our Campaigns</span>
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>



      {/* Featured Campaign */}

      <section className="bg-[#FBF9F4] py-12 sm:py-16">

        <div className={pageContainer}>

          <SectionEyebrow>{featuredCampaign.label}</SectionEyebrow>

          <h2 className="mt-2 font-display text-[2rem] font-bold text-[#1B3A6B] sm:text-[2.35rem]">{featuredCampaign.title}</h2>

          <p className="mt-1 text-base font-bold text-[#1B3A6B] sm:text-lg">{featuredCampaign.subtitle}</p>



          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">

            <div className="flex flex-col justify-center lg:col-span-5">

              <p className="text-[15px] leading-relaxed text-[#5C6B7C]">{featuredCampaign.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">

                <ActionButton to="/donate" variant="green">

                  Donate Now

                </ActionButton>

                <ActionButton to="/get-involved" variant="outline">

                  Get Involved

                </ActionButton>

              </div>

            </div>



            <div className="lg:col-span-7">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">

                <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl bg-[#E7EEF2]">

                  <ImagePlaceholder

                    src={featuredCampaign.image}

                    alt={featuredCampaign.imageAlt}

                    fit="contain"

                    className="h-full min-h-[220px] w-full bg-[#EFECE4] sm:min-h-[280px]"

                  />

                </div>

                <aside className="flex w-full shrink-0 flex-col justify-center rounded-2xl border border-[#E6EEF4] bg-white p-5 shadow-[0_8px_24px_-20px_rgba(27,58,107,0.35)] sm:w-[min(100%,280px)]">

                  <CampaignMeta

                    dates={featuredCampaign.dates}

                    location={featuredCampaign.location}

                    audience={featuredCampaign.audience}

                  />

                  <div className="mt-5">

                    <ProgressBar value={featuredCampaign.progress} label={featuredCampaign.progressLabel} compact />

                  </div>

                  <blockquote className="mt-5 rounded-xl bg-[#EAF4FB] px-4 py-3 text-[13px] italic leading-relaxed text-[#3E5670]">

                    {featuredCampaign.quote}

                  </blockquote>

                </aside>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Current Campaigns */}

      <section id="current-campaigns" className="scroll-mt-24 border-t border-[#E6EEF4]/80 bg-white py-12 sm:py-16">

        <div className={pageContainer}>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <SectionHeading>Current Campaigns</SectionHeading>

              <SectionIntro>

                Join us in making a difference. Explore our active campaigns and find a way to get involved.

              </SectionIntro>

            </div>

            <ArrowLink to="/campaigns/all" className="sm:mb-1">

              View All Campaigns

            </ArrowLink>

          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {mainCampaigns.map((campaign) => (

              <CampaignCard key={campaign.slug} campaign={campaign} />

            ))}

          </div>

        </div>

      </section>



      {/* Resource Distribution */}

      <section className="border-t border-[#E6EEF4]/80 bg-[#FBF9F4] py-12 sm:py-14">

        <div className={pageContainer}>

          <div className="overflow-hidden rounded-[24px] bg-[#1B3A6B] shadow-[0_12px_32px_-24px_rgba(27,58,107,0.4)]">

            <div className="grid lg:grid-cols-12 lg:items-stretch">

              <div className="relative min-h-[240px] lg:col-span-5 lg:min-h-0">

                <ImagePlaceholder

                  src={resourceDistributionBanner.image}

                  alt={resourceDistributionBanner.imageAlt}

                  fit="cover"

                  className="absolute inset-0 !rounded-none h-full w-full bg-[#EFECE4]"

                />

              </div>

              <div className="flex flex-col gap-6 px-6 py-8 sm:px-8 lg:col-span-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:self-stretch lg:py-10">

                <div className="min-w-0 flex-1">

                  <SectionEyebrow className="!text-white/70">{resourceDistributionBanner.title}</SectionEyebrow>

                  <p className="mt-2 font-display text-[1.5rem] font-bold leading-tight text-[#2E9A4A] sm:text-[1.75rem]">

                    {resourceDistributionBanner.headline}

                  </p>

                  <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-white/90 sm:text-[15px]">

                    {resourceDistributionBanner.description}

                  </p>

                </div>

                <div className="flex shrink-0 flex-col gap-3 sm:min-w-[200px]">

                  <ActionButton to="/campaigns/donate-supplies" variant="green" className="!justify-center">

                    Donate Supplies

                  </ActionButton>

                  <Link

                    to="/campaigns/organize-a-drive"

                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-transparent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15 sm:text-[15px]"

                  >

                    <span>Organize a Drive</span>

                    <HiArrowRight className="h-4 w-4" aria-hidden="true" />

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Past Campaigns + Upcoming */}
      <section className="border-t border-[#E6EEF4]/80 bg-[#FBF9F4] py-12 sm:py-14">
        <div className={pageContainer}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12">
            <div>
              <CampaignSplitSectionHeader
                title="Past Campaigns"
                linkTo="/campaigns/past"
                linkLabel="View Past Campaigns"
                intro="See the impact we've made together."
              />
              {mainPastCampaign ? (
                <PastCampaignHighlightCard
                  past={{ ...mainPastCampaign, image: CAMPAIGNS_PAGE_PAST_CARD_IMAGE }}
                />
              ) : null}
            </div>
            <div>
              <CampaignSplitSectionHeader
                title="Upcoming Community Drives"
                linkTo="/campaigns/events"
                linkLabel="View All Events"
                intro="Join us at an upcoming event in your community."
              />
              {mainEvent ? (
                <UpcomingEventHighlightCard
                  event={{ ...mainEvent, image: CAMPAIGNS_PAGE_UPCOMING_CARD_IMAGE }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>



      {/* How Campaigns Work */}

      <section className="border-t border-[#E6EEF4]/80 bg-white py-12 sm:py-16">

        <div className={pageContainer}>

          <div className="text-center">

            <SectionHeading>How Campaigns Work</SectionHeading>

            <SectionIntro className="mx-auto">From ideas to impact – together.</SectionIntro>

          </div>

          <ol className="mt-10 flex flex-col items-stretch gap-0 xl:flex-row xl:items-start xl:justify-between">

            {howCampaignsWork.map((step, index) => (

              <li key={step.step} className="relative flex flex-1 flex-col items-center px-2 text-center">

                <span

                  className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-bold text-white shadow-sm ${step.circle}`}

                >

                  {step.step}

                </span>

                <h3 className="mt-4 font-display text-[15px] font-bold text-[#1B3A6B]">{step.title}</h3>

                <p className="mt-2 max-w-[220px] text-[13px] leading-relaxed text-[#5C6B7C]">{step.text}</p>

                {index < howCampaignsWork.length - 1 && (

                  <>

                    <span className="flex justify-center py-4 text-[#1B3A6B]/35 xl:hidden" aria-hidden="true">

                      <HiArrowRight className="h-5 w-5 rotate-90" />

                    </span>

                    <span

                      className="pointer-events-none absolute right-0 top-6 hidden translate-x-1/2 text-[#1B3A6B]/30 xl:block"

                      aria-hidden="true"

                    >

                      <HiArrowRight className="h-5 w-5" />

                    </span>

                  </>

                )}

              </li>

            ))}

          </ol>

        </div>

      </section>



      {/* Campaign Impact */}

      <section className="border-t border-[#E6EEF4]/80 bg-[#FBF9F4] py-12 sm:py-16">

        <div className={pageContainer}>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div className="text-center sm:text-left">

              <SectionHeading>Campaign Impact</SectionHeading>

              <SectionIntro className="sm:mx-0">Real people. Real change.</SectionIntro>

            </div>

            <ArrowLink to="/our-impact" className="mx-auto sm:mx-0 sm:mb-1">

              View Our Impact

            </ArrowLink>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {campaignImpactStats.map((stat) => (

              <div

                key={stat.label}

                className="rounded-2xl border border-[#E6EEF4] bg-white px-5 py-8 text-center shadow-[0_8px_24px_-20px_rgba(27,58,107,0.35)]"

              >

                <ImpactStatIcon type={stat.icon} />

                <p className="mt-4 font-display text-[2rem] font-bold leading-none text-[#1B3A6B] sm:text-[2.15rem]">

                  {stat.value}

                </p>

                <p className="mt-2 text-[13px] font-medium leading-snug text-[#5C6B7C]">{stat.label}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>

  )

}

