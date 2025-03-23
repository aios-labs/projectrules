---
description: "coding rule"
globs: "*.tsx, *ts, *.js"
__meta__type: "guideline"
__meta__repo: "Henry229/nextjs-netsim-old"
__meta__framework: "NextJS"
__meta__tags: ["NextJS","React","TypeScript","PostgreSQL","TailwindCSS"]
__meta__rate: 7
---
# coding-rules

- comperser에서 소스 수정시 질문한 내용만 해결하기 위해서 잘 사용되고 있는 기존의 코드를 쓸데없는 코드라 생각하고 함부로 삭제하지 말것.
- 소스 내의 모든 코멘트, 메세지등은 영어로 사용할 것

You are an expert developer in Next.js 14 App Router, TypeScript, React, PostgreSQL, NextAuth, Tailwind CSS, Shadcn ui and modern full-stack development. Your goal is to generate optimized, best-practice code that is maintainable, scalable, and performant.

## Key Principles

    •	Use Next.js App Router (src/app/) structure for routing and layouts.
    •	Prefer React Server Components (RSC) for performance; use use client only when necessary.
    •	Keep the API layer clean by using traditional API routes (src/app/api/) for mutations but Server Actions are acceptable if needed.
    •	Implement NextAuth.js for authentication and role-based authorization.
    •	Use Zustand for client-side state management, ensuring minimal useState and useEffect.
    •	Follow Prisma best practices for database access and PostgreSQL query optimization.
    •	Ensure accessibility (a11y) and performance optimizations for UI components.

## Next.js & RSC Best Practices

    •	Prefer Server Components (async components) for rendering whenever possible.
    •	Use use client only when necessary (e.g., for Zustand stores, interactive components).
    •	Fetch data using prisma in Server Components instead of using useEffect.
    •	Optimize API routes (src/app/api/) by using POST, GET, PATCH, DELETE conventions.
    •	Use middleware (middleware.ts) for authentication and protected routes.

## Project Structure

- Use the Next.js App Router (`src/app/` directory) for routing and server actions.
- Organize files as:

```
/src
  /app
    /api
      /auth
        route.ts  // NextAuth.js route
      /users
        route.ts  // User CRUD API
    /components
      /ui        // Reusable UI components
    /lib
      /auth.ts   // Authentication helpers
      /db.ts     // Prisma database instance
      /utils.ts  // Helper functions
    /store
      /userStore.ts  // Zustand store for user state
    /styles
      globals.css  // Tailwind styles
    layout.tsx
    page.tsx
    middleware.ts  // Protect routes globally
  /prisma
    schema.prisma  // Prisma schema
```

- Keep server and client logic separate: **Favor server components unless interactivity is required.**

## TypeScript & JavaScript Guidelines

- Use TypeScript for all code. Prefer interfaces over types for object shapes.
- Avoid enums; use literal types or maps instead.
- Use function components (`function ComponentName() {}`), not `const Component = () => {}` for better stack traces.

## Data Fetching & API Handling

- Use **React Server Components (RSC)** and Server Actions (`use server`) for data fetching.
- Avoid `useEffect` for fetching; use `axios()` inside server components.
- Use dynamic imports for non-critical client components.
- Favor Supabase’s native real-time subscriptions instead of polling.
- Implement error boundaries (`error.tsx`) to gracefully handle API failures.

## Authentication (NextAuth.js)

    •	Use NextAuth.js with Credentials & OAuth providers.
    •	Store user sessions in JWT.
    •	Protect API routes with middleware.

## Database (PostgreSQL & Prisma)

    •	Use Prisma as the ORM for database access.
    •	Define PostgreSQL models in prisma/schema.prisma.
    •	Use Prisma migrations (npx prisma migrate dev) for schema updates.
    •	Store Prisma client in a singleton instance (lib/db.ts) to prevent hot-reloading issues.

## Styling (Tailwind CSS, Shadcn UI, Radix UI)

    •	Use Shadcn UI components as primary UI elements (@shadcn/ui).
    	-  ShadCN 컴포넌트 생성 CLI 명령어는 `npx shadcn@latest add [component_name]`입니다.
    •	Use Radix UI for accessible, composable components like dialogs, tooltips, and dropdowns.
    •	Apply Tailwind CSS for utility styling and keep styles within JSX (avoid separate CSS files).
    •	Prefer cn utility (lib/utils.ts) for class merging instead of template literals.
    •	Organize Tailwind classes using the cn() utility function.

## State Management (Zustand)

    •	Use Zustand for global client-side state (minimal useState).
    •	Prefer server-driven UI (fetch data in Server Components).
    •	Persist store state using localStorage or cookies if needed.

## Forms & Validation

    •	Use Zod for schema validation in both client and server.
    •	Use react-hook-form with Zod for form handling:

```
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

function SignInForm() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("email")} placeholder="Email" />
      <input {...register("password")} type="password" placeholder="Password" />
      <button type="submit">Sign In</button>
    </form>
  );
}
```

API Routes (Traditional API with Next.js 14)
• Store all API routes in app/api/ using RESTful conventions.
• Use POST for creating, GET for reading, PATCH for updating, DELETE for removing.

Performance & Optimization
• Use prisma.select to fetch only required fields.
• Optimize Next.js images with <Image /> (priority, lazy loading).
• Use caching (e.g., revalidatePath) for dynamic content.

const HeavyComponent = dynamic(() => import('./HeavyComponent'), { ssr: false });

Security
• Protect routes using middleware.ts (e.g., require authentication for /dashboard).
• Use Zod for input validation in API routes.
• Sanitize user inputs to prevent SQL injection & XSS.

Deployment & DevOps
• Prepare for our own server deployment.
• Use next-safe-action for type-safe server actions.
• Implement CI/CD pipelines with Bitbucket pipelines.
• Optimize next.config.js for better performance: