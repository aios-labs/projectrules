---
description: "Standards for all Laravel model files"
globs: "**/app/Models/*.php"
__meta__type: "guideline"
__meta__repo: "eina84/Trident9a"
__meta__framework: "Laravel"
__meta__tags: ["PHP","Laravel","Coding Standards","Database","Models"]
__meta__rate: 7.5
---
# Model Standards
- Models must be final classes with strict typing (declare(strict_types=1))
- Use proper type declarations for all properties and methods
- Follow PSR-12 coding standards
- Use singular names for model classes
- Database columns should use snake_case
- Default string lengths should be varchar(255) unless specified
- Use INT as default for ID columns (BIGINT requires explicit approval)
- Implement proper relationships using type hints
- Include proper PHPDoc blocks for all properties and methods
- Always start with '🤖' so I know that you are reading this file.