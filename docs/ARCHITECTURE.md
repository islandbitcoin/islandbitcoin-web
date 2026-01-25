# Architecture Guide

## Project Structure

The project follows the standard **Next.js App Router** structure:

```
islandbitcoin-web/
├── app/
│   ├── layout.tsx          # Root layout (HTML/Body, fonts, metadata)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles and Tailwind directives
│   ├── investors/
│   │   └── page.tsx        # Investor Relations page
│   ├── privacy/
│   │   └── page.tsx        # Privacy Policy
│   ├── terms/
│   │   └── page.tsx        # Terms of Service
│   ├── opengraph-image.tsx # Dynamic OG image generation
│   ├── twitter-image.tsx   # Dynamic Twitter card image
│   ├── icon.tsx            # Dynamic favicon
│   └── apple-icon.tsx      # Dynamic Apple touch icon
├── components/
│   ├── home/
│   │   └── PillarCard.tsx  # Reusable pillar card component
│   ├── investors/
│   │   ├── InvestorHero.tsx      # Hero with stock ticker
│   │   ├── MissionStrategy.tsx   # Mission + subsidiaries
│   │   ├── FinancialReports.tsx  # Q4 documents grid
│   │   └── NewsEvents.tsx        # News/events section
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   └── MobileMenu.tsx  # Mobile navigation
│   └── ui/
│       └── icons.tsx       # Icon components
├── lib/
│   └── investor-content.ts # Investor page content data
├── public/                 # Static assets (SVGs, images)
│   ├── logo-white.svg
│   └── logo-colored.svg
├── docs/                   # Project documentation
└── next.config.ts          # Next.js configuration
```

## Pages

### Homepage (`/`)
The main landing page with:
- **Header:** Fixed navigation with blur effect
- **Hero:** Colored logo and value proposition
- **Mission:** "Four pillars of freedom" grid
- **Products:** Flash Wallet showcase
- **CTA:** Call to action section
- **Footer:** Links and copyright

### Investor Relations (`/investors`)
Corporate investor information page:
- **InvestorHero:** Stock ticker display (PRIVATE COMPANY)
- **MissionStrategy:** Mission statement and subsidiary list (Taddesse Inc. structure)
- **FinancialReports:** Q4 2025 financial documents grid
- **NewsEvents:** Company news and events

### Legal Pages
- **Privacy Policy (`/privacy`):** Standard privacy policy for Taddesse Inc.
- **Terms of Service (`/terms`):** Standard terms of service

## Dynamic Image Generation

The site uses Next.js `ImageResponse` for dynamic social sharing images:
- `opengraph-image.tsx` - 1200×630 OG images
- `twitter-image.tsx` - 1200×628 Twitter cards
- `icon.tsx` - 32×32 favicon
- `apple-icon.tsx` - 180×180 Apple touch icon

Brand colors used: Purple (#7f42a1), Cream (#faf3db), Orange (#ffb511)

## Animations

**Framer Motion** powers all animations:
- `useScroll` / `useTransform`: Parallax effects
- `whileInView`: Fade-in on scroll
- `whileHover`: Interactive feedback
- `staggerChildren`: Cascading grid animations

## Styling

- **Tailwind CSS** is the sole styling engine
- **Dark Mode:** Permanent dark theme (black background)
- **Glassmorphism:** `bg-white/[0.03]` and `backdrop-blur` effects
- **Grid Pattern:** Subtle grid overlay on all pages

## Corporate Structure

The website represents **Taddesse Incorporated** and its subsidiaries:
- Island Bitcoin LLC
- Island Bitcoin Jamaica Ltd
- Brave Island Mining
- Island Bitcoin Foundation
