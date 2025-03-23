---
description: "Essential rules for working with Git"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "isnbh0/template"
__meta__tags: ["Git","Version Control","Commit Standards","Workflow","Collaboration"]
__meta__rate: 8
---
# Git Workflow Guidelines

This document defines the git-related workflow rules and standards for the repository.

1. Commit Message Format and Standards
   1.1. Conventional Commits Format
        Format: `<type>(<scope>): <description>`

        Types:
        - `feat`: A new feature
        - `fix`: A bug fix
        - `docs`: Documentation only changes
        - `style`: Changes that do not affect the meaning of the code
        - `refactor`: A code change that neither fixes a bug nor adds a feature
        - `perf`: A code change that improves performance
        - `test`: Adding missing tests or correcting existing tests
        - `chore`: Changes to the build process or auxiliary tools

        The scope should be derived from the file path or affected component.
        The description should be clear and concise, written in imperative mood, and must be in Korean.

   1.2. Issue References
        - Reference relevant issues/tickets in commit messages when applicable
        - Use keywords like "Fixes", "Resolves", or "Closes" followed by the issue number

   1.3. Multi-line Commit Messages
        - ALWAYS use multiple -m flags for multi-line commit messages
        - NEVER use newline characters within a commit message string
        - Format: `git commit -m "First line" -m "Second line" -m "Third line"`
        - The first -m is the commit title, subsequent -m flags create body paragraphs

        Example:
        ```bash
        git commit -m "feat(auth): implement user authentication" -m "Added login form and JWT validation" -m "Fixes #123"
        ```

   1.4. Authorship Information
        All commits must include AI authorship information when applicable. This helps track which changes were made with AI assistance and which specific AI model was used.

        IMPORTANT: Always use the ACTUAL name and version of the AI model that assisted with the changes. Never copy a different model name from these examples.

        Format:
        ```
        git commit -m "<conventional commit message>" -m "Co-authored-by: Cursor Composer (<ACTUAL_AI_MODEL_NAME>)"
        ```

        Example (adjust according to the actual AI model used):
        ```
        git commit -m "feat(data): add new dataset" -m "- Added new training data
- Updated data card
- Added preprocessing script" -m "Co-authored-by: Cursor Composer (GPT-4o)"
        ```

        Another example with a different AI model:
        ```
        git commit -m "fix(api): correct rate limit handling" -m "Co-authored-by: Cursor Composer (Claude 3 Opus)"
        ```

2. Commit Workflow Process
   2.1. Pre-commit Steps
        2.1.1. File Staging
               - Stage related changes together
               - Review staged changes before committing
               - Ensure no unintended files are included

        2.1.2. Quality Checks
               - Run tests if applicable
               - Verify formatting
               - Check for linting errors
               - Address all hook failures before proceeding

        2.1.3. Run Pre-commit Manually
               - Always run pre-commit manually before committing:
               ```bash
               # Run pre-commit on all staged files
               pre-commit run
               ```
               - This helps identify and fix issues before the actual commit attempt
               - If pre-commit finds issues, fix them, stage the changes again, and re-run pre-commit

   2.2. Hook Management
        2.2.1. Handling Pre-commit Hooks
               When pre-commit hooks modify files (e.g., formatting):
               ```bash
               # Run pre-commit manually first (as mentioned in 2.1.3)
               pre-commit run

               # After fixing any issues detected by pre-commit run
               git add <files> && git commit -m "message"

               # If commit still fails because hooks modify files
               # Add all modified tracked files after hooks
               git add -u
               # Try commit again
               git commit -m "message"
               ```

        2.2.2. Post-Hook Review
               - Always review the changes made by hooks before recommitting
               - If hooks make multiple passes of changes, repeat the add-commit cycle until successful
               - Verify the hook-modified files still work as intended
               - Test the changes if the modifications were substantial
               - Don't blindly commit hook-modified files without review

<rule>
name: git_workflow
description: Rules for git commit workflow, conventional commits, and authorship
filters:
  - type: event
    pattern: "build_success"
  - type: file_change
    pattern: "*"

actions:
  - type: execute
    command: |
      # Extract the change type and scope from the changes
      CHANGE_TYPE=""
      case "$CHANGE_DESCRIPTION" in
        *"add"*|*"create"*|*"implement"*) CHANGE_TYPE="feat";;
        *"fix"*|*"correct"*|*"resolve"*) CHANGE_TYPE="fix";;
        *"refactor"*|*"restructure"*) CHANGE_TYPE="refactor";;
        *"test"*) CHANGE_TYPE="test";;
        *"doc"*|*"comment"*) CHANGE_TYPE="docs";;
        *"style"*|*"format"*) CHANGE_TYPE="style";;
        *"perf"*|*"optimize"*) CHANGE_TYPE="perf";;
        *) CHANGE_TYPE="chore";;
      esac

      # Extract scope from file path
      SCOPE=$(dirname "$FILE" | tr '/' '-')

      # Write commit description in Korean
      # NOTE: In a real implementation, <ACTUAL_AI_MODEL_NAME> would be replaced with the specific AI model's name
      git add "$FILE"
      git commit -m "$CHANGE_TYPE($SCOPE): $CHANGE_DESCRIPTION" -m "Co-authored-by: Cursor Composer (<ACTUAL_AI_MODEL_NAME>)"

  - type: suggest
    message: |
      Please ensure your commit follows:
      1. Conventional commits format
      2. Commit description written in Korean
      3. Includes AI authorship with the ACTUAL AI model used (not copied from examples)
      4. References relevant issues/tickets
      5. Uses multiple -m flags for multi-line messages (NEVER newlines)
      6. Run pre-commit manually before committing: `pre-commit run`
      7. Follows the pre-commit workflow process
      8. Has been properly reviewed after any hook modifications

examples:
  - input: |
      # After adding a new feature
      CHANGE_DESCRIPTION="사용자 인증 기능 추가"
      FILE="src/auth/login.ts"
    output: |
      # Replace <ACTUAL_AI_MODEL_NAME> with the specific AI model being used (e.g., GPT-4o, Claude 3 Opus, etc.)
      git commit -m "feat(src-auth): 사용자 인증 기능 추가" -m "Co-authored-by: Cursor Composer (<ACTUAL_AI_MODEL_NAME>)"

  - input: |
      # After fixing a bug with an issue reference
      CHANGE_DESCRIPTION="잘못된 날짜 파싱 수정"
      FILE="lib/utils/date.js"
    output: |
      # Replace <ACTUAL_AI_MODEL_NAME> with the specific AI model being used (e.g., GPT-4o, Claude 3 Opus, etc.)
      git commit -m "fix(lib-utils): 잘못된 날짜 파싱 수정" -m "Fixes #123" -m "Co-authored-by: Cursor Composer (<ACTUAL_AI_MODEL_NAME>)"

metadata:
  priority: high
  version: 1.0
</rule>