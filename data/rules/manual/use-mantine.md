---
description: "AI Guidelines for Mantine Usage"
globs: ["**/*.tsx", "**/*.jsx"]
__meta__type: "guideline"
__meta__repo: "Rouby/sommerlan"
__meta__framework: "React"
__meta__tags: ["AI","Mantine","React","Components","Best Practices"]
__meta__rate: 8
---
# AI Guidelines for Mantine Usage

<rule>
name: ai_mantine_guidelines
description: Guidelines for AI to prefer and suggest Mantine components over basic HTML elements
filters:
  - type: file_extension
    pattern: "\\.(tsx?|jsx?)$"
  - type: content
    pattern: "import.*@mantine/core"

actions:
  - type: ai_instruction
    message: |
      When working with React components in this codebase:

      1. Always check if there's a Mantine component that can replace basic HTML elements
      2. Prefer Mantine's built-in props over inline styles or custom CSS
      3. Use Mantine's layout components (Group, Stack, Grid) over div-based layouts
      4. Utilize Mantine's spacing system (m, p, gap props) over manual spacing
      5. Suggest refactoring basic HTML to Mantine components when encountered

      Component mapping reference:
      - div (layout) → Group, Stack, Flex, Grid
      - div (container) → Box, Paper, Container
      - p, span → Text
      - h1-h6 → Title
      - button → Button, ActionIcon
      - input → TextInput, NumberInput, etc.
      - form elements → Mantine form components
      - ul/ol → List
      - li → List.Item

      Props mapping reference:
      - margin/padding → m/p props with theme values
      - display: flex → Group or Stack
      - width/height → w/h props
      - background-color → bg prop
      - border → border prop

examples:
  - input: |
      Encountered code:
      ```tsx
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button>Click me</button>
      </div>
      ```
    output: |
      AI response:
      "I'll modify this to use Mantine components:
      ```tsx
      <Group mb="md" gap="sm">
        <Button>Click me</Button>
      </Group>
      ```"

  - input: |
      User request: "Create a form with some inputs"
    output: |
      AI response:
      "I'll create a form using Mantine components:
      ```tsx
      <form>
        <Stack>
          <TextInput
            label="Name"
            placeholder="Enter your name"
            required
          />
          <NumberInput
            label="Age"
            placeholder="Enter your age"
            min={0}
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
      ```"

metadata:
  priority: high
  version: 1.0
  tags:
    - ai_behavior
    - mantine
    - components
    - best-practices
</rule>