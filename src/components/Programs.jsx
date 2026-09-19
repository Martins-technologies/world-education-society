import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { programCategories } from '../data/content'

export default function Programs() {
  return (
    <section className="py-16 sm:py-24 bg-[#FBF9F4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
            OUR PROGRAMS
          </p>
          <h2 className="text-3xl font-bold text-[#242A38] sm:text-4xl font-sans mb-2">
            Find your next step.
          </h2>
          <p className="text-base text-[#5B6478]">
            Practical guidance and learning opportunities, built around people.
          </p>
        </div>

        {/* Content Layout: Left side image/caption + Right side 6-item grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Left Supporting Side Column */}
          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-[20px] bg-gray-100 aspect-square w-full">
              <img
                src="/Home/programs-side.jpg"
                alt="Smiling student looking forward"
                className="h-full w-full object-cover"
              />
            </div>
            
            <h3 className="mt-5 text-lg font-bold text-[#242A38]">
              For every starting point.
            </h3>
            <p className="mt-1 text-sm text-[#5B6478] leading-relaxed">
              Students. Lifelong learners.<br />Communities.
            </p>

            <div className="mt-4">
              <Link
                to="/programs"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D90C4] hover:underline"
              >
                <span>Explore our programs</span>
                <HiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Side Program Category Grid */}
          <div className="lg:col-span-8">
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {programCategories.map((item) => (
                <div key={item.id} className="flex flex-col pt-1">
                  {/* Top Color Bar Line */}
                  <div
                    className="h-1 w-9 rounded-full mb-3"
                    style={{ backgroundColor: item.color }}
                  />
                  <h4 className="text-lg font-bold text-[#242A38]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-[#5B6478]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Full-width supporting image band below grid */}
        <div className="mt-14 overflow-hidden rounded-[24px]">
          <img
            src="/Home/programs-band.jpg"
            alt="Students collaborating on hands-on project in workshop"
            className="h-[280px] sm:h-[380px] lg:h-[420px] w-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}
