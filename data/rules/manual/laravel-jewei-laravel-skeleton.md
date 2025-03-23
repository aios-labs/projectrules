---
description: "Laravel framework and PHP related."
globs: "*.php"
__meta__type: "guideline"
__meta__repo: "jewei/laravel-skeleton"
__meta__original_filename: "laravel"
__meta__duplicate: "true"
__meta__framework: "Laravel"
__meta__tags: ["PHP","Clean Code","SOLID","Architecture","Testing"]
__meta__rate: 8
---
# Core Philosophy
- Write idiomatic Laravel code with elegant, maintainable solutions
- Follow Clean Code, SOLID, KISS, and YAGNI principles
- Use descriptive naming that conveys intent
- Apply type hints and return types consistently
- Simplify logic and avoid deep nesting
- Place business logic in Service or Action classes

## Architecture
- Lean controllers: Keep thin - handle requests, validation, and responses only
- Fat models: Contain relationships, scopes, accessors/mutators, and query-related logic
- Services: Encapsulate complex business logic spanning multiple models
- Actions: Single-responsibility classes for specific operations
- DTOs: Use for complex data transfers between layers
- Enums: Define statuses and types with PHP 8.1+ enums
- Policies: Organize authorization logic
- Resources: Transform data for API responses
- Value Objects: Encapsulate domain concepts with validation
- Avoid using Laravel Events, Listeners, Observers
- Avoid repository pattern.

## Syntax & Patterns
- Use constructor property promotion and readonly properties
- Prefer helpers over Facades when appropriate
- Leverage collection methods for elegant data manipulation
- Use typed properties with appropriate nullability
- Utilize return type declarations
- Prefer match expressions over switch statements
- Use attribute casting in models
- Implement interfaces for contracts
- Use dependency injection via Service Container
- Utilize Laravel's pipeline pattern for complex operations

## Database
- Use integers for primary keys, UUIDs for slugs
- Create compound indexes for frequent queries
- Prevent N+1 issues with eager loading
- Wrap critical operations in transactions
- Use database locks for concurrency control
- Use query builders or Eloquent for all database operations
- Implement proper pagination for large datasets

## Performance Optimization
- Cache expensive operations appropriately
- Use lazy collections and chunk data for memory-efficient processing
- Implement queues for long-running tasks
- Use database indexing strategically
- Optimize Eloquent queries with query scopes
- Implement rate limiting for APIs

# Testing
- Write tests with Pest
- Use factories for test data
- Mock external services
- Test happy paths and edge cases

