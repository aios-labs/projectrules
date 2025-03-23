---
description: "Shadcn Rules"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "MohammadOTaha/side-planner"
__meta__framework: "shadcn"
__meta__tags: ["ShadcnUI","Component Design","TailwindCSS","Theme Management","UI Development"]
__meta__rate: 7
---
# ShadcnUI Implementation

-   Keep all shadcn components in components/ui directory
-   Use the CLI for component installation: `npx shadcn@latest add`
-   Customize components through tailwind.config.ts
-   Extend components instead of modifying source
-   Use consistent naming conventions for custom variants
-   Implement proper theme switching
-   Use the /lib/utils.ts file for merging class names