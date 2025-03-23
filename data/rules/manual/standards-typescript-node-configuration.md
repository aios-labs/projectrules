---
description: "TypeScript Node Configuration (tsconfig.node.json)"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "Malnati/platform-generator"
__meta__tags: ["TypeScript","Node.js","Configuration","ESNext","Strict Mode"]
__meta__rate: 7
---
rule TypeScriptNodeConfig
description "Ensure TypeScript node configuration supports strict mode, ESNext, and synthetic imports."
config-file "tsconfig.node.json"
config-content """
{
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noEmit": true
  },
  "include": ["vite.config.ts"]
}
"""