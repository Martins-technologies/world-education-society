// The "open pages" motif from the WES mark, reused as a quiet section
// divider so the four brand colors recur without repeating the logo itself.
export default function SectionDivider({ tone = 'light', className = '' }) {
  const bg = tone === 'light' ? '#FBF9F4' : '#242A38'

  return (
    <div className={`relative h-10 w-full overflow-hidden sm:h-14 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 40"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path d="M0,40 C100,5 130,32 200,18 C270,4 320,30 400,10 L400,40 L0,40 Z" fill="#0D90C4" opacity="0.9" />
        <path d="M0,40 C90,20 150,38 200,26 C260,12 330,34 400,20 L400,40 L0,40 Z" fill="#61589B" opacity="0.85" />
        <path d="M0,40 C110,30 160,40 200,32 C250,22 320,38 400,30 L400,40 L0,40 Z" fill="#4FAA4A" opacity="0.85" />
        <path d="M0,40 C120,36 180,40 200,38 C240,34 330,40 400,36 L400,40 L0,40 Z" fill="#EC9136" opacity="0.9" />
      </svg>
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px" style={{ backgroundColor: bg }} />
    </div>
  )
}
