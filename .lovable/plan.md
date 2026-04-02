

# HelixID Presentation — Implementation Plan

## Overview
Build a standalone 30-slide Reveal.js presentation at `/presentation` route within the existing HelixID app. Dark cinematic theme, animated diagrams, speaker notes, and PPTX export.

## Dependencies to Install
- `reveal.js` — presentation framework
- `@noble/hashes` — live SHA3-256 demos
- `pptxgenjs` — PPTX export

Note: `framer-motion`, `recharts`, `lucide-react` already installed. No `@types/reveal.js` on npm — we'll declare types manually.

## File Structure

```text
src/presentation/
├── constants.ts              — Presenter name, URLs, date
├── theme.css                 — Dark Reveal.js theme + hex-grid bg
├── types.d.ts                — Reveal.js type declarations
├── Presentation.tsx          — Main component: initializes Reveal.js
├── components/
│   ├── SlideCounter.tsx      — "Slide X / 30" bottom-right
│   ├── FloatingToolbar.tsx   — Fullscreen, PPTX download, overview
│   ├── PresenterMode.tsx     — Current/next slide, notes, timer
│   └── ExportPptx.ts        — PptxGenJS export logic
└── slides/
    ├── Slide01Title.tsx
    ├── Slide02Abstract.tsx        (NEW)
    ├── Slide03Objectives.tsx      (NEW)
    ├── Slide04Stakes.tsx
    ├── Slide05HarvestNow.tsx
    ├── Slide06WhyHealthcare.tsx
    ├── Slide07TraditionalGap.tsx
    ├── Slide08IntroHelixID.tsx
    ├── Slide09LitSurvey.tsx       (NEW — 3 vertical sub-slides)
    ├── Slide10ProblemStatement.tsx (NEW)
    ├── Slide11TechStack.tsx       (NEW)
    ├── Slide12Architecture.tsx
    ├── Slide13PostQuantum.tsx      (2 vertical sub-slides)
    ├── Slide14DID.tsx
    ├── Slide15Blockchain.tsx
    ├── Slide16SmartContract.tsx
    ├── Slide17ZKP.tsx
    ├── Slide18FourActors.tsx
    ├── Slide19FeatureMap.tsx
    ├── Slide20DemoAuth.tsx         (2 vertical sub-slides)
    ├── Slide21DemoAccess.tsx
    ├── Slide22DemoTamper.tsx
    ├── Slide23DemoEmergency.tsx
    ├── Slide24Implementation.tsx   (NEW — 2 vertical sub-slides)
    ├── Slide25RealVsSimulated.tsx
    ├── Slide26QuantumTimeline.tsx
    ├── Slide27Achievements.tsx
    ├── Slide28ArchDecisions.tsx
    ├── Slide29Roadmap.tsx
    └── Slide30Closing.tsx
```

## Key Technical Decisions

### Reveal.js Integration
- Import Reveal.js and initialize in a `useEffect` after all slide `<section>` elements render
- Each slide component returns `<section>` elements (Reveal.js convention)
- Vertical sub-slides are nested `<section>` within a parent `<section>`
- Config: `transition: 'slide'`, vertical transition: `'fade'`, hash/controls/progress enabled
- Listen to Reveal `slidechanged` event for slide counter updates

### Routing
- Add `/presentation` route in App.tsx pointing to `Presentation.tsx`
- The presentation page is full-viewport, no TopNav or sidebar from the main app

### Visual Theme (CSS)
- Dark navy gradient background (`#0a0f1e → #0d1b2a`)
- Electric teal accent (`#00d4ff`), quantum violet (`#7c3aed`)
- Thin teal left border on every slide
- CSS hex-grid background pattern (low opacity)
- HelixID wordmark bottom-left on every slide
- Left-aligned headings, generous padding
- Monospace for all crypto values

### Animations
- Slide 1: Letter-by-letter title reveal + CSS node network animation
- Slide 7: Architecture layers fade in sequentially via Reveal.js fragments
- Slides 5, 7, 14, 19: Row-by-row fragment reveals on keypress
- Slide 10: Problem statement paragraphs fade in sequentially
- Slide 11: Tech stack layers build bottom-to-top via fragments

### Floating Toolbar
- Fullscreen toggle via `document.documentElement.requestFullscreen()`
- Overview grid via `Reveal.toggleOverview()`
- PPTX download via PptxGenJS generating simplified slide content

### Presenter Mode
- Toggle with `P` key
- Shows current slide, next preview, speaker notes, timer
- Each slide has notes embedded as `<aside class="notes">` (Reveal.js convention)

### PPTX Export
- PptxGenJS creates a simplified version with slide titles, key text, and basic layouts
- Downloads as `HelixID-Presentation.pptx`

## Implementation Order
1. Install dependencies, create constants/types/theme
2. Create `Presentation.tsx` shell with Reveal.js init + route
3. Build slides 1-10 (title through problem statement)
4. Build slides 11-20 (tech stack through demo auth)
5. Build slides 21-30 (demo flows through closing)
6. Add FloatingToolbar, SlideCounter, PresenterMode
7. Add PPTX export functionality

## Slide Content
Every slide will contain the complete, accurate content specified in the requirements — no placeholders. All technical terms, statistics, DID values, contract addresses, and block numbers will be consistent with the existing HelixID mock data.

