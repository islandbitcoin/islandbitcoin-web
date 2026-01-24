# Design System

## Theme Philosophy

**"Bitcoin in Paradise"** meets **"Institutional Finance"**.

The design is heavily inspired by **Block.xyz**:
- **Minimalist:** High contrast, lots of whitespace.
- **Premium:** Subtle gradients, fine borders, glass textures.
- **Confident:** Large typography, direct messaging.

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Black** | `#000000` | Main Background |
| **White** | `#FFFFFF` | Primary Text |
| **Slate-500** | `#64748B` | Secondary Text |
| **Orange Gradient** | `from-orange-500 to-amber-500` | Buttons, Accents (Bitcoin) |
| **Card Bg** | `rgba(255,255,255, 0.03)` | Cards / Panels |
| **Card Border** | `rgba(255,255,255, 0.1)` | Subtle dividers |

## Typography

- **Font:** `Geist Sans` (Next.js default) - Clean, modern, highly legible.
- **Headings:** Bold, tight tracking.
- **Body:** Regular weight, relaxed line height for readability.

## Components

### Buttons
- **Primary:** Gradient background, black text (high visibility).
- **Secondary:** Transparent background, white border (subtle).

### Cards
- Used for Pillars and Products.
- **Hover State:** `border-orange-500/30` glow effect + slight lift.
- **Icons:** Minimal SVG outlines (Lucide style).

## Assets
- **Logos:** Stored in `/public`. Use `logo-colored.svg` on dark backgrounds.
