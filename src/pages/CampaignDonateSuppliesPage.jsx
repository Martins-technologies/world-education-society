import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import { ActionButton, ImagePlaceholder, pageContainer, SectionEyebrow, SectionTitle } from '../components/campaigns/CampaignUi'
import { campaignImages } from '../data/campaignsData'

export default function CampaignDonateSuppliesPage() {
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
            <SectionTitle>Donate Supplies</SectionTitle>
            <div className="mt-4 h-1 w-10 rounded-full bg-[#E0A11B]" />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5C6B7C]">
              Donation drives distribute educational resources including books, school supplies, technology and more to support youth in communities across Canada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton to="/contact" variant="primary">Contact Us</ActionButton>
              <ActionButton to="/donate" variant="green">Donate</ActionButton>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-[20px] border border-[#E6EEF4] bg-[#F6F9FB]">
              <ImagePlaceholder
                src={campaignImages.donateSuppliesPage}
                alt="Row of colorful books against a bright yellow background"
                fit="contain"
                className="aspect-[4/3] w-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
