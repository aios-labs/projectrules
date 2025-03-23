---
description: "Rules for creating and formatting git commits"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "AlphaGit/worklogger"
__meta__tags: ["Git","Version Control","Commit Messages","Best Practices","Conventional Commits"]
__meta__rate: 9
---
rules:
- name: Commit Verification
    description: |
    Before executing any commit:
    1. Present the proposed commit message for review
    2. Wait for explicit approval before proceeding
    3. If changes to the commit message are requested, present the updated message for review again
    4. Only proceed with the commit after receiving explicit approval

- name: Commit Message Structure
    description: |
    Commit messages should follow the Conventional Commits specification with a clear structure:
    1. Type and scope (required)
    2. Description (required)
    3. Body (optional)
    4. Footer (optional)

- name: Commit Types
    description: |
    Use one of these types as prefix:
    - feat: New features or significant functionality additions
    - fix: Bug fixes
    - docs: Documentation changes only
    - style: Code style changes (formatting, missing semi-colons, etc)
    - refactor: Code changes that neither fix bugs nor add features
    - perf: Performance improvements
    - test: Adding or modifying tests
    - chore: Maintenance tasks, dependency updates, etc

- name: Message Format
    description: |
    Format commit messages as follows:
    ```
    <type>(<optional scope>): <description>

    [optional body]

    [optional footer]
    ```

    For bodies with bullet points:
    ```
    <type>(<optional scope>): <description>

    - First bullet point
    - Second bullet point
    - Third bullet point

    [optional footer]
    ```

- name: Guidelines
    description: |
    - Use imperative mood in the description (e.g., "add" not "added")
    - First line should be 50 characters or less
    - Wrap body text at 72 characters
    - Use bullet points for multiple changes
    - Reference issues/tickets where applicable
    - Separate subject from body with a blank line
    - Use the body to explain what and why vs. how

- name: Examples
    description: |
    Simple commit:
    ```
    feat: add user authentication
    ```

    Commit with scope:
    ```
    feat(auth): implement JWT token validation
    ```

    Commit with body:
    ```
    feat(api): add new endpoint for timesheet submission

    - Add POST /api/timesheets endpoint
    - Implement request validation
    - Add integration tests for the new endpoint

    Closes #123
    ```

- name: Breaking Changes
    description: |
    For breaking changes:
    1. Add ! after the type/scope
    2. Add BREAKING CHANGE: in the footer

    Example:
    ```
    feat(api)!: change authentication endpoint response format

    - Change token format from JWT to opaque token
    - Modify response structure to include expiration

    BREAKING CHANGE: Authentication response format has changed
    ```

- name: Commit Command Format
    description: |
    Indications of how to construct the git commit command to be executed:

    1. Use a single `-m` parameter, avoid using multiple
    2. Include the entire message including newlines
    3. Show the proper format with the command

    Example:
    ```
    git commit -m "feat(api): change authentication endpoint response format
    ```

    Example 2:
    ```
    git commit -m  "feat(api): change authentication format\n- Change token format from JWT to opaque token"
    ```