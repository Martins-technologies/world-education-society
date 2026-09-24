export const pageContainer = 'mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-10'
export const heroPrimaryButton =
  'inline-flex items-center gap-2 rounded-full bg-[#1E4E8C] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#183E72] sm:text-[15px]'
export const heroTextLink =
  'inline-flex items-center gap-2 text-sm font-semibold text-[#1B3A6B] transition-colors hover:text-[#1E4E8C] sm:text-[15px]'
export const heroOutlineButton =
  'inline-flex items-center gap-2 rounded-full border border-[#1B3A6B] bg-white px-5 py-3 text-sm font-semibold text-[#1B3A6B] transition-colors hover:bg-[#F1F6FB] sm:text-[15px]'
export const heroGreenButton =
  'inline-flex items-center gap-2 rounded-full bg-[#2E9A4A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#267F3C] sm:text-[15px]'

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition = 'center',
  imageLayout = 'cover',
  imageNotes,
  footnote,
  children,
}) {
  const fullImage = imageLayout === 'full'

  return (
    <section className="relative overflow-hidden bg-[#F7FBFE] pt-[74px]">
      {fullImage ? (
        <div
          className="pointer-events-none absolute bottom-0 right-0 top-[74px] hidden w-[58%] lg:block"
          style={{ clipPath: 'url(#heroCurveClip)' }}
        >
          <img src={image} alt={imageAlt} className="h-full w-full object-cover object-center" />
        </div>
      ) : null}
      {fullImage && imageNotes ? (
        <div className="pointer-events-none absolute bottom-0 right-0 top-[74px] hidden w-[58%] lg:block">
          {imageNotes}
        </div>
      ) : null}
      {!fullImage ? (
        <div className="absolute bottom-0 left-[36%] right-0 top-[74px] hidden lg:block">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </div>
      ) : null}
      {fullImage ? (
        <svg className="absolute h-0 w-0" aria-hidden="true">
          <clipPath id="heroCurveClip" clipPathUnits="objectBoundingBox">
            <path d="M0.2,0 C0.07,0.12 0,0.3 0.02,0.48 C0.05,0.7 0.17,0.85 0.15,1 L1,1 L1,0 Z" />
          </clipPath>
        </svg>
      ) : (
        <svg
          className="absolute bottom-0 left-0 top-[74px] hidden h-[calc(100%-74px)] w-full lg:block"
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path fill="#E4F1FA" d="M0 0h700c110 30 60 140 150 230 80 80 20 190-40 330H0V0Z" />
          <path fill="#F7FBFE" d="M0 0h650c95 38 35 150 132 240 68 72 0 180-68 320H0V0Z" />
        </svg>
      )}
      <div className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full bg-[#DDEEF9]/70 blur-3xl" />

      <div className={`relative grid items-center gap-8 py-12 lg:min-h-[520px] lg:grid-cols-[minmax(0,540px)_1fr] lg:py-16 ${pageContainer}`}>
        <div className="max-w-[540px]">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#1E4E8C] sm:text-[13px]">{eyebrow}</p>
          <h1 className="mt-4 font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-[#1B3A6B] sm:text-6xl lg:text-[4rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-[470px] text-base leading-relaxed text-[#3E5670] sm:text-[17px]">{description}</p>
          {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
          {footnote && <div className="mt-7">{footnote}</div>}
        </div>

        <div className={`bg-[#E7EEF2] lg:hidden ${fullImage ? '' : 'overflow-hidden rounded-[28px]'}`}>
          <img
            src={image}
            alt={imageAlt}
            className={fullImage ? 'h-auto w-full rounded-[28px] object-contain' : 'h-[300px] w-full object-cover sm:h-[400px]'}
            style={fullImage ? undefined : { objectPosition: imagePosition }}
          />
        </div>
      </div>
    </section>
  )
}
