---
description: "Guidelines for avoiding ambiguity in naming and code organization"
globs: "src/**/*.ts"
__meta__type: "guideline"
__meta__repo: "odedw/p5.modulate"
__meta__tags: ["Typescript","Code Organization","Naming Conventions","p5.js","Programming Best Practices"]
__meta__rate: 9
---
## Naming Ambiguity Guidelines
**Applies to**: `src/**/*.ts`

p5.modulate follows strict guidelines to avoid naming ambiguity, particularly with p5.js built-ins and common programming terms.

### Rules

1. **Avoid Overloading Common Terms**
   - Don't use generic terms that could be confused with programming concepts
   - Example: Use `TimeFunction` instead of `Function` for time-based generators
   - Example: Use `WaveGenerator` instead of `Wave` for waveform creation

2. **Distinguish from p5.js Built-ins**
   - Never use names that conflict with p5.js functions or properties
   - Add descriptive prefixes to clarify purpose
   - Example: Use `WAVE_SQUARE` instead of `SQUARE` to avoid conflict with `square()`

3. **Module vs Instance Names**
   - Use noun-based names for instances (e.g., `TimeFunction`)
   - Use verb-based or generator-based names for factories (e.g., `TimeFunctionGenerator`)
   - Example:
     ```typescript
     // Module (Generator/Factory)
     export const TimeFunctionGenerator = { ... };
     
     // Instance
     const myTimeFunction = TimeFunctionGenerator.frames(60);
     ```

4. **Type vs Value Names**
   - Add `Type` suffix for type definitions
   - Use plural forms for collections or enums
   - Example:
     ```typescript
     export enum TimeFunctionType { ... }
     export type WaveformType = ... ;
     export const WAVE_TYPES = [...];
     ```

5. **Component Relationships**
   - Use clear parent-child relationships in names
   - Indicate relationships through prefixes or suffixes
   - Example:
     ```typescript
     export class Envelope { ... }
     export class EnvelopeStage { ... }
     export enum EnvelopeType { ... }
     ```

### Examples

```typescript
// Bad: Ambiguous with programming concept
class Function { ... }

// Good: Clear purpose and domain
class TimeFunction { ... }

// Bad: Conflicts with p5.js
const SQUARE = 'square';

// Good: Clear context and no conflicts
const WAVE_SQUARE = 'square';

// Bad: Unclear relationship
class Stage { ... }

// Good: Clear relationship
class EnvelopeStage { ... }
```

### Validation Questions

When choosing names, ask:
1. Could this be confused with a programming concept?
2. Does this conflict with p5.js built-ins?
3. Is the relationship between components clear?
4. Does the name indicate its role (instance vs factory)?
5. Is the type vs value distinction clear?

### Benefits

1. Prevents naming conflicts with p5.js
2. Makes code more self-documenting
3. Improves IDE autocompletion
4. Reduces cognitive load
5. Makes relationships between components clearer
6. Helps maintain API consistency