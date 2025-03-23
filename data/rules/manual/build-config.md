---
description: "Rules for package management, build configuration, and dependencies."
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "jmagar/piper"
__meta__framework: "NextJS"
__meta__tags: ["Package Management","Build Configuration","Dependencies","NextJS","TypeScript"]
__meta__rate: 8
---
# Build and Package Management Rules

Rules for package management, build configuration, and dependencies.

<rule>
name: build_config_standards
description: Standards for build configuration and package management
filters:
  - type: file_path
    pattern: "package\\.json$|next\\.config\\.js$|tsconfig\\.json$|\\.env.*$"

actions:
  - type: suggest
    message: |
      Follow these build and package management standards:

      1. Package Management:
         - Use pnpm as package manager
         - Specify exact versions:
           * next: "15.2.0-canary.67"
           * react: "19.1.0-canary-fcb4e0f1-20250219"
           * tailwindcss: "^4.0.7"
         - Use proper onlyBuiltDependencies:
           * @nestjs/core
           * @prisma/client
           * @swc/core
           * etc.
         - Follow dependency organization
         - Keep dependencies updated

      2. Next.js Configuration:
         - Use proper env configuration:
           * NEXT_PUBLIC_API_URL
         - Configure proper rewrites:
           * API routes
           * Socket.IO paths
         - Use proper build settings
         - Configure proper optimization
         - Follow Next.js patterns

      3. TypeScript Configuration:
         - Use strict mode
         - Configure proper paths:
           * @/* for src imports
         - Set proper lib includes:
           * dom
           * dom.iterable
           * esnext
         - Configure proper module settings
         - Follow TS best practices

      4. Environment Setup:
         - Use proper env files:
           * .env
           * .env.local
           * .env.development
         - Configure proper variables
         - Handle secrets properly
         - Follow env patterns
         - Use proper validation

      5. Build Optimization:
         - Use proper SWC settings
         - Configure proper bundling
         - Handle tree shaking
         - Optimize assets
         - Follow build patterns

examples:
  - input: |
      // Bad package.json
      {
        "dependencies": {
          "next": "*",
          "react": "latest"
        }
      }

      // Good package.json
      {
        "name": "frontend",
        "version": "0.1.0",
        "private": true,
        "type": "module",
        "scripts": {
          "dev": "next dev",
          "build": "next build",
          "start": "next start",
          "lint": "next lint",
          "generate": "npx openapi-typescript-codegen --input ../openapi/main.yaml --output lib/generated --client fetch --name ChatAPI"
        },
        "dependencies": {
          "next": "15.2.0-canary.67",
          "react": "19.1.0-canary-fcb4e0f1-20250219",
          "react-dom": "19.1.0-canary-fcb4e0f1-20250219",
          "tailwindcss": "^4.0.7"
        },
        "pnpm": {
          "onlyBuiltDependencies": [
            "@nestjs/core",
            "@prisma/client",
            "@swc/core"
          ]
        }
      }
    output: "Properly configured package.json with exact versions and proper configuration"

metadata:
  priority: high
  version: 1.0
</rule>