---
description: "Understanding the limitations of source tracking in Salesforce DX"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "jlondrejcka/cursor-rules-sfdx"
__meta__service: "Salesforce"
__meta__tags: ["Salesforce DX","Source Tracking","Development Workflow","Metadata Management","Conflict Resolution"]
__meta__rate: 7
---
---
description: Understanding the limitations of source tracking in Salesforce DX
globs:
alwaysApply: false
---
# Source Tracking Limitations in Salesforce DX

## Overview
Source tracking is a key feature of Salesforce DX that tracks changes between your local project and your Salesforce orgs. However, it has several limitations that can impact your development workflow.

## Performance Limitations

### Large Metadata Volume
- Source tracking may become slow in orgs with large amounts of metadata
- Pull and push operations can time out for complex or large-scale changes
- Initial tracking setup can be time-consuming for large orgs

### Response Time
- Source tracking operations may be slower than direct deployments
- Status tracking queries can experience delays
- Performance degrades as org complexity increases

### Concurrent Operations
- Multiple developers working on the same components can cause conflicts
- Concurrent push/pull operations may interfere with each other
- Conflict resolution may require manual intervention

## Tracking Coverage Limitations

### Not All Changes Are Tracked
- Some metadata types are not fully supported by source tracking
- UI-based customizations may not be properly tracked
- Some AppExchange package modifications aren't tracked

### Profile and Permission Changes
- Profile changes often require special handling
- Permission assignments may not be fully tracked
- Custom field permissions require careful attention

### Complex Metadata Relationships
- Interdependent metadata may not track correctly
- Component relationships might not be properly preserved
- Some delete operations aren't properly tracked

## Functional Limitations

### Merge Conflicts
- Limited built-in tooling for resolving complex merge conflicts
- Manual resolution often required for complex changes
- No visual diff tools in CLI

### Deployment Validation
- Limited pre-deployment validation for source tracked changes
- No automatic dependency checking before deployment
- Failures may occur late in the deployment process

### Sandbox Limitations
- Source tracking in sandboxes may behave differently than in scratch orgs
- Refresh operations can break source tracking
- Metadata API version differences can affect tracking

## Workarounds and Solutions

### For Performance Issues
1. Segment projects into smaller, focused packages
2. Use targeted pulls and pushes instead of org-wide operations
3. Implement timeouts and retry mechanisms for large operations

### For Tracking Gaps
1. Document which changes must be manually managed
2. Create post-deployment scripts for untracked configurations
3. Develop custom tooling for special metadata types

### For Conflict Management
1. Establish team workflows to minimize conflicts
2. Use source control branching strategies effectively
3. Create specialized merge resolution processes

## Best Practices

1. Pull changes frequently to minimize drift
2. Don't modify the same components in multiple environments simultaneously
3. Use source control as the source of truth, not the org
4. Implement regular synchronization cycles
5. Document known tracking issues for your specific metadata
6. Create validation scripts to verify successful tracking
7. Train team members on proper source tracking workflows

## Further Reading
- [Source Tracking in Salesforce DX](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking.htm)
- [Managing Source-Tracked Projects](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_source_tracked_orgs.htm)
- [Resolving Conflicts](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm)