# Architectural Decisions

## Component Structure
- Using flat component structure: `components/layout/`, `components/home/`, `components/ui/`
- Preserving existing inline SVGs (moving to `components/ui/icons.tsx`)
- Extracting data to `lib/content.ts`

## Mobile Menu
- Dependencies: `react-remove-scroll`, `focus-trap-react`
- Animation: Framer Motion (already installed)
- Accessibility: ARIA labels, focus trap, scroll lock
