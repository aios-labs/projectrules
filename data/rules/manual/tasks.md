---
description: "Task management and organization for the Tarot API project"
globs: "lib/tasks/*.rake"
__meta__type: "guideline"
__meta__repo: "abdul-hamid-achik/tarot-api"
__meta__tags: ["Task Management","Rake","Development","CI/CD","Deployment"]
__meta__rate: 8
---
# Task Management Rules

## Rake Task Files

The project uses standard rake task files organized by function:

- `docker.rake`: Container and infrastructure tasks
- `db.rake`: Database management tasks
- `dev.rake`: Development environment tasks
- `ci.rake`: Continuous integration tasks
- `deploy.rake`: Deployment tasks

## Usage Guidelines

- Use the appropriate rake task file based on the functionality:
  - `docker.rake` for Docker and container management
  - `db.rake` for database operations
  - `dev.rake` for local development environment
  - `ci.rake` for CI/CD workflows
  - `deploy.rake` for deployment operations

- Follow the established namespace patterns:
  - `docker:` namespace for container operations
  - `db:` namespace for database tasks
  - `dev:` namespace for development tasks
  - `ci:` namespace for continuous integration
  - `deploy:` namespace for deployment tasks

## Task Naming Conventions

- Use lowercase snake_case for task names
- Keep task names concise and descriptive
- Follow the pattern: `namespace:action`

## Task Documentation

- Include a `desc` for every task
- Provide usage examples for tasks with parameters
- Use Rainbow for colorized output

## Task Creation Guidelines

- Never create new task files - use the existing three files
- Always check for similar tasks before creating new ones
- Extend existing tasks where possible rather than creating duplicates
- Keep tasks focused on a single purpose
- Use task dependencies for complex operations