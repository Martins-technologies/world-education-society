import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const heroSlides = [
  {
    image: '/team.jpeg',
    alt: 'Group of students smiling together outdoors on campus',
    color: '#0D90C4',
  },
  {
    image: '/Home/05_a_bright_realistic_high_resolution_outdoor_campu.webp',
    alt: 'Bright realistic outdoor campus with students',
    color: '#4FAA4A',
  },
  {
    image: '/Home/15_outdoor_graduation_portrait_scene_on_a_college_cam.webp',
    alt: 'Outdoor graduation portrait scene on a college campus',
    color: '#61589B',
  },
  {
    image: '/Home/01_a_bright_modern_indoor_study_learning_scene_in_a.webp',
    alt: 'Bright modern indoor study learning scene',
    color: '#EC9136',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20 bg-[#FBF9F4]">
      <div className="container mx-auto px-[15px] sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-4">
              LEARNING. BELONGING. OPPORTUNITY.
            </p>

            <h1 className="text-4xl font-bold leading-[1.1] text-[#242A38] sm:text-5xl lg:text-[3.6rem] font-sans">
              Education<br />
              changes <span className="text-[#0D90C4]">lives.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#5B6478] sm:text-lg">
              World Education Society is a non-profit organization helping people access educational opportunities through guidance, support and community partnerships.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center rounded-full bg-[#0D90C4] px-7 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#0B76A3]"
              >
                Explore Our Programs
              </Link>
              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center rounded-full border border-[#242A38] px-7 py-3.5 text-sm font-semibold text-[#242A38] transition-colors hover:bg-[#242A38] hover:text-white"
              >
                Get Involved
              </Link>
            </div>

            <p className="mt-8 text-xs font-medium text-[#5B6478]/80 sm:text-sm">
              For students. For communities. For a fairer future.
            </p>
          </div>

          {/* Hero Image Block */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <div className="relative overflow-hidden rounded-[28px] bg-[#EFECE4] aspect-[4/3]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={heroSlides[currentSlide].image}
                    alt={heroSlides[currentSlide].alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full object-contain absolute inset-0 rounded-[28px]"
                  />
                </AnimatePresence>
              </div>

              {/* Carousel indicator dots */}
              <div className="mt-3 flex items-center gap-1.5 pl-1">
                {heroSlides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="focus:outline-none cursor-pointer"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'w-6' : 'w-3 opacity-60 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: slide.color }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}