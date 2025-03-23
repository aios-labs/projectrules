---
description: "This file give general coding guidelines for the project"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "educep/tools"
__meta__tags: ["Python","Data Science","Machine Learning","Coding Standards","Best Practices"]
__meta__rate: 8
---
# Coding pattern preferences

– Always prefer simple solutions
– Avoid duplication of code whenever possible, which means checking for other areas of the codebase that might already have similar code and functionality
– Write code that takes into account the different environments: dev, test, and prod
– You are careful to only make changes that are requested or you are confident are well understood and related to the change being requested
– When fixing an issue or bug, do not introduce a new pattern or technology without first exhausting all options for the existing implementation. And if you finally do this, make sure to remove the old implementation afterwards so we don’t have duplicate logic.
– Keep the codebase very clean and organized
– Avoid having files over 500–800 lines of code. Refactor at that point.
– Mocking data is only needed for tests, never mock data for dev or prod
– Never add stubbing or fake data patterns to code that affects the dev or prod environments
– Never overwrite my .env file without first asking and confirming

These guidelines outline the preferred coding standards and practices for Python development in data science, machine learning, and data engineering contexts. Following these standards will ensure code that is readable, maintainable, efficient, and aligned with industry best practices.

## Code Style and Formatting

Python code should follow PEP 8 conventions with these specific preferences:

Use 4 spaces for indentation, not tabs. This maintains consistency across different editors and environments. Limit lines to 88 characters, which balances readability with efficient screen space usage (this follows the Black formatter standard rather than PEP 8's 79-character limit).

Variable and function names should use snake_case (lowercase with underscores), while class names should use CamelCase. Constants should be in UPPER_SNAKE_CASE. These naming conventions enhance code readability by making the purpose and scope of different elements immediately apparent.

Imports should be organized in three distinct groups with a blank line between each: standard library imports first, third-party library imports second, and local application imports third. Within each group, imports should be alphabetized. This organization makes dependencies clear and helps identify potential conflicts or missing packages.

## Documentation Standards

Every module, class, and function should include docstrings following the NumPy or Google style format. Docstrings should clearly describe the purpose, parameters, return values, and any exceptions that might be raised.

Include examples in docstrings for complex functions, especially those with multiple parameters or return values. Examples provide concrete illustrations of how the code should be used, reducing misunderstandings.

Code comments should explain "why" rather than "what" when the logic is not immediately obvious. Comments should provide context that cannot be inferred from the code itself, such as business rules, algorithm choices, or optimization decisions.

## Type Hints and Validation

Use Python type hints for all function definitions to enhance code clarity and enable static type checking. For data science and ML code, type hints become particularly valuable for complex data structures and tensors.

Validate function inputs early to fail fast and provide clear error messages. For data validation in data science contexts, consider using packages like Pydantic or Great Expectations.

## Performance Considerations

Vectorized operations (using NumPy, Pandas, etc.) should be preferred over Python loops when working with large datasets. Vectorization significantly improves performance by leveraging optimized C implementations.

Use appropriate data structures based on the access patterns: dictionaries for fast lookups, sets for membership testing, and specialized data structures from libraries like NumPy and Pandas for numerical computations.

Consider memory usage when working with large datasets; use techniques like chunking, memory-mapped files, or dask for datasets that exceed available memory.

## Machine Learning Specific Guidelines

Model architecture, hyperparameters, and training configurations should be clearly separated from the training code and stored in configuration files (YAML, JSON, etc.). This separation enables easier experimentation and reproducibility.

Implement model versioning and experiment tracking using tools like MLflow, DVC, or Weights & Biases. Each experiment should be traceable to its code, data, and hyperparameters.

Include evaluation metrics relevant to the problem domain (accuracy, precision, recall, F1 score, RMSE, etc.) and avoid overfitting through proper validation techniques.

## Data Engineering Guidelines

Implement data validation at ingestion points to ensure data quality. This includes schema validation, range checks, and consistency verification.

Design data pipelines to be idempotent (safe to run multiple times) and atomic (transactions either complete fully or not at all). This ensures reproducibility and recovery from failures.

Include appropriate logging at each stage of data processing, with particular attention to data transformations that alter record counts or important values.

## Package Management

Specify exact package versions in requirements.txt or environment.yml to ensure reproducibility. Consider using virtual environments or containers to isolate dependencies.

Prefer established, well-maintained libraries (NumPy, Pandas, scikit-learn, TensorFlow, PyTorch, etc.) over custom implementations unless absolutely necessary. These libraries are optimized for performance and extensively tested.

## Testing Framework

Implement unit tests for core data processing, feature engineering, and model evaluation functions. Use pytest as the testing framework for its simplicity and powerful features.

Include integration tests that verify the entire pipeline, from data loading to model evaluation. This ensures that components work correctly together.

Create specific tests for data science components, including:
- Data preprocessing tests that verify transformations
- Feature engineering tests that validate calculations
- Model tests that check performance metrics against baselines