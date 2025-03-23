---
description: TypeScript coding standards and best practices
globs: "**/*.ts"
__meta__author: jorgemasta
__meta__type: guideline
__meta__tags: ["TypeScript"]
---

# TypeScript Standards

## Type Definitions

- Prefer interfaces for public API definitions and type aliases for complex types
- Use explicit typing rather than relying on inference for public APIs
- Create reusable type definitions for common patterns
- Use union types to represent values that can be one of several types
- Leverage generics for reusable components and functions

## Naming Conventions

- Use PascalCase for type names, interfaces, and classes
- Use camelCase for variable and function names
- Use ALL_CAPS for constants and enum values
- Prefix interfaces with 'I' only when required by project standards
- Add 'Type' suffix for complex type aliases

## Strictness

- Enable strict mode in tsconfig.json
- Avoid using 'any' type - use 'unknown' instead when type is truly unknown
- Use 'undefined' instead of 'null' when possible
- Explicitly handle null and undefined values
- Prefer non-nullable types and use strict null checks

## Functions

- Declare return types for all functions (except simple arrow functions with obvious return types)
- Use function overloading for complex function signatures
- Implement proper error handling with custom error types
- Use parameter destructuring for better readability
- Define default parameters when appropriate

## Project Configuration

- Customize tsconfig.json for your project needs
- Use ESLint with TypeScript plugins for linting
- Implement path aliases for cleaner imports
- Consider using project references for large codebases
- Enable incremental compilation for faster builds

## Documentation

- Write JSDoc comments for public APIs
- Include examples in documentation when helpful
- Document complex types with clear descriptions
- Reference related interfaces and types in documentation
- Use @deprecated tag for deprecated features