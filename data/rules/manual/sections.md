---
description: "Using HTMX you often get multiple paths that all render the same section of a web page. Make these sections reusable instead of repeating yourself."
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "Hortashaorg/auro"
__meta__tags: ["HTMX","Web Development","Reusable Components","Frontend","Best Practices"]
__meta__rate: 7
---
# Section Rules

- Sections should always have a unique ID for HTMX targeting
- IDs should be descriptive and follow kebab-case naming convention
- Sections that may be re-rendered via HTMX should use consistent IDs
- Section IDs should match their HTMX target selectors.
- The use of sections in this way is the enforce the pattern of rerendring a section after a change have been submitted to the server.