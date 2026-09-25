import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import { ActionButton, ImagePlaceholder, pageContainer, SectionEyebrow, SectionTitle } from '../components/campaigns/CampaignUi'
import { campaignImages } from '../data/campaignsData'

export default function CampaignOrganizeDrivePage() {
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
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionEyebrow>Resource Distribution &amp; Donation Drives</SectionEyebrow>
            <SectionTitle>Organize a Drive</SectionTitle>
            <div className="mt-4 h-1 w-10 rounded-full bg-[#E0A11B]" />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5C6B7C]">
              WES organizes donation drives that help remove barriers and open doors for youth through educational resources.
            </p>
            <div className="mt-8">
              <ActionButton to="/contact" variant="primary">Contact Us</ActionButton>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-[20px] border border-[#E6EEF4] bg-[#F6F9FB]">
              <ImagePlaceholder
                src={campaignImages.organizeDrivePage}
                alt="Students taking notes during a lecture in an auditorium"
                fit="contain"
                className="block h-auto w-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
