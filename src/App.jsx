import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { ComingSoonProvider } from './components/ComingSoonProvider'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurPrograms from './pages/OurPrograms'
import GetInvolvedPage from './pages/GetInvolvedPage'
import VolunteerWithUsPage from './pages/VolunteerWithUsPage'
import ContactUsPage from './pages/ContactUsPage'
import OurImpact from './pages/OurImpact'
import Resources from './pages/Resources'
import TransportationAssistance from './pages/TransportationAssistance'
import ComingSoon from './pages/ComingSoon'
import CampaignsPage from './pages/CampaignsPage'
import CampaignDetailPage from './pages/CampaignDetailPage'
import PastCampaignsArchivePage from './pages/PastCampaignsArchivePage'
import CommunityEventsPage from './pages/CommunityEventsPage'
import CampaignDonateSuppliesPage from './pages/CampaignDonateSuppliesPage'
import CampaignOrganizeDrivePage from './pages/CampaignOrganizeDrivePage'

export default function App() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-clip bg-[#FBF9F4]">
      <ComingSoonProvider>
      <ScrollToTop />
      <Navbar />
      <main className="min-w-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/programs" element={<OurPrograms />} />
          <Route path="/our-programs" element={<OurPrograms />} />
          <Route path="/programs/transportation-assistance" element={<TransportationAssistance />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/get-involved/volunteer-with-us" element={<VolunteerWithUsPage />} />
          <Route path="/getinvolved" element={<GetInvolvedPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/campaigns/all" element={<Navigate to="/campaigns#current-campaigns" replace />} />
          <Route path="/campaigns/past" element={<PastCampaignsArchivePage />} />
          <Route path="/campaigns/events" element={<CommunityEventsPage />} />
          <Route path="/campaigns/donate-supplies" element={<CampaignDonateSuppliesPage />} />
          <Route path="/campaigns/organize-a-drive" element={<CampaignOrganizeDrivePage />} />
          <Route path="/campaigns/:slug" element={<CampaignDetailPage />} />
          {/* Every other route is a placeholder until that page is built */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
      </ComingSoonProvider>
    </div>
  )
}
