---
description: "Guidelines for json_files"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "ProgramComputer/CookCut"
__meta__tags: ["JSON","Configuration","Version Control","Documentation","Approval Process"]
__meta__rate: 8
---
# JSON Files Modification Policy

## Core Rules

1. **Explicit Permission Required**
   - All JSON file modifications require explicit user permission
   - This includes package.json, tsconfig.json, and any other .json configuration files
   - Changes must be proposed and approved before implementation

2. **Documentation Requirements**
   - Document all proposed changes with:
     - Current state
     - Proposed modifications
     - Rationale for changes
     - Potential impact

3. **Version Control**
   - Track all JSON file modifications
   - Keep backup of original configuration
   - Document version history

## Workflow

1. **Change Request**
   - Present proposed changes
   - Wait for explicit approval
   - No automatic modifications

2. **Implementation**
   - Only proceed after approval
   - Follow exact approved changes
   - No additional modifications

3. **Verification**
   - Confirm changes match approval
   - Validate JSON syntax
   - Test affected functionality

## File Patterns

```glob
**/*.json
**/package.json
**/tsconfig.json
**/angular.json
**/composer.json
```

## Exceptions

1. **Emergency Fixes**
   - Critical security updates
   - Breaking dependency resolutions
   - Still requires post-change notification

2. **Automated Processes**
   - npm install (package-lock.json)
   - yarn (yarn.lock)
   - Must be explicitly initiated by user