---
description: "Describes the patterns used for all typescript (ts) files."
globs: "*.ts"
__meta__type: "guideline"
__meta__repo: "d-oliveros/white-room"
__meta__tags: ["TypeScript","Coding Style","Best Practices","Type Safety","Error Handling"]
__meta__rate: 9
---
# General TypeScript Coding Style

## File Organization
- Clear file suffixes indicating purpose: `.model.ts`, `.service.ts`, `.controller.ts`, etc
- File names in camelCase
- File extensions match content: `.ts`, `.spec.ts`, `.d.ts`

## Import order
It is very important to correctly order the import statements. They should always follow this order:

1. Type imports - External modules
2. Type imports - Local module aliases
3. Type imports - Relative (ordered by distance)
4. Regular imports - External modules
5. Regular imports - Local module aliases
6. Regular imports - Relative (ordered by distance)

```typescript
// Good import order:

// 1. Type imports - External modules
import type { FastifyRequest } from 'fastify';
import type { Repository } from 'typeorm';

// 2. Type imports - Local module aliases
import type { Logger } from '@namespace/logger';
import type { Config } from '@namespace/config';

// 3. Type imports - Relative (ordered by distance)
import type { UserDto } from '../../dtos';
import type { BaseModel } from '../models';
import type { ValidationResult } from './types';

// 4. Regular imports - External modules
import { z } from 'zod';
import fp from 'fastify-plugin';

// 5. Regular imports - Local module aliases
import { logger } from '@namespace/logger';
import { config } from '@namespace/config';

// 6. Regular imports - Relative (ordered by distance)
import { userService } from '../../services';
import { validateInput } from '../utils';
import { constants } from './constants';
```

```typescript
// Bad import order: type imports should come before non-type imports
import { logger } from '@namespace/logger';
import type { FastifyRequest } from 'fastify';
```

```typescript
// Bad import order: external imports should come before relative imports
import { userService } from '../../services';
import { Repository } from 'typeorm';
```

```typescript
// Bad import order: deeply nested imports should come before local imports
import { ValidationResult } from './types';
import { validateInput } from '../utils';
import { userService } from '../../services';
```

## Type Safety
- Do not use `any` types
- Use precise types for parameters and returns
- Prefer interfaces for object types
- Use type unions for specific value sets
- Use generics for reusable type patterns

## Naming Conventions
- Classes/Interfaces: PascalCase
- Variables/Functions: camelCase
- Constants/Enums: UPPER_SNAKE_CASE
- Private members: prefix with `_`
- Boolean variables: prefix with `is`, `has`, `should`
- Type suffixes: `Type`, `Dto`, `Params`
- Event suffixes: `Event`, `EventHandler`
- Error suffixes: `Error`

## Functions
- Single responsibility
- Clear descriptive names
- Default to `async/await` for promises
- Strong typing for parameters and returns
- Early returns for guard clauses
- "get" functions should throw errors if the entity is not found

```typescript
async function getUserById(
  id: number,
  options: GetUserOptions = {}
): Promise<User> {
  if (!id) {
    throw new ValidationError('ID is required');
  }
  const user = await this.userRepository.findOne({ where: { id } });
  if (!user) {
    throw new UserNotFoundError();
  }
  return user;
}
```

## Error Handling
- Use custom error classes, extending from our custom Error class
- Descriptive error messages
- Proper error propagation
- Try/catch only when handling errors
- Avoid catching generic `Error`

```typescript
export class UserNotFoundError extends NotFoundError {
  constructor(message: string) {
    super(message);
    this.name = 'UserNotFound';
  }
}
```

## Comments & Documentation
- JSDoc for public APIs
- Inline comments for complex logic
- Clear TODO format: `// TODO(@username): description`

```typescript
/**
 * Retrieves a user by ID.
 * @param {number} id - The user ID
 * @throws {ValidationError} If ID is invalid
 * @returns {Promise<User>} The found user
 */
```

## Testing
- Test file next to source: `file.ts` → `file.spec.ts`
- Descriptive test names
- Arrange-Act-Assert pattern
- Mock external dependencies
- Test edge cases and errors

## Best Practices
- Immutable by default
- Pure functions where possible
- Early validation of inputs
- Consistent error handling
- Clear dependency injection
- Proper null/undefined checks
- Use TypeScript strict mode
- Avoid type assertions (`as`)
- Use object destructuring
- Prefer const over let