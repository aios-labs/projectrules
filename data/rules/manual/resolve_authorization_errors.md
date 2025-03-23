---
description: "How to resolve common authorization errors when working with Salesforce DX"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "jlondrejcka/cursor-rules-sfdx"
__meta__service: "Salesforce"
__meta__tags: ["Salesforce DX","Authorization","Troubleshooting","Salesforce CLI","Authentication"]
__meta__rate: 8
---
---
description: How to resolve common authorization errors when working with Salesforce DX
globs:
alwaysApply: false
---
# Resolve Common Authorization Errors

## Overview
This guide helps you troubleshoot and resolve common authorization errors encountered when working with Salesforce DX and Salesforce CLI.

## Key Concepts
- Web-based authentication errors
- JWT-based authentication errors
- Common error messages and their resolutions
- Troubleshooting strategies

## Common Auth Errors and Solutions

### Org Login Web Errors
Web-based authentication can fail for several reasons:

1. **Authentication Server Error**
   - Error: "Authentication server returned 'server error'"
   - Resolution: Try the authentication again or use a different browser

2. **Invalid Client ID**
   - Error: "error=invalid_client_id"
   - Resolution: Verify the connected app's consumer key is correct

3. **Redirect URI Mismatch**
   - Error: "error=redirect_uri_mismatch"
   - Resolution: Ensure the callback URL in your connected app configuration matches the one used by CLI

4. **Browser Issues**
   - Resolution: Clear browser cache or try a different browser

### Org Login JWT Errors
JWT-based authentication issues:

1. **Invalid Private Key or Certificate**
   - Error: "Failed: The JWT assertion is invalid"
   - Resolution: Verify the private key and certificate are valid and correctly formatted

2. **Username/Connected App Mismatch**
   - Error: "Failed: Is your connected app configured to allow this user access?"
   - Resolution: Ensure the user has access to the connected app

3. **Expired Certificate**
   - Resolution: Generate a new certificate and update your connected app

## Troubleshooting Steps

1. **Verify authorization information**
   ```bash
   sf org display auth
   ```

2. **Log out and reauthorize**
   ```bash
   sf org logout -o username@example.com
   sf org login web -a MyOrg
   ```

3. **Check connected app settings** in your Salesforce org

4. **Regenerate certificates** if using JWT-based auth and experiencing issues
   ```bash
   sf org display auth -o username@example.com --verbose
   ```

## Best Practices
1. Use unique alias names for each org to avoid confusion
2. Regularly verify your authorizations using `sf org list`
3. For automated processes, use JWT-based auth instead of web-based auth
4. Keep private keys secure and rotate certificates periodically

## Further Reading
- [Salesforce CLI Authentication Commands](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_auth.htm)
- [Salesforce DX Developer Guide: Authorization](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm)