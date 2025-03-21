---
description: Best practices for Next.js application development
globs: "**/*.{js,jsx,ts,tsx}"
__meta__framework: Next.js
__meta__author: jorgemasta
__meta__type: best-practice
__meta__tags: ["Next.js"]
---

# Next.js Best Practices

## Project Structure

- Organize your application by feature rather than by file type
- Keep components that are only used by a single page within that page's directory
- Use the App Router for new projects and migrate gradually from Pages Router
- Create custom error boundaries for better error handling

## Data Fetching

- Prefer Server Components for data fetching when possible
- Use proper caching and revalidation strategies
- Implement loading states for better UX
- Handle errors gracefully with error boundaries

## Performance

- Use Image component for optimized images
- Implement dynamic imports for code splitting
- Minimize client-side JavaScript
- Use server actions for form submissions when applicable
- Optimize fonts with next/font

## Styling and UI

- Choose a consistent styling approach (CSS Modules, Tailwind, etc.)
- Use CSS variables for theming
- Implement responsive designs with mobile-first approach
- Create reusable UI components

## State Management

- Use React Context for simple global state
- Consider libraries like Zustand or Jotai for complex state
- Keep state as local as possible
- Use URL state for shareable UI states

## Deployment

- Use environment variables for configuration
- Set up proper CI/CD pipelines
- Configure proper caching policies
- Monitor application performance with analytics