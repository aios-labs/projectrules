---
description: "Guidelines for 009-virtualenv-usage"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "grahama1970/agent_tools"
__meta__tags: ["Python","Virtual Environment","Package Management","Testing","Development"]
__meta__rate: 8
---
# Virtual Environment Usage Rules

## Python Environment Rule
- **Type:** `virtualenv_usage`
- **Condition:** `python_command_execution`
- **Action:** `use_venv_python`
- **Message:**
  When running Python commands (including pytest):
  1. ALWAYS activate the virtualenv first with `source .venv/bin/activate`
  2. NEVER use system Python or system-installed packages
  3. All commands should be run from within the virtualenv

  **Example:**
  ```bash
  # CORRECT
  source .venv/bin/activate && pytest tests/

  # INCORRECT
  pytest tests/  # Don't run directly - might use system Python
  ```

## Package Installation Rule
- **Type:** `virtualenv_usage`
- **Condition:** `package_installation`
- **Action:** `use_uv_in_venv`
- **Message:**
  When installing packages:
  1. ALWAYS use `uv` package manager
  2. ALWAYS ensure virtualenv is activated first
  3. For development installations, use `uv add --dev`

  **Example:**
  ```bash
  # CORRECT
  source .venv/bin/activate && uv add package_name

  # INCORRECT
  pip install package_name  # Don't use pip
  uv add package_name      # Don't run without activating venv
  ```