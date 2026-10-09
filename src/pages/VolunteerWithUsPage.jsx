import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HiArrowDownTray,
  HiArrowRight,
  HiChevronDown,
  HiOutlineAcademicCap,
  HiOutlineCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentText,
  HiOutlineHeart,
  HiOutlineMegaphone,
  HiOutlineQuestionMarkCircle,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from 'react-icons/hi2'
import ComingSoonButton from '../components/ComingSoonButton'
import PageHero, { heroGreenButton, heroOutlineButton, pageContainer } from '../components/PageHero'
import { SectionEyebrow } from '../components/campaigns/CampaignUi'
import { submitFormFromElement } from '../utils/submitFormEmail.js'

const VOLUNTEER_HERO_IMAGE = '/wes12/07_Volunteer_With_Us_Hero.webp'
const MAX_RESUME_BYTES = 5 * 1024 * 1024
const RESUME_ACCEPT = '.pdf,.doc,.docx'

function formText(data, name) {
  const value = data.get(name)
  if (value instanceof File) return ''
  return String(value ?? '').trim()
}

function buildVolunteerEmailPayload(form, { interests, volunteerFormat, resumeFile }) {
  const data = new FormData(form)
  const yesNo = (name) => (data.get(name) ? 'Yes' : 'No')

  const sections = [
    {
      title: 'Personal Information',
      items: [
        { label: 'First Name', value: formText(data, 'firstName') },
        { label: 'Last Name', value: formText(data, 'lastName') },
        { label: 'Email Address', value: formText(data, 'emailAddress') },
        { label: 'Phone Number', value: formText(data, 'phoneNumber') },
        { label: 'City', value: formText(data, 'city') },
        { label: 'Province', value: formText(data, 'province') },
        { label: 'Preferred Pronouns', value: formText(data, 'pronouns') || 'Not specified' },
        { label: 'Age Group', value: formText(data, 'ageGroup') },
      ],
    },
    {
      title: 'Interests & Experience',
      items: [
        { label: 'Languages Spoken', value: formText(data, 'languagesSpoken') },
        { label: 'Areas of Interest', value: interests.join(', ') },
        { label: 'Skills / Experience', value: formText(data, 'skillsExperience') || 'Not provided' },
      ],
    },
    {
      title: 'Availability & Volunteer Format',
      items: [
        { label: 'Availability', value: formText(data, 'availability') },
        { label: 'Preferred Volunteer Format', value: volunteerFormat },
      ],
    },
    {
      title: 'Additional Information',
      items: [{ label: 'Why do you want to volunteer?', value: formText(data, 'whyVolunteer') }],
    },
    {
      title: 'Resume & Emergency Contact',
      items: [
        {
          label: 'Resume',
          value: resumeFile
            ? `${resumeFile.name} (${(resumeFile.size / 1024).toFixed(1)} KB) — attached`
            : 'Not provided',
        },
        { label: 'Emergency Contact Name', value: formText(data, 'emergencyContactName') },
        { label: 'Emergency Contact Phone', value: formText(data, 'emergencyContactPhone') },
        { label: 'Emergency Contact Relationship', value: formText(data, 'emergencyContactRelationship') },
      ],
    },
    {
      title: 'Consent & Privacy',
      items: [{ label: 'Privacy consent', value: yesNo('consent') }],
    },
  ]

  return {
    sections,
    replyTo: formText(data, 'emailAddress'),
  }
}
function validateResumeFile(file) {
  if (!file) return { ok: true }
  const name = file.name.toLowerCase()
  if (!name.endsWith('.pdf') && !name.endsWith('.doc') && !name.endsWith('.docx')) {
    return { ok: false, message: 'Please upload a PDF, DOC, or DOCX file.' }
  }
  if (file.size > MAX_RESUME_BYTES) {
    return {
      ok: false,
      message: 'This file is too large. Maximum resume size is 5MB. Try a smaller file or compress your document.',
    }
  }
  return { ok: true }
}

const volunteerHighlightStats = [
  { Icon: HiOutlineUserGroup, value: '25,000+', label: 'Volunteer Hours' },
  { Icon: HiOutlineMegaphone, value: '110+', label: 'Community Campaigns' },
]

const provinces = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon',
]

const pronounOptions = ['She/Her', 'He/Him', 'They/Them', 'Prefer not to say', 'Other']
const ageGroups = ['16–17', '18–24', '25–34', '35–44', '45–54', '55+']
const languageOptions = ['English', 'French', 'Spanish', 'Mandarin', 'Cantonese', 'Punjabi', 'Arabic', 'Other']
const availabilityOptions = [
  'Weekdays (daytime)',
  'Weekdays (evenings)',
  'Weekends',
  'Flexible / as needed',
  'School breaks only',
]
const relationshipOptions = ['Parent/Guardian', 'Spouse/Partner', 'Sibling', 'Friend', 'Other']

const interestOptions = [
  'Tutoring / Educational Support',
  'Mentorship',
  'Workshops & Training',
  'Events & Event Support',
  'Community Outreach',
  'Administration',
  'Fundraising',
  'Youth Career Support',
]

const whyVolunteerItems = [
  { text: 'Make a positive impact in your community', Icon: HiOutlineAcademicCap },
  { text: 'Share your skills and experience', Icon: HiOutlineUserGroup },
  { text: 'Support youth in reaching their potential', Icon: HiOutlineSparkles },
  { text: 'Be part of a passionate and welcoming community', Icon: HiOutlineHeart },
]

const afterApplySteps = [
  {
    title: 'Application Review',
    text: 'We will review your application and match your interests with current opportunities.',
  },
  {
    title: 'Follow Up',
    text: 'Our team will contact you within 5-10 business days.',
  },
  {
    title: 'Next Steps',
    text: "You'll receive information about available opportunities, an orientation process, and next steps to get started.",
  },
]

const volunteerRequirements = [
  'Be at least 16 years of age (18+ for some roles)',
  'Pass a basic reference check (for certain roles)',
  'Complete an orientation session',
  'Commit to agreed-upon schedule and responsibilities',
  'Share our values of inclusion, respect and youth empowerment',
]

const labelClass = 'mb-1.5 block text-[12px] font-semibold text-[#1B3A6B]'
const controlClass =
  'w-full min-w-0 rounded-lg border border-[#E3EAF1] bg-white px-3 py-2.5 text-base text-[#1B3A6B] placeholder:text-[#9AA8B5] focus:border-[#1E4E8C] focus:outline-none'

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
      <HiChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A97A6]"
        aria-hidden="true"
      />
    </span>
  )
}

function SectionNumber({ n }) {
  return (
    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2E9A4A] text-sm font-bold text-white">
      {n}
    </span>
  )
}

function InvolvedStatsStrip() {
  return (
    <section className="border-t border-[#E6EEF4] bg-[#F7FBFE]">
      <div className={`${pageContainer} py-6 sm:py-8`}>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#E6EEF4] bg-[#F4F9FD]">
          <div className="grid grid-cols-1 divide-y divide-[#E6EEF4] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {volunteerHighlightStats.map(({ Icon, value, label }) => (
              <div key={label} className="flex items-center justify-center gap-3 px-6 py-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F2FC] text-[#1E4E8C]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-[#1B3A6B] sm:text-xl">{value}</p>
                  <p className="text-[13px] font-medium text-[#5C7A9A]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SidePanel({ icon: Icon, iconWrap, title, children }) {
  return (
    <article className="rounded-2xl border border-[#E6EEF4] bg-white px-5 py-5 shadow-[0_8px_24px_-20px_rgba(27,58,107,0.35)]">
      <div className="flex items-center gap-2.5">
        <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${iconWrap}`}>
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <h2 className="font-display text-[1.1rem] font-bold text-[#1B3A6B]">{title}</h2>
      </div>
      {children}
    </article>
  )
}

export default function VolunteerWithUsPage() {
  const [interests, setInterests] = useState([])
  const [volunteerFormat, setVolunteerFormat] = useState('')
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')
  const [formKey, setFormKey] = useState(0)
  const [resumeFile, setResumeFile] = useState(null)
  const [resumeError, setResumeError] = useState('')

  const toggleInterest = (value) => {
    setInterests((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (interests.length === 0) {
      setSubmitError('Please select at least one area of interest.')
      setSubmitStatus('error')
      return
    }
    if (!volunteerFormat) {
      setSubmitError('Please select a preferred volunteer format.')
      setSubmitStatus('error')
      return
    }
    if (resumeFile) {
      const resumeCheck = validateResumeFile(resumeFile)
      if (!resumeCheck.ok) {
        setResumeError(resumeCheck.message)
        setSubmitError(resumeCheck.message)
        setSubmitStatus('error')
        return
      }
    }

    setSubmitStatus('submitting')
    setSubmitError('')
    const { sections, replyTo } = buildVolunteerEmailPayload(form, {
      interests,
      volunteerFormat,
      resumeFile,
    })

    try {
      await submitFormFromElement({
        form,
        subject: 'Volunteer With Us — Application — World Education Society',
        sections,
        replyTo,
        fileFieldNames: ['attachment'],
        extraFiles: resumeFile ? [resumeFile] : [],
      })
      setSubmitStatus('success')
      form.reset()
      setInterests([])
      setVolunteerFormat('')
      setResumeFile(null)
      setResumeError('')
    } catch (error) {
      setSubmitStatus('error')
      setSubmitError(error.message)
    }
  }

  const resetForm = () => {
    setSubmitStatus('idle')
    setSubmitError('')
    setFormKey((k) => k + 1)
    setInterests([])
    setVolunteerFormat('')
    setResumeFile(null)
    setResumeError('')
  }

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) {
      setResumeFile(null)
      setResumeError('')
      return
    }
    const check = validateResumeFile(file)
    if (!check.ok) {
      setResumeFile(null)
      setResumeError(check.message)
      event.target.value = ''
      return
    }
    setResumeFile(file)
    setResumeError('')
  }

  return (
    <div className="min-w-0 overflow-x-clip bg-[#FBF9F4] text-[#1B3A6B]">
      <PageHero
        title={
          <>
            Volunteer <span className="text-[#2E9A4A]">With Us</span>
            <span className="mt-2 block text-[1.05rem] font-semibold leading-snug text-[#1B3A6B] sm:text-[1.15rem] lg:text-[1.02rem] xl:text-[1.1rem] min-[1440px]:text-[1.2rem]">
              Share your time. Build brighter futures.
            </span>
          </>
        }
        description="Volunteers help youth through mentorship, workshops, educational support, community campaigns, events, and resource distribution. Together, we create more opportunities for every young person to learn, belong and thrive."
        image={VOLUNTEER_HERO_IMAGE}
        imageAlt="Volunteers in World Education Society vests planting trees outdoors"
        imageLayout="full"
        imageFit="cover"
        imagePosition="center"
        breadcrumb={
          <nav aria-label="Breadcrumb" className="mb-4 max-w-full text-[13px] leading-relaxed text-[#8A97A6]">
            <Link to="/" className="transition-colors hover:text-[#1E4E8C]">Home</Link>
            <span className="mx-1.5" aria-hidden="true">/</span>
            <Link to="/get-involved" className="transition-colors hover:text-[#1E4E8C]">Get Involved</Link>
            <span className="mx-1.5" aria-hidden="true">/</span>
            <span className="text-[#5C6B7C]">Volunteer With Us</span>
          </nav>
        }
      />

      <InvolvedStatsStrip />

      <section id="volunteer-application" className="scroll-mt-24 bg-[#FBF9F4] py-10 sm:py-14">
        <div className={`${pageContainer} grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_320px]`}>
          <div>
            <SectionEyebrow>GET INVOLVED</SectionEyebrow>
            <h2 className="mt-2 font-display text-[1.75rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[2rem]">
              Volunteer Application Form
            </h2>
            <p className="mt-1 text-[15px] font-semibold text-[#1B3A6B]">Join a community of changemakers.</p>
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#5C6B7C]">
              Thank you for your interest in volunteering with World Education Society. Volunteers help youth through
              mentorship, workshops, educational support, community campaigns, events, and resource distribution. Please
              complete the form below and we&apos;ll be in touch soon.
            </p>

            <form
              key={formKey}
              encType="multipart/form-data"
              className="mt-8 rounded-2xl border border-[#E6EEF4] bg-white p-5 shadow-[0_10px_28px_-24px_rgba(27,58,107,0.45)] sm:p-6"
              onSubmit={handleSubmit}
            >
              {submitStatus === 'success' ? (
                <div className="mb-5 rounded-xl border border-[#C5E8CE] bg-[#F3FBF5] px-4 py-4" role="status">
                  <p className="text-[14px] font-semibold text-[#1B3A6B]">Thank you for your application.</p>
                  <p className="mt-1 text-[13px] text-[#5C6B7C]">Our team will review your submission and be in touch soon.</p>
                  <button type="button" onClick={resetForm} className="mt-3 text-[13px] font-semibold text-[#1E4E8C] hover:underline">
                    Submit another application
                  </button>
                </div>
              ) : null}
              {submitStatus === 'error' && submitError ? (
                <div className="mb-5 rounded-xl border border-[#F0C9C9] bg-[#FEF6F6] px-4 py-4" role="alert">
                  <p className="text-[13px] text-[#8B3A3A]">{submitError}</p>
                </div>
              ) : null}

              <div className="mb-8">
                <div className="flex items-center gap-3">
                  <SectionNumber n={1} />
                  <h3 className="font-sans text-[16px] font-bold text-[#1B3A6B]">Personal Information</h3>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Field label="First Name" required>
                    <TextInput name="firstName" placeholder="Enter your first name" required />
                  </Field>
                  <Field label="Last Name" required>
                    <TextInput name="lastName" placeholder="Enter your last name" required />
                  </Field>
                  <Field label="Email Address" required>
                    <TextInput name="emailAddress" type="email" placeholder="you@example.com" required />
                  </Field>
                  <Field label="Phone Number" required>
                    <TextInput name="phoneNumber" type="tel" placeholder="(123) 456-7890" required />
                  </Field>
                  <Field label="City" required>
                    <TextInput name="city" placeholder="Enter your city" required />
                  </Field>
                  <Field label="Province" required>
                    <SelectInput name="province" placeholder="Select your province" options={provinces} required />
                  </Field>
                  <Field label="Preferred Pronouns (optional)">
                    <SelectInput name="pronouns" placeholder="Select pronouns" options={pronounOptions} />
                  </Field>
                  <Field label="Age Group" required>
                    <SelectInput name="ageGroup" placeholder="Select age group" options={ageGroups} required />
                  </Field>
                </div>
              </div>

              <div className="mb-8 border-t border-[#E6EEF4] pt-8">
                <div className="flex items-center gap-3">
                  <SectionNumber n={2} />
                  <h3 className="font-sans text-[16px] font-bold text-[#1B3A6B]">Your Interests &amp; Experience</h3>
                </div>
                <div className="mt-5 space-y-4">
                  <Field label="Languages Spoken" required>
                    <SelectInput name="languagesSpoken" placeholder="Select language" options={languageOptions} required />
                  </Field>
                  <div>
                    <span className={labelClass}>
                      Areas of Interest
                      <Required />
                    </span>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {interestOptions.map((option) => (
                        <label key={option} className="flex items-start gap-2 rounded-lg border border-[#E6EEF4] px-3 py-2.5 text-[13px] text-[#3E5164]">
                          <input
                            type="checkbox"
                            checked={interests.includes(option)}
                            onChange={() => toggleInterest(option)}
                            className="mt-0.5 h-4 w-4 shrink-0 accent-[#1E4E8C]"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <Field label="Skills / Experience (optional)">
                    <textarea
                      name="skillsExperience"
                      rows={4}
                      placeholder="Tell us about your relevant skills, experience or areas of expertise... (e.g., teaching, communication, event planning, social media, etc.)"
                      className={`${controlClass} resize-y`}
                    />
                  </Field>
                </div>
              </div>

              <div className="mb-8 border-t border-[#E6EEF4] pt-8">
                <div className="flex items-center gap-3">
                  <SectionNumber n={3} />
                  <h3 className="font-sans text-[16px] font-bold text-[#1B3A6B]">Availability &amp; Volunteer Format</h3>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Field label="Availability" required>
                    <SelectInput name="availability" placeholder="Select availability" options={availabilityOptions} required />
                  </Field>
                  <div className="sm:col-span-2">
                    <span className={labelClass}>
                      Preferred Volunteer Format
                      <Required />
                    </span>
                    <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
                      {['In Person', 'Remote (Virtual)', 'Hybrid (Both)'].map((option) => (
                        <label key={option} className="inline-flex items-center gap-2 text-[13px] text-[#3E5164]">
                          <input
                            type="radio"
                            name="volunteerFormatDisplay"
                            checked={volunteerFormat === option}
                            onChange={() => setVolunteerFormat(option)}
                            className="h-4 w-4 accent-[#1E4E8C]"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8 border-t border-[#E6EEF4] pt-8">
                <div className="flex items-center gap-3">
                  <SectionNumber n={4} />
                  <h3 className="font-sans text-[16px] font-bold text-[#1B3A6B]">Additional Information</h3>
                </div>
                <div className="mt-5">
                  <Field label="Why do you want to volunteer?" required>
                    <textarea
                      name="whyVolunteer"
                      required
                      rows={5}
                      placeholder="Tell us what motivates you to volunteer with World Education Society..."
                      className={`${controlClass} resize-y`}
                    />
                  </Field>
                </div>
              </div>

              <div className="mb-8 border-t border-[#E6EEF4] pt-8">
                <div className="flex items-center gap-3">
                  <SectionNumber n={5} />
                  <h3 className="font-sans text-[16px] font-bold text-[#1B3A6B]">Resume &amp; Emergency Contact</h3>
                </div>
                <div className="mt-5 space-y-4">
                  <Field label="Resume (optional)">
                    <label
                      className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed px-4 py-8 text-center transition-colors ${
                        resumeError
                          ? 'border-[#D14343]/50 bg-[#FEF6F6] hover:bg-[#FEF0F0]'
                          : 'border-[#1E4E8C]/40 bg-[#F7FBFE] hover:bg-[#EEF6FC]'
                      }`}
                    >
                      <HiOutlineDocumentText className="h-8 w-8 text-[#1E4E8C]" aria-hidden="true" />
                      <span className="mt-2 text-[13px] font-semibold text-[#1B3A6B]">Choose a file or drag and drop</span>
                      <span className="mt-1 text-[12px] text-[#5C6B7C]">PDF, DOC, or DOCX (Max 5MB).</span>
                      {resumeFile ? (
                        <span className="mt-2 text-[12px] font-medium text-[#1E4E8C]">{resumeFile.name}</span>
                      ) : null}
                      <input
                        type="file"
                        name="attachment"
                        accept={RESUME_ACCEPT}
                        className="sr-only"
                        onChange={handleResumeChange}
                      />
                    </label>
                    {resumeError ? (
                      <p className="mt-2 text-[12px] font-medium text-[#D14343]" role="alert">{resumeError}</p>
                    ) : null}
                  </Field>
                  <p className="text-[12px] font-semibold text-[#1B3A6B]">
                    Emergency Contact
                    <Required />
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Field label="Name" required>
                      <TextInput name="emergencyContactName" placeholder="Full name" required />
                    </Field>
                    <Field label="Phone Number" required>
                      <TextInput name="emergencyContactPhone" type="tel" placeholder="(123) 456-7890" required />
                    </Field>
                    <Field label="Relationship" required>
                      <SelectInput
                        name="emergencyContactRelationship"
                        placeholder="Select relationship"
                        options={relationshipOptions}
                        required
                      />
                    </Field>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E6EEF4] pt-8">
                <div className="flex items-center gap-3">
                  <SectionNumber n={6} />
                  <h3 className="font-sans text-[16px] font-bold text-[#1B3A6B]">Consent &amp; Privacy</h3>
                </div>
                <label className="mt-5 flex items-start gap-3 rounded-lg border border-[#E6EEF4] px-3 py-3">
                  <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#1E4E8C]" />
                  <span className="text-[12px] leading-relaxed text-[#3E5164]">
                    I consent to the collection and use of my personal information for volunteer recruitment and
                    communication purposes, in accordance with the World Education Society{' '}
                    <Link to="/privacy" className="font-semibold text-[#1E4E8C] underline-offset-2 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                    <Required />
                  </span>
                </label>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className={`${heroGreenButton} !rounded-lg`}
                  >
                    {submitStatus === 'submitting' ? 'Submitting…' : 'Submit Application'}
                    <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <ComingSoonButton className={`${heroOutlineButton} !rounded-lg`}>
                    <HiArrowDownTray className="h-4 w-4" aria-hidden="true" />
                    Download Volunteer Guide
                  </ComingSoonButton>
                </div>
              </div>
            </form>
          </div>

          <aside className="flex flex-col gap-4 lg:sticky lg:top-24">
            <SidePanel icon={HiOutlineUserGroup} iconWrap="bg-[#E8F2FC] text-[#1E4E8C]" title="Why Volunteer?">
              <p className="mt-3 text-[13px] leading-relaxed text-[#5C6B7C]">
                Volunteers play a vital role in helping us remove barriers to education and create opportunities for
                young people.
              </p>
              <ul className="mt-4 space-y-3">
                {whyVolunteerItems.map(({ text, Icon }) => (
                  <li key={text} className="flex items-start gap-2.5 text-[13px] leading-snug text-[#3E5164]">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#1E4E8C]" aria-hidden="true" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </SidePanel>

            <SidePanel icon={HiOutlineAcademicCap} iconWrap="bg-[#E7F6EC] text-[#2E9A4A]" title="What happens after you apply?">
              <ol className="mt-4 space-y-4">
                {afterApplySteps.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8F2FC] text-[12px] font-bold text-[#1E4E8C]">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-[13px] font-bold text-[#1B3A6B]">{step.title}</p>
                      <p className="mt-0.5 text-[12px] leading-relaxed text-[#5C6B7C]">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </SidePanel>

            <SidePanel icon={HiOutlineClipboardDocumentList} iconWrap="bg-[#E7F6EC] text-[#2E9A4A]" title="Volunteer Requirements">
              <ul className="mt-4 space-y-2.5">
                {volunteerRequirements.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-[#3E5164]">
                    <HiOutlineCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#2E9A4A]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SidePanel>

            <SidePanel icon={HiOutlineQuestionMarkCircle} iconWrap="bg-[#E8F2FC] text-[#1E4E8C]" title="Have Questions?">
              <p className="mt-3 text-[13px] leading-relaxed text-[#5C6B7C]">
                Check out our{' '}
                <Link to="/get-involved#faq" className="font-semibold text-[#1E4E8C] hover:underline">
                  Volunteer FAQ
                </Link>{' '}
                or contact our team. We&apos;re here to help!
              </p>
            </SidePanel>
          </aside>
        </div>
      </section>
    </div>
  )
}
