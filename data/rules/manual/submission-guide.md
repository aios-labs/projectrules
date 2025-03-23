---
description: "Guide When preparing code for submission"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "zrma/1d1rust"
__meta__tags: ["Code Submission","Rust","Best Practices","Templates","Programming"]
__meta__rate: 8
---
# Code Submission Guide
When preparing code for submission:

1. Use submit_template.rs as the base template
2. Make sure to name the solution function as solve#### where #### is the problem number
   - Example: For problem 1000, use solve1000 instead of just solve
3. When the code is ready, paste the complete submission code in the chat
   - This allows for a final review before actual submission
4. The submission code should be self-contained and include all necessary functions from the template
5. NEVER modify the template's boilerplate code:
   - Do not modify the read_values_as! macro
   - Do not modify the read_value and read_line functions
   - Do not change the function order specified in the template
   - Only implement the problem-specific logic in the solve#### function