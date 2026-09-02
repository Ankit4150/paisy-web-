# Paisy — Homepage

A Next.js 16 (App Router) + Tailwind CSS v4 homepage for Paisy, styled after the
provided KAST reference video (dark canvas, bold display headlines, floating
card mockups, full-bleed gradient panels, accordion FAQ) and re-skinned with
Paisy's own brand gradient (blue → purple, sampled directly from your logo).

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

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Homepage (assembles all sections)
  globals.css        Design tokens (colors, fonts) + brand utility classes
  fonts/              Self-hosted Space Grotesk + Inter font files
components/
  Nav.tsx             Header / navigation
  Hero.tsx            Hero section + balance card mockup
  TrustStrip.tsx       Stats + payment rail logos
  Features.tsx         "Everything, one app" feature grid
  CardShowcase.tsx      Card section + stats
  HowItWorks.tsx         4-step numbered walkthrough
  Security.tsx           Security section
  Testimonials.tsx        Customer quotes
  Business.tsx             Business/teams teaser panel
  Faq.tsx                   Interactive accordion
  CtaBand.tsx                Final gradient CTA band
  Footer.tsx                  Site footer
  ComingSoon.tsx               Reusable placeholder for art you don't have yet
public/
  assets/
    logo/    Your logo, background removed, exported at 32/64/128/256/512px
    images/  Drop real product photography / screenshots here
    icons/   Drop custom icon assets here
```

## Scroll behavior

The top four sections (Hero → Everything-in-one-app → The Paisy Card →
Security) use a **pinned "stacking slides"** effect: each one sticks to the
top of the viewport while you scroll through it, then the next slide scrolls
up and slides over it with a rounded top edge — the "home stays fixed, new
slide comes in" effect. This is built with plain CSS `position: sticky` and
`z-index` (see `components/StackSlide.tsx`), no scroll-jacking JS, so it's
fast and respects `prefers-reduced-motion` automatically.

On mobile (below the `md` breakpoint) this falls back to normal block
scrolling, since pinned full-height panels tend to fight with mobile browser
chrome and can clip content on short viewports.

Everything below Security (stats, trust strip, how-it-works, testimonials,
business, FAQ, final CTA) scrolls normally.

## Design tokens

Colors are defined once in `app/globals.css` under `@theme inline`, sampled
directly from your logo:

| Token           | Hex       | Use                          |
|-----------------|-----------|-------------------------------|
| `--color-blue`    | `#5FA3EA` | Gradient start, accents        |
| `--color-violet`  | `#7C3AED` | Gradient midpoint               |
| `--color-purple`  | `#6B0FAD` | Gradient end                     |
| `--color-base`    | `#0A0518` | Page background                  |
| `--color-surface` | `#120A26` | Card backgrounds                  |

Fonts: **Space Grotesk** for display/headlines, **Inter** for body text —
both self-hosted in `app/fonts/` (no external font-CDN calls at build/runtime).

## Swapping in real imagery

Any section currently showing a "coming soon" gradient panel uses the
`<ComingSoon />` component. Once you have real photography or product shots:

1. Drop the file into `public/assets/images/`.
2. Replace the `<ComingSoon ... />` call in the relevant component
   (e.g. `CardShowcase.tsx`, `Security.tsx`) with a plain `next/image` tag
   pointing at your new asset.

## Notes

- This build only includes the **home page** per your request. Other routes
  linked in the nav/footer (e.g. `/card`, `/security`, `/pricing`) are not
  yet built — the links are in place and ready to be wired up.
- Fully responsive down to mobile, with visible focus states and
  `prefers-reduced-motion` respected on the reveal animation.
