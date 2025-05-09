---
description: "This is helpful for building and designing prds for our application and how to write them.  Refer"
globs: "prds/*"
__meta__type: "guideline"
__meta__repo: "buster-so/buster"
__meta__tags: ["Documentation","Product Management","Best Practices","Technical Writing","Project Planning"]
__meta__rate: 9
---
# PRD (Product Requirements Document) Guidelines

## Overview
This document provides guidelines for creating and managing Product Requirements Documents (PRDs) in our codebase. All PRDs should follow the standardized template located at [template.md](mdc:prds/template.md)

## PRD Structure

### Location
All PRDs should be stored in the `/prds` directory with the following structure:
```
/prds
├── template.md          # The master template for all PRDs
├── active/             # Active/In-progress PRDs
│   ├── feature_auth.md
│   └── api_deployment.md
├── completed/          # Completed PRDs that have been shipped
│   ├── feature_user_auth.md
│   └── api_deployment.md
└── archived/           # Archived/Deprecated PRDs
```

### Naming Convention
- Use snake_case for file names
- Include a prefix for the type of change:
  - `feature_` for new features
  - `enhancement_` for improvements
  - `fix_` for bug fixes
  - `refactor_` for code refactoring
  - `api_` for API changes

## Using the Template

### Getting Started
1. Copy [template.md](mdc:prds/template.md) to create a new PRD
2. Place it in the `/prds/active` directory
3. Fill out each section following the template's comments and guidelines

### Key Sections to Focus On
The template [template.md](mdc:prds/template.md) provides comprehensive sections. Pay special attention to:

1. **Problem Statement**
   - Must clearly articulate the current state
   - Include measurable impact
   - Reference any relevant metrics or data

2. **Technical Design**
   - Include all affected components
   - Document ALL file changes (new/modified/deleted)
   - Provide actual code examples
   - Include database migrations if needed

3. **Implementation Plan**
   - Break down into deployable phases
   - Include clear success criteria
   - List dependencies between phases
   - Provide testing strategy for each phase

4. **Testing Strategy**
   - Unit test requirements
   - Integration test scenarios

## Best Practices

### Documentation
1. Use clear, concise language
2. Include code examples where relevant
3. Document assumptions and dependencies
4. Keep diagrams up to date
5. Use Mermaid for diagrams when possible

### Lifecycle Management
1. Move PRDs between directories based on status:
   - New PRDs → `/prds/active`
   - Shipped PRDs → `/prds/completed`
   - Deprecated PRDs → `/prds/archived`

2. Update status section regularly:
   - ✅ Completed items
   - ⏳ In Progress items
   - 🔜 Upcoming items
   - ❌ Known Issues

### Review Process
1. Technical review
   - Architecture alignment
   - Security considerations
   - Performance implications
   - Testing coverage

2. Product review
   - Feature completeness
   - User impact
   - Business value
   - Success metrics

## Common Pitfalls to Avoid
1. Incomplete technical specifications
2. Missing file change documentation
3. Unclear success criteria
4. Insufficient testing strategy
5. No rollback plan
6. Missing security considerations
7. Undefined monitoring metrics

## Example PRDs
Reference these example PRDs for guidance:
[template.md](mdc:prds/template.md)

## Checklist Before Submission
- [ ] All template sections completed
- [ ] Technical design is detailed and complete
- [ ] File changes are documented
- [ ] Implementation phases are clear
- [ ] Testing strategy is defined
- [ ] Security considerations addressed
- [ ] Dependencies and Files listed
- [ ] File References included