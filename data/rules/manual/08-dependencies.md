---
description: "Guidelines for 08-dependencies"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "relishinc/dill-pixel"
__meta__tags: ["Dependencies","Libraries","Version Control","Security","Integration"]
__meta__rate: 8
---
# Dependencies and External Libraries

## Evaluation Criteria
When choosing external dependencies, consider:
- Performance impact on game
- Compatibility with target platforms
- Active maintenance and community support
- Documentation quality
- Ease of integration and future upgrades

## Implementation Guidelines
- Carefully evaluate the need for external libraries or plugins
- Keep dependencies up to date and regularly audit for security issues
- Document all external dependencies and their purposes
- Maintain a clear dependency update strategy

## Native Plugin Management
- Handle native plugins in a centralized service
- Implement proper error handling for plugin failures
- Provide fallbacks for when plugins are unavailable
- Document plugin requirements and setup procedures

## Version Control
- Lock dependency versions for consistency
- Document breaking changes when updating dependencies
- Maintain a changelog for dependency updates
- Implement proper testing for dependency updates