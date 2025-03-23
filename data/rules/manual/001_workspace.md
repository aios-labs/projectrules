---
description: "Siren is a bewitching frontend for multiple linting tools that makes maintaining code quality a delightful experience. This file defines core architecture, key directories, and main constraints."
globs: "/**/*"
__meta__type: "guideline"
__meta__repo: "hyperb1iss/siren"
__meta__tags: ["Linting","Code Quality","Rust","CLI","Tooling"]
__meta__rate: 8
---
Core Project Architecture:
1. Command-Line Interface (src/cli/*)
   - Handles command parsing and routing
   - Defines core command structures

2. Tool Management (src/tools/*)
   - Tool registry and discovery
   - Language-specific tool implementations
   - Tool execution and output handling

3. Project Detection (src/detection/*)
   - Language and framework detection
   - Project structure analysis
   - Configuration discovery

4. Output Formatting (src/output/*)
   - Terminal UI components
   - Pretty and JSON formatters
   - Progress indicators

5. Error Handling (src/errors/*)
   - Structured error types
   - User-friendly error messages

Key Constraints:
- All public APIs must be documented
- Error handling must be user-friendly
- Terminal output must be colorful and engaging
- Tools must be lazy-loaded when possible
- Performance is critical - use parallel execution
- Configuration should have smart defaults

Project Standards:
- Use Rust 2021 edition
- Follow Rust API guidelines
- Maintain test coverage
- Keep documentation current