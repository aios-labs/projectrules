---
description: "ALWAYS check back-links.json for correct redirect URLs when adding links in markdown documents"
globs: ["**/*.md"]
__meta__type: "guideline"
__meta__repo: "idvorkin/idvorkin.github.io"
__meta__tags: ["Markdown","Documentation","Linking","Best Practices","URL Management"]
__meta__rate: 8
---
# Link Conventions

<version>1.0.0</version>

## Context
- When adding internal links in markdown documents
- When referencing other blog posts or pages
- When creating navigation between related content

## Rule Details

When adding links in markdown documents:

1. Always check `back-links.json` to find the correct redirect URL
2. Use the format `[visible text](/redirect-url)`
3. Never use relative paths for internal links

### Steps to Find Correct URLs

1. Check `back-links.json` for the correct permalink
2. Use the permalink as the link URL, not the filename
3. Ensure the URL starts with a forward slash

## Examples

<example>
# Good: Using correct redirect URLs from back-links.json
[meditation](/siy)
[productivity](/productivity)
[technical skills](/technical-skills)
</example>

<example type="invalid">
# Bad: Using incorrect or non-redirect URLs
[meditation](/meditation)  # Wrong: should be /siy
[productivity](productivity.md)  # Wrong: using filename instead of permalink
[technical skills](../technical-skills)  # Wrong: using relative path
</example>

## Common Redirects

Some common redirects to be aware of:
- Meditation content: use `/siy` instead of `/meditation`
- Technical skills: use `/technical-skills` instead of `/tech`
- Management: use `/management` instead of `/managing`