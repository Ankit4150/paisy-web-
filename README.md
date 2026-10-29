# Paisy — Homepage

A Next.js 16 (App Router) + Tailwind CSS v4 homepage for Paisy, styled after the provided KAST reference video (dark canvas, bold display headlines, floating card mockups, full-bleed gradient panels, accordion FAQ) and re-skinned with Paisy's own brand gradient (blue → purple, sampled directly from your logo).

## 🚀 Live Demo

**Live Website:** [https://paisy-web.vercel.app/](https://paisy-web.vercel.app/)

Click the link above to explore the live Paisy homepage.

## Getting Started

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

## Project Structure

```text
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx          Homepage (assembles all sections)
  globals.css       Design tokens (colors, fonts) + brand utility classes
  fonts/            Self-hosted Space Grotesk + Inter font files

components/
  Nav.tsx
  Hero.tsx
  TrustStrip.tsx
  Features.tsx
  CardShowcase.tsx
  HowItWorks.tsx
  Security.tsx
  Testimonials.tsx
  Business.tsx
  Faq.tsx
  CtaBand.tsx
  Footer.tsx
  ComingSoon.tsx

public/
  assets/
    logo/
    images/
    icons/
```

## Scroll Behavior

The top four sections (Hero → Everything-in-one-app → The Paisy Card → Security) use a pinned "stacking slides" effect built with CSS `position: sticky` and `z-index`.

On mobile (below the `md` breakpoint), the layout falls back to normal block scrolling.

Everything below Security scrolls normally.

## Design Tokens

Colors are defined in `app/globals.css` under `@theme inline`.

| Token | Hex | Use |
|---|---|---|
| `--color-blue` | `#5FA3EA` | Gradient start, accents |
| `--color-violet` | `#7C3AED` | Gradient midpoint |
| `--color-purple` | `#6B0FAD` | Gradient end |
| `--color-base` | `#0A0518` | Page background |
| `--color-surface` | `#120A26` | Card backgrounds |

Fonts: **Space Grotesk** for display/headlines and **Inter** for body text. Both are self-hosted in `app/fonts/`.

## Swapping in Real Imagery

Any section currently showing a "coming soon" gradient panel uses the `ComingSoon` component.

1. Add the image to `public/assets/images/`.
2. Replace the relevant `ComingSoon` component with a `next/image` element pointing to the new
