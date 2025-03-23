---
description: "This rule ensures that when modifying Go files, developers maintain code quality and consistency by adding/updating tests, formatting code, and fixing linting errors."
globs: "*.go"
__meta__type: "guideline"
__meta__repo: "skamensky/pgmeta"
__meta__tags: ["Go","Code Quality","Testing","Linting","Formatting"]
__meta__rate: 8
---
When modifying Go files:
- **Add or update tests** if the changes represent functional or semantic modifications.
- **Run `go fmt`** on all changed files to maintain proper formatting.
- **Run `golangci-lint run`** and fix any errors or warnings found.

Following this rule helps ensure Go code remains well-tested, properly formatted, and free of common issues.