---
description: "Defines how to interact with Vercel's KV database for storing and retrieving session and application data."
globs: "**/*.ts"
__meta__type: "guideline"
__meta__repo: "PatrickJS/awesome-cursorrules"
__meta__service: "Vercel"
__meta__tags: ["Database","Vercel","Asynchronous","Session Management","Server-Side Rendering"]
__meta__rate: 7
---
- Use Vercel's KV database to store and retrieve session data.
- Utilize `kv.set`, `kv.get`, and `kv.delete` to manage data.
- Ensure the database operations are asynchronous to avoid blocking server-side rendering (SSR).