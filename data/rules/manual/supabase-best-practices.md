---
description: Best practices for building applications with Supabase
globs: "**/*.{js,ts,sql}"
__meta__service: Supabase
__meta__author: jorgemasta
__meta__type: best-practice
__meta__tags: ["Supabase"]
---

# Supabase Best Practices

## Database Design

- Follow PostgreSQL best practices for table design
- Use proper foreign key constraints
- Implement appropriate indexes for query performance
- Set up cascade deletion where appropriate
- Name primary keys consistently (e.g., 'id')

## Authentication

- Leverage Supabase Auth for authentication
- Implement proper role-based access control
- Use Row-Level Security (RLS) policies to secure data
- Keep JWT expiry times reasonable
- Implement email verification workflows

## Row Level Security

- Create policies for each table requiring access control
- Test policies thoroughly with different user roles
- Use the auth.uid() function to identify the current user
- Combine policies effectively for complex permission scenarios
- Document your security policies for team reference

## API Usage

- Use the Supabase client libraries
- Implement proper error handling for API calls
- Use typed responses with TypeScript
- Optimize queries to minimize data transfer
- Leverage built-in filtering and pagination

## Realtime

- Enable realtime only for tables that need it
- Use channels for specific subscriptions
- Handle realtime errors gracefully
- Consider performance implications of large realtime datasets
- Test broadcast capabilities thoroughly

## Edge Functions

- Keep edge functions small and focused
- Implement proper error handling and logging
- Use environment variables for configuration
- Cache responses when appropriate
- Optimize cold starts by minimizing dependencies