---
description: "Limits blocking operations in routes, favoring asynchronous and non-blocking flows."
globs: "**/routers/*.py"
__meta__type: "guideline"
__meta__repo: "PatrickJS/awesome-cursorrules"
__meta__tags: ["FastAPI","Asynchronous","Non-blocking","API","Python"]
__meta__rate: 7
---
- Limit blocking operations in routes:
   - Favor asynchronous and non-blocking flows.
   - Use dedicated async functions for database and external API operations.
   - Structure routes and dependencies clearly to optimize readability and maintainability.