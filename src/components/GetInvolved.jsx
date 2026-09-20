import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { getInvolvedItems } from '../data/content'

export default function GetInvolved() {
  return (
    <section className="py-16 sm:py-24 bg-[#FBF9F4]">
      <div className="container mx-auto px-[15px] sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
              GET INVOLVED
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#242A38] sm:text-4xl font-sans mb-4">
              Bring what you know.<br />
              Help someone grow.
            </h2>

            <p className="max-w-md text-base leading-relaxed text-[#5B6478] mb-4">
              Education is a shared effort. Discover how your time, experience or organization can help create opportunities.
            </p>

            <div className="mb-6">
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D90C4] cursor-pointer hover:underline"
              >
                <span>Ways to get involved</span>
                <HiArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Left Supporting Image */}
            <div className="overflow-hidden rounded-[20px] bg-gray-100 aspect-[16/9] w-full">
              <img
                src="/Home/get-involved.jpg"
                alt="Volunteers packing boxes of books in community library"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: 3 Row Items */}
          <div className="lg:col-span-6 pt-2">
            <div className="flex flex-col space-y-6">
              {getInvolvedItems.map((item, idx) => (
                <Link
                  key={idx}
                  to="/get-involved"
                  className="border-t border-[#242A38]/15 pt-6 group cursor-pointer block"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#242A38] transition-colors group-hover:text-[#0D90C4]">
                      {item.title}
                    </h3>
                    <HiArrowRight className="h-5 w-5 text-[#0D90C4] transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1.5 text-sm text-[#5B6478] leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
