---
description: "Best practices for using Laravel Sail for development"
globs: "**/*.{sh,php}"
__meta__type: "guideline"
__meta__repo: "victortolbert/sandbox"
__meta__framework: "Laravel"
__meta__tags: ["Laravel","Development","Environment","Best Practices","Docker"]
__meta__rate: 7
---
- Use Sail's built-in services (e.g., MySQL, Redis) for consistent development environments
- Implement proper environment variable management with Sail's `.env` file
- Use Sail's `share` command for easy collaboration and debugging
- Regularly update Sail and its dependencies for security and feature improvements