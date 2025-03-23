---
description: "Guideline for agent"
globs: "**"
__meta__type: "guideline"
__meta__repo: "toy-crane/go-parkgolf-legacy"
__meta__service: "Supabase"
__meta__framework: "NextJS"
__meta__tags: ["Typescript","React","Mobile Development","Web Development","AI"]
__meta__rate: 7
---
You are a senior developer with superpowers!

# Agent Behavior

The AI should:

- Before coding, write a short plan
- Once approved, implement the code
- Write basic tests to confirm each new feature works.
- Every time you choose to apply a rule(s), explicitly state the rule(s) in the output. You can abbreviate the rule description to a single word or phrase.
- Always verify the current position before executing commands or scripts

# Additional Guidance

- Do not remove or overwrite existing `.cursor/rules`


## Project overview

GoParkgolf is a mobile and web application designed to enhance the park golf experience for players in Korea.
- It provides an interactive map interface showing park golf courses across Korea
- It allows users to view detailed information about golf courses including location, hole count, and operating hours
- It offers a score card system for tracking and recording game scores with multiple players
- It includes a review system for golf courses, allowing users to share their experiences
- It provides a trending section to see popular courses and recent activities
- It supports user authentication for personalized experiences and saving game history
- It has both web and mobile app versions with responsive design for different devices

## Code style

- Write concise code, technical Typescript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading,
  hasError)

## Syntax and Formatting

- Use "function" keyword for pure functions
- Avoid unnecessary curly braces in conditionals
- Use declarative JSX
- Implement proper TypeScript discriminated unions for message types

## Folder Structure

```
apps
├── expo                                  # Mobile application using Expo/React Native
│   ├── assets                            # Static assets for the mobile app (images, fonts, etc.)
│   ├── src
│   │   ├── app                           # Main application code using Expo Router for navigation
│   │   ├── configs                       # Configuration files for the mobile app
│   │   └── lib
│   │       └── supabase.ts               # Supabase client setup for mobile with React Native specific configuration
└── nextjs                                # Web application using Next.js
    ├── src
    │   ├── app                           # Next.js app directory (App Router)
    │   │   ├── (routes)                  # Route groups for different sections of the application
    │   │   │   ├── (home)                # Home page routes
    │   │   │   ├── auth                  # Authentication related routes
    │   │   │   ├── gc                    # Golf course related routes
    │   │   │   ├── golf-courses          # Golf course listing and details routes
    │   │   │   ├── login                 # Login page routes
    │   │   │   ├── my-games              # User's games history routes
    │   │   │   ├── register              # Registration page routes
    │   │   │   ├── score-card            # Score card creation and viewing routes
    │   │   │   ├── settings              # User settings routes
    │   │   │   └── trending              # Trending/popular content routes
    │   │   ├── api                       # API routes for server-side operations
    │   │   │   ├── courses               # API endpoints for golf course data
    │   │   │   └── og                    # Open Graph image generation API
    │   ├── components                    # Reusable UI components
    │   │   ├── ad                        # Advertisement components
    │   │   ├── app                       # App-specific components
    │   │   ├── map                       # Map visualization components
    │   │   ├── nav                       # Navigation components (headers, menus, etc.)
    │   │   ├── ui                        # Generic UI components (buttons, inputs, etc.)
    │   ├── config                        # Application configuration files
    │   ├── constants                     # Constant values used throughout the app
    │   ├── libs                          # Utility libraries and hooks
    │   │   ├── auth                      # Authentication utilities
    │   │   ├── hooks                     # Custom React hooks
    │   │   ├── store                     # State management (likely using Zustand or similar)
    │   │   ├── supabase                  # Supabase client setup for web
    │   │   ├── cache.ts                  # Caching utilities
    │   │   ├── discord.ts                # Discord integration utilities
    │   │   ├── google-form.ts            # Google Forms integration utilities
    │   │   ├── tailwind.ts               # Tailwind CSS utilities
    │   │   └── user-agent.ts             # User agent detection utilities
    │   ├── styles                        # Global styles and CSS modules
    │   ├── supabase                      # Supabase type definitions and helpers
    │   ├── types                         # TypeScript type definitions
    │   ├── env.mjs                       # Environment variable validation and typing
    │   ├── middleware.ts                 # Next.js middleware for request processing
    │   └── types.ts                      # Global TypeScript type definitions
    ├── README.md                         # Documentation for the Next.js application
```

## Tech Stack

- Turbo repo with yarn
- React Native, Expo 52
- Tailwind CSS, Nativewind
- Supabase, Supabase Auth, Supabase Edge functions
- Vecel AI SDK
- TypeScript

## Authentication

- Use Supabase Auth for all authentication:
  - OAuth providers only (no email/password)
  - Implement auto token refresh
  - Handle auth state changes globally
  - Use RLS policies for data access control
  - Store user metadata in profiles table

## Supabase Usage

Use the Supabase client for database interactions and real-time subscriptions
instead of creating custom APIs.

- Implement Row Level Security (RLS) policies for fine-grained access control.
- Use Supabase Auth for user authentication and management.
- Leverage Supabase Storage for file uploads and management.
- Use Supbase Edge Functions when you need external API integration or complex
  business logic
- Implement proper authentication and authorization using Supabase RLS and
  Policies.
- Follow Supabase's type generation practices for database types


## Naming Conventions

- Use kebab-case for files, directories names

## Git Usage

Commit Message Prefixes:

- "fix:" for bug fixes
- "feat:" for new features
- "perf:" for performance improvements
- "docs:" for documentation changes
- "style:" for formatting changes
- "refactor:" for code refactoring
- "test:" for adding missing tests
- "chore:" for maintenance tasks

Rules:

- Use lowercase for commit messages
- Keep the summary line concise
- Include description for non-obvious changes
- Reference issue numbers when applicable