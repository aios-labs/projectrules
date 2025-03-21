---
description: Best practices for working with Tailwind CSS
globs: "**/*.{html,jsx,tsx}"
__meta__author: jorgemasta
__meta__type: best-practice
__meta__tags: ["Tailwind CSS"]
---

# Tailwind CSS Best Practices

## Project Setup

- Configure your project with tailwind.config.js
- Extend the default theme instead of overriding it completely
- Use the @layer directive for custom utilities
- Configure content paths correctly to avoid purging needed classes
- Add plugins for commonly used patterns in your project

## Class Organization

- Group related utilities together (layout, typography, colors, etc.)
- Use consistent ordering for utility classes
- Extract components for reused patterns
- Consider using the @apply directive for complex, repeated patterns
- Use arbitrary values sparingly

## Responsive Design

- Follow a mobile-first approach
- Use responsive variants consistently (sm:, md:, lg:, xl:, 2xl:)
- Test thoroughly across different breakpoints
- Avoid overly complex responsive patterns
- Use container queries for component-specific responsiveness

## Dark Mode

- Configure dark mode (class or media)
- Use dark: variant consistently
- Test color contrast in both light and dark modes
- Avoid hard-coding colors that won't adapt to dark mode
- Consider using CSS variables for theme colors

## Performance

- Enable JIT mode for faster development experience
- Use presets to share configurations across projects
- Minimize the use of @apply in large projects
- Avoid unnecessary variants
- Use PurgeCSS correctly to minimize bundle size

## Accessibility

- Ensure sufficient color contrast
- Use appropriate text sizes for readability
- Don't rely solely on color to convey information
- Implement proper focus states
- Test with screen readers and keyboard navigation