import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHandshake } from 'react-icons/fa'
import {
  HiArrowRight,
  HiOutlineAcademicCap,
  HiOutlineGift,
  HiOutlineHeart,
  HiOutlineLockClosed,
  HiOutlineUserGroup,
} from 'react-icons/hi2'
import PageHero, { pageContainer } from '../components/PageHero'
import { footerLinks } from '../data/content'

const PRESETS = ['25', '50', '100', '250']

const donateButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-lg bg-[#E2A52E] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#d1961f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2A52E]'

const benefits = [
  {
    title: 'Expand Learning Opportunities',
    text: 'Helps students access education guidance, resources and skills development.',
    icon: HiOutlineAcademicCap,
    wrap: 'bg-[#E7F3FB] text-[#1E4E8C]',
  },
  {
    title: 'Stronger Communities',
    text: 'Supports programs that empower individuals and build resilient communities.',
    icon: HiOutlineUserGroup,
    wrap: 'bg-[#E7F6EA] text-[#2E9A4A]',
  },
  {
    title: 'Greater Equity',
    text: 'Helps remove barriers and create a more inclusive future.',
    icon: HiOutlineHeart,
    wrap: 'bg-[#E7F3FB] text-[#1E4E8C]',
  },
  {
    title: 'Lasting Impact',
    text: 'Invests in people and communities for future generations.',
    icon: LeafIcon,
    wrap: 'bg-[#E7F6EA] text-[#2E9A4A]',
  },
]

function LeafIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 19c8 0 13-6 14-14-8 1-14 6-14 14Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M8.5 15.5c2-2 4.2-3.4 7-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function giftSummary(frequency, amount, customAmount) {
  const cadence = frequency === 'monthly' ? 'monthly' : 'one-time'
  const value = amount === 'custom' ? String(customAmount).trim() : amount
  return { cadence, value, label: `$${value} ${cadence}` }
}

export default function DonatePage() {
  const [frequency, setFrequency] = useState('one-time')
  const [amount, setAmount] = useState('50')
  const [customAmount, setCustomAmount] = useState('')
  const [customError, setCustomError] = useState('')
  const customInputRef = useRef(null)
  const donationPanelRef = useRef(null)

  function revealDonationPanel() {
    donationPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  function selectMonthly() {
    setFrequency('monthly')
    revealDonationPanel()
  }

  function selectCustom() {
    setAmount('custom')
    setCustomError('')
    revealDonationPanel()
    window.setTimeout(() => customInputRef.current?.focus(), 250)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (amount === 'custom') {
      const value = Number(customAmount)
      if (!customAmount.trim() || Number.isNaN(value) || value <= 0) {
        setCustomError('Enter an amount greater than 0.')
        revealDonationPanel()
        customInputRef.current?.focus()
        return
      }
    }
    setCustomError('')
    const gift = giftSummary(frequency, amount, customAmount)
    const subject = encodeURIComponent('Donation to World Education Society')
    const body = encodeURIComponent(
      `I would like to make a ${gift.cadence} donation of $${gift.value} to World Education Society.`,
    )
    window.location.href = `mailto:${footerLinks.contactInfo.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-w-0 overflow-x-clip bg-[#F7FBFE] text-[#1B3A6B]">
      <PageHero
        eyebrow="Support Our Mission"
        eyebrowClassName="!text-[#2E9A4A]"
        title="Help Create Brighter Futures"
        description="Your generosity helps us expand educational opportunities, support students and strengthen communities for future generations."
        image="/donatehero.webp"
        imageAlt="Volunteers packing and sharing donated supplies with the community"
        imageLayout="full"
        imageFit="cover"
        imagePosition="center"
        imageFetchPriority="high"
      >
        <button type="submit" form="donation-form" className={donateButtonClass}>
          Donate Now
          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </PageHero>

      <section className="bg-[#F7FBFE]">
        <div className={`${pageContainer} py-12 lg:py-16`}>
          <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            <form
              id="donation-form"
              ref={donationPanelRef}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#E6EEF4] bg-white px-5 py-6 shadow-[0_12px_30px_-24px_rgba(27,58,107,0.45)] sm:px-7 sm:py-8"
            >
              <h2 className="font-display text-[1.7rem] font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-[2rem]">
                Choose Your Donation
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5C6B7C]">
                Every contribution, big or small, makes a meaningful difference.
              </p>

              <div className="mt-6 grid grid-cols-2 rounded-xl border border-[#E4EAF1] bg-[#F7FBFE] p-1" role="group" aria-label="Donation frequency">
                {[
                  { id: 'one-time', label: 'One-time' },
                  { id: 'monthly', label: 'Monthly' },
                ].map((option) => {
                  const selected = frequency === option.id
                  return (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setFrequency(option.id)}
                      className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                        selected ? 'bg-[#1B3A6B] text-white shadow-sm' : 'text-[#1B3A6B] hover:bg-white'
                      }`}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5" role="group" aria-label="Donation amount">
                {PRESETS.map((value) => {
                  const selected = amount === value
                  return (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => {
                        setAmount(value)
                        setCustomError('')
                      }}
                      className={`rounded-lg border px-2 py-3 text-sm font-semibold transition-colors ${
                        selected
                          ? 'border-[#1B3A6B] bg-[#1B3A6B] text-white'
                          : 'border-[#D7E0E8] bg-white text-[#1B3A6B] hover:border-[#1B3A6B]/40'
                      }`}
                    >
                      ${value}
                    </button>
                  )
                })}
                <button
                  type="button"
                  aria-pressed={amount === 'custom'}
                  onClick={() => {
                    setAmount('custom')
                    setCustomError('')
                    window.setTimeout(() => customInputRef.current?.focus(), 0)
                  }}
                  className={`rounded-lg border px-2 py-3 text-sm font-semibold transition-colors ${
                    amount === 'custom'
                      ? 'border-[#1B3A6B] bg-[#1B3A6B] text-white'
                      : 'border-[#D7E0E8] bg-white text-[#1B3A6B] hover:border-[#1B3A6B]/40'
                  }`}
                >
                  Custom
                </button>
              </div>

              {amount === 'custom' ? (
                <div className="mt-3">
                  <label htmlFor="custom-amount" className="sr-only">
                    Custom donation amount in dollars
                  </label>
                  <div className="flex items-center rounded-lg border border-[#D7E0E8] bg-white px-3 focus-within:border-[#1E4E8C]">
                    <span className="text-sm font-semibold text-[#1B3A6B]" aria-hidden="true">
                      $
                    </span>
                    <input
                      ref={customInputRef}
                      id="custom-amount"
                      name="custom-amount"
                      type="number"
                      inputMode="decimal"
                      min="1"
                      step="1"
                      value={customAmount}
                      onChange={(event) => {
                        setCustomAmount(event.target.value)
                        setCustomError('')
                      }}
                      placeholder="Enter amount"
                      aria-invalid={customError ? 'true' : 'false'}
                      aria-describedby={customError ? 'custom-amount-error' : undefined}
                      className="w-full bg-transparent px-2 py-3 text-sm text-[#1B3A6B] outline-none placeholder:text-[#8A97A6]"
                    />
                  </div>
                  {customError ? (
                    <p id="custom-amount-error" className="mt-2 text-[13px] text-[#C44D4D]">
                      {customError}
                    </p>
                  ) : null}
                </div>
              ) : null}

              <button type="submit" className={`${donateButtonClass} mt-4 w-full`}>
                Donate Now
                <HiArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <p className="mt-4 flex items-center gap-2 text-[13px] text-[#6A7A8A]">
                <HiOutlineLockClosed className="h-4 w-4 shrink-0" aria-hidden="true" />
                Secure and safe donation process.
              </p>
            </form>

            <aside className="rounded-2xl border border-[#E6EEF4] bg-white px-5 py-6 shadow-[0_12px_30px_-24px_rgba(27,58,107,0.45)] sm:px-7 sm:py-8">
              <h2 className="font-display text-[1.7rem] font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-[2rem]">
                Your Support Helps
              </h2>
              <ul className="mt-6 space-y-6">
                {benefits.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${item.wrap}`}>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-sans text-[15px] font-semibold text-[#1B3A6B]">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#5C6B7C]">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F4F9FC]">
        <div className="absolute inset-y-0 left-0 z-0 hidden w-[60%] overflow-hidden rounded-r-full lg:block">
          <img
            src="/students.webp"
            alt="Students studying together outdoors"
            className="h-full w-full object-cover object-[42%_center]"
          />
        </div>
        <div className="relative z-10 lg:ml-[60%]">
          <div className="h-[280px] w-full overflow-hidden rounded-r-full sm:h-[340px] lg:hidden">
            <img
              src="/students.webp"
              alt="Students studying together outdoors"
              className="h-full w-full object-cover object-[42%_center]"
            />
          </div>
          <div className="flex items-center px-6 py-12 sm:px-8 lg:min-h-[460px] lg:px-10 lg:py-16 xl:pr-[max(4rem,calc((100vw-1380px)/2+4rem))]">
            <div className="max-w-[440px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#2E9A4A] sm:text-[13px]">
              Invest in People
            </p>
            <h2 className="mt-4 font-display text-[1.85rem] font-bold leading-[1.12] tracking-tight text-[#1B3A6B] sm:text-[2.15rem]">
              Together We Can Do More
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#3E5670]">
              Your support helps us reach more students, create stronger communities and build a more equitable and
              sustainable future.
            </p>
            <button type="submit" form="donation-form" className={`${donateButtonClass} mt-8`}>
              Donate Now
              <HiArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FBFE]">
        <div className={`${pageContainer} py-12 lg:py-16`}>
          <div className="rounded-[28px] bg-[#EAF4FB] px-5 py-8 sm:px-8 sm:py-10">
            <h2 className="font-display text-[1.7rem] font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-[2rem]">
              Other Ways to Support
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-[#5C6B7C]">
              There are many meaningful ways to contribute to our work.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <button
                type="button"
                onClick={selectMonthly}
                className="flex h-full items-start gap-4 rounded-2xl bg-white px-5 py-5 text-left shadow-[0_12px_30px_-24px_rgba(27,58,107,0.4)] transition-colors hover:bg-[#F7FBFE]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E7F3FB] text-[#1E4E8C]">
                  <HiOutlineUserGroup className="h-6 w-6" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-sans text-[15px] font-semibold text-[#1B3A6B]">Monthly Giving</span>
                  <span className="mt-1 block text-sm leading-relaxed text-[#5C6B7C]">
                    Provide ongoing support to help us plan for long-term impact.
                  </span>
                </span>
              </button>
              <Link
                to="/campaigns"
                className="flex h-full items-start gap-4 rounded-2xl bg-white px-5 py-5 text-left shadow-[0_12px_30px_-24px_rgba(27,58,107,0.4)] transition-colors hover:bg-[#F7FBFE]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E7F6EA] text-[#2E9A4A]">
                  <FaHandshake className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-sans text-[15px] font-semibold text-[#1B3A6B]">Support a Campaign</span>
                  <span className="mt-1 block text-sm leading-relaxed text-[#5C6B7C]">
                    Contribute to current initiatives that make a difference.
                  </span>
                </span>
              </Link>
              <button
                type="button"
                onClick={selectCustom}
                className="flex h-full items-start gap-4 rounded-2xl bg-white px-5 py-5 text-left shadow-[0_12px_30px_-24px_rgba(27,58,107,0.4)] transition-colors hover:bg-[#F7FBFE]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E7F3FB] text-[#1E4E8C]">
                  <HiOutlineGift className="h-6 w-6" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-sans text-[15px] font-semibold text-[#1B3A6B]">Custom Contribution</span>
                  <span className="mt-1 block text-sm leading-relaxed text-[#5C6B7C]">
                    Choose an amount that works for you.
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
