import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const helpOptions = [
    'General Inquiry',
    'Education Guidance',
    'Student Support',
    'Study Opportunities',
    'Scholarships & Funding',
    'Volunteering & Get Involved',
    'Community Partnerships',
  ]

  const validate = () => {
    const errs = {}
    if (!formData.firstName.trim()) errs.firstName = 'First Name is required'
    if (!formData.lastName.trim()) errs.lastName = 'Last Name is required'
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address'
    }
    if (!formData.category) errs.category = 'Please select how we can help you'
    if (!formData.message.trim()) errs.message = 'Message is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    // Simulate wired CRM submission
    setTimeout(() => {
      setStatus('success')
    }, 600)
  }

  const scrollToForm = () => {
    const formElement = document.getElementById('message-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-[#FBF9F4] min-h-screen text-[#242A38]">
      
      {/* 1) HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20 bg-[#FBF9F4]">
        <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Text Content */}
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-4">
                CONTACT US
              </p>

              <h1 className="text-4xl font-bold leading-[1.1] text-[#242A38] sm:text-5xl lg:text-[3.6rem] font-sans">
                We&apos;re here<br />
                to <span className="text-[#0D90C4]">help.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#5B6478] sm:text-lg">
                Have a question, need guidance or want to learn more about our programs? We&apos;d love to hear from you. Our team is here to support you.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center rounded-full bg-[#0D90C4] px-7 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#0B76A3] cursor-pointer"
                >
                  Get in Touch
                </button>
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center rounded-full border border-[#242A38] px-7 py-3.5 text-sm font-semibold text-[#242A38] transition-colors hover:bg-[#242A38] hover:text-white"
                >
                  Explore Programs
                </Link>
              </div>

              <p className="mt-8 text-xs font-medium text-[#5B6478]/80 sm:text-sm">
                For students. For communities. For a fairer future.
              </p>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-xl lg:max-w-none">
                <div className="relative overflow-hidden rounded-[28px] bg-[#EFECE4] aspect-[4/3] shadow-xs">
                  <img
                    src="/contact-us/hero.webp"
                    alt="Advisor speaking warmly with student"
                    className="h-full w-full object-cover object-top absolute inset-0 rounded-[28px]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2) REACH OUT TO OUR TEAM & 3) CONTACT DETAILS */}
      <section className="py-16 sm:py-24 border-t border-[#242A38]/5">
        <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 mb-16">
            
            {/* Left Supporting Image */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[28px] bg-gray-100 aspect-[1.33/1] shadow-xs">
                <img
                  src="/contact-us/team.webp"
                  alt="Team members discussing ideas around laptop"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
                LET&apos;S CONNECT
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#242A38] sm:text-4xl font-sans mb-3">
                Reach out to<br />
                <span className="text-[#0D90C4]">our team.</span>
              </h2>

              <div className="h-1 w-10 rounded-full bg-[#EC9136] mb-5" />

              <p className="max-w-lg text-base leading-relaxed text-[#5B6478]">
                Whether you&apos;re a student, parent, educator, community partner or supporter, we&apos;re here to answer your questions and help you find the right next step.
              </p>
            </div>

          </div>

          {/* 3) Contact Details 3-Column Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#242A38]/10 gap-6 sm:gap-0 pt-8 border-t border-[#242A38]/10">
            
            {/* Phone */}
            <div className="flex items-center gap-4 sm:justify-center sm:px-4 py-4 sm:py-0">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E5F5FC] text-[#0D90C4]">
                <HiPhone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#242A38]">Phone</h3>
                <a href="tel:+15874384634" className="text-sm text-[#5B6478] hover:text-[#0D90C4] transition-colors">
                  +1 587-438-4634
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 sm:justify-center sm:px-4 py-4 sm:py-0">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E5F5FC] text-[#0D90C4]">
                <HiMail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#242A38]">Email</h3>
                <a href="mailto:info@worldeducationsociety.com" className="text-sm text-[#5B6478] hover:text-[#0D90C4] transition-colors">
                  info@worldeducationsociety.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 sm:justify-center sm:px-4 py-4 sm:py-0">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E5F5FC] text-[#0D90C4]">
                <HiLocationMarker className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#242A38]">Address</h3>
                <p className="text-sm text-[#5B6478] leading-snug">
                  345, 3016 5th Ave NE<br />Calgary, AB T2A 5L7
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 4) SEND US A MESSAGE SECTION */}
      <section id="message-form" className="py-16 sm:py-24 border-t border-[#242A38]/5 bg-[#FBF9F4]">
        <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 items-start">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
                SEND US A MESSAGE
              </p>
              <h2 className="text-3xl font-bold text-[#242A38] sm:text-4xl font-sans mb-3">
                We&apos;d love to<br />
                <span className="text-[#0D90C4]">hear from you.</span>
              </h2>

              <div className="h-1 w-10 rounded-full bg-[#EC9136] mb-8" />

              {status === 'success' ? (
                <div className="rounded-2xl bg-[#E8F8EE] border border-[#4FAA4A]/30 p-8 text-center">
                  <h3 className="text-xl font-bold text-[#242A38] mb-2">
                    Thank you! Your message has been sent.
                  </h3>
                  <p className="text-sm text-[#5B6478] max-w-md mx-auto">
                    We have received your details and our team will get back to you within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle')
                      setFormData({ firstName: '', lastName: '', email: '', phone: '', category: '', message: '' })
                    }}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0D90C4] px-6 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-[#0B76A3]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-5" noValidate>
                  
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name*"
                        className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-sm text-[#242A38] placeholder:text-[#5B6478]/60 focus:outline-none transition-colors ${
                          errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-[#242A38]/15 focus:border-[#0D90C4]'
                        }`}
                      />
                      {errors.firstName && <span className="text-xs text-red-500 mt-1 block pl-1">{errors.firstName}</span>}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name*"
                        className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-sm text-[#242A38] placeholder:text-[#5B6478]/60 focus:outline-none transition-colors ${
                          errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-[#242A38]/15 focus:border-[#0D90C4]'
                        }`}
                      />
                      {errors.lastName && <span className="text-xs text-red-500 mt-1 block pl-1">{errors.lastName}</span>}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address*"
                        className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-sm text-[#242A38] placeholder:text-[#5B6478]/60 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#242A38]/15 focus:border-[#0D90C4]'
                        }`}
                      />
                      {errors.email && <span className="text-xs text-red-500 mt-1 block pl-1">{errors.email}</span>}
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full rounded-2xl border border-[#242A38]/15 bg-white px-4 py-3.5 text-sm text-[#242A38] placeholder:text-[#5B6478]/60 focus:border-[#0D90C4] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* How can we help you? */}
                  <div>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-sm text-[#242A38] focus:outline-none transition-colors appearance-none ${
                        errors.category ? 'border-red-500 focus:border-red-500' : 'border-[#242A38]/15 focus:border-[#0D90C4]'
                      } ${!formData.category ? 'text-[#5B6478]/60' : 'text-[#242A38]'}`}
                    >
                      <option value="" disabled>How can we help you?*</option>
                      {helpOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-[#242A38]">{opt}</option>
                      ))}
                    </select>
                    {errors.category && <span className="text-xs text-red-500 mt-1 block pl-1">{errors.category}</span>}
                  </div>

                  {/* Your Message */}
                  <div>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message*"
                      className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-sm text-[#242A38] placeholder:text-[#5B6478]/60 focus:outline-none transition-colors ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#242A38]/15 focus:border-[#0D90C4]'
                      }`}
                    />
                    {errors.message && <span className="text-xs text-red-500 mt-1 block pl-1">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center gap-2 justify-center rounded-full bg-[#0D90C4] px-8 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#0B76A3] disabled:opacity-50 cursor-pointer"
                    >
                      <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                      <HiArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* Right Column: Supporting Image & Map Panel */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              
              {/* Supporting Image */}
              <div className="overflow-hidden rounded-[28px] bg-gray-100 aspect-[1.2/1] shadow-xs relative">
                <img
                  src="/contact-us/message_side.webp"
                  alt="Students interacting warmly in learning hub"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Map Panel: Find Us Here */}
              <div className="rounded-[28px] bg-white border border-[#242A38]/10 p-5 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-[#242A38]">
                    Find Us Here
                  </h3>
                  <a
                    href="https://maps.google.com/?q=345,+3016+5th+Ave+NE,+Calgary,+AB+T2A+5L7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0D90C4] hover:underline"
                  >
                    <span>Open Live Map</span>
                    <HiArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                
                {/* Embedded Live Google Map */}
                <div className="relative overflow-hidden rounded-2xl aspect-[1.6/1] w-full border border-[#242A38]/10 shadow-xs bg-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.7738508032944!2d-113.99268432446563!3d51.05726344348883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b2a601dbaed%3A0xe3863f2a191ab3a8!2s3016%205%20Ave%20NE%20%23345%2C%20Calgary%2C%20AB%20T2A%206K4%2C%20Canada!5e0!3m2!1sen!2s!4v1789857747649!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="World Education Society Location Map"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>

                {/* Address Info & Open in Google Maps link below map */}
                <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#242A38]/10 text-xs">
                  <div className="flex items-center gap-2 text-[#5B6478]">
                    <HiLocationMarker className="h-4 w-4 text-red-600 shrink-0" />
                    <span>345, 3016 5th Ave NE, Calgary, AB T2A 5L7</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=345,+3016+5th+Ave+NE,+Calgary,+AB+T2A+5L7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#0D90C4] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <HiArrowRight className="h-3 w-3" />
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 5) BOTTOM CTA BAND (Soft Light-Blue Treatment) */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="overflow-hidden rounded-[32px] bg-[#E5F5FC] px-8 sm:px-12 py-12 sm:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              
              {/* Left Text Block */}
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D90C4] mb-3">
                  TOGETHER WE CAN
                </p>
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl font-sans text-[#242A38]">
                  Create more opportunities.
                </h2>
                <p className="mt-2 text-base text-[#5B6478] font-normal">
                  Get in touch to learn how you can support, partner or get involved.
                </p>
              </div>

              {/* Right Button */}
              <div className="flex items-center md:justify-end">
                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 justify-center rounded-full bg-[#0D90C4] px-8 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#0B76A3]"
                >
                  <span>Get Involved</span>
                  <HiArrowRight className="h-4 w-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
