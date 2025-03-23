---
description: "Rules for frontend development"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "fpardon-upeo/cv-parser"
__meta__tags: ["Frontend Development","Component Architecture","State Management","UI/UX","Performance"]
__meta__rate: 9
---
# Frontend Development Rules

## Component Architecture
- Use a component-based architecture
- Keep components small and focused on a single responsibility
- Implement smart/container and dumb/presentational component pattern
- Use composition over inheritance
- Implement proper prop validation
- Avoid deeply nested component hierarchies

## State Management
- Use appropriate state management based on application complexity
- Implement unidirectional data flow
- Keep state normalized when possible
- Document state shape and transitions
- Use local component state for UI-specific state
- Implement proper loading and error states

## UI/UX
- Follow a consistent design system
- Implement responsive design for all components
- Ensure accessibility compliance (WCAG 2.1 AA)
- Use semantic HTML elements
- Implement proper focus management
- Support keyboard navigation
- Provide appropriate feedback for user actions

## Performance
- Implement code splitting and lazy loading
- Optimize bundle size
- Use memoization for expensive calculations
- Implement virtualization for large lists
- Optimize rendering performance
- Use web workers for CPU-intensive tasks
- Implement proper caching strategies

## Testing
- Write unit tests for components and utilities
- Implement integration tests for component interactions
- Use snapshot testing for UI components
- Test accessibility
- Implement end-to-end tests for critical user flows
- Test across different browsers and devices

## Error Handling
- Implement error boundaries for component errors
- Handle API errors gracefully
- Show user-friendly error messages
- Implement retry mechanisms where appropriate
- Log errors with appropriate context

## Forms
- Implement proper form validation
- Show validation errors inline
- Support keyboard navigation in forms
- Implement proper focus management
- Use appropriate input types
- Support form autofill

## Security
- Sanitize user input
- Implement proper authentication and authorization
- Protect against XSS attacks
- Use HTTPS for all API calls
- Implement proper CSRF protection
- Follow security best practices for cookies and local storage

## Internationalization
- Support multiple languages
- Use a proper i18n library
- Extract all user-facing strings
- Support right-to-left languages
- Format dates, numbers, and currencies according to locale

## Documentation
- Document component APIs
- Include usage examples
- Document state management
- Include visual documentation (Storybook)
- Document accessibility features
- Include setup instructions