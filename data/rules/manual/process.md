---
description: "Guidelines for process"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "kemalersin/hobaa"
__meta__tags: ["Code Management","Automation","Workflow","Project Management","Documentation"]
__meta__rate: 7
---
## Trigger:

- Triggered when approving generated code using a command beginning with the word "Harika".

## Action:

- Search for the summary information of the approved output in the [done.mdc](mdc:.cursor/rules/done.mdc) file.

    - If the summary exists in the [done.mdc](mdc:.cursor/rules/done.mdc) file, take no action.

    - If the summary is not in [done.mdc](mdc:.cursor/rules/done.mdc), search for it in [to-do.mdc](mdc:.cursor/rules/to-do.mdc).

        - If found in [to-do.mdc](mdc:.cursor/rules/to-do.mdc), move the information from this file to [done.mdc](mdc:.cursor/rules/done.mdc), preserving the original ordering.

## Context:

- This rule activates only when a sentence beginning with "Harika" is used.
- This rule ensures newly developed project features are added to the @done.mdc file.