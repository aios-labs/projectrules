---
description: "ENFORCE Tailwind CSS v4 changes and best practices when WRITING or MODIFYING styles to ENSURE optimal usage of new features"
globs: "src/**/*.{ts,tsx,css}"
__meta__type: "guideline"
__meta__repo: "michaelito80us/portfolio"
__meta__framework: "Tailwind"
__meta__tags: ["TailwindCSS","Styling","CSS","Best Practices","Upgrade"]
__meta__rate: 7
---

# Tailwind CSS v4 Changes and Best Practices

## Context
- Applied when writing new styles or modifying existing Tailwind CSS classes
- Covers major changes from v3 to v4
- Focuses on new features and breaking changes

## Requirements

### Breaking Changes
- Replace `container` with new container query syntax
- Use new color opacity syntax with `/` instead of square brackets
- Remove all usage of `space-x/y` in favor of `gap-x/y`
- Update arbitrary property syntax to use square brackets
- Use new `text-wrap` utilities instead of legacy ones

### New Features
- Implement container queries with `@container` syntax
- Use subgrid features with `grid-cols-subgrid` and `grid-rows-subgrid`
- Utilize the new `text-wrap` utilities for better text control
- Apply new color opacity syntax consistently

## Examples

<example>
// Good: New container query syntax
<div class="@container">
  <div class="@lg:flex">...</div>
</div>

// Good: New color opacity syntax
<div class="bg-blue-500/50">...</div>

// Good: Gap instead of space utilities
<div class="flex gap-x-4">...</div>

// Good: New text-wrap utilities
<p class="text-wrap-balance">...</p>
<p class="text-wrap-pretty">...</p>

// Good: Subgrid usage
<div class="grid grid-cols-subgrid">...</div>
</example>

<example type="invalid">
// Bad: Old container class
<div class="container mx-auto">...</div>

// Bad: Old color opacity syntax
<div class="bg-blue-500/[0.5]">...</div>

// Bad: Deprecated space utilities
<div class="flex space-x-4">...</div>

// Bad: Old text wrapping approach
<p class="break-normal">...</p>
</example>

## Migration Tips
- Search for and replace all `container` class usage
- Update color opacity syntax throughout the codebase
- Replace all `space-x/y` utilities with `gap-x/y`
- Review and update text wrapping utilities
- Implement container queries where appropriate

<critical>
- NEVER mix v3 and v4 syntax in the same codebase
- ALWAYS use new container query syntax instead of container class
- ALWAYS use gap utilities instead of space utilities
</critical>