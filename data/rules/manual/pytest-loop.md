---
description: "QA every edit with pytest"
globs: "tests/**/*.py"
__meta__type: "guideline"
__meta__repo: "bossjones/codegen-lab"
__meta__tags: ["Python","Testing","Pytest","Linting","Type Checking"]
__meta__rate: 8
---
# Python Testing Process

## Project Stack

The project uses the following tools and technologies:

- **uv** - Python package management and virtual environments
- **ruff** - Fast Python linter and formatter
- **pytest** - Testing framework
- **mypy** - Static type checking
- **doctest** - Testing code examples in documentation

## 1. Start with Formatting

Format your code first:

```
uv run ruff format .
```

## 2. Run Tests

Verify that your changes pass the tests:

```
# Run all tests
uv run pytest

# Run with verbose output
uv run pytest -v

# Run tests with coverage
uv run pytest --cov=src
```

### Running Specific Tests

Focus on testing exactly what you changed:

```
# Run tests in a specific file
uv run pytest tests/path/to/test_file.py

# Run a specific test class
uv run pytest tests/path/to/test_file.py::TestClass

# Run a specific test method
uv run pytest tests/path/to/test_file.py::TestClass::test_method

# Run tests matching a pattern
uv run pytest -k "pattern"

# Run tests with verbose, exit first failure, and no capture
uv run pytest -vxs tests/path/to/test_file.py

# Run tests with debugging tools
uv run pytest --pdb tests/path/to/test_file.py
```

### Additional Pytest Features

```
# Generate test report with JUnit XML format
uv run pytest --junitxml=results.xml

# Show test durations to identify slow tests
uv run pytest --durations=10

# Run tests that previously failed
uv run pytest --last-failed

# Run with debugger on failures
uv run pytest --pdb
```

## 3. Commit Initial Changes

Make an atomic commit for your changes using conventional commits.
Use `@git-commits.mdc` for assistance with commit message standards.

## 4. Run Linting and Type Checking

Check and fix linting issues:

```
uv run ruff check . --fix --show-fixes
```

Check typings:

```
uv run mypy
```

## 5. Verify Tests Again

Ensure tests still pass after linting and type fixes:

```
uv run pytest
```

## 6. Final Commit

Make a final commit with any linting/typing fixes.
Use `@git-commits.mdc` for assistance with commit message standards.

## Development Loop Guidelines

If there are any failures at any step due to your edits, fix them before proceeding to the next step.

## Python Testing Standards

### Writing Effective Tests

1. **Test Independence**:
   - Each test should run independently of others
   - Use fixtures for setup and teardown
   - Avoid test interdependencies

2. **Naming Conventions**:
   - Test files: `test_*.py`
   - Test classes: `Test*`
   - Test functions: `test_*`
   - Use descriptive names that indicate what's being tested

3. **Test Structure**:
   - Arrange: Set up test conditions
   - Act: Perform the action being tested
   - Assert: Verify the expected outcomes

### Docstring Guidelines

For `src/**/*.py` files, follow these docstring guidelines:

1. **Use reStructuredText format** for all docstrings.
   ```python
   """Short description of the function or class.

   Detailed description using reStructuredText format.

   Parameters
   ----------
   param1 : type
       Description of param1
   param2 : type
       Description of param2

   Returns
   -------
   type
       Description of return value
   """
   ```

2. **Keep the main description on the first line** after the opening `"""`.

3. **Use NumPy docstyle** for parameter and return value documentation.

For test files, follow these docstring guidelines:

1. **Use reStructuredText format** for all docstrings.
   ```python
   """Test module for example functionality.

   This module contains tests for:
   - Feature A
   - Feature B
   """
   ```

2. **Document test purpose**:
   ```python
   def test_example_function():
       """Test that example_function handles valid inputs correctly.

       Verifies:
       - Result formatting
       - Error handling
       - Edge cases
       """
   ```

### Doctest Guidelines

For doctests in `src/**/*.py` files:

1. **Use narrative descriptions** for test sections rather than inline comments:
   ```python
   """Example function.

   Examples
   --------
   Create an instance:

   >>> obj = ExampleClass()

   Verify a property:

   >>> obj.property
   'expected value'
   """
   ```

2. **Move complex examples** to dedicated test files at `tests/examples/<path_to_module>/test_<example>.py` if they require elaborate setup or multiple steps.

3. **Utilize pytest fixtures** via `doctest_namespace` for more complex test scenarios:
   ```python
   """Example with fixture.

   Examples
   --------
   >>> # doctest_namespace contains all pytest fixtures from conftest.py
   >>> example_fixture = getfixture('example_fixture')
   >>> example_fixture.method()
   'expected result'
   """
   ```

4. **Keep doctests simple and focused** on demonstrating usage rather than comprehensive testing.

5. **Add blank lines between test sections** for improved readability.

6. **Test your doctests** with pytest:
   ```
   # Run doctests for specific module
   uv run pytest --doctest-modules src/path/to/module.py
   ```

### Pytest Fixtures and Testing Guidelines

1. **Use existing fixtures over mocks**:
   - Use fixtures from conftest.py instead of `monkeypatch` and `MagicMock` when available
   - For instance, if using libtmux, use provided fixtures: `server`, `session`, `window`, and `pane`
   - Document in test docstrings why standard fixtures weren't used for exceptional cases

2. **Preferred pytest patterns**:
   - Use `tmp_path` (pathlib.Path) fixture over Python's `tempfile`
   - Use `monkeypatch` fixture over `unittest.mock`
   - Use parameterized tests for multiple test cases
   ```python
   @pytest.mark.parametrize("input_val,expected", [
       (1, 2),
       (2, 4),
       (3, 6)
   ])
   def test_double(input_val, expected):
       assert double(input_val) == expected
   ```

3. **Iterative testing workflow**:
   - Always test each specific change immediately after making it
   - Run the specific test that covers your change
   - Fix issues before moving on to the next change
   - Run broader test collections only after specific tests pass

### Import Guidelines

1. **Prefer namespace imports**:
   - Import modules and access attributes through the namespace instead of importing specific symbols
   - Example: Use `import enum` and access `enum.Enum` instead of `from enum import Enum`
   - This applies to standard library modules like `pathlib`, `os`, and similar cases

2. **Standard aliases**:
   - For `typing` module, use `import typing as t`
   - Access typing elements via the namespace: `t.NamedTuple`, `t.TypedDict`, etc.
   - Note primitive types like unions can be done via `|` pipes and primitive types like list and dict can be done via `list` and `dict` directly.

3. **Benefits of namespace imports**:
   - Improves code readability by making the source of symbols clear
   - Reduces potential naming conflicts
   - Makes import statements more maintainable

### Import Guidelines for Test Files

1. **Standard imports for tests**:
   ```python
   import pytest
   from typing import TYPE_CHECKING

   if TYPE_CHECKING:
       from _pytest.capture import CaptureFixture
       from _pytest.fixtures import FixtureRequest
       from _pytest.logging import LogCaptureFixture
       from _pytest.monkeypatch import MonkeyPatch
       from pytest_mock.plugin import MockerFixture
   ```

2. **Organize imports clearly**:
   - Standard library imports first
   - Third-party imports second
   - Application imports third
   - Test fixtures and utilities last

3. **Use type annotations** in all test functions:
   ```python
   def test_with_fixtures(
       tmp_path: Path,
       monkeypatch: MonkeyPatch,
       caplog: LogCaptureFixture
   ) -> None:
       """Test with properly typed fixtures."""
   ```