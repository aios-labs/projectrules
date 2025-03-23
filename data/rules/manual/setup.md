---
description: "Setup Cursor Rules based on project type"
globs: "**/*"
__meta__type: "setup"
__meta__repo: "fireharp/cursor-rules"
__meta__tags: ["Project Setup","Node.js","Python","React","Automation"]
__meta__rate: 8
---
# CursorRules Setup

This template is used to detect project types and add appropriate rules based on the project structure.

## Project Detection

When this template is triggered by running `CursorRules.setup` or `CR_SETUP`, it will:

1. Check for package.json (npm/Node.js projects)
2. Check for setup.py, requirements.txt, pyproject.toml (Python projects)
3. Check for other common project identifiers
4. Add appropriate templates based on detected project types

## Common Project Types

- **Node.js/npm**: Detected by package.json
- **React**: Detected by react dependency in package.json
- **Python**: Detected by setup.py, requirements.txt, or pyproject.toml
- **General**: Applied to all projects regardless of type