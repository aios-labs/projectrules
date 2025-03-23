---
description: "Comprehensive plan to fix security issues, code consistency problems, and configuration issues"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "ddanrob/ddanrob-portfolio-hub"
__meta__tags: ["Security","Code Quality","Configuration","JavaScript","TypeScript"]
__meta__rate: 8
---
# Security Issues
security_issues:
  - issue: "Development Mode Authentication"
    location: "backend/src/middleware/auth.js"
    description: "The mock authentication in development mode can be a security risk if accidentally enabled in production."
    fix: "Add more verbose logging when in development mode with mock auth. Add explicit production environment check."
    
  - issue: "Environment Variable Validation"
    location: "backend/src/controllers/*.js, hooks/useAuth.js"
    description: "Some files use environment variables without validation."
    fix: "Implement consistent validation of all environment variables before use, with clear error messages."
    
  - issue: "Inconsistent Input Validation"
    location: "backend/src/controllers/userController.js"
    description: "Input validation is inconsistent across controllers. Contact controller has good validation but user controller needs improvement."
    fix: "Apply consistent validation patterns across all controllers. Add XSS protection to user input."
    
  - issue: "Rate Limiting Configuration"
    location: "backend/src/routes/*.js"
    description: "Rate limiting is not applied to all routes consistently."
    fix: "Apply rate limiting to all public endpoints. Configure different limits based on endpoint sensitivity."
    
  - issue: "CORS Configuration"
    location: "backend/src/index.js"
    description: "CORS settings could be more restrictive in production."
    fix: "Create environment-specific CORS configurations with stricter settings for production."
    
  - issue: "Authentication Token Storage"
    location: "hooks/useAuth.js"
    description: "Tokens stored in state can be a security risk."
    fix: "Consider using HttpOnly cookies for token storage instead of memory/localStorage."
    
  - issue: "Error Message Exposure"
    location: "hooks/useApi.js, backend/src/controllers/*.js"
    description: "Error messages might expose sensitive information."
    fix: "Sanitize error messages before returning them to the client. Create a consistent error handling system."
    
  - issue: "Form Validation Robustness"
    location: "components/ContactForm.jsx"
    description: "Client-side validation relies on simple regex patterns."
    fix: "Implement a more robust validation library like Formik or React Hook Form."

# Code Quality & Consistency Issues
code_quality_issues:
  - issue: "Inconsistent TypeScript Usage"
    location: "hooks/*.js, components/*.jsx"
    description: "Mixed use of .tsx/.jsx/.js files reduces TypeScript benefits."
    fix: "Convert all .js and .jsx files to .ts and .tsx with proper typing."
    
  - issue: "Incomplete Type Definitions"
    location: "hooks/*.js, components/*.jsx"
    description: "Many components lack proper TypeScript interfaces."
    fix: "Define interfaces for all component props and hook returns."
    
  - issue: "Any Type Usage"
    location: "hooks/useApi.js, hooks/useAuth.js"
    description: "Some hooks implicitly use 'any' types."
    fix: "Add explicit return types and parameter types to all functions."
    
  - issue: "Oversized Components"
    location: "components/JumpinManCanvas.tsx"
    description: "Some components (like JumpinManCanvas at 2150 lines) are too large."
    fix: "Break large components into smaller, focused ones. Extract reusable logic into custom hooks."
    
  - issue: "Hook Dependencies"
    location: "components/JumpinManCanvas.tsx, hooks/useAuth.js"
    description: "Some useEffect hooks have incomplete dependency arrays."
    fix: "Ensure all referenced variables are included in dependency arrays."
    
  - issue: "Prop Drilling"
    location: "components/*.tsx, components/*.jsx"
    description: "Props are passed through multiple component layers."
    fix: "Use Context API more extensively for shared state."
    
  - issue: "Client vs. Server Components"
    location: "app/**/*.tsx"
    description: "Some components with 'use client' directives could be server components."
    fix: "Review component boundaries and extract client-specific logic where possible."
    
  - issue: "Tailwind Class Organization"
    location: "components/*.tsx, components/*.jsx"
    description: "Tailwind classes aren't organized consistently."
    fix: "Use a consistent ordering system for Tailwind classes (layout, typography, colors, etc.)."
    
  - issue: "Custom Utility Classes"
    location: "tailwind.config.js"
    description: "Not leveraging Tailwind's utility class system effectively."
    fix: "Define common UI patterns as component classes in Tailwind config."
    
  - issue: "Responsive Design"
    location: "components/*.tsx, components/*.jsx"
    description: "Inconsistent use of responsive design classes."
    fix: "Apply responsive prefixes consistently across components."

# Development Configuration Issues
configuration_issues:
  - issue: "Port Conflicts"
    location: "backend/src/index.js"
    description: "Server repeatedly fails with EADDRINUSE errors on ports 3000 and 3001."
    fix: "Implement better port handling with fallbacks if the primary port is in use. Add proper error handling for port conflicts."
    
  - issue: "Firebase Configuration"
    location: "hooks/useAuth.js, backend/src/middleware/auth.js"
    description: "Firebase credentials are missing, causing limited functionality."
    fix: "Add clear instructions for setting up Firebase credentials. Improve error handling when credentials are missing."
    
  - issue: "SendGrid Configuration"
    location: "backend/src/controllers/contactController.js"
    description: "SendGrid API key issues prevent email sending."
    fix: "Improve validation and fallback for email services. Add clearer instructions for setting up email services."
    
  - issue: "Environment Mode Handling"
    location: "backend/src/*.js, hooks/*.js"
    description: "Inconsistent patterns for development vs. production environments."
    fix: "Establish a consistent pattern for handling environment-specific behavior."
    
  - issue: "Error Handling"
    location: "hooks/useApi.js, backend/src/controllers/*.js"
    description: "Inconsistent error handling across the codebase."
    fix: "Create a standardized error handling approach with proper logging and user-friendly messages."

# Specific Implementation Tasks
implementation_tasks:
  - task: "Fix Firebase Module Import"
    location: "hooks/useAuth.js"
    description: "Module not found: Can't resolve 'firebase/auth'"
    fix: "Install missing Firebase dependencies or fix import paths."
    
  - task: "Implement Server Port Fallback"
    location: "backend/src/index.js"
    description: "Server crashes with EADDRINUSE errors."
    fix: "Add code to try alternative ports if the primary port is in use."
    
  - task: "Implement Proper Error Boundaries"
    location: "app/layout.tsx, components/*.tsx"
    description: "Missing error boundaries for graceful failure handling."
    fix: "Add React error boundaries to critical components."
    
  - task: "Convert JavaScript to TypeScript"
    location: "hooks/*.js, components/*.jsx"
    description: "Gradually convert JS files to TS for type safety."
    fix: "Prioritize converting core files like useAuth.js and useApi.js first."
    
  - task: "Refactor Game Components"
    location: "components/JumpinManCanvas.tsx"
    description: "Break down oversized game components."
    fix: "Extract rendering functions, state management, and utilities into separate files."
    
  - task: "Standardize Form Handling"
    location: "components/ContactForm.jsx"
    description: "Implement more robust form validation."
    fix: "Use Formik or React Hook Form with Zod or Yup schemas."
    
  - task: "Add Testing Infrastructure"
    location: "Root project"
    description: "Implement testing for critical components."
    fix: "Set up Jest/React Testing Library and create tests for authentication, forms, and API calls."