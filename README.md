# Viktor Oddy — Studio Landing Page

Single-page landing site for a creative design studio. React + TypeScript +
Vite + Tailwind CSS v4, with GSAP for scroll-linked parallax and Motion
(Framer Motion) for interaction-driven animation.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  components/
    ui/          reusable primitives (Button)
    layout/      chrome shared across the page (Footer, CopyrightBar, BottomNav)
    sections/    one component per page section, in page order
  data/          static content — testimonials, projects, marquee images
  hooks/         useInViewAnimation (scroll reveal), useParallax (GSAP)
  lib/           utils.ts — cn() class-merging helper
  types/         shared TypeScript interfaces
  index.css      Tailwind v4 entry point, @theme tokens, font-face rules
```

## Before you ship this

A few things are placeholders on purpose and need your own assets swapped in:

- **Fonts** — `src/index.css` declares `@font-face` rules for PP Neue
  Montreal and PP Mondwest pointing at `/public/fonts/*.woff2`. Those files
  aren't included (they're commercial fonts licensed from Pangram Pangram);
  drop your licensed files in `public/fonts/` and they'll load automatically.
  Until then the page falls back to system fonts.
- **Imagery** — every image (`src/data/marquee.ts`, `src/data/projects.ts`,
  `src/data/testimonials.ts`, and the portrait in `TestimonialQuote.tsx` /
  `Partner.tsx`) points at Lorem Picsum placeholders. Swap the `url` /
  `imageUrl` / `avatarUrl` fields for your own project stills and headshots.
- **Copy** — bio, quote, testimonials, and project descriptions in `src/data/`
  and in `Hero.tsx` / `TestimonialQuote.tsx` are placeholder copy. Replace
  with your real story, real client quotes (with permission), and real case
  studies.
- **Booking link** — every "Start a chat" / "How it works" button points at
  `#book`, which currently just scrolls to the footer. Point it at a real
  booking flow (Cal.com, Calendly, a contact form) when you have one.
- **Social links** — the footer's `x.com` / `LinkedIn` links go to the bare
  domains. Point them at your real profiles in
  `src/components/layout/Footer.tsx`.
