---
description: "Rules for optimizing performance in FastAPI applications, including asynchronous operations and caching."
globs: "**/*.py"
__meta__type: "guideline"
__meta__repo: "PatrickJS/awesome-cursorrules"
__meta__tags: ["FastAPI","Performance","Asynchronous","Caching","API"]
__meta__rate: 8
---
- Minimize blocking I/O operations; use asynchronous operations for all database calls and external API requests.
- Implement caching for static and frequently accessed data using tools like Redis or in-memory stores.
- Optimize data serialization and deserialization with Pydantic.
- Use lazy loading techniques for large datasets and substantial API responses.
- Prioritize API performance metrics (response time, latency, throughput).
- Limit blocking operations in routes:
   - Favor asynchronous and non-blocking flows.
   - Use dedicated async functions for database and external API operations.