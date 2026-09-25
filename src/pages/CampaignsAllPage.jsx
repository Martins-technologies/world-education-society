import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import { CampaignCard, pageContainer, SectionEyebrow, SectionIntro, SectionTitle } from '../components/campaigns/CampaignUi'
import { currentCampaigns } from '../data/campaignsData'

export default function CampaignsAllPage() {
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
        <SectionEyebrow className="mt-8">Current Campaigns</SectionEyebrow>
        <SectionTitle>View All Campaigns</SectionTitle>
        <SectionIntro>Explore our active campaigns and find a way to get involved.</SectionIntro>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {currentCampaigns.map((campaign) => (
            <CampaignCard key={campaign.slug} campaign={campaign} />
          ))}
        </div>
      </div>
    </div>
  )
}
