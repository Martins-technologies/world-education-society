import { Link } from 'react-router-dom'

import { HiArrowRight, HiUserGroup } from 'react-icons/hi2'

import PageHero, { heroGreenButton, heroOutlineButton, heroPrimaryButton } from '../components/PageHero'
import ComingSoonButton from '../components/ComingSoonButton'

import {

  ActionButton,

  ArrowLink,

  CampaignCard,

  CampaignHeroStat,

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

  campaignHeroStats,

  campaignImpactStats,

  communityEvents,

  currentCampaigns,

  featuredCampaign,

  howCampaignsWork,

  pastCampaigns,

  resourceDistributionBanner,

} from '../data/campaignsData'



const mainPastCampaign = pastCampaigns.find((c) => c.showOnMain) ?? pastCampaigns[0]

const mainEvent = communityEvents.find((e) => e.showOnMain) ?? communityEvents[0]

/** /campaigns only — highlight cards use dedicated images (not shared with archive/events). */
const CAMPAIGNS_PAGE_PAST_CARD_IMAGE = campaignImages.communityLearningOutreach
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
            <span className="mt-2 block text-[1.05rem] leading-snug text-[#2E9A4A] sm:text-[1.15rem] lg:text-[1.02rem] xl:text-[1.1rem] min-[1440px]:text-[1.2rem]">
              Bringing Resources, Learning and Opportunity Into Communities.
            </span>
          </>
        }
        description="World Education Society leads community-driven campaigns to remove barriers to education. Through resource distribution, donation drives and local partnerships, we bring learning opportunities directly to the youth who need them most."
        image={campaignImages.backToLearningHero}
        imageAlt="Students and volunteers at a community campaign bringing learning resources to youth"
        imageLayout="full"
        imagePosition="center top"
        footnote={
          <div className="flex max-w-[480px] items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E7F1FB] text-[#1E4E8C]">
              <HiUserGroup className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-[13px] leading-relaxed text-[#5C6B7C]">
              Community campaigns connect donations, volunteers and local partners so students can access supplies,
              skills programs and learning resources where they are needed most.
            </p>
          </div>
        }
      >
        <a href="#current-campaigns" className={heroPrimaryButton}>
          Explore Current Campaigns
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <Link to="/get-involved" className={heroOutlineButton}>
          Get Involved
        </Link>
      </PageHero>

      <section className="bg-[#F7FBFE]">
        <div className="relative mx-auto max-w-[1380px] px-6 pb-14 sm:px-8 lg:px-12 xl:px-16 lg:pb-16">
          <div className="grid grid-cols-2 divide-[#E6EEF4] overflow-hidden rounded-2xl border border-[#E6EEF4] bg-white shadow-[0_10px_30px_-24px_rgba(27,58,107,0.5)] sm:grid-cols-3 xl:grid-cols-6 xl:divide-x">
            {campaignHeroStats.map((item) => (
              <div key={item.label} className="flex flex-col items-center px-3 py-5 text-center">
                <CampaignHeroStat value={item.value} label={item.label} icon={item.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>

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

                <ComingSoonButton
                  message="Online donations will be available soon. Thank you for your interest in supporting our work."
                  className={`${heroGreenButton} !justify-center`}
                >
                  <span>Donate Now</span>
                  <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                </ComingSoonButton>

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

          <div>

              <SectionHeading>Current Campaigns</SectionHeading>

              <SectionIntro>

                Join us in making a difference. Explore our active campaigns and find a way to get involved.

              </SectionIntro>

            </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {currentCampaigns.map((campaign) => (

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
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-8 xl:gap-12">
            <div className="flex min-w-0 flex-col">
              <CampaignSplitSectionHeader
                title="Past Campaigns"
                linkTo="/campaigns/past"
                linkLabel="View Past Campaigns"
                intro="See the impact we've made together."
              />
              {mainPastCampaign ? (
                <PastCampaignHighlightCard
                  past={{
                    ...mainPastCampaign,
                    image: CAMPAIGNS_PAGE_PAST_CARD_IMAGE,
                    imageAlt: mainPastCampaign.imageAlt,
                  }}
                />
              ) : null}
            </div>
            <div className="flex min-w-0 flex-col">
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

