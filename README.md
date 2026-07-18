# CrashConnect — Cinematic Landing Page

A Next.js 14 (App Router) cinematic landing page for CrashConnect / CATS,
built around a scroll-linked HTML5 Canvas frame sequence.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **Framer Motion** for scroll reveals, the preloader, and micro-interactions
- **GSAP + ScrollTrigger** for the canvas frame-sequence scrubbing
- Plain HTML5 Canvas (no video element) for the frame sequence itself

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

This has already been verified to build cleanly (`npm run build` completes
with 0 errors, static-prerenders the page, ~178KB first load JS).

## How the frame sequence works

- `public/frames/` contains 270 JPEGs (resized to 960px wide, compressed —
  the original 167MB PNG export is down to ~10MB total) named
  `frame_0001.jpg` … `frame_0270.jpg`.
- `lib/frameStore.js` is a small singleton that preloads frame 1 first, then
  a spread across the sequence, then backfills the rest during browser idle
  time — so the hero is never blocked on the full sequence loading.
- `components/FrameCanvas.jsx` renders a `position: fixed` canvas behind the
  entire page. A single GSAP ScrollTrigger spans `document.body` (top to
  bottom) and maps scroll progress directly to frame index — no autoplay,
  scroll is the only thing that advances the animation.
- `components/Preloader.jsx` shows real loading progress (not a fake timer)
  by subscribing to the same frame store.

## Design direction

Deep black / graphite base, soft white type, electric cyan used sparingly
for accents and key data points. Inter throughout, tracking-tight on
headlines. The frame sequence is fully revealed in the Hero and Technology
sections (the "story beats"); everywhere else it sits behind mostly-opaque
graphite panels so the reading experience stays calm and premium rather than
busy — the canvas is still live and scrubbing the whole time, it's just a
supporting layer rather than the focus in content-heavy sections.

## Content

All copy, stats, testimonials, roadmap phases, and contact details are taken
directly from crashconnect.in — nothing invented. Swap real analytics,
forms, and CMS content in as needed; every section is its own component
under `components/` for easy editing.

## Regenerating the frame sequence

If you get a new source video/GIF export, drop the frames into
`public/frames/` following the same `frame_0001.jpg` naming and update
`FRAME_COUNT` in `lib/frames.js` to match.
