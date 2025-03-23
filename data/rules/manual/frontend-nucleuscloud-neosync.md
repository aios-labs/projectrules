---
description: "Best practices for react and typescript development"
globs: "frontend/**/*.tsx, frontend/**/*.ts"
__meta__type: "guideline"
__meta__repo: "nucleuscloud/neosync"
__meta__original_filename: "frontend"
__meta__duplicate: "true"
__meta__framework: "React"
__meta__tags: ["React","Typescript","Best Practices","API","ConnectRPC"]
__meta__rate: 7
---

# useQuery and useMutation Imports

- When importing `useQuery` and `useMutation`, always import from `@connectrpc/connect-query`, _not_ `@tanstack/react-query`.
  - This is because we use the connect wrapper library that coincides with our API's types for a better user experience.
  - This library uses `@tanstack/react-query` under the hood.
