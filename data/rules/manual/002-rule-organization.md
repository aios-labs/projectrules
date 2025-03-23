---
description: "ORGANIZE rules in .cursor/rules with NNN-name.mdc format and MAINTAIN consistent structure"
globs: ["**/*.mdc", "**/*.md"]
__meta__type: "guideline"
__meta__repo: "DataScienceBioLab/reptile"
__meta__tags: ["Rule Management","File System","Naming Conventions","Documentation","Version Control"]
__meta__rate: 8
---
# Rule Organization Standards

## Context
- When creating new rules
- When organizing existing rules
- When reviewing rule structure
- When managing rule locations
- When implementing rule hierarchy

## Requirements
- Place all rules in .cursor/rules/ directory
- Use 3-digit prefix (001-099) for core rules
- Use kebab-case for rule names
- Include required sections:
  - YAML frontmatter with description and globs
  - Title
  - Context
  - Requirements
  - Examples (good and invalid)
  - Version tag
- Follow naming conventions:
  - 0XX: Core standards
  - 1XX: Tool configs
  - 3XX: Testing standards
  - 1XXX: Language rules
  - 2XXX: Framework rules
  - 8XX: Workflows
  - 9XX: Templates
  - _name.mdc: Private rules

## Examples
<example>
# Good: Proper rule organization
.cursor/rules/
├── 000-cursor-rules.mdc
├── 001-rule-generator.mdc
├── 002-rule-organization.mdc
└── 003-code-style-guide.mdc
</example>

<example type="invalid">
# Bad: Incorrect organization
rules/
├── style.mdc
├── 001_style_guide.mdc
└── .cursor/my-rule.mdc
</example>

<example>
# Good: Complete rule structure
---
description: ACTION when TRIGGER to OUTCOME
globs: pattern
---
# Rule Title

## Context
- When to apply
- Prerequisites

## Requirements
- Actionable items
- Testable criteria

## Examples
<example>
Good example
</example>

<example type="invalid">
Invalid example
</example>

<version>1.0</version>
</example>

<example type="invalid">
# Bad: Incomplete structure
---
description: A rule
---
Some content...
</example>

## Best Practices
1. Follow consistent directory structure
2. Use proper rule naming
3. Maintain rule hierarchy
4. Include all required sections
5. Validate rule structure
6. Keep rules organized
7. Document rule relationships
8. Follow version control practices
9. Maintain rule documentation
10. Review rule organization regularly

## Technical Metadata
- Category: Rule Management
- Priority: High
- Dependencies:
  - File system structure
  - Rule naming conventions
  - Rule validation tools
- Validation Requirements:
  - Directory structure
  - Rule naming format
  - Section completeness

<version>1.1.0</version>