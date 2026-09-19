import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

export default function Purpose() {
  return (
    <section className="py-16 sm:py-24 bg-[#FBF9F4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Supporting Image */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-[24px] bg-gray-100 aspect-[1.33/1]">
              <img
                src="/Home/purpose.jpg"
                alt="Students studying together around a laptop"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
              OUR PURPOSE
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#242A38] sm:text-4xl font-sans mb-4">
              Opportunity begins<br />
              with support.
            </h2>

            <p className="max-w-lg text-base leading-relaxed text-[#5B6478] mb-6">
              Education can open possibilities for individuals and entire communities. We bring guidance, learning opportunities and community support together to help people take their next step.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D90C4] transition-colors hover:text-[#0B76A3]"
            >
              <span>More about World Education Society</span>
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
