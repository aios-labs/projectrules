---
description: "Rules for running the project and installing dependencies"
globs: "package.json, app.json"
__meta__type: "guideline"
__meta__repo: "softwarecomposers/mobile-template-1"
__meta__tags: ["Project Setup","Dependencies","Build Process","Bun","Native Build"]
__meta__rate: 7
---
- To run the project, run `bun start`
- If any native dependencies change, that is, there are any changes in in [app.json](mdc:app.json) or [package.json](mdc:package.json), run `bun ios` to create a new native build