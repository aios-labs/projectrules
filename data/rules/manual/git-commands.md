---
description: "Rules for handling git commands safely and effectively."
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "bayou-brogrammer/go-rl"
__meta__tags: ["Git","Version Control","Best Practices","Command Line","Software Development"]
__meta__rate: 9
---
<rule>
name: git_commands
description: Standards for using git commands safely and effectively
filters:
  - type: content
    pattern: "(?m)^\\s*git\\s+"

actions:
  - type: reject
    conditions:
      - pattern: "git push\\s+(?!--force-with-lease).*-f"
        message: "Use --force-with-lease instead of -f/--force for safer force pushes"
      - pattern: "git commit\\s+(?!.*-S).*-m"
        message: "Commits should be signed with -S"
      - pattern: "git tag\\s+(?!.*-s).*v[0-9]"
        message: "Version tags should be signed with -s"

  - type: suggest
    message: |
      When using git commands:

      1. Force pushes:
         ```bash
         # Bad: Unsafe force push
         git push -f
         git push --force

         # Good: Safe force push
         git push --force-with-lease
         ```

      2. Commit signing:
         ```bash
         # Bad: Unsigned commit
         git commit -m "message"

         # Good: Signed commit
         git commit -S -m "message"
         ```

      3. Tag signing:
         ```bash
         # Bad: Unsigned version tag
         git tag v1.0.0

         # Good: Signed version tag
         git tag -s v1.0.0 -m "Version 1.0.0"
         ```

      4. Branch management:
         ```bash
         # Create and switch to new branch
         git switch -c feature/name

         # Delete branch safely
         git branch -d branch-name  # Fails if not merged
         git branch -D branch-name  # Force delete, use with caution
         ```

      5. Commit messages:
         - Follow conventional commits format
         - Include scope when relevant
         - Use imperative mood
         ```bash
         git commit -S -m "feat(scope): add new feature"
         git commit -S -m "fix(scope): resolve bug"
         ```

examples:
  - input: |
      # Bad: Unsafe git commands
      git push -f
      git commit -m "message"
      git tag v1.0.0

      # Good: Safe git commands
      git push --force-with-lease
      git commit -S -m "message"
      git tag -s v1.0.0 -m "Version 1.0.0"
    output: "Git commands that follow security best practices"

metadata:
  priority: high
  version: 1.1
</rule>