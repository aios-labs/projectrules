---
description: "Init file conventions for Python packages"
globs: "**/__init__.py"
__meta__type: "guideline"
__meta__repo: "gsinghjay/hccc-fastapi-sso"
__meta__tags: ["Python","FastAPI","Package Management","Code Organization","Documentation"]
__meta__rate: 8
---
# __init__.py Standards

1. **Explicit Exports**
   - Use `__all__` to declare public API
   - Avoid wildcard imports (`from . import *`)
   - Maintain import compatibility with FastAPI's module system

2. **Package Organization**
   ```python
   # Good
   __all__ = ["HealthResponse", "HealthStatus"]
   
   # Bad
   from .health import *
   ```

3. **Documentation**
   - Include module docstrings for package-level documentation
   - Reference FastAPI's module structure patterns([1](mdc:https:/fastapi.tiangolo.com/tutorial/bigger-applications))

4. **Type Re-exports**
   ```python
   # For type re-exporting
   if TYPE_CHECKING:
       from .health import HealthStatus
   else:
       __all__.append("HealthStatus")
   ```

5. **FastAPI Specifics**
   - Follow FastAPI's module discovery pattern:
   ```python
   # app/api/v1/__init__.py
   from .health import router as health_router
   
   __all__ = ["health"]
   ```

## E2E Test Directory Structure
```tests/e2e/
├── __init__.py          # Empty init
├── conftest.py          # E2E specific fixtures
├── pages/
│   ├── __init__.py      # Empty init
│   ├── base_page.py     # Base page object
│   └── feature_page.py  # Feature-specific pages
└── test_feature.py      # Feature tests
```