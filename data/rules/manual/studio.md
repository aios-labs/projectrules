---
description: "Rule to ensure DRY and best practices in Next frontend."
globs: "apps/studio/**"
__meta__type: "guideline"
__meta__repo: "Swiftgum/swiftgum"
__meta__framework: "NextJS"
__meta__tags: ["DRY Principle","React","TailwindCSS","Component Structure","Performance"]
__meta__rate: 8
---
## 1. Component Structure & Simplicity
- **Simple Components**: Each component should have a single responsibility. Keep them small and focused.
- **DRY Principle**: Reuse logic and styles as much as possible. Create reusable hooks and utilities.
- **Folder Organization**: Leverage and extend existing components from the `apps/studio/src/components` folder to maintain consistency. Shadcn components are in `apps/studio/src/components/ui` folder.

## 2. React Version & Setup
- **React 19**: Ensure your project uses React version 19.
- **Next.js Usage**: Since we’re using Next.js with the app router, maintain a clear separation:
  - **Server Components**: Only use `"use server"` when performing server actions (e.g., data fetching, mutations). Avoid using `"use server"` in presentational components.
  - **Client Components**: Components that require interactivity should use `"use client"` at the top of the file.

## 3. Styling & Tailwind CSS
- **Tailwind + clsx/cn**: Use `clsx` or a utility like `cn` to conditionally join Tailwind classes. This keeps your class logic clean and maintainable. Note: use the gray color variation (not slate or others).
- **CSS Hover/Selectors**: Rely on Tailwind’s built-in state variants (e.g., `hover:`, `focus:`) for interactive styling rather than managing hover state in JavaScript.

## 4. Component Best Practices
- **Stateless Components**: Avoid local state where possible. Instead, use props and CSS for dynamic behaviors.
- **Functional Components**: Favor functional components and hooks over class-based components.
- **Dependency Management**: Be mindful of external dependencies. Only import what is necessary to reduce bundle size and potential unnecessary rerenders.
- **Event Handlers**: Minimize inline functions to avoid re-creation on each render. Extract them as needed.

## 5. Integration with shadcn/radix and Lucide React Icons
- **Radix Components**: Wrap or extend radix components for custom behavior but maintain their accessibility and functionality. If the radix component is not installed, you can ask for its installation.
- **Lucide Icons**: Import and use Lucide React Icons as React components, ensuring you only import the icons you use to keep the bundle lean.

## 6. Performance Considerations
- **Minimize Rerenders**: Structure your component tree so that changes in parent components don’t force unnecessary rerenders of child components.
- **CSS over JS**: Utilize CSS for hover effects and simple animations instead of handling them with JavaScript.
- **Dependencies**: Be cautious with prop drilling and context. Use memoization (e.g., `React.memo`, `useMemo`, `useCallback`) only where it offers a clear benefit.

## 7. Code Consistency & Documentation
- **TypeScript**: Ensure all components are fully typed. We use Supabase to fetch data, the client-side component is at [client.ts](mdc:apps/studio/src/utils/supabase/client.ts) and the server is at [server.ts](mdc:apps/studio/src/utils/supabase/server.ts). The naive client has access to the types at [database.d.ts](mdc:apps/shared/src/types/database.d.ts) and the server only client (privileged) also has [database-server.d.ts](mdc:apps/shared/src/types/database-server.d.ts).
- **Documentation**: Document component purpose, props, and any usage notes directly in the code or in an accompanying README.
- **Linting & Formatting**: Don't worry about formatting, we will use Biome to lint afterwards.
- **Simplicity**: Keep the components as simple as possible to have as few documentation as possible. They should be self explanatory.