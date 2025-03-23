---
description: "MUST use comments WHEN writing complex code TO enhance readability and understanding."
globs: ["**/*.{js,ts,py,java,c,cpp,cs,go,rb,php,rust}", "**/standards/**", "**/commenting/**", "**/*standards*/**", "**/*commenting*/**"]
__meta__type: "guideline"
__meta__repo: "krizzo101/arxiv-py-enhanced"
__meta__tags: ["Code Quality","Best Practices","Documentation","Commenting","Software Development"]
__meta__rate: 8
---
# commenting-standards

<version>1.1.0</version>

## Metadata
{
  "rule_id": "130-commenting-standards",
  "taxonomy": {
    "category": "Code Quality Rules",
    "parent": "Code Quality RulesRule",
    "ancestors": [
      "Rule",
      "Code Quality RulesRule"
    ],
    "children": [
      "131-comment-formatting",
      "132-comment-clarity",
      "133-comment-usage"
    ]
  },
  "tags": [
    "commenting",
    "code quality",
    "best practices",
    "documentation"
  ],
  "priority": "30",
  "inherits": [
    "000",
    "020",
    "030"
  ]
}

## Overview
{
  "purpose": "The purpose of the commenting standards rule is to ensure that developers MUST consistently use comments to document complex code, thereby improving overall code readability and maintainability.",
  "application": "This rule MUST be applied when writing or reviewing code that includes complex logic, intricate algorithms, or any sections that may not be immediately understandable. Developers MUST include comments that explain the purpose, functionality, and any assumptions made to help future maintainers grasp the intent behind the code.",
  "importance": "This rule matters because well-commented code MUST reduce the cognitive load on developers, facilitate easier onboarding for new team members, and minimize the risk of misunderstandings or errors during future code modifications. By adhering to commenting standards, teams MUST enhance collaboration and maintain a higher quality of code over time."
}

## comment_structure

{
  "description": "Developers MUST follow a structured format for comments to ensure consistency and clarity throughout the codebase.",
  "requirements": [
    "MUST start comments with a capital letter and end with a period.",
    "MUST use full sentences to explain the purpose and functionality of the code.",
    "SHOULD avoid jargon and abbreviations unless they are widely understood within the team."
  ]
}

## comment_placement

{
  "description": "Comments MUST be placed strategically within the code to maximize their effectiveness and relevance.",
  "requirements": [
    "MUST place comments above the code they describe, not beside it, to prevent confusion.",
    "SHOULD use inline comments sparingly; they MUST only be used when the code's purpose is not clear from the surrounding context.",
    "MUST ensure that comments are updated when the associated code changes to maintain accuracy."
  ]
}

## comment_types

{
  "description": "Different types of comments have specific purposes and MUST be used accordingly.",
  "requirements": [
    "MUST use block comments to describe complex algorithms or sections of code that require detailed explanations.",
    "MUST use single-line comments for brief clarifications or notes that do not require extensive detail.",
    "SHOULD categorize comments into TODOs, FIXMEs, and other specific tags to facilitate tracking and prioritization of code issues."
  ]
}

<example>
Complex Data Processing with Comments

```python
import json
from typing import List, Dict, Any, Union

# Define a custom exception for handling data processing errors.
class DataProcessingError(Exception):
    pass

# Function to process a list of data entries and return a summary report.
# This function expects a list of dictionaries, where each dictionary represents an entry.
def process_data(entries: List[Dict[str, Union[str, int]]]) -> Dict[str, Any]:
    """
    Processes a list of data entries to generate a summary report.
    Each entry is expected to have 'name' and 'value' keys. The function calculates the total
    and average of the 'value' fields and returns a report containing these metrics.

    :param entries: List of dictionaries containing 'name' and 'value' keys.
    :return: A dictionary report with total and average values.
    :raises DataProcessingError: If any entry is missing the required keys or has invalid types.
    """
    total = 0
    count = len(entries)

    if count == 0:
        raise DataProcessingError("No data entries provided.")  # Handle edge case for empty input.

    for entry in entries:
        # Validate each entry to ensure it has the correct structure.
        if 'name' not in entry or 'value' not in entry:
            raise DataProcessingError(f"Entry {entry} is missing required keys.")
        if not isinstance(entry['value'], (int, float)):
            raise DataProcessingError(f"Value for entry {entry['name']} is not a number.")

        total += entry['value']  # Accumulate the total value.

    average = total / count  # Calculate the average.
    report = {'total': total, 'average': average}  # Prepare the report.
    return report

# Example usage of the process_data function.
if __name__ == '__main__':
    data = [
        {'name': 'Entry 1', 'value': 10},
        {'name': 'Entry 2', 'value': 20},
        {'name': 'Entry 3', 'value': 30},
    ]
    try:
        summary = process_data(data)  # Call the data processing function.
        print(json.dumps(summary, indent=4))  # Print the summary report in JSON format.
    except DataProcessingError as e:
        print(f'Error processing data: {e}')  # Handle any data processing errors gracefully.
```

This Python code example demonstrates the importance of commenting standards in complex code through a data processing function. The function 'process_data' is designed to calculate the total and average of a list of data entries, and it includes thorough comments that explain the purpose and functionality of the code.

1. **Comment Structure**: The comments MUST start with capital letters and use full sentences, adhering to the established commenting standards. The function's docstring provides a detailed explanation of its parameters, return type, and exceptions raised, making it easy for future maintainers to understand how to use the function.

2. **Comment Placement**: Comments MUST be strategically placed above the code they describe, which enhances readability. Inline comments are used sparingly to clarify specific operations, such as validating entries and accumulating totals. This reduces confusion and keeps the focus on the main logic.

3. **Comment Types**: Block comments are employed in the docstring to explain the function's overall logic, while single-line comments assist in clarifying steps within the function. This categorization helps maintain clarity and organization in the code.

4. **Error Handling**: The function includes robust error handling, raising a custom exception when the inputs are invalid. This practice not only prevents runtime errors but also ensures that any issues are clearly communicated, further supported by comments that explain the rationale behind each check.

Overall, this example illustrates how well-structured comments can significantly enhance code readability, maintainability, and understanding, particularly in complex logical scenarios.
</example>

<danger>
{
  "critical_violations": [
    "NEVER omit comments in complex code sections that require explanation.",
    "NEVER use vague or ambiguous comments that do not clarify the code's functionality.",
    "NEVER write comments that contradict the code, leading to confusion and misinterpretation.",
    "NEVER leave outdated comments that do not reflect the current state of the code.",
    "NEVER use abbreviations or jargon in comments unless they are universally understood by the team.",
    "NEVER place comments next to the code they describe, as this can lead to misunderstandings."
  ],
  "specific_risks": [
    "Failure to include comments in complex code can lead to misinterpretation of code functionality by future developers, resulting in bugs and increased maintenance costs.",
    "Vague comments can create confusion, causing developers to make incorrect assumptions about the code, potentially leading to erroneous modifications or enhancements.",
    "Outdated comments can mislead developers, resulting in the implementation of incorrect logic or overlooking critical functionality, which could introduce severe errors into production.",
    "Using jargon or abbreviations may alienate new team members or external collaborators, increasing the onboarding time and hindering effective collaboration.",
    "Placing comments next to code rather than above it can cause confusion, as developers may not easily connect the comment to the specific code block it is meant to describe."
  ]
}
</danger>