---
description: "ENFORCE consistent rule creation and validation when creating or updating Cursor rules"
globs: ".cursor/rules/*.mdc"
__meta__type: "guideline"
__meta__repo: "DataScienceBioLab/reptile"
__meta__original_filename: "000-cursor-rules"
__meta__duplicate: "true"
__meta__tags: ["Rule Creation","Validation","Consistency","AI Optimization","Markdown"]
__meta__rate: 7
---

# Cursor Rules Format

## Context
- When creating new rules
- When updating existing rules
- When validating rule structure
- When ensuring rule consistency
- When optimizing rules for AI consumption

## Requirements

### Core Structure
```mdc
---
description: ACTION when TRIGGER to OUTCOME
globs: *.mdc
crossRefs:
  - related-rule-1.mdc
  - related-rule-2.mdc
alwaysApply: true  # Optional, for rules that should always be checked
---

# Rule Title

## Context
- When to apply this rule
- Prerequisites or conditions

## Requirements
- Concise, actionable items
- Each requirement must be testable

## Examples
<example>
Good concise example with explanation
</example>

<example type="invalid">
Invalid concise example with explanation
</example>

<version>X.Y.Z</version>
```

### File Organization

#### Location
- Path: `.cursor/rules/`
- Extension: `.mdc`

#### Naming Convention
PREFIX-name.mdc where PREFIX is:
- 0XX: Core standards
- 1XX: Tool configs
- 3XX: Testing standards
- 1XXX: Language rules
- 2XXX: Framework rules
- 8XX: Workflows
- 9XX: Templates
- _name.mdc: Private rules

### Required Fields

#### Frontmatter
- description: ACTION TRIGGER OUTCOME format (required)
- globs: Pattern for files and folders (required)
- crossRefs: Related rules (optional)
- alwaysApply: Boolean flag for rules that should always be checked (optional)

#### Body
- Title (H1)
- Context section
- Requirements section
- Examples section
- Version tag

### Formatting Guidelines
- Use Concise Markdown
- XML tags limited to:
  - <example>
  - <danger>
  - <required>
  - <rules>
  - <rule>
  - <critical>
  - <version>
- Indent XML content by 2 spaces
- Keep rules concise
- Use Mermaid for complex flows
- Use descriptive emojis when helpful

## Examples

<example>
# Good: Complete rule structure
---
description: ENFORCE testing standards
globs: tests/**/*.rs
crossRefs:
  - 001-rule-generator.mdc
---

# Testing Standards

## Context
- When writing tests
- When updating test suites

## Requirements
- Use appropriate test frameworks
- Follow naming conventions

## Examples
<example>
Good example here
</example>

<version>1.0</version>
</example>

<example type="invalid">
# Bad: Incomplete rule
---
description: Some testing rule
---

# Testing
Some unstructured content
</example>

<critical>
- NEVER include verbose explanations
- Keep files concise but complete
- Frontmatter MUST only have description, globs, optional crossRefs, and optional alwaysApply
</critical>

<version>2.0.0</version>