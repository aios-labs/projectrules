---
description: "C# coding standards and practices, focusing on C# 12/13 features and modern patterns"
globs: "**/*.cs, **/*.csproj"
__meta__type: "guideline"
__meta__repo: "willibrandon/LofiBeats"
__meta__tags: ["C#","Coding Standards","Best Practices","Modern Patterns","C# 12/13 Features"]
__meta__rate: 8
---
# C# Coding Rules

When writing C# code:

1. Use C# 13 features appropriately:
   - params collections
   - New lock type and semantics.
   - New escape sequence - \e.
   - Method group natural type improvements
   - Implicit indexer access in object initializers
   - Enable ref locals and unsafe contexts in iterators and async methods
   - Enable ref struct types to implement interfaces.
   - Allow ref struct types as arguments for type parameters in generics.
   - Partial properties and indexers are now allowed in partial types.
   - Overload resolution priority allows library authors to designate one overload as better than others.

2. Use C# 12 features appropriately:
   - Required members
   - Primary constructors
   - Collection expressions
   - Alias any type
   - Inline arrays
   - Optional parameters in lambda expressions

3. Follow modern C# practices:
   - Use `init` properties for immutable objects
   - Utilize records for DTOs and value objects
   - Prefer pattern matching over type checking
   - Use switch expressions for concise branching
   - Implement IAsyncDisposable where appropriate

4. Code organization:
   - One class per file (except for small related classes)
   - Use partial classes for generated code
   - Keep methods focused and small
   - Use expression-bodied members when appropriate

5. Documentation:
   - XML comments on all public APIs
   - Include code examples in complex methods
   - Document threading/async behavior
   - Note any performance considerations