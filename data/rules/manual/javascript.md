---
description: "Javascript in Defra"
globs: "*.js"
__meta__type: "guideline"
__meta__repo: "DEFRA/ai-sdlc-governance-frontend"
__meta__tags: ["JavaScript","TypeScript","Node.js","Webpack","Testing"]
__meta__rate: 8
---
# JavaScript in Defra

## Language
- JavaScript
- TypeScript (for type checking only)

## Tech Stack
- Node.js + Hapi.js (do NOT use Express)
- govuk-frontend npm library
- Nunjucks templates npm library
- Webpack + Babel
- Jest + ESLint + Prettier
- SCSS + PostCSS + Stylelint

## Code Standards
- Use vanilla JavaScript (no TypeScript files)
- Use JSDoc for type annotations
- Use TypeScript for type checking only
- Use ES Modules with named exports
- Use absolute imports with '~' alias for internal project files
- Use convict for configuration management
- Use BEM-style naming with 'app-' prefix

## Project Structure
- /src/config/ - Configuration and setup
  - /nunjucks/ - Template engine setup
    - /filters/ - Custom Nunjucks filters
    - /globals/ - Global template variables
- /src/server/ - Server-side code
  - /common/ - Shared components and utilities
    - /templates/ - Base templates and layouts
    - /components/ - Reusable view components
  - /{feature}/ - Feature modules
    - controller.js - Route handlers and business logic
    - controller.test.js - Unit tests
    - index.js - Route definitions
    - /views/ - Feature-specific templates
  - router.js - Main route aggregation
  - index.js - Server setup and plugins

## Controller Patterns
- Export named functions
- Use JSDoc to document parameters
- Standard parameters: (request, h)
- Consistent error handling:
  - Try/catch blocks
  - Error logging with request.logger
  - User-friendly error responses
- Use h.view for template rendering
- Use h.redirect for navigation

## API Integration
- Use fetch for API calls
- Base URL from config
- JSON content type
- Response status checking
- Error propagation
- Consistent error handling

## Configuration
- Use config module for settings
- Environment-based configuration
- Consistent config access pattern
- Type-safe config values

## Markdown Parsing
- Use marked library for parsing markdown
- Configure marked options to match GDS styling
- Always sanitize markdown output
- Common use cases:
  - Standards content
  - Documentation
  - Help text

## Testing
- Write comprehensive Jest tests
- Test functionality, not implementation
  - End-to-end coverage
  - API: test input/output
  - UI: test behavior + use data-testid
- Use describe blocks and beforeEach for setup
- Mock external dependencies

## Template Handling
- Configure Nunjucks search paths in nunjucks.js:
  - govuk-frontend templates
  - project views directory
  - common templates
  - common components
- Use h.view with template paths relative to search paths
- Bind controller methods when used as route handlers
- Follow template inheritance patterns from gov-uk-standards
- Keep templates close to their feature modules