# Architecture Guide

## Project Structure

The project follows the standard **Next.js App Router** structure:

```
islandbitcoin-web/
├── app/
│   ├── layout.tsx      # Root layout (HTML/Body structure, fonts)
│   ├── page.tsx        # Main homepage (Hero, Pillars, Products)
│   └── globals.css     # Global styles and Tailwind directives
├── public/             # Static assets (SVGs, images)
│   ├── logo-white.svg
│   └── logo-colored.svg
├── docs/               # Project documentation
└── next.config.ts      # Next.js configuration
```

## Key Components

Currently, the homepage is built as a single cohesive page in `page.tsx` for simplicity and performance.

### `Home` (page.tsx)
The main component that orchestrates the sections:
1.  **Header:** Fixed navigation bar with blur effect.
2.  **Hero:** Main landing area with the colored logo and value prop.
3.  **Mission:** "Four pillars of freedom" grid.
4.  **Products:** Showcase for Flash Wallet.
5.  **CTA:** Final call to action.
6.  **Footer:** Social links and copyright.

## Animations

**Framer Motion** is used for all animations:
- `useScroll` / `useTransform`: Parallax effects (though simplified in v1.0).
- `whileInView`: Fade-in elements as user scrolls.
- `whileHover`: Interactive feedback on cards and buttons.
- `staggerChildren`: Cascading animations for grid items.

## Styling

- **Tailwind CSS** is the sole styling engine.
- **Dark Mode:** The site is permanently in "dark mode" (black background) to match the brand aesthetic.
- **Glassmorphism:** Heavy use of `bg-white/[0.03]` and `backdrop-blur` for modern UI feel.
