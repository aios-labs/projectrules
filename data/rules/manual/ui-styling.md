---
description: "UI Styling Standards using Radix UI and Tailwind CSS"
globs: "*.{ts,tsx,css}"
__meta__type: "guideline"
__meta__repo: "jetstreamgg/tarmac"
__meta__framework: "Tailwind"
__meta__tags: ["UI Components","Radix UI","Tailwind CSS","Accessibility","Styling Standards"]
__meta__rate: 9
---
# UI Styling Standards

Standards for implementing UI components using Radix UI primitives and Tailwind CSS.

<rule>
name: radix_ui_standards
description: Standards for using Radix UI primitives
filters:
  - type: file_extension
    pattern: "\\.(ts|tsx)$"
  - type: content
    pattern: "(?s)@radix-ui/"

actions:
  - type: suggest
    message: |
      Follow these Radix UI implementation standards:

      ## Component Structure
      - Use Radix UI's compound component pattern
      - Implement proper accessibility attributes
      - Handle keyboard interactions
      - Use proper animation states
      - Implement proper portal handling

      ## Accessibility
      - Maintain ARIA relationships
      - Implement proper focus management
      - Use correct semantic elements
      - Handle screen reader announcements
      - Implement proper keyboard navigation

      ## Example Patterns
      ```typescript
      // Dialog implementation pattern
      export const Dialog = ({ trigger, children }: DialogProps) => {
        return (
          <DialogPrimitive.Root>
            <DialogPrimitive.Trigger asChild>
              {trigger}
            </DialogPrimitive.Trigger>
            <DialogPrimitive.Portal>
              <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 animate-fade-in" />
              <DialogPrimitive.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {children}
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          </DialogPrimitive.Root>
        )
      }
      ```

examples:
  - input: |
      // Bad
      <div role="dialog">
        <button onClick={close}>×</button>
        {content}
      </div>

      // Good
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Open</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            {content}
            <Dialog.Close asChild>
              <Button>Close</Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    output: "Properly implemented Radix UI Dialog"

metadata:
  priority: high
  version: 1.0
</rule>

<rule>
name: tailwind_styling_standards
description: Standards for using Tailwind CSS
filters:
  - type: file_extension
    pattern: "\\.(ts|tsx)$"
  - type: content
    pattern: "className="

actions:
  - type: suggest
    message: |
      Follow these Tailwind CSS standards:

      ## Class Organization
      - Group related utilities
      - Use logical ordering (layout → typography → visual)
      - Implement responsive classes properly
      - Use appropriate state variants
      - Leverage custom theme values

      ## Component Variants
      ```typescript
      // Using class-variance-authority
      const buttonVariants = cva(
        "rounded-md font-medium transition-colors",
        {
          variants: {
            variant: {
              primary: "bg-primary-500 text-white hover:bg-primary-600",
              secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200"
            },
            size: {
              sm: "px-3 py-1.5 text-sm",
              md: "px-4 py-2 text-base",
              lg: "px-6 py-3 text-lg"
            }
          },
          defaultVariants: {
            variant: "primary",
            size: "md"
          }
        }
      )
      ```

      ## Responsive Design
      - Use mobile-first approach
      - Implement proper breakpoints
      - Use container queries when appropriate
      - Handle touch/mouse interactions
      - Implement proper dark mode

      ## Performance
      - Use @apply sparingly
      - Leverage JIT compilation
      - Implement proper purging
      - Use dynamic classes carefully
      - Optimize class concatenation

examples:
  - input: |
      // Bad
      <div style={{ padding: '1rem', marginTop: '2rem' }}>
        <button style={{ backgroundColor: 'blue' }}>
          Click me
        </button>
      </div>

      // Good
      <div className="p-4 mt-8">
        <button className={buttonVariants({ variant: "primary", size: "md" })}>
          Click me
        </button>
      </div>
    output: "Proper Tailwind CSS usage with variants"

  - input: |
      // Bad
      className="text-sm md:text-base lg:text-lg p-2 md:p-4 bg-blue-500"

      // Good
      className={cn(
        "p-2 md:p-4",
        "text-sm md:text-base lg:text-lg",
        "bg-blue-500"
      )}
    output: "Organized Tailwind classes with proper responsive design"

metadata:
  priority: high
  version: 1.0
</rule>

<rule>
name: theme_management
description: Standards for theme management and CSS variables
filters:
  - type: file_extension
    pattern: "\\.(css|ts|tsx)$"
  - type: content
    pattern: "(?s)(--|-\\[.*\\])"

actions:
  - type: suggest
    message: |
      Follow these theming standards:

      ## CSS Variables
      - Use semantic naming
      - Implement proper fallbacks
      - Structure theme tokens logically
      - Handle color schemes properly
      - Implement proper scaling systems

      ## Theme Configuration
      ```typescript
      // tailwind.config.ts
      export default {
        theme: {
          extend: {
            colors: {
              primary: {
                50: 'var(--primary-50)',
                // ...
                900: 'var(--primary-900)',
              }
            },
            spacing: {
              // Use semantic tokens
              container: 'var(--container-padding)',
              'input-height': 'var(--input-height)'
            }
          }
        }
      }
      ```

examples:
  - input: |
      // Bad
      :root {
        --blue: #1e90ff;
      }

      // Good
      :root {
        --primary-500: #1e90ff;
        --primary-600: #0076e4;
        --spacing-input: 2.5rem;
      }
    output: "Proper CSS variable implementation"

metadata:
  priority: high
  version: 1.0
</rule>