---
description: "About the project, tech stack and repository structure"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "talkable/talkable-docs"
__meta__tags: ["Documentation","Sphinx","Docker","Nginx","reStructuredText"]
__meta__rate: 7
---
## About Project

This is the official documentation for Talkable's capabilities, publicly available at docs.talkable.com.

## Technology Stack

- Uses reStructuredText (reST) as the markup language
- Built with Sphinx, an open-source documentation generation tool
- Containerized using Docker and Docker Compose
- Uses Nginx as the web server

## Repository Structure

- `source/` directory contains the actual documentation content
- `nginx/` directory contains web server configurations
- `deploy/` directory contains deployment-related files
- Has multiple README files for different purposes (main, maintainer, devops)