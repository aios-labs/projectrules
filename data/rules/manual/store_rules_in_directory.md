---
description: "Guidelines for store_rules_in_directory"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "nkkko/ns-2025"
__meta__tags: ["IDE","File Organization","Version Control","Markdown","Development"]
__meta__rate: 8
---
# Rule: Store All Rules in `.cursor/rules` Directory

## Description
This rule ensures that all new Cursor IDE AI MDC rules are:
1. Stored in the `.cursor/rules` directory
2. Created as separate files (one rule per file)

## Implementation Details
When creating a new rule:
- The rule must be saved in the `.cursor/rules` directory
- Each rule should be in its own file with a descriptive filename
- Use markdown (`.mdc`) format for rule files
- Include a clear title, description, and implementation details

## Benefits
- Organized structure for all rules
- Easy to find and manage individual rules
- Prevents rule clutter in other directories
- Facilitates version control of rules

## Example
For a rule about code formatting, create:
`.cursor/rules/code_formatting_standards.mdc`