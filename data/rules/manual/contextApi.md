---
description: "Best practices for using the Context API in React"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "Open-Model-Initiative/graphcap"
__meta__framework: "React"
__meta__tags: ["React","Context API","Best Practices","Typescript","Component Design"]
__meta__rate: 9
---
# React Context API Guide

This rules file outlines guidelines and best practices to follow when using the React Context API. It is designed to help you avoid common pitfalls such as prop drilling and ensure that your context is used safely and effectively across your application.

---

## 1. Organize Your Context Files

- **Dedicated Folder:**
  Create a separate folder (e.g., `contexts/`) for yourcontext files. This helps keep your codebase organized. For app level context this will be in src/contexts. If you are developing a feature model create a context folder inside the feature

- **One Context per File:**
  Place each context (and its related provider and custom hook) in its own file for clarity and maintainability.

---

## 2. Create Context with a Default Value

- **Explicit Default:**
  When using `createContext`, provide a default value that makes sense for your use case. In many cases, you’ll start with `undefined` to detect when a context consumer is used outside its provider:
  ```tsx
  export const DashboardContext = createContext<User | undefined>(undefined);
  ```

- **Caution with Defaults:**
  Remember, the default value is what consumers receive if they are not wrapped in a provider. Often, it is better to default to `undefined` and handle that case explicitly.

---

## 3. Use Custom Hooks for Consuming Context

- **Abstract Use of useContext:**
  Create a custom hook (e.g., `useUserContext`) that wraps the `useContext` call. This ensures that every consumer checks for an undefined value.

- **Error Handling Inside the Hook:**
  Inside your custom hook, throw an error if the context is not provided. This immediately alerts you during development if you forget to wrap a component in the proper provider.

  ```tsx
  export function useUserContext() {
    const user = useContext(DashboardContext);
    if (user === undefined) {
      throw new Error('useUserContext must be used within a DashboardContext Provider');
    }
    return user;
  }
  ```

- **Naming Convention:**
  Always prefix custom hooks with `use` to indicate that they are hooks and may use other hooks internally.

---

## 4. Ensure Proper Provider Usage

- **High in the Component Tree:**
  Wrap your application (or the part of your app that requires the context) with the context provider. This is especially important if many components need access to the same data.

- **Client Component Considerations:**
  If your provider uses client-only hooks (e.g., `useState`), make sure it is a client component. This is particularly important in frameworks like Next.js where server and client components differ.

- **Pass the Correct Value:**
  Ensure that the provider’s `value` prop correctly reflects the state or data that you wish to share.

  ```tsx
  <DashboardContext.Provider value={user}>
    {children}
  </DashboardContext.Provider>
  ```

---

## 5. Proper Typing with TypeScript

- **Define Explicit Types:**
  Use explicit types or interfaces for your context’s value. This is critical for catching errors at compile time.

  ```tsx
  type Theme = 'light' | 'dark';
  type ThemeContextType = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  };

  export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
  ```

- **Union Types for Safety:**
  Typing the context value as `Type | undefined` helps you manage the potential absence of a value and forces you to handle error cases (as in your custom hook).

---

## 6. Avoid Prop Drilling

- **Centralize Shared Data:**
  The Context API exists to let you bypass prop drilling. Instead of passing data through multiple layers, provide it through context so that any nested component can consume it directly.

- **Simplify Component Interfaces:**
  By removing props that merely “pass through” data, your component interfaces remain clean and focused on their own functionality.

---

## 7. Consistent Naming and Code Style

- **Descriptive Names:**
  Use clear, descriptive names for contexts (e.g., `DashboardContext`, `ThemeContext`) and their corresponding hooks (e.g., `useUserContext`, `useThemeContext`).

- **Follow Hook Conventions:**
  Always name custom hooks with the `use` prefix to indicate they conform to React’s hook rules.

---

## 8. Error Handling and Debugging

- **Fail Fast:**
  When a consumer attempts to use a context without a provider, throw a descriptive error immediately. This “fail fast” strategy helps catch mistakes during development.

- **Avoid Silent Failures:**
  Do not rely on optional chaining (`?.`) everywhere in consuming components; centralize error checking in your custom hook.

---

## 9. Documentation and Comments

- **Explain Your Setup:**
  Document the purpose of each context and custom hook in your code. Comments can provide insight into why certain design choices (like using `undefined` as a default) were made.

- **Keep It Up-to-Date:**
  As your application evolves, ensure that your context and hook implementations are reviewed and updated as needed.

---

By following these rules, you will create a more robust, maintainable, and error-resistant implementation of the React Context API in your applications.