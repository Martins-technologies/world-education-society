import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiChevronDown, HiChevronRight } from 'react-icons/hi'
import {
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
  HiOutlinePhone,
} from 'react-icons/hi2'
import PageHero, { heroPrimaryButton, pageContainer } from '../components/PageHero'
import { ArrowLink, SectionHeading } from '../components/campaigns/CampaignUi'
import { footerLinks } from '../data/content'
import { submitFormEmail } from '../utils/submitFormEmail.js'

const CONTACT_HERO_IMAGE = '/contacthero.jpeg'
const { contactInfo } = footerLinks

const contactingAsOptions = [
  'Student',
  'Parent or Guardian',
  'Educator',
  'Community Partner',
  'Volunteer',
  'Supporter',
  'Other',
]

const faqQuestions = [
  'How quickly will I receive a response?',
  'Can I apply for support if I\'m not a student?',
  'How can I become a volunteer?',
]

const labelClass = 'mb-1.5 block text-[12px] font-semibold text-[#1B3A6B]'
const controlClass =
  'w-full rounded-lg border border-[#E3EAF1] bg-white px-3 py-2.5 text-[13px] text-[#1B3A6B] placeholder:text-[#9AA8B5] focus:border-[#1E4E8C] focus:outline-none'

function Required() {
  return <span className="text-[#D14343]"> *</span>
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className={labelClass}>
        {label}
        {required ? <Required /> : null}
      </span>
      {children}
    </label>
  )
}

function TextInput({ name, placeholder, required, type = 'text', value, onChange }) {
  return (
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={controlClass}
    />
  )
}

function SelectInput({ name, placeholder, options, required, value, onChange }) {
  return (
    <span className="relative block">
      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={`${controlClass} appearance-none pr-9 ${value ? 'text-[#1B3A6B]' : 'text-[#9AA8B5]'}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-[#1B3A6B]">
            {option}
          </option>
        ))}
      </select>
      <HiChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A97A6]"
        aria-hidden="true"
      />
    </span>
  )
}

function ContactInfoRow({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-3.5 border-b border-[#E6EEF4] py-4 last:border-b-0 sm:gap-4 sm:py-5">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F2FC] text-[#1E4E8C]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0 pt-0.5">
        <p className="font-sans text-[14px] font-bold text-[#1B3A6B]">{title}</p>
        <div className="mt-1 text-[13px] leading-relaxed text-[#5C6B7C]">{children}</div>
      </div>
    </div>
  )
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactingAs: '',
    subject: '',
    message: '',
    preferredContact: 'Email',
  })
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      await submitFormEmail({
        subject: `Contact Us: ${formData.subject}`,
        replyTo: formData.email,
        sections: [
          {
            title: 'Contact message',
            items: [
              { label: 'Name', value: formData.name },
              { label: 'Email', value: formData.email },
              { label: 'Phone', value: formData.phone },
              { label: 'Contacting as', value: formData.contactingAs },
              { label: 'Subject', value: formData.subject },
              { label: 'Preferred contact method', value: formData.preferredContact },
              { label: 'Message', value: formData.message },
            ],
          },
        ],
      })
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        contactingAs: '',
        subject: '',
        message: '',
        preferredContact: 'Email',
      })
    } catch {
      setStatus('error')
      setErrorMessage('Unable to send your message. Please try again or contact us directly.')
    }
  }

  return (
    <div className="min-w-0 overflow-x-clip bg-[#F7FBFE] text-[#1B3A6B]">
      <PageHero
        title={
          <>
            Contact Us
            <span className="mt-2 block text-[1.05rem] font-semibold leading-snug text-[#2E9A4A] sm:text-[1.15rem] lg:text-[1.02rem] xl:text-[1.1rem] min-[1440px]:text-[1.2rem]">
              We&apos;re Here to Help.
            </span>
          </>
        }
        description="Students, families, volunteers, and partners are welcome to reach out. Together, we can create brighter futures and stronger communities."
        image={CONTACT_HERO_IMAGE}
        imageAlt="Three students smiling together outdoors with laptops and notebooks"
        imageLayout="full"
        imagePosition="center center"
        breadcrumb={
          <nav aria-label="Breadcrumb" className="mb-4 max-w-full text-[13px] leading-relaxed text-[#8A97A6]">
            <Link to="/" className="transition-colors hover:text-[#1E4E8C]">
              Home
            </Link>
            <span className="mx-1.5" aria-hidden="true">
              ›
            </span>
            <span className="text-[#5C6B7C]">Contact Us</span>
          </nav>
        }
      />

      <section className="border-t border-[#E6EEF4] bg-[#F7FBFE] py-12 sm:py-16">
        <div className={pageContainer}>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
            {/* Send Us a Message */}
            <div className="rounded-2xl border border-[#E6EEF4] bg-[#EAF4FB]/60 p-6 shadow-[0_12px_30px_-24px_rgba(27,58,107,0.35)] sm:p-8">
              <h2 className="font-display text-[1.5rem] font-bold leading-tight text-[#1B3A6B] sm:text-[1.65rem]">
                Send Us a Message
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-[#5C6B7C]">
                Tell us how we can help. We&apos;ll get back to you as soon as possible.
              </p>

              {status === 'success' ? (
                <div
                  className="mt-6 rounded-xl border border-[#C5E8CE] bg-[#F3FBF5] px-4 py-5 sm:px-5"
                  role="status"
                >
                  <p className="font-sans text-[15px] font-bold text-[#1B3A6B]">Thank you — your message has been sent.</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5C6B7C]">
                    We typically respond within 1–2 business days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className={`${heroPrimaryButton} mt-4 !px-5 !py-2.5 !text-[13px]`}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                  {status === 'error' && errorMessage ? (
                    <p className="rounded-lg border border-[#F0C9C9] bg-[#FEF6F6] px-3 py-2.5 text-[13px] text-[#8B3A3A]" role="alert">
                      {errorMessage}
                    </p>
                  ) : null}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" required>
                      <TextInput
                        name="name"
                        placeholder="Your full name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Field>
                    <Field label="Email" required>
                      <TextInput
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone" required>
                      <TextInput
                        name="phone"
                        type="tel"
                        placeholder="e.g. +1 587-438-4634"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Field>
                    <Field label="I am contacting you as" required>
                      <SelectInput
                        name="contactingAs"
                        placeholder="Select an option"
                        options={contactingAsOptions}
                        required
                        value={formData.contactingAs}
                        onChange={handleChange}
                      />
                    </Field>
                  </div>

                  <Field label="Subject" required>
                    <TextInput
                      name="subject"
                      placeholder="How can we help?"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Field>

                  <Field label="Message" required>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Please share your question, request or message..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`${controlClass} resize-y min-h-[120px]`}
                    />
                  </Field>

                  <fieldset>
                    <legend className={labelClass}>Preferred contact method</legend>
                    <div className="mt-1 flex flex-wrap gap-4 sm:gap-6">
                      {['Email', 'Phone', 'Either is fine'].map((option) => (
                        <label key={option} className="inline-flex cursor-pointer items-center gap-2 text-[13px] text-[#1B3A6B]">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={option}
                            checked={formData.preferredContact === option}
                            onChange={handleChange}
                            className="h-4 w-4 border-[#C5D4E0] text-[#1E4E8C] focus:ring-[#1E4E8C]"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`${heroPrimaryButton} w-full justify-center !py-3.5 disabled:opacity-60`}
                  >
                    <HiOutlinePaperAirplane className="h-4 w-4" aria-hidden="true" />
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-center text-[12px] text-[#8A97A6]">We typically respond within 1–2 business days.</p>
                </form>
              )}
            </div>

            {/* Our Contact Information */}
            <div className="rounded-2xl border border-[#E6EEF4] bg-white p-6 shadow-[0_12px_30px_-24px_rgba(27,58,107,0.35)] sm:p-8">
              <h2 className="font-display text-[1.5rem] font-bold leading-tight text-[#1B3A6B] sm:text-[1.65rem]">
                Our Contact Information
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-[#5C6B7C]">
                Get in touch with our team. We&apos;re here to support you.
              </p>

              <div className="mt-4">
                <ContactInfoRow icon={HiOutlineEnvelope} title="Email">
                  <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-[#1E4E8C]">
                    {contactInfo.email}
                  </a>
                </ContactInfoRow>
                <ContactInfoRow icon={HiOutlinePhone} title="Phone">
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-[#1E4E8C]">
                    {contactInfo.phone}
                  </a>
                </ContactInfoRow>
                <ContactInfoRow icon={HiOutlineMapPin} title="Address">
                  <address className="not-italic">{contactInfo.address}</address>
                </ContactInfoRow>
                <ContactInfoRow icon={HiOutlineClock} title="Office Hours">
                  <p>Monday – Friday, 9:00 AM – 5:00 PM (MST)</p>
                  <p className="mt-1 text-[12px] text-[#8A97A6]">We are closed on weekends and statutory holidays.</p>
                </ContactInfoRow>
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-[#E6EEF4] bg-[#E7EEF2]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.7738508032944!2d-113.99268432446563!3d51.05726344348883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b2a601dbaed%3A0xe3863f2a191ab3a8!2s3016%205%20Ave%20NE%20%23345%2C%20Calgary%2C%20AB%20T2A%206K4%2C%20Canada!5e0!3m2!1sen!2s!4v1789857747649!5m2!1sen!2s"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="World Education Society office location"
                  className="block w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E6EEF4] bg-white py-12 sm:py-16">
        <div className={pageContainer}>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <SectionHeading className="!text-[1.65rem] sm:!text-[1.85rem]">Frequently Asked Questions</SectionHeading>
            <ArrowLink to="/resources" className="shrink-0 text-[13px]">
              View All FAQs
            </ArrowLink>
          </div>
          <ul className="mt-6 space-y-2.5">
            {faqQuestions.map((question) => (
              <li key={question}>
                <Link
                  to="/resources"
                  className="flex items-center justify-between gap-4 rounded-lg bg-[#EAF4FB] px-4 py-3.5 font-sans text-[13px] font-semibold text-[#1B3A6B] transition-colors hover:bg-[#DCEEF9] sm:px-5 sm:py-4 sm:text-[14px]"
                >
                  <span>{question}</span>
                  <HiChevronRight className="h-5 w-5 shrink-0 text-[#1E4E8C]" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
