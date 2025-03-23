---
description: "Guidelines for 033-client-style"
globs: ["**/*.html", "**/*.sass", "**/*.css", "**/*.coffee"]
__meta__type: "guideline"
__meta__repo: "justdoinc/justdo"
__meta__framework: "Blaze"
__meta__tags: ["Frontend","HTML","CSS","Security","JavaScript"]
__meta__rate: 8
---
# Client-Side Coding Style Guidelines

## Frontend Guidelines

- **Libraries**: Use Underscore.js for operations on JS data structures
- **Frontend**: Blaze framework for templates and UI components

## HTML/Blaze Guidelines

- Only use <a> tags for real links to other pages/external sources
- Never use `href="#"` without `e.preventDefault()` in event handler
- Templates naming: under_scored
- Boolean helpers should return true/false (not string classes)
- Use dash-separated attributes and class/id names in HTML

## CSS/SASS Guidelines

- Use 2-space indentation
- Prefer classes over IDs (except for form inputs with labels)
- Use hyphen-separated names for classes/IDs
- Avoid global rules (scope styles to specific containers)
- Avoid inline styling and `!important` unless absolutely necessary

## Security Guidelines

- Always use `xssGuard` helper with triple braces: `{{{xssGuard content}}}` instead of `{{{content}}}`