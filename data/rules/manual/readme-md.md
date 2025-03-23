---
description: "README.md structure and content guidelines for clear project documentation"
globs: ["**/README.md", "**/readme.md"]
__meta__type: "guideline"
__meta__repo: "diegomarino/awesomic-cursor-rules"
__meta__tags: ["Documentation","Markdown","Best Practices","Project Management","Code Examples"]
__meta__rate: 9
---
# README.md Standards

## Basic Structure
```yaml
required_sections:
  - Project Name and Description
  - Features
  - Installation
  - Usage
  - Configuration
  - Contributing
  - License

optional_sections:
  - Table of Contents
  - Prerequisites
  - Development Setup
  - Testing
  - Deployment
  - API Documentation
  - FAQ
  - Troubleshooting
  - Changelog
  - Acknowledgments
```

## Section Guidelines

### Project Header
```markdown
# Project Name

[![Build Status](mdc:shield-url)](build-url)
[![Coverage](mdc:shield-url)](coverage-url)
[![License](mdc:shield-url)](license-url)

One-paragraph project description that explains the core purpose and functionality.

[Optional: Add a screenshot, logo, or demo gif]
```

### Features Section
```markdown
## Features

- **Core Feature One**: Brief description of the feature
- **Core Feature Two**: Brief description of the feature
  - Sub-feature 2.1
  - Sub-feature 2.2
```

### Installation Section
```markdown
## Installation

### Prerequisites
```yaml
format:
  - Tool/dependency name
  - Version requirements
  - Installation command
  - Verification command
```

### Quick Start
```bash
# Single command installation
npm install my-package

# Or step by step
git clone https://github.com/user/repo
cd repo
npm install
npm start
```
```

### Usage Section
```markdown
## Usage

### Basic Example
```javascript
const package = require('package-name');
const result = package.mainFunction();
```

### Common Use Cases
1. Use Case One
2. Use Case Two
3. Use Case Three
```

### Configuration Section
```yaml
format:
  environment_variables:
    - name: VARIABLE_NAME
      description: What this variable does
      required: true/false
      default: default_value
      example: example_value

  configuration_files:
    - name: config.json
      description: Main configuration file
      location: /path/to/file
      format: JSON/YAML/etc
```

## Content Guidelines

### Writing Style
```yaml
tone:
  - Professional but approachable
  - Clear and concise
  - Active voice
  - Present tense

formatting:
  - Use proper markdown syntax
  - Consistent heading levels
  - Code blocks with language specification
  - Lists for better readability
```

### Code Examples
```yaml
requirements:
  - Include language identifier
  - Show complete, working examples
  - Add comments for clarity
  - Keep examples concise
  - Test all examples before committing

example:
  ```javascript
  // Import the package
  const myPackage = require('my-package');

  // Configure options
  const options = {
    feature: true,
    timeout: 1000
  };

  // Use the package
  const result = myPackage.doSomething(options);
  ```
```

### Documentation Links
```yaml
internal_links:
  - API documentation
  - Contributing guidelines
  - Code of conduct
  - License file
  - Changelog

external_links:
  - Dependencies documentation
  - Related projects
  - Community resources
```

## Best Practices

### General Guidelines
- Keep documentation up to date
- Use consistent formatting
- Include search-friendly keywords
- Add table of contents for long documents
- Provide working code examples
- Include troubleshooting section
- Link to related documentation

### Common Mistakes to Avoid
- Outdated installation instructions
- Missing prerequisites
- Incomplete configuration details
- Untested code examples
- Dead links
- Lack of error handling examples
- Unclear contribution guidelines

### Maintenance
```yaml
regular_updates:
  - Version numbers
  - Dependencies
  - Installation instructions
  - Configuration options
  - Screenshots/demos
  - Contact information

review_schedule:
  - Major releases
  - Significant changes
  - Quarterly maintenance
  - User feedback
```

## Templates

### Minimal README
```markdown
# Project Name

Brief description of the project.

## Installation

```bash
npm install project-name
```

## Usage

```javascript
const project = require('project-name');
```

## License

MIT © [Your Name]
```

### Complete README
```markdown
# Project Name

[Badges]

Description

## Table of Contents
- [Features](mdc:#features)
- [Installation](mdc:#installation)
- [Usage](mdc:#usage)
- [Configuration](mdc:#configuration)
- [API](mdc:#api)
- [Contributing](mdc:#contributing)
- [License](mdc:#license)

[Detailed sections follow]
```

## Validation Checklist
```yaml
required_elements:
  - Project name and description
  - Installation instructions
  - Basic usage example
  - License information

quality_checks:
  - All links working
  - Code examples tested
  - Screenshots current
  - Contact info valid
  - Dependencies listed
  - Prerequisites clear
```

## Security Considerations
- No sensitive information
- No internal URLs
- No personal data
- No API keys or credentials
- No internal IP addresses
- Sanitized examples
- Secure installation methods