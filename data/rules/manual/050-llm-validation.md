---
description: "MUST use LLM validation WHEN assessing rule quality TO ensure comprehensive evaluation"
globs: ["*.py", "*.md"]
__meta__type: "guideline"
__meta__repo: "krizzo101/arxiv-py-enhanced"
__meta__service: "OpenAI"
__meta__tags: ["AI","Quality Assurance","Validation","Python","OpenAI"]
__meta__rate: 8
---
# 050-llm-validation

## Metadata

- **Rule ID**: 050
- **Rule Name**: llm-validation
- **Version**: 1.0.0
- **Category**: Quality Assurance
- **Author**: AI Assistant
- **Date Created**: 2023-11-20
- **Last Updated**: 2023-11-20

## Description

MUST use LLM validation WHEN assessing rule quality TO ensure comprehensive evaluation beyond basic structural checks.

## Context

Rule validation is a critical step in ensuring that generated rules are effective, clear, and actionable. While conventional validation methods can verify basic structural compliance and content presence, they often fail to assess the semantic quality, coherence, and overall effectiveness of rules.

LLM (Large Language Model) validation provides a deeper layer of analysis by leveraging AI to evaluate rules from multiple dimensions, including:

1. **Content quality** - evaluating clarity, completeness, and coherence
2. **Example quality** - assessing relevance, instructiveness, and code quality
3. **Danger assessment** - evaluating comprehensiveness and clarity of risk scenarios
4. **Semantic alignment** - checking consistency between rule purpose and implementation

By incorporating LLM validation, we can identify subtle quality issues that might otherwise be missed, leading to more robust and effective rules.

## Implementation

To implement LLM validation in rule assessment:

1. **Set up environment**:
   - Ensure you have an OpenAI API key set as an environment variable: `OPENAI_API_KEY`
   - Install required dependencies: `pip install openai`

2. **Use the standalone validation script**:
   ```bash
   python validate_rules_with_llm.py --file path/to/rule.mdc
   ```

3. **Programmatically validate rules**:
   ```python
   from rules_engine.validators import perform_llm_validation

   with open("path/to/rule.mdc", "r") as f:
       rule_content = f.read()

   result = perform_llm_validation(
       rule_file_path="path/to/rule.mdc",
       rule_content=rule_content
   )

   # Access validation results
   print(f"Score: {result['score']}/10")
   print(f"Status: {result['status']}")
   print(f"Strengths: {result['strengths']}")
   ```

4. **Integrate with existing validation**:
   ```python
   from rules_engine.validators import verify_rule_quality

   # Set include_llm_validation to True
   result = verify_rule_quality(
       rule_file_path="path/to/rule.mdc",
       include_llm_validation=True
   )
   ```

5. **Generate validation reports**:
   ```python
   from rules_engine.validators import batch_validate_rules, generate_markdown_report

   # Validate multiple rules
   results = batch_validate_rules(
       rule_dir=".cursor/rules",
       output_file="validation_results.json"
   )

   # Generate a report
   generate_markdown_report(results, "validation_report.md")
   ```

6. **Review validation results** and address any identified issues or improvement suggestions to enhance rule quality.

## Example

Here's an example of using LLM validation to assess a rule and make improvements based on the feedback:

```python
# Script to validate and improve a specific rule
import os
from rules_engine.validators import perform_llm_validation

# Ensure API key is set
os.environ["OPENAI_API_KEY"] = "your-api-key"  # Better to set this in your environment

# Path to the rule file
rule_file = ".cursor/rules/100-code-quality.mdc"

# Read the rule content
with open(rule_file, "r") as f:
    rule_content = f.read()

# Perform validation
result = perform_llm_validation(rule_file, rule_content)

# Print validation summary
print(f"Rule quality score: {result['score']}/10")
print(f"Status: {result['status']}")
print("\nStrengths:")
for strength in result["strengths"]:
    print(f"- {strength}")

print("\nWeaknesses:")
for weakness in result["weaknesses"]:
    print(f"- {weakness}")

print("\nImprovement suggestions:")
for suggestion in result["improvement_suggestions"]:
    print(f"- {suggestion}")

# If score is below threshold, consider improvements
if result["score"] < 7:
    print("\nThis rule needs improvement based on the suggestions above.")
else:
    print("\nThis rule meets the quality standards.")
```

## Danger

- NEVER skip LLM validation for critical rules that guide development practices
- NEVER ignore low scores or significant weaknesses identified by LLM validation without addressing them
- NEVER assume that passing basic validation means a rule is semantically sound - LLM validation provides crucial semantic analysis
- NEVER use LLM validation without reviewing the results - automated evaluation should complement human judgment, not replace it
- NEVER implement LLM validation without proper API key security - ensure keys are stored as environment variables and not hardcoded
- NEVER rely solely on LLM validation without considering performance impact and costs for large rule sets