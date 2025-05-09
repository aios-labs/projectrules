---
description: "Site/Frontend implementation using Astro, React, and Tailwind CSS"
globs: "site/**/*.astro, site/**/*.tsx, site/**/*.ts, site/**/*.mjs"
__meta__type: "guideline"
__meta__repo: "ctxs-ai/ctxs.ai"
__meta__service: "Cloudflare"
__meta__framework: "Astro"
__meta__tags: ["Astro","React","TailwindCSS","Frontend","Web Development"]
__meta__rate: 9
---
# ctxs.ai Site/Frontend

This part of the project implements the web interface for ctxs.ai using Astro with React components and Tailwind CSS for styling.

## Architecture Overview

The site follows Astro's file-based routing system with these key directories:

- `site/src/pages/`: Contains route definitions and page components
- `site/src/components/`: Reusable UI components (both Astro and React)
- `site/src/layouts/`: Page layouts and templates
- `site/src/lib/`: Utility functions and helpers
- `site/src/styles/`: Global styles and Tailwind configuration

## Technology Stack

- **Framework**: [Astro](https://astro.build) - A modern static site builder with island architecture
- **UI Components**: React 19 (with JSX/TSX)
- **Styling**: Tailwind CSS 4 with custom components using shadcn/ui architecture
- **Deployment**: Cloudflare Pages (configured with Astro Cloudflare adapter)

## Development Patterns

### Component Guidelines

- Prefer Astro components (`.astro`) for static UI elements and page layouts
- Use React components (`.tsx`) for interactive elements that require client-side JavaScript
- Follow the component structure in `site/src/components/ui/` for consistent styling

### API endpoints

- Add `export const prerender = false` to the beginning of API endpoints so that they are deployed as server functions

### Styling Approach

- Use Tailwind utility classes for styling
- UI components follow the shadcn/ui pattern for consistency and maintainability
- Custom styles should be added to the appropriate files in `site/src/styles/`

### Data Fetching

- The site interfaces with the context system to display markdown files
- API routes are defined in `site/src/pages/api/`
- Context data is fetched and rendered through the components in `site/src/components/`

## Best Practices

1. Use TypeScript for type safety and better developer experience
2. Keep components small and focused on a single responsibility
3. Follow Astro's performance patterns by minimizing client-side JavaScript
4. Maintain accessibility standards in all UI components
5. Use the existing UI component library rather than creating custom styles

This is a modern web application built with performance and maintainability in mind. When contributing, ensure your changes align with the existing architecture and design patterns.