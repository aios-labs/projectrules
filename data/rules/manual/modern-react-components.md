---
description: "Guidelines for modern-react-components"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "Open-Model-Initiative/graphcap"
__meta__framework: "React"
__meta__tags: ["React","TypeScript","Chakra UI","Component Design","Best Practices"]
__meta__rate: 8
---
# Creating Modern React Components in 2025

React has evolved significantly over the years, and with it, the way we write components. This guide will walk you through creating modern React components using the latest best practices as of 2025.

## Key Principles

1. Use function components
2. Leverage TypeScript for type safety
3. Utilize hooks effectively
4. Employ component composition
5. Keep components small and focused
6. Utilize Context api for UI state

Utilize the Chakra UI Component Library and our ui [index.ts](mdc:graphcap_studio/src/common/ui/index.ts) . Lookup Chakra v3 docs from your internal retrieval engine.

<Warning>
1. **Constants:**
   - Extract magic numbers/strings into constants.
   - Centralize in a dedicated constants file.

2. **Folder Structure:**
   - Organize by feature/purpose (components, hooks, utilities, constants, types).
   - Be consistent and intuitive.

3. **Reusable & Dumb Components:**
   - Split large components into small, focused pieces.
   - Keep business logic out of presentational components.
   - Use the children pattern to avoid prop drilling.

4. **Minimal Markup:**
   - Avoid unnecessary wrappers; use React fragments (`<>…</>`).
   - If layout styling is needed, wrap with a one-off container rather than embedding in a reusable component.

5. **No Layout in Reusable Components:**
   - Reusable components (e.g., buttons, headings) should accept a `className` prop for one-off styling.
   - Do not hardcode layout styles inside them.

6. **TypeScript:**
   - Use strict TypeScript types for props, state, and functions.
   - Use union types for limited values (e.g., `'primary' | 'secondary'`).

7. **Event Handlers:**
   - Name props using the “onEvent” convention (e.g., `onAddTodo`).
   - Use internal handler names like `handleAddTodo`.

8. **State Updates:**
   - Wrap state updates in dedicated event handler functions.
   - Use updater functions (`setState(prev => …)`) when new state depends on previous state.

9. **Single Source of Truth:**
   - Track selected/active items by ID instead of the entire object.

10. **URL as State:**
    - Store shareable state (filters, pagination) in the URL, not in component state.

11. **useEffect Discipline:**
    - Keep each `useEffect` focused on one concern.
    - Split effects if they manage unrelated tasks.

12. **Data Fetching:**
    - Prefer React Query fetching methods over manual useEffect fetching.

13. **Performance:**
    - Use `useMemo` for expensive calculations/objects.
    - Use `useCallback` for functions passed as props.
    - Wrap components in `React.memo` to avoid unnecessary renders.

14. **Consolidate Related State:**
    - Use a single state object for related pieces of state where possible.

15. **Custom Hooks & Utilities:**
    - Extract shared logic into custom hooks.
    - Write utility functions for common tasks (e.g., string formatting).

16. **Avoid Prop Drilling:**
    - Use context or children patterns instead of passing raw setter functions deeply.

17. **Naming for Function Props:**
    - Expose custom events using “onEvent” props (e.g., `onAddTodo`), and use descriptive handler names internally (e.g., `handleAddTodo`).

### Project Constraints (Reminders)

- **Hooks:** Place all hook logic (useEffect, useRef, useCallback, etc.) in custom hook files.
- **Immutability:** All UI component inputs must be readonly/immutable.
- **Event Listeners:** Do not assign mouse or keyboard listeners to non-interactive elements.
- **Accessibility:** Use `<hr>` instead of the "separator" role.
- **Responsive Design:** Avoid fixed pixel heights/widths; design for responsiveness.\
- **Document Interfaces** : Document interfaces, but in the class doc (not line by line)

---

All new code must comply with these guidelines to ensure a modular, maintainable, and high-performing React codebase.
</Warning>
## Basic Component Structure

Here's the basic structure of a modern React component:

```tsx
type ComponentProps = {
  // Define your props here
};

export default function Component({ /* destructured props */ }: ComponentProps) {
  // Component logic here

  return (
    // JSX here
  );
}
```

## Detailed Guide

### 1. Use Function Components

Always use function components instead of class components. They're simpler, more concise, and work better with hooks.

```tsx
// Good
export default function MyComponent() {
  return <div>Hello, World!</div>;
}

// Avoid
class MyComponent extends React.Component {
  render() {
    return <div>Hello, World!</div>;
  }
}
```

### 2. Leverage TypeScript

Use TypeScript to define prop types and component return types for better type safety and developer experience.

```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function Button({ label, onClick }: ButtonProps): JSX.Element {
  return <button onClick={onClick}>{label}</button>;
}
```

### 3. Utilize Hooks Effectively

Use React hooks for state management and side effects. Common hooks include `useState`, `useEffect`, `useCallback`, and `useMemo`.

```tsx
import { useState, useEffect, useCallback } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: \${count}`;
  }, [count]);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

### 4. Employ Component Composition

Break down complex components into smaller, reusable pieces. This improves readability and maintainability.

```tsx
function Header({ title }: { title: string }) {
  return <h4>{title}</h4>;
}

function Content({ children }: { children: React.ReactNode }) {
  return <div className="content">{children}</div>;
}

function Footer({ copyright }: { copyright: string }) {
  return <footer>{copyright}</footer>;
}

export default function Page({ title, content, copyright }: PageProps) {
  return (
    <div>
      <Header title={title} />
      <Content>{content}</Content>
      <Footer copyright={copyright} />
    </div>
  );
}
```

### 5. Keep Components Small and Focused

Each component should have a single responsibility. If a component grows too large or complex, consider breaking it down into smaller components.

### 6. Use Default Exports

Prefer default exports for components. This makes imports cleaner and more consistent.

```tsx
// In Component.tsx
export default function Component() {
  // ...
}

// In another file
import Component from './Component';
```

### 7. Proper File Naming

Use PascalCase for component file names, matching the component name.

```
UserProfile.tsx
Button.tsx
NavigationBar.tsx
```

### 8. Implement Error Boundaries

Use error boundaries to catch and handle errors in component trees with react-error-boundary.