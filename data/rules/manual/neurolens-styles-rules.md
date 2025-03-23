---
description: "Rules to handle CSS styles"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "luismartinezs/neurolens-ui"
__meta__tags: ["CSS","Responsive Design","Theming","Animations","Web Development"]
__meta__rate: 8
---
### **Key Use Cases for Styles**
1. **Basic Styling**
   - *User says*: "A red button with white text and rounded corners."
   - *LLM needs*: Map colors, typography, spacing, borders.

2. **Responsive Design**
   - *User says*: "On mobile, stack elements vertically."
   - *LLM needs*: Declare breakpoints and conditional layouts.

3. **Interactions**
   - *User says*: "Make the button darker on hover."
   - *LLM needs*: Inline hover/click effects.

4. **Consistent Theming**
   - *User says*: "Use the same font and primary color everywhere."
   - *LLM needs*: Reuse design tokens (e.g., `$primary=#2196f3`).

5. **Complex Layouts**
   - *User says*: "A grid of cards with equal heights and 16px gaps."
   - *LLM needs*: Define grids/flexbox with minimal syntax.

6. **Animations**
   - *User says*: "Fade in the header when the page loads."
   - *LLM needs*: Declare keyframes and transitions.

---

### **NeuroLens Style Optimization Strategy**
#### **1. Atomic, Token-Efficient Attributes**
- **Shortened Keys**: Replace CSS properties with 1-3 character abbreviations.
  ```python
  # Natural Language → DSL
  "blue background" → bg=#2196f3
  "16px font size" → s=16
  "10px padding" → pad=10
  ```
- **Implicit Units**: Assume `px` for numbers (except `%`).
  ```python
  w=300 → width: 300px
  w=50% → width: 50%
  ```

#### **2. Responsive Design**
- **Breakpoint Blocks**: Use `@` syntax for media queries.
  ```python
  # Desktop-first → Mobile override
  c dir=row gap=16
    @mobile maxw=600
      dir=col gap=8
  ```
- **Nested Conditions**: Apply styles only within breakpoints.

#### **3. Interactions**
- **Inline Event Directives**: Attach hover/click effects directly to elements.
  ```python
  btn t="Submit" bg=#2196f3 @hover bg=#1976d2 @click nav=/next
  ```

#### **4. Theming**
- **Design Tokens**: Define reusable variables in a root section.
  ```python
  $primary=#2196f3
  $text=#333
  btn t="Click" bg=$primary tc=white
  ```

#### **5. Layout Shortcuts**
- **Flex/Grid Defaults**: Assume `dir=row` (flex) and `cols=1` (grid) if unspecified.
  ```python
  # Flex column with 24px gap
  c dir=col gap=24
  # Grid with 3 columns
  g cols=3
  ```

#### **6. Animations**
- **Keyframe Shorthands**: Declare animations inline.
  ```python
  h1 t="Hello" anim=fadeIn 0.3s
  @keyframes fadeIn
    from op=0
    to op=1
  ```

---

### **Example Workflow**
**User Input**:
*"A centered container with a heading (white text on dark blue), a paragraph (gray text), and a button that turns purple on hover."*

**LLM-Generated DSL**:
```python
c dir=col align=c pad=32 bg=#1a237e
  h1 t="NeuroLens" s=36 tc=white
  p t="AI-driven UI framework." s=16 tc=#eee
  btn t=Try bg=#2196f3 tc=white pad=12 br=4 @hover bg=#9c27b0
```

**Parsed CSS/HTML**:
```html
<div style="display: flex; flex-direction: column; align-items: center; padding: 32px; background: #1a237e;">
  <h1 style="font-size: 36px; color: white;">NeuroLens</h1>
  <p style="font-size: 16px; color: #eee;">AI-driven UI framework.</p>
  <button style="background: #2196f3; color: white; padding: 12px; border-radius: 4px;"
          onmouseover="this.style.background='#9c27b0'"
          onmouseout="this.style.background='#2196f3'">
    Try
  </button>
</div>
```

---

### **Handling Edge Cases**
1. **Conflicting Styles**:
   - *Rule*: Last-defined attribute wins.
   - `btn bg=red bg=blue` → `background: blue`.

2. **Invalid Values**:
   - *Rule*: Ignore malformed attributes (e.g., `s=abc`).

3. **Nested Breakpoints**:
   - *Rule*: Inner breakpoints override outer ones.

---

### **Why This Works**
- **LLM-Friendly**: Short, deterministic syntax reduces ambiguity.
- **Zero Context Switching**: Styles, layout, and interactions are co-located.
- **Performance**: Inline styles avoid CSSOM overhead for static sites.

---

By focusing on these optimizations, NeuroLens ensures styles are both expressive and machine-efficient, enabling LLMs to act as reliable "CSS engineers."