---
description: "Guidelines for linting-standards"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "rodneyodonnell/rgi"
__meta__tags: ["Linting","Code Quality","Python","TypeScript","Development Standards"]
__meta__rate: 8
---
name: linting_standards
description: Standards for code linting and quality checks

<rule>
name: linting_standards
description: Standards for code linting and quality checks
filters:
  - type: file_extension
    pattern: "\\.py$|\\.ts$"
  - type: event
    pattern: "file_create|file_modify|lint_request"

actions:
  - type: suggest
    message: |
      # Linting Standards

      This rule complements the weekly-tasks rule by providing specific linting procedures.
      For scheduling and tracking of linting tasks, refer to weekly-tasks.

      1. Tools Used:
         Python:
         - mypy (type checking)
         - pylint (code quality)

         TypeScript:
         - eslint (code quality)
         - tsc (type checking)

      2. MyPy Configuration:
         - Strict mode enabled
         - Disallow untyped defs
         - Check untyped defs

      3. PyLint Configuration:
         - Use pyproject.toml for configuration
         - Focus on code quality and complexity checks

      4. ESLint/TSC Configuration:
         - TypeScript-specific rules enabled
         - Strict type checking with --noEmit

      5. Weekly Lint Process (per weekly-tasks rule):
         1. Run full linting suite:
            ```bash
            ./scripts/run_linter.sh --all
            ```
         2. For Python-only:
            ```bash
            ./scripts/run_linter.sh --python
            ```
         3. For specific tools:
            ```bash
            ./scripts/run_linter.sh --mypy
            ./scripts/run_linter.sh --pylint
            ./scripts/run_linter.sh --eslint
            ./scripts/run_linter.sh --tsc
            ```
         4. Document any ignored warnings
         5. Update STATUS.md completion date
         6. Update weekly tasks table status

metadata:
  priority: high
  version: 1.0
  tags:
    - quality
    - linting
    - maintenance
  related_rules:
    - weekly-tasks
</rule>