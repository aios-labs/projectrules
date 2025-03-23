---
description: "How to log out and remove authentication from Salesforce orgs"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "jlondrejcka/cursor-rules-sfdx"
__meta__service: "Salesforce"
__meta__tags: ["Salesforce","Authentication","Security","CLI","Best Practices"]
__meta__rate: 9
---
# Log Out of an Org

## Overview
Logging out from Salesforce orgs is an important security practice when you no longer need access or when you're working on shared computers. This rule explains how to properly log out from Salesforce orgs using the Salesforce CLI.

## Logging Out Commands

### Log Out from a Specific Org
To log out from a specific Salesforce org:

```bash
# Log out using the org alias
sf org logout --target-org MyOrgAlias

# Log out using the username
sf org logout --target-org username@example.com
```

### Log Out from All Orgs
To log out from all authenticated Salesforce orgs:

```bash
# Log out from all authenticated orgs
sf org logout --all
```

## What Happens During Logout

### Local Effects
- Removes the authentication credentials from your local secure storage
- Deletes the access and refresh tokens
- Removes the org from your list of authenticated orgs

### Remote Effects
- Revokes the OAuth refresh token on the Salesforce server
- Prevents the issuance of new access tokens with the revoked refresh token
- Terminates the authorization granted to the connected app

## Verifying Logout

### Check Authenticated Orgs
Verify that the org is no longer listed in your authenticated orgs:

```bash
# List all authenticated orgs
sf org list
```

### Check Specific Org Status
Attempting to access a logged-out org will result in an error:

```bash
# Attempt to display org info (will fail if logged out)
sf org display --target-org MyOrgAlias
```

## Scenarios for Logout

### Security and Maintenance
- When you finish working with an org
- When working on shared or public computers
- When a project is completed
- As part of regular security maintenance

### Troubleshooting
- When you encounter authentication issues
- When you need to reset the authentication context
- When switching between different users in the same org

### Team and Environment Changes
- When team members change roles
- When rotating access credentials
- When migrating between environments

## Best Practices

### Regular Cleanup
```bash
# View all authenticated orgs
sf org list

# Log out from unused orgs
sf org logout --target-org UnusedOrg1
sf org logout --target-org UnusedOrg2
```

### In Scripts and Automation
Include logout commands in your scripts after completing operations:

```bash
#!/bin/bash
# Authenticate
sf org login jwt --username user@example.com --jwt-key-file server.key --client-id $CLIENT_ID --alias TempOrg

# Perform operations
sf project deploy start --target-org TempOrg

# Log out when done
sf org logout --target-org TempOrg
```

### Shared Computers
Always log out after each session on shared computers:

```bash
# Log out from all orgs at the end of your session
sf org logout --all
```

## Troubleshooting Logout Issues

### Common Problems
1. **Command Failed**: Verify the org alias or username is correct
2. **Unable to Revoke Token**: Network or server issues may prevent proper revocation
3. **Org Still Listed**: Refresh your org list or restart the CLI

### Force Logout
In case of persistent issues, force removal of credentials:

```bash
# Force logout (will remove local credentials even if server revocation fails)
sf org logout --target-org MyOrgAlias --no-prompt
```

### Manual Cleanup
In extreme cases, you may need to manually clean up:

1. **MacOS**: Use Keychain Access to remove Salesforce entries
2. **Windows**: Use Credential Manager to remove Salesforce entries
3. **Linux**: Use your keyring manager to remove Salesforce entries

## Re-authenticating After Logout
After logging out, you'll need to authenticate again to access the org:

```bash
# Web-based authentication
sf org login web --alias MyOrgAlias

# JWT-based authentication
sf org login jwt --username user@example.com --jwt-key-file server.key --client-id $CLIENT_ID --alias MyOrgAlias
```

## Further Reading
For more information about authentication and logout, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_logout.htm)