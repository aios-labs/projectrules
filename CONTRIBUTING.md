# Contributing to Project Rules

We welcome contributions to this collection of project rules! This document explains how to add new rules, update existing ones, and submit your changes.

## Adding New Rules

To add a new rule to the collection:

1. Fork this repository
2. Create a new branch for your changes
3. Create a new Markdown file in the `data/rules/manual` directory
4. Follow the existing examples in the manual folder for formatting and structure
5. Submit a pull request with your changes

## Rule File Format

Each rule file should be a Markdown file (`.md`) with the following structure:

```markdown
# Title of the Rule

## Overview

Brief description of what this rule covers and why it's important.

## Guidelines

- Guideline 1
- Guideline 2
- Guideline 3

## Examples

Good example:
```code
// Good code example
```

Bad example:
```code
// Bad code example
```

## References

- [Link to relevant documentation](https://example.com)
- [Link to additional resources](https://example.com)
```

## Rule Naming Conventions

Rule files should be named using the following conventions:

- Use lowercase letters and hyphens for separating words (kebab-case)
- Make the name descriptive of the rule content
- Optionally, include a prefix number for ordering or categorization

Examples:
- `typescript-standards.md`
- `050-llm-validation.md`
- `security.md`

## Review Process

After submitting a pull request:

1. Maintainers will review your contribution
2. You may need to make changes based on feedback
3. Once approved, your rule will be merged into the main collection

## Existing Rules

For examples of existing rules, browse the `data/rules/manual` directory in this repository. The collection contains rules for various technologies, frameworks, and practices that can serve as templates for your contributions.

## Questions?

If you have any questions about contributing, please open an issue in the repository, and we'll be happy to help.