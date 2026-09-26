import { Link } from 'react-router-dom'
import { FaHandshake } from 'react-icons/fa'
import {
  HiArrowRight,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendarDays,
  HiOutlineGift,
  HiOutlineHeart,
  HiOutlineMapPin,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from 'react-icons/hi2'
import { pageContainer, heroGreenButton, heroOutlineButton, heroPrimaryButton } from '../PageHero'

export { pageContainer }

export function ImagePlaceholder({ className = '', aspect = '', src, alt = '', fit = 'cover', style }) {
  const objectClass = fit === 'contain' ? 'object-contain' : 'object-cover'
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${objectClass} ${aspect} ${className}`}
        style={style}
      />
    )
  }
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-[20px] bg-[#E7EEF2] text-[#8AA0B5] ${aspect} ${className}`}
      aria-hidden={!alt}
    >
      <span className="px-4 text-center text-[11px] font-semibold uppercase tracking-[0.14em]">Image placeholder</span>
    </div>
  )
}

export function ProgressBar({ value, label, compact = false }) {
  return (
    <div>
      {!compact && (
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-semibold text-[#2E9A4A]">{label}</span>
        </div>
      )}
      <div className={`${compact ? '' : 'mt-2'} h-2 overflow-hidden rounded-full bg-[#E5F2E8]`} aria-hidden="true">
        <div className="h-full rounded-full bg-[#2E9A4A]" style={{ width: `${value}%` }} />
      </div>
      {compact && <p className="mt-1.5 text-right text-[12px] font-semibold text-[#2E9A4A]">{label}</p>}
    </div>
  )
}

export function CampaignMeta({ dates, location, audience, reach, className = '' }) {
  const rows = [
    dates ? { icon: HiOutlineCalendarDays, text: dates } : null,
    location ? { icon: HiOutlineMapPin, text: location } : null,
    audience ? { icon: HiOutlineUsers, text: audience } : null,
    reach ? { icon: HiOutlineUsers, text: reach } : null,
  ].filter(Boolean)

  return (
    <ul className={`space-y-2.5 text-[13px] text-[#5C6B7C] ${className}`}>
      {rows.map((row) => (
        <li key={row.text} className="flex items-start gap-2.5">
          <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#1E4E8C]" aria-hidden="true" />
          <span className="leading-snug">{row.text}</span>
        </li>
      ))}
    </ul>
  )
}

export function SectionEyebrow({ children, className = '' }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B8C9C] ${className}`}>{children}</p>
  )
}

export function SectionHeading({ children, className = '' }) {
  return (
    <h2 className={`font-display text-[1.85rem] font-bold tracking-tight text-[#1B3A6B] sm:text-[2.05rem] ${className}`}>
      {children}
    </h2>
  )
}

/** @deprecated use SectionHeading */
export const SectionTitle = SectionHeading

export function SectionIntro({ children, className = '' }) {
  return <p className={`mt-2 max-w-2xl text-[15px] leading-relaxed text-[#5C6B7C] ${className}`}>{children}</p>
}

export function ArrowLink({ to, children, onClick, className = '' }) {
  const baseClass =
    'inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4E8C] transition-colors hover:text-[#163E70]'
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${baseClass} ${className}`}>
        <span>{children}</span>
        <HiArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    )
  }
  return (
    <Link to={to} className={`${baseClass} ${className}`}>
      <span>{children}</span>
      <HiArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

const buttonClass = {
  primary: heroPrimaryButton,
  outline: heroOutlineButton,
  green: heroGreenButton,
}

export function ActionButton({ to, variant = 'primary', children, className = '' }) {
  return (
    <Link to={to} className={`${buttonClass[variant] || buttonClass.primary} ${className}`}>
      <span>{children}</span>
      <HiArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

function primaryCtaVariant(label) {
  return label === 'Donate' || label === 'Get Involved' || label === 'Donate Now' || label === 'Join Us' ? 'green' : 'primary'
}

export function CampaignCard({ campaign }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E6EEF4] bg-white shadow-[0_12px_30px_-24px_rgba(27,58,107,0.55)]">
      <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-[#F7FBFE]">
        <ImagePlaceholder
          src={campaign.image}
          alt={campaign.imageAlt || campaign.title}
          fit="cover"
          className="!rounded-none absolute inset-0 h-full w-full"
          style={{ objectPosition: campaign.imagePosition || 'center' }}
        />
      </div>
      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
        <h3 className="font-display text-[1.35rem] font-bold leading-tight text-[#1B3A6B]">{campaign.title}</h3>
        <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[#5C6B7C]">{campaign.description}</p>
        <div className="mt-4 space-y-3">
          <CampaignMeta dates={campaign.dates} location={campaign.location} audience={campaign.audience} />
          <ProgressBar value={campaign.progress} label={campaign.progressLabel} />
        </div>
        <div className="mt-5 flex flex-col gap-2.5 min-[420px]:flex-row">
          <ActionButton
            to={campaign.primaryCta.href}
            variant={primaryCtaVariant(campaign.primaryCta.label)}
            className="min-w-0 flex-1 !justify-center !px-3 !py-2.5 !text-[13px]"
          >
            {campaign.primaryCta.label}
          </ActionButton>
          <ActionButton
            to={campaign.secondaryCta.href}
            variant="outline"
            className="min-w-0 flex-1 !justify-center !px-3 !py-2.5 !text-[13px]"
          >
            {campaign.secondaryCta.label}
          </ActionButton>
        </div>
      </div>
    </article>
  )
}

export function ImpactStatIcon({ type }) {
  const wrap = 'mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F2FC] text-[#1E4E8C]'
  if (type === 'heart') {
    return (
      <span className={`${wrap} !bg-[#E5F6EA] !text-[#2E9A4A]`}>
        <HiOutlineHeart className="h-5 w-5" aria-hidden="true" />
      </span>
    )
  }
  if (type === 'cap') {
    return (
      <span className={wrap}>
        <HiOutlineAcademicCap className="h-5 w-5" aria-hidden="true" />
      </span>
    )
  }
  if (type === 'group') {
    return (
      <span className={wrap}>
        <HiOutlineUserGroup className="h-5 w-5" aria-hidden="true" />
      </span>
    )
  }
  return (
    <span className={wrap}>
      <HiOutlineUsers className="h-5 w-5" aria-hidden="true" />
    </span>
  )
}

const heroStatIcons = {
  users: HiOutlineUsers,
  book: HiOutlineBookOpen,
  handshake: FaHandshake,
  map: HiOutlineMapPin,
  heart: HiOutlineHeart,
  gift: HiOutlineGift,
}

export function CampaignHeroStat({ value, label, icon }) {
  const Icon = heroStatIcons[icon] || HiOutlineUsers
  return (
    <div className="flex min-w-0 flex-col items-center px-2 text-center sm:px-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F2FC] text-[#1E4E8C]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <p className="mt-3 font-display text-lg font-bold leading-tight text-[#1B3A6B] sm:text-xl">{value}</p>
      <p className="mt-1 text-[11px] font-medium leading-snug text-[#5C6B7C] sm:text-[12px]">{label}</p>
    </div>
  )
}

export function StatusBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex rounded-full bg-[#E5F6EA] px-4 py-1.5 text-[12px] font-semibold text-[#2E9A4A] ${className}`}
    >
      {children}
    </span>
  )
}

export function CampaignSectionSubintro({ children }) {
  return <p className="mt-1 text-[14px] font-medium leading-snug text-[#1B3A6B] sm:text-[15px]">{children}</p>
}

export function CampaignSplitSectionHeader({ title, linkTo, linkLabel, intro }) {
  return (
    <div className="mb-5">
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
        <SectionHeading className="min-w-0 max-w-full !text-[1.45rem] leading-tight sm:!text-[1.65rem]">{title}</SectionHeading>
        <ArrowLink to={linkTo} className="mt-0.5 text-[13px] sm:text-sm">
          {linkLabel}
        </ArrowLink>
      </div>
      <CampaignSectionSubintro>{intro}</CampaignSectionSubintro>
    </div>
  )
}

export function CampaignOutlineButton({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex max-w-full items-center justify-center rounded-full border border-[#1B3A6B] bg-white px-6 py-2.5 text-center text-[13px] font-semibold text-[#1B3A6B] transition-colors hover:bg-[#F6F9FB] sm:px-7 sm:py-3 sm:text-[14px] ${className}`}
    >
      {children}
    </Link>
  )
}

export function PastCampaignHighlightCard({ past }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#E6EEF4] bg-white shadow-[0_8px_24px_-20px_rgba(27,58,107,0.35)]">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#E7EEF2]">
        <ImagePlaceholder
          src={past.image}
          alt={past.imageAlt || past.title}
          fit="contain"
          className="!rounded-none absolute inset-0 h-full w-full object-center"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
        <div className="flex flex-wrap items-start justify-between gap-2 gap-y-3">
          <h3 className="min-w-0 flex-1 font-display text-[1.05rem] font-bold leading-snug text-[#1B3A6B] sm:text-lg">
            {past.title}
          </h3>
          <StatusBadge className="shrink-0">{past.status}</StatusBadge>
        </div>
        <p className="mt-2 text-[13px] leading-relaxed text-[#5C6B7C]">{past.description}</p>
        <CampaignMeta
          dates={past.dates}
          reach={past.reach}
          className="mt-3 !space-y-1.5 [&_li]:text-[12px] [&_li]:text-[#1B3A6B] sm:[&_li]:text-[13px]"
        />
        <div className="mt-4">
          <CampaignOutlineButton to="/our-impact" className="w-full sm:w-auto">
            View Impact
          </CampaignOutlineButton>
        </div>
      </div>
    </article>
  )
}

export function UpcomingEventHighlightCard({ event }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#E6EEF4] bg-white shadow-[0_8px_24px_-20px_rgba(27,58,107,0.35)]">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#E7EEF2]">
        <ImagePlaceholder
          src={event.image}
          alt={event.imageAlt || event.title}
          fit="cover"
          className="!rounded-none absolute inset-0 h-full w-full"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
        <h3 className="font-display text-[1.05rem] font-bold leading-snug text-[#1B3A6B] sm:text-lg">{event.title}</h3>
        <CampaignMeta
          dates={event.date}
          location={event.location}
          className="mt-3 !space-y-1.5 [&_li]:text-[12px] [&_li]:text-[#1B3A6B] sm:[&_li]:text-[13px]"
        />
        <div className="mt-4">
          <CampaignOutlineButton to="/contact" className="w-full sm:w-auto">
            Join Us
          </CampaignOutlineButton>
        </div>
      </div>
    </article>
  )
}
