---
description: "best practices for component composition and reusability"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "Open-Model-Initiative/graphcap"
__meta__tags: ["Component Composition","Reusability","Best Practices","Software Design","Frontend Development"]
__meta__rate: 8
---
## Rule: Intentional Component Separation

**Description:**
Components should be intentionally separated based on their specific responsibilities and data needs. Avoid overly generic components that combine multiple entity types, as this increases complexity and reduces clarity. Instead, create separate, clear, and purpose-specific components tailored to each unique use case.

---

## Rule Details:
- **Limit Overgeneralization:**
  - Reuse components only when clearly beneficial.
  - Avoid forced reusability between significantly different entities.

- **Avoid Unnecessary Complexity:**
  - Use distinct components instead of complex conditional rendering.
  - Prevent complex and mixed prop scenarios; split components to simplify prop management.

- **Maintain Type Specificity:**
  - Define explicit and clear types for props.
  - Use entity-specific props to maintain clear boundaries.

- **Thoughtful Reusability:**
  - Extract genuinely shared logic or layout into base components.
  - Avoid premature abstraction to keep components focused and straightforward.

- **Organize for Readability and Maintainability:**
  - Break down large components into smaller, related sub-components.
  - Keep related sub-components within the same file for enhanced readability.

- **Prioritize Simplicity and Clarity:**
  - Favor simple, direct solutions over complex implementations.
  - Clearly name components to reflect their explicit purpose.