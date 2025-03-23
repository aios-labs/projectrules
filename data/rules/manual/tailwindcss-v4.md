---
description: "When you want to use the tailwindcss on the client side"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "VidAIze/cursor-project-rules"
__meta__framework: "Tailwind"
__meta__tags: ["CSS","Styling","Responsive Design","PostCSS","Dark Mode"]
__meta__rate: 8
---
# Tailwind CSS v4 Guide

- Use utility-first classes for consistent and maintainable styling
- Create custom components with `@apply` directive for reusability
- Utilize responsive design utilities for mobile-first development
- Implement dark mode support using Tailwind's built-in classes


- For the tailwind css v4 we are using `@tailwindcss/postcss` and `postcss.config.mjs` PostCSS configuration.

```mjs

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;

```

- This is the current globals.css file [globals.css](mdc:app/globals.css).