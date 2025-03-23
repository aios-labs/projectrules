---
description: "Universal frontend development principles applicable across frameworks to ensure maintainable UI code."
globs: "*.jsx, *.tsx, *.js, *.ts"
__meta__type: "guideline"
__meta__repo: "Noodieknoodie/HohimerPro"
__meta__tags: ["Frontend Development","UI Design","Best Practices","Responsive Design","Accessibility"]
__meta__rate: 8
---
# Frontend General Best Practices

1. COMPONENT SIZE: Keep component files under 300 lines. Split large components into smaller, focused subcomponents.

2. UI CONSISTENCY: Create reusable UI components (buttons, inputs, cards) and use them consistently throughout the application.

3. LOADING STATES: Handle loading, error, and empty states explicitly for all data-dependent components.

4. RESPONSIVE DESIGN: Implement responsive layouts with appropriate breakpoints using framework-specific tools.

5. EVENT HANDLING: Implement consistent patterns for event handling. Extract complex event logic to separate functions.

6. ACCESSIBILITY: Use semantic HTML elements, provide alt text for images, ensure keyboard navigation, and maintain adequate color contrast.

7. CONSTANTS: Move hardcoded values (option lists, status values, display text) to dedicated constants files.

8. CODE DUPLICATION: Avoid duplicating logic across components. Extract common functionality to utility functions.