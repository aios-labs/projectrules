---
description: "Include All Rules in Cursor Context"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "jam3gw/agentic-service-bot"
__meta__tags: ["Cursor","Rules Management","Automation","Codebase Compliance","Project Standards"]
__meta__rate: 8
---
# Include All Rules in Cursor Context

This rule ensures that all rules in the project's `.cursor/rules` directory are added to the context of Cursor.

<rule>
name: include_all_rules
description: Ensure all rules in the .cursor/rules directory are added to the Cursor context
filters:
  - type: event
    pattern: "cursor_start"
  - type: event
    pattern: "file_open"

actions:
  - type: execute
    command: |
      # Find all rule files in the .cursor/rules directory
      RULE_FILES=$(find .cursor/rules -name "*.mdc" -type f)

      # Add each rule to the Cursor context
      for RULE_FILE in $RULE_FILES; do
        RULE_NAME=$(basename "$RULE_FILE" .mdc)
        echo "Adding rule $RULE_NAME to Cursor context"
        cursor rule add "$RULE_FILE"
      done

  - type: suggest
    message: |
      ## Cursor Rules Management

      All rules in the `.cursor/rules` directory should be automatically added to the Cursor context.

      ### Guidelines for Rule Management:

      1. All Cursor rules should be stored in the `.cursor/rules` directory
      2. Rules should follow the naming convention: `descriptive-name.mdc`
      3. Each rule should have a clear description and purpose
      4. Rules should be properly formatted with the `<rule>` tag
      5. Consider adding `alwaysApply: true` to critical rules
      6. **Always ensure codebase compliance** with new or updated rules before moving on to other tasks (see `rule-compliance-workflow.mdc`)

      ### When creating new rules:

      1. Place the rule file in `.cursor/rules/`
      2. Follow the established rule format
      3. Test the rule to ensure it works as expected
      4. Document the rule's purpose and behavior
      5. **Verify codebase compliance** with the new rule following the workflow in `rule-compliance-workflow.mdc`

      This ensures consistent application of all project standards across the codebase.

examples:
  - input: |
      # New rule file created
      .cursor/rules/new-rule.mdc
    output: "Rule 'new-rule' added to Cursor context"

metadata:
  priority: high
  version: 1.0
</rule>