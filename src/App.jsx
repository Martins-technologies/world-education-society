import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurPrograms from './pages/OurPrograms'
import GetInvolvedPage from './pages/GetInvolvedPage'
import ContactUsPage from './pages/ContactUsPage'
import OurImpact from './pages/OurImpact'
import Resources from './pages/Resources'
import TransportationAssistance from './pages/TransportationAssistance'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF9F4]">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/programs" element={<OurPrograms />} />
          <Route path="/our-programs" element={<OurPrograms />} />
          <Route path="/programs/transportation-assistance" element={<TransportationAssistance />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/getinvolved" element={<GetInvolvedPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route path="/resources" element={<Resources />} />
          {/* Every other route is a placeholder until that page is built */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
