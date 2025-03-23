---
description: "Guidelines for 02-project-structure"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "relishinc/dill-pixel"
__meta__tags: ["Project Structure","Code Organization","CI/CD","Environment Variables","State Management"]
__meta__rate: 7
---
# Project Structure and Organization

## Directory Structure
- Organize code by feature directories (e.g., 'scenes/', 'entities/', 'systems/', 'assets/')
- Use environment variables for different stages (development, staging, production)
- Create build scripts for bundling and deployment
- Implement CI/CD pipeline for automated testing and deployment
- Set up staging and canary environments for testing game builds

## Code Organization
- Use descriptive names for variables and functions (e.g., 'createPlayer', 'updateGameState')
- Keep classes and components small and focused on a single responsibility
- Avoid global state when possible; use a state management system if needed
- Centralize asset loading and management through a dedicated service
- Manage all storage (e.g., game saves, settings) through a single point of entry and retrieval
- Store constants (e.g., game configuration, physics constants) in a centralized location