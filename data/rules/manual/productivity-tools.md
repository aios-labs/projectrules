---
description: "Tools and workflows for optimizing Shadow Worker development"
globs: ["tools/**/*", "scripts/**/*", "build/**/*.bat", "build/**/*.cmd"]
__meta__type: "guideline"
__meta__repo: "voolyvex/shadow-worker"
__meta__tags: ["Development Tools","Workflow Optimization","C++","Version Control","Testing"]
__meta__rate: 7
---

# Development Productivity Tools

## Purpose

This document provides guidance on productivity tools and workflow optimizations for the Shadow Worker project. Using these tools and approaches consistently improves development efficiency and code quality.

## Development Environment Setup

### Recommended Tools

1. **Code Editor**
   - Visual Studio Code with C/C++ extensions
   - CLion with CMake integration
   - Visual Studio with C++ workload

2. **Build Tools**
   - CMake 3.20+
   - Ninja build system
   - MSBuild for Windows-specific builds

3. **Version Control**
   - Git with LFS for binary assets
   - GitHub Desktop or GitKraken for visual Git management
   - Conventional commits plugin

4. **Static Analysis**
   - Clang-Tidy for C/C++ code analysis
   - Cppcheck for additional static analysis
   - SonarLint for IDE integration

## Build Workflow Optimization

### Optimized Build Process

1. **Incremental Builds**
   - Use `--target` to build only what's needed
   - Enable precompiled headers for faster compilation
   - Consider unity builds for release mode

2. **Build Scripts**
   - Use the provided build scripts in `build/scripts/`
   - Customize build flags in `build/config/`
   - Use the development shell for consistent environment

3. **Common Build Commands**
   ```batch
   :: Quick debug build
   build.bat debug

   :: Clean release build
   build.bat release clean

   :: Build and run tests
   build.bat test
   ```

## Code Navigation and Comprehension

1. **Code Indexing**
   - Use ctags/gtags for global symbol indexing
   - Set up "Go to Definition" in your IDE
   - Use the architecture diagrams for high-level navigation

2. **Reference Finding**
   - Use `grep` or IDE search for text-based search
   - Use Doxygen-generated documentation
   - Reference the architecture documentation

3. **Code Map**
   - Refer to `docs/architecture/system_map.md` for code organization
   - Use the class hierarchy diagrams
   - Follow module dependencies as outlined in `docs/architecture/`

## Testing Workflow

1. **Test-Driven Development Cycle**
   - Write tests before implementation when possible
   - Run focused tests during development
   - Run full test suite before committing

2. **Debugging Tools**
   - Use Visual Studio debugger for Windows
   - Use GDB for detailed memory inspection
   - Use logging for long-running issues

3. **Performance Testing**
   - Profile with Tracy profiler
   - Benchmark critical sections
   - Compare performance before/after optimizations

## Version Control Workflow

1. **Branch Strategy**
   - Feature branches for new development
   - Pull requests for code review
   - Direct commits to `main` only for urgent fixes

2. **Commit Guidelines**
   - Use conventional commits format
   - Include issue references
   - Keep commits focused and atomic

3. **Code Review Process**
   - Use pull request templates
   - Focus reviews on logic and architecture
   - Automate style checking

## Integration with Other Rules

This rule works in conjunction with:

- **windows-terminal-guide.mdc**: Provides terminal commands for these workflows
- **continuous-improvement.mdc**: Guides the improvement of these tools and processes
- **testing-best-practices.mdc**: Details the testing approaches mentioned here

## See Also
- Shadow Worker Guidelines: Section 4 (Rule Reference Map)
- Related Rules: windows-terminal-guide.mdc