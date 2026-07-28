# World Education Society — Homepage

React + Vite + Tailwind CSS + Framer Motion. Built from the WES homepage
mockup guide and the WES logo mark (globe/open-book, in ocean blue,
sun orange, leaf green and violet).

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. For a production build:

```bash
npm run build
npm run preview
```

## What's built vs. placeholder

- **Homepage (`/`)** — fully built: Hero, Highlights, About, Services,
  Destinations, Scholarships, Featured Courses, How It Works, Testimonials,
  CTA/contact form, Navbar and Footer.
- **Every other route** (`/about`, `/services`, footer's Privacy/Terms/FAQ
  links, etc.) — renders a shared `ComingSoon` page. Swap in real pages by
  adding a `<Route>` in `src/App.jsx` above the catch-all `*` route.

## Structure

```
src/
  components/     One component per homepage section — all reusable and
                   content-driven (no copy hardcoded inside markup).
  data/content.js Single source of truth for nav links, stats, services,
                   destinations, courses, steps, testimonials, footer links.
                   Point this at a CMS/API later without touching JSX.
  pages/          Home.jsx (composes the sections) and ComingSoon.jsx.
  assets/         Logo file, bundled by Vite.
```

## Theme

Colors and type live in `tailwind.config.js`, sampled directly from the WES
logo:

| Token | Hex | Use |
|---|---|---|
| `ocean` | `#0D90C4` | Primary actions, links, trust |
| `sun` | `#EC9136` | Accent, highlights |
| `leaf` | `#4FAA4A` | Accent, success states |
| `violet` | `#61589B` | Secondary accent |
| `navy-800` | `#242A38` | Text, dark sections |
| `cream` / `sand` | `#FBF9F4` / `#F2EDE2` | Backgrounds |

Fonts: **Fraunces** (display/headings) + **Inter** (body/UI), loaded via
Google Fonts in `index.html`.

## Before going live

- Wire `EnquiryForm.jsx`'s `handleSubmit` to your CRM/contact-form endpoint
  (the "Developer Notes" in the brief call for CRM + form integration).
- Swap the Unsplash hero photo (`src/components/Hero.jsx`) for licensed
  photography of real students, with permission.
- Add real testimonial names/photos in `src/data/content.js` (with consent).
- Drop in Google Maps, analytics and a chat widget where noted in the brief.
- Verify and update the "70+ universities / 300+ colleges" figures — the
  brief flags these as subject to verification.
- Add per-page `<title>`/meta once real subpages replace `ComingSoon`.
