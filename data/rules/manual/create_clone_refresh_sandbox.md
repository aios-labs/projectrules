---
description: "How to create, clone, or refresh Salesforce sandboxes using Salesforce DX"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "jlondrejcka/cursor-rules-sfdx"
__meta__service: "Salesforce"
__meta__tags: ["Salesforce DX","Sandbox Management","Development Environment","Testing","CLI"]
__meta__rate: 7
---

# Create, Clone, or Refresh a Sandbox

## Overview
This rule explains how to create new sandboxes, clone existing ones, or refresh sandboxes using Salesforce DX. These operations are crucial for maintaining development and testing environments.

## Key Concepts
- **Create**: Build a new sandbox environment
- **Clone**: Make a copy of an existing sandbox
- **Refresh**: Update an existing sandbox with new data from production

## Prerequisites
- Production org authorization
- Sandbox definition file (for non-interactive operations)
- Appropriate permissions in the org

## Creating a New Sandbox
### Using CLI Command
```bash
sf org sandbox create --definition-file config/sandbox-def.json --async
```

### Monitoring Sandbox Creation
```bash
sf org sandbox create status --job-id <job_id>
```

## Cloning a Sandbox
To clone a sandbox, include the `cloneFrom` property in your definition file:
```json
{
  "sandboxName": "ClonedSandbox",
  "licenseType": "DEVELOPER",
  "description": "Cloned from DevSandbox",
  "cloneFrom": "DevSandbox",
  "autoActivate": true
}
```

Then create the sandbox using:
```bash
sf org sandbox create --definition-file config/clone-sandbox-def.json --async
```

## Refreshing a Sandbox
Refreshing resets a sandbox with fresh data from production:

```bash
sf org sandbox refresh --name ExistingSandbox --async
```

Or using a definition file:
```bash
sf org sandbox refresh --definition-file config/refresh-sandbox-def.json --async
```

## Accessing a Sandbox
After creation or refresh, you need to authorize to the sandbox:

```bash
sf org login web --instance-url https://test.salesforce.com --alias mySandbox
```

## Common Options
- `--async`: Run the command asynchronously
- `--definition-file`: Path to the sandbox definition file
- `--name`: Name of the sandbox for refresh operations
- `--job-id`: ID of the job for checking status

## Best Practices
1. Create sandboxes with descriptive names that indicate their purpose
2. Use post-copy scripts to automate configuration after refresh
3. Track sandbox definition files in version control
4. Regularly refresh test environments with production data
5. Monitor sandbox usage and limits in your org

## Troubleshooting
- If a sandbox creation fails, check the job status for error details
- Ensure you have the necessary sandbox licenses available
- Verify that the sandbox name is unique within your org

## Further Reading
- [Salesforce Sandbox Management](https://help.salesforce.com/articleView?id=sf.data_sandbox_manage.htm)
- [Sandbox Post-Copy](https://help.salesforce.com/articleView?id=sf.data_sandbox_postcopy_script.htm)