---
description: "Rules for Node.js configuration and build processes"
globs: "**/*.ts, **/*.tsx, package.json, next.config.js"
__meta__type: "guideline"
__meta__repo: "andrewrbrady/motive-archive-manager"
__meta__tags: ["Node.js","npm","Configuration","Homebrew","Build Processes"]
__meta__rate: 8
---
# Node.js and npm Configuration Rules

## Homebrew npm Usage

- DO NOT run `npm run dev` as the user already has it running in a separate terminal
- IMPORTANT: AI assistants should NEVER attempt to start the development server
- The user will provide feedback from the running development server when needed
- For testing changes, rely on the user's existing development server instance

When running npm commands, always use the Homebrew-installed version. The npm binary is located at:

```
/opt/homebrew/bin/npm
```

### Important Guidelines:

1. Always use the full path to npm when running commands:

   ```bash
   /opt/homebrew/bin/npm install
   /opt/homebrew/bin/npm run dev
   ```

2. Environment Setup:

   - PATH should include: `/opt/homebrew/bin`
   - When running terminal commands, ensure the PATH is properly set:

   ```bash
   export PATH="/opt/homebrew/bin:$PATH"
   ```

3. Troubleshooting:

   - If npm is not found, first verify Homebrew installation:
     ```bash
     /opt/homebrew/bin/brew doctor
     ```
   - Check npm installation:
     ```bash
     /opt/homebrew/bin/brew list npm
     ```

4. Version Management:
   - Use Homebrew to update npm:
     ```bash
     /opt/homebrew/bin/brew upgrade npm
     ```
   - Check current version:
     ```bash
     /opt/homebrew/bin/npm --version
     ```

## Project-specific npm Configuration

- Node version: Use the version specified in `.nvmrc` or `package.json`
- Always use `--save-exact` when adding new dependencies
- Use `npm ci` for clean installs in CI/CD environments

## Script Execution

When running npm scripts, always use the full path:

```bash
/opt/homebrew/bin/npm run [script-name]
```

This ensures consistency and avoids any PATH-related issues.