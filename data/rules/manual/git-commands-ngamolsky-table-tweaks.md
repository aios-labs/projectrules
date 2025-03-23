---
description: "Git Commands and Conventions"
globs: "*("
__meta__type: "guideline"
__meta__repo: "ngamolsky/table-tweaks"
__meta__original_filename: "git-commands"
__meta__duplicate: "true"
__meta__tags: ["Git","Version Control","Zsh","Command Line","Best Practices"]
__meta__rate: 7
---
 # Git Commands and Conventions

## Oh-My-Zsh Git Shortcuts

This project uses Oh-My-Zsh which provides many helpful Git shortcuts. Here are the most commonly used ones:

### Basic Commands
- `g` = `git`
- `gst` = `git status`
- `ga` = `git add`
- `gaa` = `git add --all`
- `gc` = `git commit -v`
- `gcmsg` = `git commit -m`
- `gp` = `git push`
- `gl` = `git pull`

### Branch Management
- `gb` = `git branch`
- `gco` = `git checkout`
- `gcb` = `git checkout -b`
- `gbd` = `git branch -d`
- `gsw` = `git switch`
- `gswc` = `git switch -c`

### Viewing Changes
- `gd` = `git diff`
- `gdca` = `git diff --cached`
- `gds` = `git diff --staged`
- `glg` = `git log --stat`
- `glo` = `git log --oneline --decorate`
- `gloga` = `git log --oneline --decorate --graph --all`

### Stashing
- `gsta` = `git stash push`
- `gstp` = `git stash pop`
- `gstl` = `git stash list`
- `gstc` = `git stash clear`

### Remote Operations
- `gf` = `git fetch`
- `gfa` = `git fetch --all --prune`
- `grv` = `git remote -v`
- `gpsup` = `git push --set-upstream origin $(git_current_branch)`

## Commit Message Conventions

When automatically creating commit messages, follow these conventions:

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries

### Scope
The scope should be the name of the component affected (e.g., `auth`, `database`, `ui`, etc.)

### Subject
- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No period (.) at the end

### Body
- Use the imperative, present tense
- Include motivation for the change and contrast with previous behavior

### Footer
- Reference issues that this commit closes (e.g., `Closes #123, #456`)
- Breaking changes should start with `BREAKING CHANGE:`

## Automated Git Workflow

When asked to save changes, the AI should:

1. Check the status of the repository with `gst` (git status)
2. Identify changed files
3. Review the changes with `gd` (git diff)
4. Stage appropriate files with `ga` or `gaa`
5. Create a commit message following the conventions above
6. Commit changes with `gcmsg "type(scope): subject"`
7. Push changes if requested with `gp`

### Example Prompts

- "Save my changes" - The AI should check status, stage files, generate an appropriate commit message, and commit
- "Commit these changes as a bug fix" - The AI should use the `fix` type in the commit message
- "Push my changes to the remote repository" - The AI should commit and then push
- "Create a new branch for this feature" - The AI should create a new branch with `gcb` or `gswc`

### Analyzing Changes for Commit Messages

When generating commit messages, the AI should:

1. Analyze the diff to understand what changed
2. Determine the appropriate type based on the nature of the changes
3. Identify the scope based on which components were modified
4. Write a clear, concise subject that describes what the change does
5. Include relevant details in the body if necessary

For example, if changes include adding a new button to the UI, the commit message might be:
```
feat(ui): add submit button to user profile form
```

If fixing a bug in the authentication flow, the commit message might be:
```
fix(auth): resolve token expiration handling
```