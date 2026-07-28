import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import About from '../components/About'
import Services from '../components/Services'
import Destinations from '../components/Destinations'
import Scholarships from '../components/Scholarships'
import Courses from '../components/Courses'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import SectionDivider from '../components/SectionDivider'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider tone="dark" />
      <Highlights />
      <About />
      <Services />
      <Destinations />
      <SectionDivider tone="dark" />
      <Scholarships />
      <Courses />
      <HowItWorks />
      <SectionDivider tone="dark" />
      <Testimonials />
      <CTA />
    </>
  )
}
