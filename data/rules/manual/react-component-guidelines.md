---
description: Guidelines for writing clean and maintainable React components
globs: "**/*.{js,jsx,ts,tsx}"
__meta__framework: React
__meta__author: jorgemasta
__meta__type: guideline
__meta__tags: ["React"]
---

# React Component Guidelines

## Component Structure

- Keep components small and focused on a single responsibility
- Extract reusable logic into custom hooks
- Use named exports for components
- Group related components in the same directory
- Follow consistent naming conventions (PascalCase for components)

## Props Management

- Use TypeScript interfaces or PropTypes for prop definitions
- Provide default props when applicable
- Destructure props in the function parameters
- Keep required props to a minimum
- Document complex props with comments

## State Management

- Prefer useState for simple local state
- Use useReducer for complex state logic
- Keep state as close as possible to where it's needed
- Avoid prop drilling by using Context API when necessary
- Consider performance implications of context providers

## Side Effects

- Use useEffect for side effects
- Clean up side effects with the return function
- Split effects by concern
- Handle errors in async effects
- Avoid excessive dependencies in effect arrays

## Performance Optimizations

- Use React.memo for expensive components
- Implement useMemo and useCallback where appropriate
- Avoid unnecessary re-renders
- Use virtualization for long lists
- Lazy load components that aren't immediately needed

## Testing

- Write unit tests for component logic
- Use React Testing Library for component tests
- Test user interactions and accessibility
- Mock external dependencies
- Organize tests in a way that mirrors your component structure