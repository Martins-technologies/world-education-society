import { Link, useParams } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import {
  ActionButton,
  CampaignMeta,
  ImagePlaceholder,
  pageContainer,
  ProgressBar,
  SectionEyebrow,
} from '../components/campaigns/CampaignUi'
import { campaignDetails } from '../data/campaignsData'

export default function CampaignDetailPage() {
  const { slug } = useParams()
  const campaign = campaignDetails[slug]

  if (!campaign) {
    return (
      <section className={`${pageContainer} py-32 text-center text-[#1B3A6B]`}>
        <h1 className="text-2xl font-bold">Campaign not found</h1>
        <Link to="/campaigns" className="mt-4 inline-block text-[#1E4E8C] font-semibold hover:underline">
          Back to Campaigns
        </Link>
      </section>
    )
  }

  return (
    <div className="min-w-0 bg-[#FBF9F4] pb-20 pt-[74px] text-[#1B3A6B]">
      <div className={`${pageContainer} py-12 sm:py-16`}>
        <Link
          to="/campaigns"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4E8C] transition-colors hover:text-[#163E70]"
        >
          <HiArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
          <span>Back to Campaigns</span>
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <ImagePlaceholder
              src={campaign.image}
              alt={campaign.imageAlt || campaign.title}
              className="aspect-[4/3] w-full rounded-2xl"
            />
          </div>
          <div className="lg:col-span-6">
            <SectionEyebrow>Current Campaign</SectionEyebrow>
            <h1 className="mt-3 font-sans text-3xl font-bold text-[#1B3A6B] sm:text-4xl">{campaign.title}</h1>
            {campaign.subtitle ? (
              <p className="mt-2 text-lg font-medium text-[#2E9A4A]">{campaign.subtitle}</p>
            ) : null}
            <div className="mt-4 h-1 w-10 rounded-full bg-[#E0A11B]" />
            <p className="mt-5 text-base leading-relaxed text-[#5C6B7C]">{campaign.overview}</p>
            <div className="mt-6">
              <CampaignMeta dates={campaign.dates} location={campaign.location} audience={campaign.audience} />
            </div>
            <div className="mt-6 max-w-md">
              <ProgressBar value={campaign.progress} label={campaign.progressLabel} />
            </div>
            {campaign.quote ? (
              <blockquote className="mt-6 border-l-2 border-[#D7E7F3] pl-4 text-sm italic leading-relaxed text-[#3E5670]">
                {campaign.quote}
              </blockquote>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              {campaign.actions.map((action) => (
                <ActionButton key={action.label} to={action.href} variant={action.variant}>
                  {action.label}
                </ActionButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
