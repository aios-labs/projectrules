---
description: "Apply this rule when creating new files, organizing code, or restructuring the PepperPy codebase to maintain consistent file structure and naming conventions"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "felipepimentel/pepperpy-ai"
__meta__framework: "PepperPy"
__meta__tags: ["Python","File Management","Code Organization","Naming Conventions","PepperPy"]
__meta__rate: 8
---
# PepperPy File Management

> **Note**: This rule has some overlap with `185-file-organization.mdc`. Consider consolidating these rules in a future update.

## Overview

This rule defines standards for file creation, organization, and naming in the PepperPy framework. Following these guidelines ensures a consistent and maintainable codebase structure.

## File Organization

### Directory Structure

PepperPy follows a domain-driven directory structure:

```
pepperpy/                     # Main package
├── __init__.py               # Package exports
├── [domain]/                 # Domain-specific packages
│   ├── __init__.py           # Public domain API
│   ├── provider.py           # Provider interfaces
│   ├── models.py             # Domain models
│   ├── exceptions.py         # Domain exceptions
│   ├── utils.py              # Domain utilities
│   └── providers/            # Provider implementations
│       ├── __init__.py       # Provider exports
│       ├── [provider_name].py # Specific provider
│
├── core/                     # Core framework
│   ├── __init__.py
│   ├── base.py
│   ├── capabilities.py
│   └── errors.py
│
└── utils/                    # Common utilities
    ├── __init__.py
    └── [utility_name].py
```

### File Naming Conventions

- Python files: snake_case for multi-word filenames (`vector_store.py`, `text_splitter.py`)
- Test files: `test_` prefix (`test_vector_store.py`, `test_text_splitter.py`)
- Configuration files: lowercase, with appropriate extension (`pyproject.toml`, `.env.example`)
- Documentation files: uppercase for root-level docs, snake_case otherwise (`README.md`, `api_reference.md`)

## File Structure

### Python Module Files

Each Python module should follow this structure:

1. Module docstring
2. Imports (grouped and sorted)
3. Constants
4. Type aliases
5. Classes and functions
6. `if __name__ == "__main__":` block (if applicable)

```python
"""
RAG retrieval module.

This module provides retrieval capabilities for the RAG system.
"""

# Standard library imports
import json
from typing import List, Optional, Protocol, TypeVar

# Third-party imports
import numpy as np
from pydantic import BaseModel

# Framework imports
from pepperpy.core.base import BaseProvider
from pepperpy.core.errors import PepperPyError

# Module constants
DEFAULT_TOP_K = 5
SIMILARITY_THRESHOLD = 0.7

# Type aliases
DocumentT = TypeVar("DocumentT", bound="Document")
EmbeddingT = List[float]

# Classes and functions
class RetrieverError(PepperPyError):
    """Error during retrieval operation."""
    pass

class Retriever(BaseProvider):
    """Document retrieval interface."""

    async def retrieve(self, query: str, top_k: int = DEFAULT_TOP_K) -> List[DocumentT]:
        """Retrieve documents relevant to the query."""
        raise NotImplementedError("Subclasses must implement this method")

# Main execution (if applicable)
if __name__ == "__main__":
    # Module execution code
    pass
```

### Python Package Files (`__init__.py`)

Package `__init__.py` files should:

1. Define the public API through explicit exports
2. Provide version information (if appropriate)
3. Include a package docstring
4. Avoid complex logic

```python
"""
PepperPy RAG module.

This module provides retrieval-augmented generation capabilities.
"""

# Version
__version__ = "0.1.0"

# Public API exports
from .provider import RAGProvider
from .models import Document, DocumentChunk
from .exceptions import RAGError

# Type exports for static type checking
from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from .providers import ChromaProvider, PineconeProvider

# Re-exports
__all__ = [
    "RAGProvider",
    "Document",
    "DocumentChunk",
    "RAGError",
]
```

## File Headers

### Python Files

Every Python file should include:

1. A module-level docstring describing the purpose
2. Copyright notice (if applicable)
3. Optional mypy type checking configuration

```python
"""
Text splitting utilities.

This module provides utilities for splitting text into chunks for processing.
"""

# Copyright (c) 2023 PepperPy Contributors
# Licensed under the MIT License

from __future__ import annotations

# Type checking configuration
from typing import TYPE_CHECKING, List, Optional
if TYPE_CHECKING:
    from pepperpy.rag.models import Document, DocumentChunk
```

### Configuration Files

Configuration files should include comments explaining their purpose and usage:

```toml
# pyproject.toml - PepperPy project configuration
# This file defines the build system, dependencies, and tools configurations

[build-system]
requires = ["poetry-core>=1.0.0"]
build-backend = "poetry.core.masonry.api"

[tool.poetry]
name = "pepperpy"
version = "0.1.0"
description = "Modular Python framework for AI-powered applications"
# ...more configuration...
```

## New File Creation Guidelines

When creating new files:

1. **Check existing patterns**: Look at similar files in the codebase
2. **Use the right location**: Place in the appropriate domain directory
3. **Follow naming conventions**: Use consistent naming patterns
4. **Include required headers**: Add module docstring and headers
5. **Structure properly**: Follow the standard file structure
6. **Add to version control**: Include in git

### Example Workflow for New File

When creating a new provider implementation:

1. Check if a domain-specific package exists, if not create it
2. Look at similar providers to understand the implementation pattern
3. Create the new file with proper naming (`cloudflare_provider.py`)
4. Use the standard file structure with imports, docstring, etc.
5. Implement the provider interface
6. Add exports to the package's `__init__.py`
7. Create corresponding tests

## File Size and Complexity Guidelines

- **Single Responsibility**: Each file should have a clear, focused purpose
- **Size Limit**: Aim for less than 500 lines per file
- **Class Limit**: Prefer one primary class per file
- **Function Length**: Keep functions under 50 lines when possible
- **Complexity Limit**: Maintain reasonable cyclomatic complexity (< 10)

When a file grows too large or complex:

1. Split it into multiple files with clear responsibilities
2. Create a new sub-package if necessary
3. Refactor to extract common functionality

## Test File Organization

- Tests should mirror the source file structure
- Place in the `tests` directory with the same relative path
- Test files should be named with `test_` prefix

```
pepperpy/
└── rag/
    └── providers/
        └── chroma.py

tests/
└── rag/
    └── providers/
        └── test_chroma.py
```

## Documentation Files

- Keep documentation in the `docs` directory
- Use Markdown for general documentation
- Follow documentation standards for APIs
- Include examples in documentation

## Conclusion

Following these file management guidelines ensures a consistent, organized, and maintainable codebase for the PepperPy framework. Before creating or modifying files, reference this guide to maintain the project's structure and conventions.