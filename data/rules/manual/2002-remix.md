---
description: "APPLY Remix framework standards WHEN developing with Remix TO ensure consistent and maintainable full-stack applications"
globs: "remix.config.js,*.component.tsx"
__meta__type: "guideline"
__meta__repo: "ai-driven-dev/rules"
__meta__framework: "Remix"
__meta__tags: ["Remix","Full-stack","Web Development","Best Practices","Performance"]
__meta__rate: 8
---
# Remix Framework Standards

<version>1.0.0</version>

## Context
- These rules apply to all Remix-specific code in the frontend application
- They ensure consistent implementation of Remix patterns
- They promote maintainable and performant full-stack applications

## Requirements

### Route Structure
- Organize routes by feature/domain
- Use nested routes appropriately
- Implement proper error boundaries
- Use resource routes for API endpoints

### Data Loading
- Use loaders for data fetching ONLY in ROUTES
- Implement proper error handling in loaders
- Use defer for non-critical data
- Implement optimistic UI when appropriate
- Never return `json()`, return plain object

### Form Handling
- Use Remix Form component for all forms
- Implement proper validation
- Use actions for form submissions
- Handle loading and error states

### Performance
- Implement proper caching strategies
- Use prefetching for anticipated routes
- Optimize assets with Remix built-in tools
- Implement proper code splitting

### SEO
- Implement proper meta tags
- Use Links for preloading assets
- Implement proper canonical URLs
- Handle dynamic meta tags

## Examples

<example>
// Good: Well-structured Remix route
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link, useCatch } from "@remix-run/react";
import { getUserById } from "~/models/user.server";

export const meta: MetaFunction = ({ data }) => {
  if (!data?.user) {
    return [{ title: "User Not Found" }];
  }
  return [{ title: `${data.user.name}'s Profile` }];
};

export async function loader({ params, request }: LoaderFunctionArgs) {
  const userId = params.userId;
  if (!userId) {
    throw new Response("User ID is required", { status: 400 });
  }
  
  const user = await getUserById(userId);
  if (!user) {
    throw new Response("User not found", { status: 404 });
  }
  
  return { user };
}

export default function UserProfile() {
  const { user } = useLoaderData<typeof loader>();
  
  return (
    <div>
      <h1>{user.name}</h1>
      {/* Component content */}
      <Link to="edit" prefetch="intent">Edit Profile</Link>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  
  return (
    <div>
      <h1>Error: {caught.status}</h1>
      <p>{caught.data}</p>
    </div>
  );
}
</example>

<example type="invalid">
// Bad: Poorly structured Remix route
import { useEffect, useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Client-side data fetching instead of using loader
  useEffect(() => {
    fetch(`/api/users/${location.pathname.split("/").pop()}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  
  // No error handling
  // No meta tags
  // No error boundary
  
  return (
    <div>
      {loading ? <p>Loading...</p> : <h1>{user?.name}</h1>}
      {/* Regular form instead of Remix Form */}
      <form method="post" action="/api/users">
        {/* Form content */}
      </form>
    </div>
  );
}
</example>

## Critical Rules

<critical>
- NEVER fetch data client-side when it can be done in a loader
- ALWAYS implement error boundaries
- ALWAYS use Remix Form for forms
- NEVER use direct DOM manipulation
</critical>