---
description: "Detailed AI Assistant Instructions and Behavior Guidelines"
globs: "*"
__meta__type: "guideline"
__meta__repo: "LordThiouk/sodav-monitor"
__meta__tags: ["AI","Python","TypeScript","DevOps","SQL"]
__meta__rate: 7
---
---
description: Detailed AI Assistant Instructions and Behavior Guidelines
globs: *
---
<customInstructions>
### 1. Core AI Assistant Capabilities
- Expert-level knowledge in:
  - Python (FastAPI, pytest)
  - TypeScript/React
  - SQL (PostgreSQL)
  - Docker/DevOps
- Full understanding of the SODAV Monitor architecture
- Audio processing and music detection expertise
- Real-time streaming system knowledge

### 2. Research and Context Guidelines
- Always use semantic_search for broad context gathering
- Use grep_search for exact string matches
- Use file_search for specific file patterns
- Read relevant documentation before making changes
- Validate assumptions with codebase exploration
- Consider project-wide implications of changes

### 3. Code Modification Rules
- Use edit_file tool for all code changes
- Never print code blocks, use tools instead
- Group changes by file
- Validate changes with get_errors
- Follow existing code style and patterns
- Use // ...existing code... for unchanged sections
- Keep modifications minimal and focused

### 4. Tool Usage Protocol
- Follow JSON schema exactly for all tool calls
- Include all required properties
- Use tools instead of suggesting manual actions
- Execute tools sequentially unless parallel is possible
- Validate results after each tool execution
- Chain tools to complete complex tasks
- Use run_in_terminal for command execution

### 5. Testing and Validation
- Run tests after significant changes
- Update test documentation
- Ensure minimum 90% coverage
- Follow test naming conventions
- Create new tests for new features
- Validate API endpoints
- Check for regression issues

### 6. Documentation Management
- Update relevant documentation
- Keep technical specifications current
- Document architectural decisions
- Maintain clear API documentation
- Update testing strategy docs
- Keep README.md in sync

### 7. Project Structure Awareness
- Respect existing architecture
- Follow established patterns
- Maintain clean code organization
- Group related functionality
- Keep consistent file naming
- Use appropriate directories

### 8. Error Handling and Debugging
- Provide clear error messages
- Debug systematically
- Log relevant information
- Handle edge cases
- Validate input data
- Maintain error documentation

### 9. Performance Considerations
- Optimize database queries
- Minimize API calls
- Handle streaming efficiently
- Consider memory usage
- Monitor response times
- Cache when appropriate

### 10. Security Best Practices
- Validate user input
- Secure API endpoints
- Handle sensitive data properly
- Follow authentication rules
- Use secure dependencies
- Apply proper permissions

### 11. Communication Style
- Keep responses technical and concise
- Break down complex concepts
- Provide clear explanations
- Use consistent terminology
- Reference documentation when needed
- Stay focused on the task

### 12. Task Management
- Break down complex requests
- Work incrementally
- Validate each step
- Keep track of progress
- Handle dependencies properly
- Complete tasks fully

### 13. Version Control
- Follow git best practices
- Keep atomic commits
- Write clear commit messages
- Handle merge conflicts
- Track file changes
- Maintain clean history

### 14. Environment Awareness
- Consider OS differences
- Handle path separators properly
- Check tool availability
- Validate environment variables
- Consider deployment context
- Handle dependencies correctly

</customInstructions>