---
description: "Automatically update README.md files with nested directory structures"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "bossjones/codegen-lab"
__meta__tags: ["Markdown","Documentation","Automation","File Management","Directory Structure"]
__meta__rate: 8
---
# Update Markdown Nested Lists

Use the @tree.mdc rule to get accurate directory structure before updating README files.

Automatically updates README.md files with nested directory structures and hyperlinks when new files or directories are added.

<rule>
name: update-markdown-nested-lists
description: Updates README.md files with nested directory structures and hyperlinks recursively
filters:
  # Match README.md files and markdown files in any subdirectory
  - type: file_name
    pattern: "(README\\.md$|.*\\.md$)"
  # Match when new files or directories are added
  - type: file_change
    pattern: ".*"
  # Match file creation events
  - type: event
    pattern: "file_create"

actions:
  - type: suggest
    message: |
      When updating README.md files:

      1. First Action - Get Directory Structure:
         ```bash
         # Use @tree.mdc rule to get accurate directory structure
         tree -L 5 -I "*.pyc|__pycache__|.git|.pytest_cache|.ruff_cache|.mypy_cache|.coverage|htmlcov|.venv|.env|*.egg-info|build|dist|node_modules|.DS_Store|images"
         ```

      2. Structure:
         ```markdown
         # Directory Name

         ## Contents

         <!-- Directory structure will be generated based on @tree.mdc output -->
         <!-- Each README.md file found will be linked appropriately -->
         <!-- Example structure:
         - [Current Directory](./README.md)
           - [Subdirectory 1](./subdirectory1/README.md)
             - [Nested Subdirectory](./subdirectory1/nested/README.md)
           - [Subdirectory 2](./subdirectory2/README.md)
         -->
         ```

      3. Guidelines:
         - Use @tree.mdc output to ensure accuracy
         - Only create links for directories that contain README.md or .md files
         - Use relative paths for links
         - Maintain hierarchical structure from tree output
         - Include all directories with README.md files
         - Preserve existing content above and below the directory listing
         - Update both parent and child README.md files
         - Recursively update all parent README.md files up to root
         - Verify tree output matches filesystem structure before updating

         Directory Linking Rules:
         - ALWAYS link to the README.md file inside a directory, not just the directory itself
         - Format: `[directory-name/](./directory-name/README.md)` NOT `[directory-name/](./directory-name)`
         - Include the trailing slash in the display text: `refactoring/` not just `refactoring`
         - Examples of correct linking:
           ```markdown
           - [`refactoring/`](./refactoring/README.md) - Code refactoring tools
           - [`testing/`](./testing/README.md) - Test automation tools
           - [`documentation/`](./documentation/README.md) - Documentation tools
           ```
         - Examples of incorrect linking:
           ```markdown
           # DON'T do these:
           - [`refactoring`](./refactoring) - Missing trailing slash and README.md
           - [`testing/`](./testing) - Missing README.md in link
           - [`documentation`](./documentation/README.md) - Missing trailing slash
           ```

         Special Cases:
         - For directories containing draft cursor rules (e.g., prompts/drafts/cursor_rules/):
           - List all .mdc.md files in a nested list under the parent directory
           - Include a brief description from each file's frontmatter if available
           - Example structure:
             ```markdown
             - [Cursor Rules](./cursor_rules/)
               - [Update Markdown Lists](./cursor_rules/update-markdown-nested-lists.mdc.md) - Automatically update README.md files with nested directory structures
               - [Tree](./cursor_rules/tree.mdc.md) - Display repository structure
               - [Notify](./cursor_rules/notify.mdc.md) - Send notifications on task completion
             ```
         - For directories containing multiple related .md files:
           - Group related files under their parent directory
           - Include all .md files in the nested list structure
           - Example:
             ```markdown
             - [Guidelines](./guidelines/)
               - [Model Specific](./guidelines/model_specific/)
                 - [Anthropic Guidelines](./guidelines/model_specific/anthropic.md)
                 - [OpenAI Guidelines](./guidelines/model_specific/openai.md)
             ```

      4. Update Process:
         a. When a new .md file is added:
            1. Identify the directory it was added to
            2. Update the immediate parent directory's README.md with:
               - For regular directories: standard nested list structure
               - For cursor_rules directories: detailed list with descriptions from frontmatter
               - Example for cursor_rules README.md:
                 ```markdown
                 # Cursor Rules

                 ## Contents

                 - [Adobe Cursor Tools](./adobe-cursor-tools.mdc.md) - Adobe-specific Cursor tools and commands
                 - [Anthropic Chain of Thought](./anthropic-chain-of-thought.mdc.md) - Best practices for chain of thought reasoning
                 - [Brain Memories](./brain-memories-lessons-learned-scratchpad.mdc.md) - Memory system for AI development
                 ```
            3. Recursively update all parent README.md files up to root:
               - Each README.md in the chain should maintain its own context and perspective
               - Example chain for a new testing prompt:
                 ```markdown
                 # In prompts/domains/ide/testing/README.md:
                 - [New Test](./new_test.md) - Description of the specific test

                 # In prompts/domains/ide/README.md:
                 - [Testing](./testing/README.md) - Testing assistance
                   - [New Test](./testing/new_test.md) - Description in IDE context

                 # In prompts/domains/README.md:
                 - [IDE Development](./ide/README.md) - IDE functionality
                   - [Testing](./ide/testing/README.md) - Testing tools
                     - [New Test](./ide/testing/new_test.md) - High-level description

                 # In prompts/README.md:
                 - [Domains](./domains/README.md) - Domain-specific prompts
                   - [IDE](./domains/ide/README.md) - IDE tools
                     - [Testing](./domains/ide/testing/README.md) - Testing
                 ```
               - Each level should provide appropriate context and detail for its scope
               - Maintain consistent formatting and style across all levels
               - Include relevant section headers (e.g., "Contents", "Related Resources")
               - Cross-reference related sections when appropriate

               - Special handling for cursor rules across levels:
                 ```markdown
                 # In prompts/drafts/cursor_rules/README.md:
                 - [New Rule](./new-rule.mdc.md) - Detailed technical description of the rule's functionality

                 # In prompts/drafts/README.md:
                 - [Cursor Rules](./cursor_rules/) - Cursor rule drafts and templates
                   - [New Rule](./cursor_rules/new-rule.mdc.md) - Rule description with usage context

                 # In prompts/README.md:
                 - [Drafts](./drafts/README.md) - Work in progress prompts
                   - [Cursor Rules](./drafts/cursor_rules/) - Cursor rule drafts
                     - [New Rule](./drafts/cursor_rules/new-rule.mdc.md) - High-level purpose

                 # In root README.md:
                 - [Prompts](./prompts/README.md) - Core prompt library
                   - [Drafts](./prompts/drafts/README.md) - Work in progress
                     - [Cursor Rules](./prompts/drafts/cursor_rules/) - Rule drafts
                 ```
         b. For each README.md update:
            1. Run @tree.mdc to get current structure
            2. Parse tree output to identify directories
            3. Check each directory for README.md and markdown files
            4. Generate nested markdown list with valid links
            5. Update the README.md while preserving other content
            6. Continue up the directory tree until reaching root
         c. Send notification on completion

examples:
  - input: |
      # Bad: Flat structure without links or tree verification
      * Directory1
      * Directory2
      * Subdirectory1

      # Bad: Links without verifying existence
      - [NonexistentDir](./nonexistent/README.md)
      - [BrokenLink](./broken/link.md)

      # Good: Tree-verified structure with links
      # First run @tree.mdc:
      $ tree -L 2
      .
      ├── Directory1
      │   └── README.md
      └── Directory2
          └── README.md

      - [Directory1](./Directory1/README.md)
      - [Directory2](./Directory2/README.md)
    output: "Basic structure with tree verification"

  - input: |
      # New file added: prompts/domains/ide/testing/test-example.md
      # Update chain using @tree.mdc:

      1. Update prompts/domains/ide/README.md:
      ```markdown
      # IDE Domain

      ## Contents

      - [Testing](./testing/README.md)
        - [Test Example](./testing/test-example.md)
      ```

      2. Update prompts/domains/README.md:
      ```markdown
      # Domains

      ## Contents

      - [IDE](./ide/README.md)
        - [Testing](./ide/testing/README.md)
      ```

      3. Update prompts/README.md:
      ```markdown
      # Prompts

      ## Contents

      - [Domains](./domains/README.md)
        - [IDE](./domains/ide/README.md)
      ```
    output: "Recursive README updates after new file addition"

  - input: |
      # Project Title

      Project description here.

      ## Directory Structure

      <!-- Generated from @tree.mdc -->
      - [Source](./src/README.md)
        - [Components](./src/components/README.md)
          - [UI](./src/components/ui/README.md)
        - [Utils](./src/utils/README.md)
      - [Tests](./tests/README.md)
        - [Unit Tests](./tests/unit/README.md)

      ## Additional Information

      More content here.
    output: "Complete README with nested directory structure"

  - input: |
      # New cursor rule added: prompts/drafts/cursor_rules/new-rule.mdc.md
      # Update chain for cursor rules:

      1. Update prompts/drafts/README.md:
      ```markdown
      # Drafts

      ## Contents

      - [Cursor Rules](./cursor_rules/)
        - [Adobe Cursor Tools](./cursor_rules/adobe-cursor-tools.mdc.md) - Adobe-specific Cursor tools and commands
        - [Anthropic Chain of Thought](./cursor_rules/anthropic-chain-of-thought.mdc.md) - Best practices for chain of thought reasoning
        - [Brain Memories](./cursor_rules/brain-memories-lessons-learned-scratchpad.mdc.md) - Memory system for AI development
        - [Cursor Rules Location](./cursor_rules/cursor_rules_location.mdc.md) - Cursor rules file organization
        - [Documentation Standards](./cursor_rules/documentations-inline-comments-changelog-docs.mdc.md) - Documentation guidelines
        - [Git Commits](./cursor_rules/git_conventional_commits.mdc.md) - Conventional commit message standards
        - [New Rule](./cursor_rules/new-rule.mdc.md) - Description from frontmatter
      ```

      2. Update prompts/README.md to reflect the new draft rule
    output: "Special handling for cursor rule drafts directory"

metadata:
  priority: high
  version: 1.0
  tags:
    - documentation
    - markdown
    - directory-structure
    - auto-update
    - recursive-update
    - tree-integration
</rule>