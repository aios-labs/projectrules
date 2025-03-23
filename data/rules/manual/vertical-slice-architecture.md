---
description: "Vertical Slice Architecture"
globs: "*.cs"
__meta__type: "guideline"
__meta__repo: "BenMakesGames/MyCursorRules"
__meta__tags: ["Architecture","C#","MediatR","Design Patterns","Software Development"]
__meta__rate: 9
---
# Vertical Slice Architecture

When developing features in this project, adhere to these architectural principles:

## Web-Unaware Slices
- Slices must be completely web-unaware (no ASP.NET dependencies)
- No controllers or other web-specific components in slices
- All HTTP endpoint mapping happens in the WebApi project using Webdiatr
  - Use `MapGetToQuery` and `MapPostToCommand` in Program.cs for endpoint mapping

## Feature Organization
- Keep handler, request, and response in a single file
- Name files after the primary handler (e.g., `LogInHandler.cs`)
- Group related features in feature folders (e.g., `Features/LogActivity/`)
- Use sealed classes/records to prevent inheritance
- Keep slice-specific entities in the slice (DTOs, value objects, etc.)

## MediatR Usage
- Use `IRequest<TResponse>` for queries and commands that return data
- Use `IRequest` for commands that don't return data
- Use `INotification` for events
- Keep handlers focused and single-purpose
- Use validation in the request objects where needed

## File Structure Example
```csharp
// LogInHandler.cs
public sealed record LogInRequest : IRequest<LogInResponse>
{
    public required string Email { get; init; }
    public required string Password { get; init; }

    public class Validator : AbstractValidator<LogInRequest>
    {
        // Validation rules here
    }
}

public sealed record LogInResponse
{
    public required string Username { get; init; }
    public required int UserId { get; init; }
}

public sealed class LogInHandler : IRequestHandler<LogInRequest, LogInResponse>
{
    // Handler implementation
}
```

## Cross-Cutting Concerns
- Use shared Data project for database access
- Use MediatR notifications for cross-slice communication
- Keep business logic in the handlers, not in the entities
- Use interfaces for external services

## Testing
- Test handlers in isolation
- Mock external dependencies
- Test request validation
- Test error cases and edge conditions
- No need to test web endpoints separately (they're just mappings)