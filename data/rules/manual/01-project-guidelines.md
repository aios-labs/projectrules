---
description: "Core project guidelines for Shadow Worker development"
globs: ["**/*.c", "**/*.h", "src/**/*.c", "include/**/*.h", "docs/**/*.md"]
__meta__type: "guideline"
__meta__repo: "voolyvex/shadow-worker"
__meta__tags: ["Development","Coding Standards","Best Practices","Windows Environment","Error Handling"]
__meta__rate: 9
---
# Shadow Worker Project Guidelines

## Core Development Principles

1. **Verify Information**: Always verify information before presenting it. Do not make assumptions without clear evidence.

2. **Preserve Existing Code**: Don't remove unrelated code or functionalities. Pay attention to preserving existing structures.

3. **Single Chunk Edits**: Provide all edits in a single chunk instead of multiple-step instructions for the same file.

4. **Explicit Variable Names**: Use descriptive, explicit variable names over short, ambiguous ones.

5. **Consistent Coding Style**: Adhere to the existing coding style in the project for consistency.

6. **Performance-First**: Prioritize code performance where applicable, especially in critical paths.

7. **Security-Conscious**: Always consider security implications when modifying code.

8. **Test Coverage**: Include appropriate unit tests for new or modified code.

9. **Error Handling**: Implement robust error handling and logging using the project's logging system.

10. **Modular Design**: Follow modular design principles to improve maintainability and reusability.

11. **Version Compatibility**: Ensure changes are compatible with the project's specified language/framework versions.

12. **Named Constants**: Replace hardcoded values with named constants to improve clarity and maintainability.

13. **Edge Case Handling**: Always consider and handle potential edge cases in implementations.

14. **Assertions**: Include assertions to validate assumptions and catch potential errors early.

## Learning From Mistakes

1. **Error Analysis**: When errors occur, document:
   - The root cause of the issue
   - How it was detected
   - The solution implemented
   - Prevention strategies for similar issues

2. **Pattern Recognition**: Identify recurring issues and create specific guidelines to prevent them.

3. **Continuous Improvement**: Update these guidelines based on project experience and feedback.

4. **Knowledge Sharing**: Document solutions to complex problems for future reference.

## Communication Guidelines

1. **File-by-File Changes**: Make changes file by file to allow for proper review.

2. **No Unnecessary Confirmations**: Don't ask for confirmation of information already provided.

3. **No Implementation Checks**: Don't ask to verify implementations that are visible in the context.

4. **No Unnecessary Updates**: Don't suggest changes to files when no modifications are needed.

5. **Direct Communication**: Avoid unnecessary apologies or understanding feedback.

## Windows Environment Protocol

1. **Command Verification**: Always verify the current directory before executing commands:
   ```batch
   echo Current directory: %CD%
   if not exist "CMakeLists.txt" (echo Error: Not in project root & exit /b 1)
   ```

2. **Path Management**: Use proper Windows path conventions and directory navigation:
   ```batch
   set "PROJECT_ROOT=%CD%"
   pushd "build" || (echo Error: Cannot navigate to build directory & exit /b 1)
   ```

3. **Windows Compatibility**: Always use Windows-compatible commands and syntax:
   - Use `mkdir` instead of `mkdir -p`
   - Use `del` instead of `rm`
   - Use Windows path separators (`\`)
   - Handle Windows-specific process management

4. **Command Chaining**: Use proper Windows command chaining:
   ```batch
   cd /D "%PROJECT_ROOT%" && cmake --build . --config Debug
   ```

5. **Error Handling**: Include proper error checking in batch scripts:
   ```batch
   if %ERRORLEVEL% neq 0 (
       echo Error: Command failed with code %ERRORLEVEL%
       exit /b %ERRORLEVEL%
   )
   ```

## See Also
- Shadow Worker Guidelines: Section 1.1 (Code Style & Standards)
- Related Rules: 02-code-architecture.mdc, 03-code-quality.mdc