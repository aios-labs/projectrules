---
description: "UI & Styling (Tailwind, Framer Motion, ShadCN)"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "dislovemartin/lota-canada"
__meta__original_filename: "ui"
__meta__duplicate: "true"
__meta__framework: "Tailwind"
__meta__tags: ["UI","Styling","Animations","TailwindCSS","Accessibility"]
__meta__rate: 7
---
## UI & Styling (Tailwind, Framer Motion, ShadCN)
- Use **Tailwind CSS** for all styling.
- Use **Framer Motion** for animations and micro-interactions.
- Use **ShadCN UI + Radix UI** for accessible and themeable components.
- Use @tailwindcss/typography for rich text formatting.
- Ensure **consistent padding, spacing, and layout** (py-32, rounded-xl).
- Use **dark mode** with Tailwind's dark: utilities.

## Animations & Micro-interactions
- Use **Framer Motion** for:
  - Entrance animations (initial, animate, exit).
  - **Directional animations** (expand, fade, slide effects).
  - **Hover effects on cards and buttons**.
  - **Loading animations** with animate-pulse.
- Animate **gradients & backgrounds subtly**.

## Navigation & Interactive Elements
- Use **animated underlines** for links (after:transition-all).
- Implement **button hover states** with smooth transitions.
- Use **animated gradient bars** that respond to hover.
- Ensure **focus states** are well-defined for accessibility.

## Mobile Optimization
- Ensure **touch-friendly buttons** (min-h-12, rounded-lg).
- Maintain **legible typography across screen sizes**.
- Optimize **mobile animations** to prevent excessive re-renders.
- Use **flex and grid layouts** for responsiveness.

## Component & File Structure
- Follow **Next.js App Router conventions**:
  - app/ for pages.
  - components/ui/ for shared UI components.
  - lib/ for utilities and helpers.
  - styles/ for Tailwind customization.
- Use **named exports** for components.
- Use **lowercase with dashes for directories** (components/hero-section).