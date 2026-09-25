import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiChevronDown } from 'react-icons/hi'
import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineBuildingLibrary,
  HiOutlineCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineEnvelope,
  HiOutlineHeart,
  HiOutlineLockClosed,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from 'react-icons/hi2'
import PageHero, { heroPrimaryButton, pageContainer } from '../components/PageHero'
import { submitFormEmail } from '../utils/submitFormEmail.js'

const destinations = [
  { label: 'College', Icon: HiOutlineAcademicCap },
  { label: 'University', Icon: HiOutlineBuildingLibrary },
  { label: 'Library', Icon: HiOutlineBookOpen },
  { label: 'Training Centre', Icon: HiOutlineUserGroup },
  { label: 'Community Learning Hub', Icon: HiOutlineUsers },
]

const eligibility = [
  'Be an enrolled student or active learner (e.g., college, university, library, training program)',
  'Need transportation support to access education',
  'Live within our service area',
  'Agree to program guidelines',
]

const documents = [
  'Proof of enrollment or learner status',
  'A valid student ID or learner ID',
  'Proof of address (to confirm service area)',
  'Any documentation related to accessibility needs (if applicable)',
]

const dayOptions = ['Weekdays', 'Monday, Wednesday, Friday', 'Tuesday, Thursday', 'Weekends']
const timeOptions = ['Morning', 'Afternoon', 'Evening']
const accessOptions = ['None', 'Wheelchair access', 'Mobility support', 'Other accessibility need']

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

function TextInput({ name, placeholder, required, type = 'text' }) {
  return <input name={name} type={type} required={required} placeholder={placeholder} className={controlClass} />
}

function SelectInput({ name, placeholder, options, required, defaultValue }) {
  const [value, setValue] = useState(defaultValue || '')
  return (
    <span className="relative block">
      <select
        name={name}
        required={required}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={`${controlClass} appearance-none pr-9 ${value ? 'text-[#1B3A6B]' : 'text-[#9AA8B5]'}`}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option} value={option} className="text-[#1B3A6B]">
            {option}
          </option>
        ))}
      </select>
      <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A97A6]" aria-hidden="true" />
    </span>
  )
}

function BusIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 10.2h17M7.2 16.5v1.8M16.8 16.5v1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="8" cy="13.2" r="0.9" fill="currentColor" />
      <circle cx="16" cy="13.2" r="0.9" fill="currentColor" />
    </svg>
  )
}

function FormFeedback({ status, errorMessage, onReset }) {
  if (status === 'idle' || status === 'submitting') return null

  const isSuccess = status === 'success'

  return (
    <div
      className={`mb-5 rounded-xl border px-4 py-4 sm:px-5 ${
        isSuccess ? 'border-[#C5E8CE] bg-[#F3FBF5]' : 'border-[#F0C9C9] bg-[#FEF6F6]'
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
            isSuccess ? 'bg-[#E7F6EC] text-[#2E9A4A]' : 'bg-[#FCE8E8] text-[#C44D4D]'
          }`}
        >
          {isSuccess ? (
            <HiOutlineCheck className="h-5 w-5" aria-hidden="true" />
          ) : (
            <HiOutlineEnvelope className="h-5 w-5" aria-hidden="true" />
          )}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-sans text-[15px] font-bold text-[#1B3A6B]">
            {isSuccess ? 'Application submitted' : 'Something went wrong'}
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-[#5C6B7C]">
            {isSuccess
              ? 'Thank you. We received your transportation assistance application and will review it shortly. A confirmation has been sent to our team.'
              : errorMessage || 'Please try again in a moment or email us at info@worldeducationsociety.com.'}
          </p>
          {isSuccess ? (
            <button
              type="button"
              onClick={onReset}
              className="mt-3 text-[13px] font-semibold text-[#1E4E8C] transition-colors hover:text-[#163E70]"
            >
              Submit another application
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default function TransportationAssistance() {
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')
  const [formKey, setFormKey] = useState(0)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    setSubmitStatus('submitting')
    setSubmitError('')

    const data = new FormData(form)
    const text = (name) => String(data.get(name) ?? '').trim()
    const sections = [
      {
        title: 'Applicant Information',
        items: [
          { label: 'Full Name', value: text('fullName') },
          { label: 'Email', value: text('email') },
          { label: 'Phone', value: text('phone') },
          { label: 'Home Address', value: text('homeAddress') },
          { label: 'City', value: text('city') },
          { label: 'Postal Code', value: text('postalCode') },
          { label: 'Date of Birth', value: text('dateOfBirth') },
        ],
      },
      {
        title: 'Education',
        items: [
          { label: 'Institution / Library Name', value: text('institution') },
          { label: 'Student ID or Learner ID', value: text('studentId') },
        ],
      },
      {
        title: 'Transportation Request',
        items: [
          { label: 'Destination Address', value: text('destination') },
          { label: 'Days Needed', value: text('days') },
          { label: 'Preferred Pickup Time', value: text('pickup') },
          { label: 'Preferred Return Time', value: text('returnTime') },
          { label: 'Accessibility Needs', value: text('accessibility') || 'None' },
          { label: 'Reason for Assistance', value: text('reason') },
        ],
      },
      {
        title: 'Emergency & Additional',
        items: [
          { label: 'Emergency Contact', value: text('emergencyContact') },
          { label: 'Additional Information', value: text('additional') || 'Not provided' },
        ],
      },
      {
        title: 'Acknowledgements',
        items: [
          { label: 'Monthly admin fee acknowledged', value: data.get('feeAcknowledgement') ? 'Yes' : 'No' },
          { label: 'Privacy consent', value: data.get('consent') ? 'Yes' : 'No' },
        ],
      },
    ]
    try {
      await submitFormEmail({
        subject: 'Transportation Assistance Application — World Education Society',
        sections,
        replyTo: text('email'),
      })
      setSubmitStatus('success')
      form.reset()
    } catch (error) {
      setSubmitStatus('error')
      setSubmitError(error.message)
    }
  }

  const resetForm = () => {
    setSubmitStatus('idle')
    setSubmitError('')
    setFormKey((key) => key + 1)
  }

  return (
    <div className="bg-[#F7FBFE] text-[#1B3A6B]">
      <PageHero
        title={
          <>
            Apply for
            <span className="mt-1 block text-[0.78em] leading-[1.15] text-[#2E9A4A]">Transportation Assistance</span>
          </>
        }
        description="Helping remove transportation barriers so eligible students can access colleges, universities, libraries, and educational opportunities."
        image="/transporthero.webp"
        imageAlt="A student with a backpack standing beside a city bus"
        imageLayout="full"
        imagePosition="28% center"
        breadcrumb={
          <nav aria-label="Breadcrumb" className="mb-4 max-w-full text-[13px] leading-relaxed text-[#8A97A6]">
            <Link to="/" className="transition-colors hover:text-[#1E4E8C]">
              Home
            </Link>
            <span className="mx-1.5" aria-hidden="true">
              ›
            </span>
            <Link to="/programs" className="transition-colors hover:text-[#1E4E8C]">
              Our Programs
            </Link>
            <span className="mx-1.5" aria-hidden="true">
              ›
            </span>
            <span className="text-[#5C6B7C]">Transportation Assistance</span>
          </nav>
        }
      >
        <Link to="/programs" className={`${heroPrimaryButton} px-4 sm:px-5`}>
          Learn About Our Programs
        </Link>
      </PageHero>

      <section className="border-t border-[#E6EEF4] bg-white">
        <div className={`${pageContainer} py-6 sm:py-7`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E7F1FB] text-[#1E4E8C]">
                <BusIcon className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-sans text-[15px] font-bold text-[#1B3A6B] sm:text-base">
                  Transportation support is available to eligible participants.
                </h2>
                <p className="mt-1 max-w-3xl text-[13px] leading-relaxed text-[#5C6B7C] sm:text-sm">
                  The program is free in spirit and heavily subsidized, with only a nominal monthly administrative fee that is lower than the cost of a monthly student bus pass.
                </p>
              </div>
            </div>
            <p className="shrink-0 text-sm font-semibold leading-snug text-[#1E4E8C] sm:max-w-[11rem] sm:text-right">
              Low monthly admin contribution. A brighter future.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FBFE]">
        <div className={`${pageContainer} py-8 sm:py-10`}>
          <h2 className="font-display text-[1.55rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[1.85rem]">
            Get to Where You’re Going
          </h2>
          <p className="mt-2 text-sm text-[#5C6B7C]">Transportation assistance can help you access:</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {destinations.map(({ label, Icon }) => (
              <li key={label} className="flex flex-col items-center px-2 py-2 text-center">
                <Icon className="h-8 w-8 text-[#1E4E8C]" aria-hidden="true" />
                <span className="mt-2.5 max-w-[9.5rem] text-[13px] font-semibold leading-snug text-[#1B3A6B]">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F4F8FC]">
        <div className={`${pageContainer} grid items-start gap-5 py-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-6 lg:py-10 xl:grid-cols-[minmax(0,1fr)_320px]`}>
          <form
            key={formKey}
            className="rounded-2xl border border-[#E6EEF4] bg-white p-5 shadow-[0_10px_28px_-24px_rgba(27,58,107,0.45)] sm:p-6"
            onSubmit={handleSubmit}
          >
            <h2 className="font-display text-[1.35rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[1.5rem]">
              Transportation Assistance Application
            </h2>
            <p className="mt-1.5 text-[13px] text-[#5C6B7C]">
              Please complete all fields. We’ll review your application and be in touch soon.
            </p>

            <FormFeedback status={submitStatus} errorMessage={submitError} onReset={resetForm} />

            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <Field label="Full Name" required>
                <TextInput name="fullName" placeholder="Enter your full name" required />
              </Field>
              <Field label="Email" required>
                <TextInput name="email" type="email" placeholder="yourname@email.com" required />
              </Field>
              <Field label="Phone" required>
                <TextInput name="phone" type="tel" placeholder="(XXX) XXX-XXXX" required />
              </Field>
              <Field label="Home Address" required>
                <TextInput name="homeAddress" placeholder="Street address, apartment, etc." required />
              </Field>
              <Field label="City" required>
                <TextInput name="city" placeholder="Enter city" required />
              </Field>
              <Field label="Postal Code" required>
                <TextInput name="postalCode" placeholder="A1A 1A1" required />
              </Field>
              <Field label="Date of Birth" required>
                <TextInput name="dateOfBirth" placeholder="YYYY-MM-DD" required />
              </Field>
              <Field label="Institution / Library Name" required>
                <TextInput name="institution" placeholder="Name of college, university, library, etc." required />
              </Field>
              <Field label="Student ID or Learner ID" required>
                <TextInput name="studentId" placeholder="Enter your student or learner ID" required />
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Destination Address" required>
                <TextInput name="destination" placeholder="Address of your school, library or learning location" required />
              </Field>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <Field label="Days Needed" required>
                <SelectInput name="days" placeholder="Select days" options={dayOptions} required />
              </Field>
              <Field label="Preferred Pickup Times" required>
                <SelectInput name="pickup" placeholder="Select preferred time" options={timeOptions} required />
              </Field>
              <Field label="Preferred Return Times" required>
                <SelectInput name="returnTime" placeholder="Select preferred time" options={timeOptions} required />
              </Field>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div>
                <Field label="Accessibility Needs">
                  <SelectInput name="accessibility" options={accessOptions} defaultValue="None" />
                </Field>
                <p className="mt-1.5 text-[11px] leading-relaxed text-[#7B8B9A]">
                  Let us know if you require accessible transportation or have mobility needs.
                </p>
              </div>
              <div className="lg:col-span-2">
                <Field label="Reason for Assistance" required>
                  <textarea
                    name="reason"
                    required
                    rows={3}
                    placeholder="Tell us why you need transportation support."
                    className={`${controlClass} resize-y`}
                  />
                </Field>
              </div>
            </div>

            <label className="mt-4 flex items-start gap-3 rounded-lg border border-[#E6EEF4] px-3 py-3">
              <input name="feeAcknowledgement" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#1E4E8C]" />
              <span className="text-[12px] leading-relaxed text-[#3E5164]">
                <span className="font-semibold text-[#1B3A6B]">Monthly Admin Fee Acknowledgment</span>
                <Required />
                <span className="mt-0.5 block">
                  I understand that this program is free in spirit and heavily subsidized, with only a nominal monthly administrative fee that is lower than the cost of a monthly student bus pass.
                </span>
              </span>
            </label>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Emergency Contact" required>
                <TextInput name="emergencyContact" placeholder="Name, relationship and phone number" required />
              </Field>
              <Field label="Additional Information (Optional)">
                <TextInput name="additional" placeholder="Anything else we should know?" />
              </Field>
            </div>

            <label className="mt-4 flex items-start gap-3 rounded-lg border border-[#E6EEF4] px-3 py-3">
              <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#1E4E8C]" />
              <span className="text-[12px] leading-relaxed text-[#3E5164]">
                <span className="font-semibold text-[#1B3A6B]">Consent</span>
                <Required />
                <span className="mt-0.5 block">
                  I consent to the collection, use, and sharing of my personal information for the purpose of this program, in accordance with the World Education Society’s{' '}
                  <Link to="/privacy" className="font-semibold text-[#1E4E8C] underline-offset-2 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </span>
            </label>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2E9A4A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#267F3C] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitStatus === 'submitting' ? 'Sending…' : 'Submit Application'}
                <HiArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="flex items-center gap-2 text-[12px] text-[#7B8B9A]">
                <HiOutlineLockClosed className="h-4 w-4 shrink-0" aria-hidden="true" />
                Your information is secure and will only be used for program purposes.
              </p>
            </div>
          </form>

          <aside className="flex flex-col gap-4">
            <article className="rounded-2xl border border-[#E6EEF4] bg-white px-5 py-5">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E7F6EC] text-[#2E9A4A]">
                  <HiOutlineUser className="h-4 w-4" aria-hidden="true" />
                </span>
                <h2 className="font-sans text-[15px] font-bold text-[#1B3A6B]">Eligibility Checklist</h2>
              </div>
              <p className="mt-3 text-[13px] text-[#5C6B7C]">To apply, you must:</p>
              <ul className="mt-3 space-y-2.5">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-[#3E5164]">
                    <HiOutlineCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#2E9A4A]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-[#E6EEF4] bg-white px-5 py-5">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E7F1FB] text-[#2F6FE4]">
                  <HiOutlineHeart className="h-4 w-4" aria-hidden="true" />
                </span>
                <h2 className="font-sans text-[15px] font-bold text-[#1B3A6B]">How this helps</h2>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[#5C6B7C]">
                Removes transportation barriers so you can attend classes, use libraries, participate in programs, and fully engage in educational opportunities. Education is a right, and transportation shouldn’t stand in the way.
              </p>
            </article>

            <article className="rounded-2xl border border-[#E6EEF4] bg-white px-5 py-5">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E7F1FB] text-[#1E4E8C]">
                  <HiOutlineUserGroup className="h-4 w-4" aria-hidden="true" />
                </span>
                <h2 className="font-sans text-[15px] font-bold text-[#1B3A6B]">Who can apply?</h2>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[#5C6B7C]">
                Students and youth who are enrolled in post-secondary education, training programs, or who regularly use libraries and educational resources, and who need transportation support to participate.
              </p>
            </article>

            <article className="rounded-2xl border border-[#F3E6C4] bg-[#FBF6EA] px-5 py-5">
              <div className="flex items-center gap-2.5">
                <HiOutlineClipboardDocumentList className="h-5 w-5 text-[#C9922A]" aria-hidden="true" />
                <h2 className="font-sans text-[15px] font-bold text-[#1B3A6B]">What documents may be required?</h2>
              </div>
              <p className="mt-3 text-[13px] text-[#5C6B7C]">You may be asked to provide:</p>
              <ul className="mt-2.5 list-disc space-y-1.5 pl-4 text-[13px] leading-snug text-[#3E5164]">
                {documents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-[#E6EEF4] bg-white px-5 py-5">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E7F1FB] text-[#1E4E8C]">
                  <HiOutlinePhone className="h-4 w-4" aria-hidden="true" />
                </span>
                <h2 className="font-sans text-[15px] font-bold text-[#1B3A6B]">Questions? Contact us.</h2>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[#5C6B7C]">
                We’re here to help. If you have questions about the application or the program, please reach out.
              </p>
              <ul className="mt-3 space-y-2 text-[13px] text-[#3E5164]">
                <li className="flex items-start gap-2">
                  <HiOutlineEnvelope className="mt-0.5 h-4 w-4 shrink-0 text-[#1E4E8C]" aria-hidden="true" />
                  <a href="mailto:info@worldeducationsociety.com" className="hover:text-[#1E4E8C]">
                    info@worldeducationsociety.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <HiOutlinePhone className="mt-0.5 h-4 w-4 shrink-0 text-[#1E4E8C]" aria-hidden="true" />
                  <a href="tel:+15874384634" className="hover:text-[#1E4E8C]">
                    +1 587-438-4634
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <HiOutlineMapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1E4E8C]" aria-hidden="true" />
                  <span>
                    345, 3016, 5th Ave NE
                    <br />
                    Calgary, AB T2A 5L7
                  </span>
                </li>
              </ul>
            </article>
          </aside>
        </div>
      </section>
    </div>
  )
}
