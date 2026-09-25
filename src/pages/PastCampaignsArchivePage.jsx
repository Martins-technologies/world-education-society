import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import {
  ActionButton,
  CampaignMeta,
  ImagePlaceholder,
  pageContainer,
  SectionEyebrow,
  SectionTitle,
} from '../components/campaigns/CampaignUi'
import { pastCampaigns } from '../data/campaignsData'

export default function PastCampaignsArchivePage() {
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
        <SectionEyebrow className="mt-8">Past Campaigns</SectionEyebrow>
        <SectionTitle>Past Campaigns Archive</SectionTitle>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#5C6B7C]">See the impact we&apos;ve made together.</p>
        <div className="mt-10 space-y-6">
          {pastCampaigns.map((campaign) => (
            <article
              key={campaign.slug}
              className="grid overflow-hidden rounded-2xl border border-[#E6EEF4] bg-white lg:grid-cols-12"
            >
              <div className="flex items-center justify-center bg-[#F6F9FB] p-4 lg:col-span-4">
                <ImagePlaceholder
                  src={campaign.image}
                  alt={campaign.imageAlt || campaign.title}
                  fit="contain"
                  className="!rounded-none h-auto max-h-[280px] w-full object-contain object-center lg:max-h-[320px]"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 lg:col-span-8 lg:px-10">
                <h3 className="font-sans text-2xl font-semibold text-[#1B3A6B]">{campaign.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5C6B7C]">{campaign.description}</p>
                <div className="mt-4">
                  <CampaignMeta dates={campaign.dates} location={campaign.location} reach={campaign.reach} />
                </div>
                <p className="mt-3 text-sm font-semibold text-[#1E4E8C]">{campaign.status}</p>
                <div className="mt-5">
                  <ActionButton to="/our-impact" variant="primary">View Impact</ActionButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
