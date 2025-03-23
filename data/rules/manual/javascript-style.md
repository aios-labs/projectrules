---
description: "JavaScript coding style guidelines for CarbonCommander"
globs: ["*.Djs", "*.Djsx"]
__meta__type: "guideline"
__meta__repo: "Carbonitex/carbon-commander"
__meta__tags: ["JavaScript","Coding Style","Best Practices","Error Handling","Async Programming"]
__meta__rate: 8
---
# JavaScript Code Style Guide

## Class Structure

- Use ES6 class syntax for defining classes
- Place static properties and methods at the top of the class
- Group related methods together
- Use descriptive method and property names in camelCase
- Use PascalCase for class names

Example:
```javascript
class MyTool {
    static _CarbonBarPageLoadFilter = (window) => {
        return true;
    }

    static ToolFunction = {
        function: {
            name: 'tool_function',
            description: 'Description of the tool',
            parameters: {
                properties: {
                    // parameters here
                }
            }
        },
        execute: async function(scope, args) {
            // implementation
        }
    };
}
```

## Tool Development

- Each tool should have a `function` definition and an `execute` method
- Tool functions should be static class properties
- Include comprehensive parameter descriptions
- Use async/await for asynchronous operations
- Handle errors gracefully and return structured responses

## Error Handling

- Always return objects with `success` and either `result` or `error` properties
- Use try-catch blocks for error handling
- Log errors appropriately using `ccLogger`

Example:
```javascript
try {
    // operation here
    return { success: true, result: data };
} catch (error) {
    return { success: false, error: error.message };
}
```

## Logging

- Use the `ccLogger` for consistent logging
- Use appropriate log levels:
  - `debug` for detailed information
  - `info` for general information
  - `warn` for warnings
  - `error` for errors
  - `group`/`groupEnd` for grouped logs

## Comments and Documentation

- Include JSDoc-style comments for classes and methods
- Document parameters using descriptive names and types
- Include examples for complex functionality
- Use inline comments sparingly and only when necessary

## Promises and Async

- Use async/await instead of raw promises when possible
- Chain promises appropriately when needed
- Always handle promise rejections
- Use Promise.all for parallel operations

## Event Handling

- Use descriptive event names
- Clean up event listeners when they're no longer needed
- Use event delegation when appropriate
- Prevent event bubbling when handling events if necessary