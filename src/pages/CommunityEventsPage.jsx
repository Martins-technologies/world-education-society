import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import {
  ActionButton,
  CampaignMeta,
  ImagePlaceholder,
  pageContainer,
  SectionEyebrow,
  SectionIntro,
  SectionTitle,
} from '../components/campaigns/CampaignUi'
import { communityEvents } from '../data/campaignsData'

export default function CommunityEventsPage() {
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
        <SectionEyebrow className="mt-8">Upcoming Community Drives</SectionEyebrow>
        <SectionTitle>View All Events</SectionTitle>
        <SectionIntro>Join us at an upcoming event in your community.</SectionIntro>
        <div className="mt-10 space-y-5">
          {communityEvents.map((event) => (
            <article
              key={event.slug}
              className="flex flex-col gap-6 rounded-2xl border border-[#E6EEF4] bg-white p-6 shadow-[0_12px_30px_-24px_rgba(27,58,107,0.45)] sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex w-full max-w-[200px] shrink-0 items-center justify-center self-stretch rounded-xl bg-[#F6F9FB] sm:max-w-[220px]">
                  <ImagePlaceholder
                    src={event.image}
                    alt={event.imageAlt || event.title}
                    fit="contain"
                    className="!rounded-none h-auto w-full max-h-[160px] sm:max-h-[180px]"
                  />
                </div>
                <div>
                  <h3 className="font-sans text-xl font-semibold text-[#1B3A6B]">{event.title}</h3>
                  <CampaignMeta dates={event.date} location={event.location} />
                </div>
              </div>
              <ActionButton to="/contact" variant="green">Join Us</ActionButton>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
