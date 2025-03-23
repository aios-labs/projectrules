---
description: "MUST include technical documentation WHEN creating new features TO enhance code understandability."
globs: ["**/*documentation*/**", "**/*.markdown", "**/docs/**", "**/*technical*/**", "**/technical/**", "**/documentation/**", "**/*.md"]
__meta__type: "guideline"
__meta__repo: "krizzo101/arxiv-py-enhanced"
__meta__tags: ["Documentation","Best Practices","Code Quality","Technical Writing","Collaboration"]
__meta__rate: 8
---
# technical-documentation

<version>1.1.0</version>

## Metadata
{
  "rule_id": "730-technical-documentation",
  "taxonomy": {
    "category": "Documentation Rules",
    "parent": "Documentation RulesRule",
    "ancestors": [
      "Rule",
      "Documentation RulesRule"
    ],
    "children": [
      "731-technical-documentation-examples",
      "732-technical-documentation-best-practices"
    ]
  },
  "tags": [
    "technical-docs",
    "documentation-quality",
    "code-documentation",
    "best-practices"
  ],
  "priority": "75",
  "inherits": [
    "000",
    "020",
    "030"
  ]
}

## Overview
{
  "purpose": "MUST ensure comprehensive technical documentation is created for all new features TO facilitate understanding and collaboration among developers.",
  "application": "SHOULD be applied during the development process of new features and updates, specifically WHEN introducing new functionalities or modifying existing ones. Documentation MUST be maintained and updated in parallel with code changes.",
  "importance": "This rule matters because well-documented code enhances maintainability, reduces onboarding time for new developers, and improves overall project quality by providing clarity on functionality and design decisions."
}

## documentation_structure
{
  "description": "Defines the required structure for technical documentation to ensure consistency and clarity.",
  "requirements": [
    "MUST include a title section that clearly names the feature or component being documented.",
    "MUST contain an overview section that describes the purpose and functionality of the feature.",
    "MUST provide a usage section detailing how to implement and interact with the feature, including code examples where applicable.",
    "MUST include a troubleshooting section that addresses common issues and solutions related to the feature."
  ]
}

## content_quality
{
  "description": "Sets the standards for the quality of content in technical documentation.",
  "requirements": [
    "MUST use clear and concise language free of jargon that could confuse the reader.",
    "MUST ensure that all technical terms are defined or linked to a glossary.",
    "SHOULD provide visual aids such as diagrams or flowcharts to enhance understanding WHERE applicable.",
    "MUST be reviewed for accuracy and relevance by at least one other developer before finalization."
  ]
}

## maintenance_and_updates
{
  "description": "Outlines the process for maintaining and updating technical documentation.",
  "requirements": [
    "MUST be updated in parallel with code changes TO reflect the current state of the feature.",
    "SHOULD include a version history section documenting changes made to the documentation over time.",
    "MUST assign ownership for documentation updates to relevant team members TO ensure accountability.",
    "NEVER allow documentation to become outdated; regular audits SHOULD be scheduled to verify its accuracy."
  ]
}

<example>
Feature: User Registration with Documentation

```python
# user_registration.py

class UserRegistration:
    """
    A class to handle user registration functionality.

    This feature allows new users to register in the system by providing their personal details.

    Attributes:
        username (str): The username of the user.
        email (str): The email address of the user.
        password (str): The user's password.
    """

    def __init__(self, username, email, password):
        """
        Initializes the UserRegistration with username, email, and password.

        Parameters:
            username (str): The desired username for the new account.
            email (str): The email address for account verification.
            password (str): The password for the account.
        """
        self.username = username
        self.email = email
        self.password = password

    def validate_email(self):
        """
        Validates the email format.

        Returns:
            bool: True if the email format is valid, False otherwise.
        """
        import re
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return re.match(pattern, self.email) is not None

    def register(self):
        """
        Registers a new user if the provided details are valid.

        Raises:
            ValueError: If the email format is invalid or username already exists.
        """
        if not self.validate_email():
            raise ValueError('Invalid email format.')

        # Simulated check for existing username (this would connect to a database in a real app)
        existing_users = ['john_doe', 'jane_smith']
        if self.username in existing_users:
            raise ValueError('Username already exists.')

        # Proceed with registration (e.g., save to database)
        return f'User {self.username} registered successfully!'

# Example usage:
try:
    registration = UserRegistration('new_user', 'new_user@example.com', 'securepassword123')
    print(registration.register())
except ValueError as e:
    print(f'Error during registration: {e}')
```

This example demonstrates the principle of including thorough technical documentation when creating new features. The code defines a UserRegistration class, which encapsulates the functionality needed for user registration. Each method includes a docstring that adheres to the required structure for technical documentation, such as purpose, parameters, returns, and exceptions. This provides clarity on how to interact with the class and its methods.

Key aspects of this example that align with the technical documentation rule include:
- **Documentation Structure**: Each method has a clear docstring that describes its purpose and functionality, as required by the rule.
- **Content Quality**: The language used in the docstrings is straightforward and free of jargon, making it accessible to developers of varying experience levels.
- **Error Handling**: The register method raises exceptions for invalid email formats and existing usernames, with appropriate error messages that aid troubleshooting.
- **Code Organization**: The class is organized logically, with clear separation of concerns between methods, improving maintainability and understandability.
- **Usage Examples**: The example usage at the bottom illustrates how to instantiate the class and handle potential errors, serving as practical documentation for future developers.

Overall, this implementation not only fulfills the requirements set forth by the technical documentation rule but also exemplifies best practices in code organization, error handling, and clear communication.
</example>

<danger>
{
  "critical_violations": [
    "NEVER omit essential sections such as overview, usage, or troubleshooting from the technical documentation.",
    "NEVER use ambiguous or technical jargon without providing clear definitions or explanations in the documentation.",
    "NEVER allow documentation to fall out of sync with the codebase; always update documentation alongside code changes.",
    "NEVER neglect to have documentation reviewed by at least one other developer to ensure accuracy and clarity.",
    "NEVER ignore the need for visual aids when complex concepts are involved; always provide diagrams or flowcharts WHERE applicable."
  ],
  "specific_risks": [
    "Failure to include essential sections can lead to misunderstandings about the feature's purpose and usage, causing developers to misuse or misimplement the functionality.",
    "Using jargon without definitions can alienate less experienced developers and hinder team collaboration, resulting in increased onboarding time and potential project delays.",
    "Outdated documentation can lead to significant errors in code implementation, as developers may rely on inaccurate information, which can result in bugs and system failures.",
    "Inaccurate or unclear documentation can cause developers to overlook critical functionality or error handling, leading to increased technical debt and maintenance challenges.",
    "Lack of visual aids can make complex features difficult to understand, ultimately affecting the team's ability to effectively collaborate and innovate."
  ]
}
</danger>