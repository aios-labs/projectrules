---
description: "Testing guidelines and rules for the LofiBeats project, including xUnit practices and AI-generated test requirements"
globs: "**/*.Tests/**/*.cs, **/*Test.cs, **/*Tests.cs"
__meta__type: "guideline"
__meta__repo: "willibrandon/LofiBeats"
__meta__original_filename: "testing"
__meta__duplicate: "true"
__meta__tags: ["Testing","xUnit","AI","Unit Tests","Integration Tests"]
__meta__rate: 7
---
# Testing Rules

For test files:

1. Use xUnit as the testing framework
2. Follow Arrange-Act-Assert pattern
3. Use meaningful test names that describe the scenario
4. Mock external dependencies (especially audio I/O)
5. Keep tests focused and atomic
6. Use Theory for parameterized tests
7. Include both unit and integration tests

## AI-Generated Tests

All AI-generated tests must:

1. Include the Collection attribute:
   ```csharp
   [Collection("AI Generated Tests")]
   ```

2. Include the Category trait on each test method:
   ```csharp
   [Trait("Category", "AI_Generated")]
   ```

3. Follow all standard testing rules above

This allows:
- Easy identification of AI-generated tests
- Filtering tests by category: `dotnet test --filter "Category=AI_Generated"`
- Running specific collections: `dotnet test --filter "Collection=AI Generated Tests"`
- Maintaining test organization and documentation 