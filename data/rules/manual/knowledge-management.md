---
description: "Knowledge Management Standards"
globs: ["**/knowledge.md", "**/*.md"]
__meta__type: "guideline"
__meta__repo: "InfernapeXavier/InfernapeXavier.github.io"
__meta__tags: ["Knowledge Management","Documentation","Best Practices","Project Management","Standards"]
__meta__rate: 8
---
<rule>
name: knowledge_management
description: Standards for documenting and managing project knowledge

# Knowledge Management Rules

This file contains rules for maintaining and organizing project knowledge.

## Knowledge File Structure

The knowledge.md file should be organized in the following sections:

1. Development Practices
   - Next.js patterns and solutions
   - React component patterns
   - TypeScript best practices
   - Testing strategies

2. Styling Solutions
   - CSS architecture decisions
   - Component styling approaches
   - Theme management
   - Responsive design patterns

3. Performance Optimizations
   - Build optimizations
   - Runtime optimizations
   - Loading strategies
   - Caching approaches

4. Troubleshooting
   - Common issues and solutions
   - Debugging strategies
   - Error handling patterns

## Documentation Format

Each knowledge entry should follow this structure:

```markdown
### Topic Name

**Context**: Brief description of the situation or problem

**Solution**: Detailed explanation of how it was solved

**Implementation**: Code examples or steps to implement

**References**: Links to relevant documentation or resources

**Date**: When this knowledge was added/updated
```

## Best Practices

- Keep entries atomic and focused
- Include working examples where possible
- Link to relevant files in the codebase
- Update entries when better solutions are found
- Tag entries for easy searching
- Document both successes and failures

## Usage Guidelines

1. Before starting a new task:
   - Check knowledge.md for existing solutions
   - Review related patterns and practices

2. After completing a task:
   - Document new learnings
   - Update existing entries if better solutions found
   - Add any troubleshooting steps if encountered

3. When making architectural decisions:
   - Document the context and reasoning
   - Include considered alternatives
   - Note any trade-offs made

## File Location

```
PROJECT_ROOT/
├── docs/
│   └── knowledge.md
└── ...
```

metadata:
  priority: high
  version: 1.0
</rule>