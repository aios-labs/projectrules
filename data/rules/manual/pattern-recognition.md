---
description: "Pattern recognition map for consistent implementation"
globs: "*"
__meta__type: "guideline"
__meta__repo: "Kabi10/ratemyemployer"
__meta__service: "Supabase"
__meta__framework: "React"
__meta__tags: ["Pattern Recognition","Supabase","React","Authentication","Data Fetching"]
__meta__rate: 7
---
# 🧠 RateMyEmployer Pattern Recognition Map

## Universal Code Structure Patterns
- **Server-Component Pattern**: `async function Page/Component({ params }) + await fetch/db` 
- **Client-Interactive Pattern**: `'use client'; useState/useEffect + event handlers`
- **Data-Fetch Pattern**: `getData` functions paired with React Server Components
- **Layout Pattern**: Hierarchical layouts with global elements in parent layouts
- **Review Pattern**: Form submission → validation → database storage → display
- **Company Pattern**: Company profile → reviews → ratings → statistics
- **Authentication Pattern**: Login/signup → session management → protected routes
- **Supabase Pattern**: Server-side client creation → data fetching → error handling
- **MCP Pattern**: Natural language query → Supabase operation → data display

## RateMyEmployer-Specific Implementation Patterns
- **Auth Flow Pattern**: Supabase auth → session checking → protected routes via middleware
- **Data Display Pattern**: Skeleton loading → data fetch → render with error boundaries
- **Form Pattern**: Zod schema → React Hook Form → Supabase mutation → toast notification
- **Filter Pattern**: URL-based state → server-side filtering → paginated results
- **Rating Pattern**: User input → calculation → color-coded visual representation
- **News Integration Pattern**: SerpAPI fetch → database storage → component display
- **Company Search Pattern**: Debounced input → Supabase query → filtered results
- **Review Moderation Pattern**: Admin check → status update → notification
- **MCP Integration Pattern**: Setup → schema definition → stored procedures → UI components