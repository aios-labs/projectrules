---
description: ".mdc files describe specific rules for how certain files, file types, and directories are to be understood and used"
globs: ".cursor/rules/*.mdc"
__meta__type: "guideline"
__meta__repo: "hyperb1iss/hyper-light-card"
__meta__tags: ["File Structure","Best Practices","Documentation","Rules","Naming Conventions"]
__meta__rate: 7
---
.mdc File Structure & Best Practices:

File Naming: NNN_name.mdc (NNN = 001-299)

- 001-099: Core/workspace rules
- 100-199: Integration rules
- 200-299: Pattern rules
  Higher numbers take precedence if rules conflict

UI Components:

1. Description (top)

   - Brief purpose summary
   - Appears in AI context

2. Globs (top)

   - Comma-separated list
   - Example: /dir1/**/\*,/dir2/**/_,/dir3/\*\*/_
   - Use standard glob syntax

3. Body Text (this section)
   - Keep under 25 lines
   - Use concise/shorthand
   - Tag files with @
   - Focus on key directives

Best Practice: The assistant may propose changes to .mdc files for the user to copy into the UI. The assistant should not attempt direct file edits to .mdc files.