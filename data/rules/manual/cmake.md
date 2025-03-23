---
description: "CMake Build System Guidelines"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "rstevens70/Cursor-MDC-Files"
__meta__tags: ["CMake","Build System","Cross-Platform","Testing","C Programming"]
__meta__rate: 9
---
# CMake Best Practices

> **Related Guidelines:**
> - See [c.md] for general C programming guidelines
> - See [directory.md] for directory structure conventions

## General Guidelines
- Use modern CMake (3.10+) with target-based approach
- Specify minimum required CMake version
- Set project name and version information
- Use consistent indentation (2 spaces recommended)
- Organize CMake files hierarchically with subdirectories
- Use lowercase for commands and uppercase for variables
- Add meaningful comments for complex logic

## Project Structure
- Create a root CMakeLists.txt file
- Use add_subdirectory() for component directories
- Separate build configuration from source code
- Place CMake modules in cmake/ directory
- Use find_package() for external dependencies
- Create config files for package installation
- Use consistent naming conventions for targets

## Targets and Dependencies
- Use target_include_directories() with PUBLIC/PRIVATE/INTERFACE
- Use target_link_libraries() with PUBLIC/PRIVATE/INTERFACE
- Prefer PRIVATE visibility when possible
- Use target_compile_definitions() for preprocessor definitions
- Set target properties with set_target_properties()
- Use generator expressions for platform-specific settings
- Create INTERFACE libraries for header-only libraries

## Cross-Platform Considerations
- Use platform-independent paths with file(TO_CMAKE_PATH)
- Check for platform-specific features with if(CMAKE_SYSTEM_NAME)
- Use find_library() and find_path() for platform-specific libraries
- Set compiler flags conditionally based on compiler ID
- Use CMAKE_<LANG>_COMPILER_ID to detect compiler
- Test builds on all target platforms (Ubuntu, Debian, FreeBSD)
- Use CMAKE_INSTALL_PREFIX for installation paths

## Testing
- Use CTest for test automation
- Add tests with add_test() command
- Group tests with labels
- Set test properties with set_tests_properties()
- Create test fixtures for setup/teardown
- Enable testing with enable_testing()
- Configure test environment variables

## Build Types
- Set default build type if not specified
- Configure Debug and Release builds
- Set appropriate compiler flags for each build type
- Use CMAKE_BUILD_TYPE to control build configuration
- Add sanitizer builds for development
- Configure optimization levels appropriately
- Set debug symbol generation options

## Project-Specific Guidelines
- Support cross-compilation for FreeBSD
- Configure TweetNaCl as a local dependency
- Set up OpenSSL dependency correctly
- Configure thread support with Pthreads
- Set up module compilation as shared libraries (.so)
- Configure installation paths for binaries and modules
- Set up version information for modules

## Core Principles

### Modern CMake Philosophy
- Use **target-based** approach rather than variable-based approach
- Think in terms of dependencies between targets
- Prefer to set properties on targets rather than using global variables

## Version and Project Setup

### Minimum Requirements
Always start CMakeLists.txt with version requirement:
```cmake
cmake_minimum_required(VERSION 3.16)
```

### Project Declaration
Use detailed project declaration:
```cmake
project(RemoteAgentSystem
        VERSION 1.0.0
        DESCRIPTION "Secure cross-platform remote management system"
        LANGUAGES C)
```

## Target-Based Programming

### Creating Targets
Define clear targets for each component:
```cmake
# Library targets
add_library(agent_lib STATIC
    src/agent/network.c
    src/agent/protocol.c
    src/agent/security.c
)

# Executable targets
add_executable(agent
    src/agent/main.c
)
```

### Configuring Targets
Set properties on specific targets:
```cmake
# Include directories - ONLY for this specific target
target_include_directories(agent_lib
    PUBLIC
        ${CMAKE_CURRENT_SOURCE_DIR}/include
    PRIVATE
        ${CMAKE_CURRENT_SOURCE_DIR}/src/agent
)

# Link libraries
target_link_libraries(agent
    PRIVATE
        agent_lib
        ${CMAKE_DL_LIBS}  # For dlopen
        pthread
)

# Compile definitions
target_compile_definitions(agent_lib
    PRIVATE
        $<$<CONFIG:Debug>:ENABLE_LOGGING>
)
```

## Modular Organization

### Avoid Global Settings
Prefer target-specific settings over global settings:

Avoid:
```cmake
include_directories(include)
add_definitions(-DSOME_DEFINE)
```

Prefer:
```cmake
target_include_directories(target_name PRIVATE include)
target_compile_definitions(target_name PRIVATE SOME_DEFINE)
```

### Organize Complex Projects
Use subdirectories to split complex builds:
```cmake
add_subdirectory(src/agent)
add_subdirectory(src/client)
add_subdirectory(src/modules)
```

Use separate files for complex find logic:
```cmake
include(cmake/FindTweetNaCl.cmake)
```

## Cross-Platform Considerations

### Platform-Specific Logic
Use generator expressions for platform-specific settings:
```cmake
target_compile_options(agent PRIVATE
    $<$<PLATFORM_ID:Linux>:-Wall -Wextra>
    $<$<PLATFORM_ID:FreeBSD>:-Wall -Wextra -Werror>
)
```

### Conditional Logic
Use clear conditional logic when necessary:
```cmake
if(CMAKE_SYSTEM_NAME STREQUAL "FreeBSD")
    # FreeBSD-specific settings
    target_link_libraries(proclist_module PRIVATE kvm util)
endif()
```

## Options and Configuration

### User Options
Define user options with clear descriptions:
```cmake
option(BUILD_TESTING "Build the testing tree" ON)
option(ENABLE_SECURITY "Enable security features" ON)
```

### Conditional Features
Build features conditionally:
```cmake
if(BUILD_TESTING)
    enable_testing()
    add_subdirectory(tests)
endif()
```

## Testing

### Enable Testing
Set up testing properly:
```cmake
if(BUILD_TESTING)
    enable_testing()

    # Add test executable
    add_executable(test_network tests/test_network.c)
    target_link_libraries(test_network PRIVATE agent_lib)

    # Register with CTest
    add_test(NAME NetworkTest COMMAND test_network)
endif()
```

### Test with Different Configurations
Test under various conditions:
```cmake
add_test(NAME HighLatencyTest
         COMMAND test_transfer --latency=200ms)
```

## Installation

### Define Installation Rules
Set up proper installation rules:
```cmake
install(TARGETS agent client
        RUNTIME DESTINATION bin)

install(FILES ${CMAKE_CURRENT_BINARY_DIR}/config.h
        DESTINATION include)
```

### Configure Package
For distributable packages:
```cmake
include(CMakePackageConfigHelpers)
configure_package_config_file(
    ${CMAKE_CURRENT_SOURCE_DIR}/Config.cmake.in
    ${CMAKE_CURRENT_BINARY_DIR}/RemoteAgentSystemConfig.cmake
    INSTALL_DESTINATION lib/cmake/RemoteAgentSystem
)
```

## Performance Best Practices

### Avoid File Globbing
Explicitly list source files instead of using globbing:

Avoid:
```cmake
file(GLOB SOURCES src/*.c)
add_executable(app ${SOURCES})
```

Prefer:
```cmake
add_executable(app
    src/main.c
    src/network.c
    src/protocol.c
)
```

### Precompiled Headers
For large projects, use precompiled headers:
```cmake
target_precompile_headers(agent_lib
    PRIVATE
        <stdio.h>
        <stdlib.h>
        <string.h>
)
```

## References
- Modern CMake guidelines
- Professional CMake: A Practical Guide
- CMake Official Documentation