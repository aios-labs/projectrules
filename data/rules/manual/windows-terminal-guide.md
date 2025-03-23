---
description: "Windows terminal commands and batch scripting for Shadow Worker"
globs: ["**/*.bat", "**/*.cmd", "build/scripts/**/*"]
__meta__type: "guideline"
__meta__repo: "voolyvex/shadow-worker"
__meta__tags: ["Windows Terminal","Batch Scripting","Command Line","Error Handling","Environment Setup"]
__meta__rate: 7
---
---
    description: Windows terminal commands and batch scripting for Shadow Worker
    globs: ["**/*.bat", "**/*.cmd", "build/scripts/**/*"]
    ---
    # Windows Terminal Guide

    ## Purpose

    This document provides comprehensive guidance for working with the Windows terminal and batch scripting in the Shadow Worker project. Following these guidelines ensures consistent, reliable command execution across the development team.

    ## Command Execution Principles

    1. **Directory Awareness**: Always verify the working directory before executing commands.
    2. **Error Handling**: Include robust error detection and reporting in all scripts.
    3. **Path Consistency**: Use absolute paths for critical operations and relative paths consistently.
    4. **Environment Preservation**: Maintain environment variables and restore state when finished.
    5. **Clear Feedback**: Provide clear, actionable output messages for both success and failure.

    ## Standard Terminal Patterns

    ### Directory Verification

    Always verify you're in the correct directory before executing critical commands:

    ```batch
    @echo off
    echo Current directory: %CD%
    if not exist "CMakeLists.txt" (
        echo Error: Not in project root
        echo Please navigate to the project root directory
        exit /b 1
    )
    ```

    ### Path Verification Best Practices

    Always verify paths before performing operations:

    ```batch
    @echo off
    :: Check if we're in the expected directory
    echo Current directory: %CD%

    :: Verify target directory exists before attempting to use it
    if not exist "target_directory" (
        echo Error: Target directory does not exist
        echo Creating target directory...
        mkdir "target_directory"
    )

    :: Verify file exists before attempting to read/modify it
    if not exist "config.txt" (
        echo Error: config.txt not found
        exit /b 1
    )

    :: When changing directories, always verify the change was successful
    cd /D "target_directory"
    if %ERRORLEVEL% neq 0 (
        echo Error: Failed to change to target directory
        exit /b 1
    )
    echo New directory: %CD%
    ```

    ### Environment Setup

    Set up a consistent environment for all operations:

    ```batch
    @echo off
    setlocal EnableDelayedExpansion

    :: Set project paths
    set "PROJECT_ROOT=%CD%"
    set "BUILD_DIR=%PROJECT_ROOT%\build"
    set "ASSETS_DIR=%PROJECT_ROOT%\assets"

    :: Verify critical directories
    if not exist "%BUILD_DIR%" (
        echo Creating build directory...
        mkdir "%BUILD_DIR%"
    )
    ```

    ### Error Handling

    Implement consistent error handling:

    ```batch
    @echo off
    setlocal EnableDelayedExpansion

    :: Run command and check result
    echo Running build...
    cmake --build build --config Debug
    if %ERRORLEVEL% neq 0 (
        echo Build failed with error code %ERRORLEVEL%
        exit /b %ERRORLEVEL%
    )

    echo Build completed successfully
    ```

    ## Command Chaining Protocol

    ### Sequential Execution

    Use `&&` for commands that should only run if the previous command succeeded:

    ```batch
    cd /D "%PROJECT_ROOT%" && cmake -B build -G "Visual Studio 16 2019" && cmake --build build --config Debug
    ```

    ### Directory Navigation

    Use `pushd` and `popd` to navigate directories while preserving the previous location:

    ```batch
    @echo off
    set "CURRENT_DIR=%CD%"
    pushd "build"
    cmake --build . --config Debug
    popd
    echo Returned to %CD%
    ```

    ### Process Isolation

    Use `setlocal` and `endlocal` to isolate environment changes:

    ```batch
    @echo off
    setlocal
    set "TEMP_VAR=value"
    :: Use TEMP_VAR...
    endlocal
    :: TEMP_VAR is no longer defined here
    ```

    ## Command Output Management

    1. **Pager Control**: Disable interactive pagers in automated environments:
    ```batch
    :: Preferred pattern - Environment variable
    set GIT_PAGER=
    git log

    :: Alternative - Direct output redirection
    git log > output.txt
    type output.txt
    ```

    ## Prohibited Command Patterns

    ### Strictly Forbidden Patterns

    The following command patterns are strictly prohibited in all Windows scripts and terminal usage:

    1. **Unix-Style Options with `-p`**:
    - These options are incompatible with Windows command processors
    - They can cause unpredictable behavior or silent failures
    - Example: `mkdir -p some/nested/dir` (FORBIDDEN)
    - Instead use: `if not exist "some\nested\" mkdir "some\nested"`

    2. **Unix-Style Pipe to Cat (`| cat`)**:
    - The `cat` command is not native to Windows
    - Piping to `cat` has no meaningful effect in Windows environments
    - Example: `type file.txt | cat` (FORBIDDEN)
    - Instead use: `type file.txt`

    3. **Unix-Style Path Separators**:
    - Forward slashes (`/`) can cause issues in some Windows contexts
    - Example: `cd path/to/directory` (DISCOURAGED)
    - Instead use: `cd path\to\directory`

    4. **Unix Commands Without Windows Equivalents**:
    - Commands like `ls`, `grep`, `rm`, etc. are not native to Windows
    - Example: `ls -la` (FORBIDDEN)
    - Instead use: `dir /a`

    ### Windows-Appropriate Alternatives

    | Unix Command | Windows Alternative | Notes |
    |--------------|---------------------|-------|
    | `ls` | `dir` | Use `dir /b` for bare format |
    | `ls -la` | `dir /a` | Shows all files including hidden |
    | `cat` | `type` | Displays file contents |
    | `grep` | `findstr` | Searches for patterns in files |
    | `rm` | `del` | Deletes files |
    | `rm -r` | `rmdir /s /q` | Recursively removes directories |
    | `cp` | `copy` | Copies files |
    | `mv` | `move` | Moves files |
    | `touch` | `echo.>` | Creates empty files |
    | `chmod` | N/A | Windows uses different permission model |
    | `mkdir -p` | `if not exist "dir" mkdir "dir"` | Creates directories if they don't exist |

    ### Path Checking Requirements

    All scripts and commands must include path verification:

    1. **Before Directory Changes**:
    ```batch
    echo Current directory: %CD%
    cd /D "target_directory"
    if %ERRORLEVEL% neq 0 (
        echo Failed to change directory
        exit /b 1
    )
    echo New directory: %CD%
    ```

    2. **Before File Operations**:
    ```batch
    if not exist "file.txt" (
        echo Error: file.txt not found
        exit /b 1
    )
    type "file.txt"
    ```

    3. **After Critical Operations**:
    ```batch
    mkdir "new_directory"
    if not exist "new_directory" (
        echo Failed to create directory
        exit /b 1
    )
    ```

    ### Enforcement

    - All scripts will be reviewed to ensure compliance
    - Automated checks will be implemented to detect prohibited patterns
    - Build processes will fail if prohibited patterns are detected
    - Team members repeatedly using prohibited patterns will require additional training

    ## Common Command Patterns

    ### Build Commands

    ```batch
    :: Configure project
    cmake -B build -G "Visual Studio 16 2019" -DCMAKE_BUILD_TYPE=Debug

    :: Build specific target
    cmake --build build --config Debug --target ShadowWorker

    :: Clean build
    cmake --build build --config Debug --target clean
    ```

    ### Asset Processing

    ```batch
    :: Process assets
    pushd "tools\asset_processor"
    asset_processor.exe --input "%PROJECT_ROOT%\raw_assets" --output "%PROJECT_ROOT%\assets"
    popd
    ```

    ### Testing

    ```batch
    :: Run all tests
    pushd "build\bin\Debug"
    ctest -C Debug --output-on-failure
    popd

    :: Run specific test
    pushdug"
    ShadowWorker_Tests.exe --gtest_filter=RenderSystem.*
    popd
    ```

    ## Batch Script Best Practices

    1. **Script Header**: Begin each script with a standardized header:
    ```batch
    @echo off
    setlocal EnableDelayedExpansion

    :: Script: build_project.bat
    :: Purpose: Builds the Shadow Worker project
    :: Usage: build_project.bat [Debug|Release] [clean]
    ::
    :: Example: build_project.bat Debug clean
    ```

    2. **Input Validation**: Validate all script inputs:
    ```batch
    @echo off
    setlocal EnableDelayedExpansion

    :: Validate build type
    set "BUILD_TYPE=%1"
    if "%BUILD_TYPE%"=="" set "BUILD_TYPE=Debug"
    if not "%BUILD_TYPE%"=="Debug" if not "%BUILD_TYPE%"=="Release" (
        echo Invalid build type: %BUILD_TYPE%
        echo Valid options: Debug, Release
        exit /b 1
    )
    ```

    3. **Visual Feedback**: Use visual separators and progress indicators:
    ```batch
    @echo off
    echo ========================================
    echo Building Shadow Worker (%BUILD_TYPE%)
    echo ========================================
    echo.

    echo [1/3] Configuring...
    :: Configuration commands

    echo [2/3] Building...
    :: Build commands

    echo [3/3] Testing...
    :: Test commands

    echo ========================================
    echo Build completed successfully!
    echo ========================================
    ```

    ## Integration with Other Rules

    This rule works in conjunction with:

    - **01-project-guidelines.mdc**: Provides overall project standards
    - **productivity-tools.mdc**: Details workflows that use these commands
    - **continuous-improvement.mdc**: Guides the evolution of command protocols

    ## See Also
    - Shadow Worker Guidelines: Section 4 (Rule Reference Map)
    - Windows Batch Documentation: @Microsoft Docs