---
description: "TailwindCSS and styling guidelines for the Resource Collection project"
globs: "**/*.css, **/*.tsx, **/*.jsx, tailwind.config.js, tailwind.config.ts"
__meta__type: "guideline"
__meta__repo: "wyattowalsh/resources"
__meta__framework: "Tailwind"
__meta__tags: ["TailwindCSS","Styling","Responsive Design","Dark Mode","Typography"]
__meta__rate: 9
---
## Color System
1. Base Colors:
   ```css
   /* globals.css */
   :root {
     --background: 0 0% 100%;
     --foreground: 240 10% 3.9%;
     --primary: 240 5.9% 10%;
     --primary-foreground: 0 0% 98%;
   }
   
   .dark {
     --background: 240 10% 3.9%;
     --foreground: 0 0% 98%;
     --primary: 0 0% 98%;
     --primary-foreground: 240 5.9% 10%;
   }
   ```

2. Semantic Usage:
   ```tsx
   // Component example
   <div className="bg-background text-foreground hover:bg-primary/90">
     <span className="text-primary-foreground">Content</span>
   </div>
   ```

---

## Typography
1. Font Configuration:
   ```typescript
   // app/layout.tsx
   import { Inter } from 'next/font/google';
   
   const inter = Inter({
     subsets: ['latin'],
     display: 'swap'
   });
   ```

2. Text Styles:
   ```tsx
   // Heading styles
   <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
     Heading
   </h1>
   
   // Body text
   <p className="leading-7 [&:not(:first-child)]:mt-6">
     Paragraph
   </p>
   
   // List items
   <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
     <li>Item</li>
   </ul>
   ```

---

## Spacing
1. Layout Spacing:
   ```tsx
   // Container
   <div className="container mx-auto px-4 md:px-6 lg:px-8">
     {/* Content */}
   </div>
   
   // Stack
   <div className="space-y-4 md:space-y-6 lg:space-y-8">
     {/* Stacked items */}
   </div>
   ```

2. Component Spacing:
   ```tsx
   // Card padding
   <div className="rounded-lg border p-4 md:p-6">
     {/* Card content */}
   </div>
   
   // Button padding
   <button className="px-4 py-2 md:px-6 md:py-3">
     Click me
   </button>
   ```

---

## Layout
1. Responsive Grid:
   ```tsx
   // Basic grid
   <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
     {/* Grid items */}
   </div>
   
   // With sidebar
   <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
     <aside>Sidebar</aside>
     <main>Content</main>
   </div>
   ```

2. Flexbox Patterns:
   ```tsx
   // Center content
   <div className="flex items-center justify-center min-h-screen">
     {/* Centered content */}
   </div>
   
   // Navigation
   <nav className="flex items-center space-x-4">
     <Logo />
     <div className="flex-1" />
     <NavItems />
   </nav>
   ```

---

## Components
1. Button Variants:
   ```tsx
   // Primary button
   <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
     Button
   </button>
   
   // Secondary button
   <button className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
     Button
   </button>
   ```

2. Card Patterns:
   ```tsx
   <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
     <div className="p-6">
       <h3 className="text-2xl font-semibold leading-none tracking-tight">
         Card Title
       </h3>
       <p className="text-sm text-muted-foreground">Card description</p>
     </div>
     <div className="p-6 pt-0">
       {/* Card content */}
     </div>
   </div>
   ```

---

## Responsive Design
1. Breakpoint System:
   ```javascript
   // tailwind.config.js
   module.exports = {
     theme: {
       screens: {
         sm: '640px',
         md: '768px',
         lg: '1024px',
         xl: '1280px',
         '2xl': '1536px'
       }
     }
   }
   ```

2. Mobile-First Patterns:
   ```tsx
   <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
     <Sidebar className="w-full md:w-64" />
     <Main className="flex-1" />
   </div>
   ```

---

## Dark Mode
1. Color Handling:
   ```tsx
   // Component with dark mode support
   <div className="bg-background dark:bg-slate-950 text-foreground dark:text-slate-50">
     <span className="text-primary dark:text-primary-foreground">
       Content
     </span>
   </div>
   ```

2. System Preference:
   ```tsx
   // app/layout.tsx
   <html className="dark" lang="en">
     {/* Content */}
   </html>
   ```

---

## Animation
1. Transition Patterns:
   ```tsx
   // Hover effect
   <div className="transition-all duration-200 ease-in-out hover:scale-105">
     {/* Content */}
   </div>
   
   // Page transition
   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
     {/* Page content */}
   </div>
   ```

2. Loading States:
   ```tsx
   <div className="animate-pulse">
     <div className="h-4 w-48 rounded bg-primary/10" />
   </div>
   ```

---

## Accessibility
1. Focus States:
   ```tsx
   <button className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
     Click me
   </button>
   ```

2. Reduced Motion:
   ```css
   /* globals.css */
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```