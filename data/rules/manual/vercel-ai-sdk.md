---
description: "Vercel AI SDK Implementation"
globs: "route.ts"
__meta__type: "guideline"
__meta__repo: "AskTinNguyen/AtherAgent"
__meta__service: "Vercel"
__meta__tags: ["AI","SDK","Error Handling","Streaming","Vercel"]
__meta__rate: 7
---
# Vercel AI SDK
- Always check the latest Vercel AI SDK documentation to avoid decrepatated code and syntax
- Use the Vercel AI SDK UI for implementing streaming chat UI.
- Use the Vercel AI SDK Core to interact with language models.
- Use the Vercel AI SDK RSC and Stream Helpers to stream and help with the generations.
- Implement proper error handling for AI responses and model switching.
- Implement fallback mechanisms for when an AI model is unavailable.
- Handle rate limiting and quota exceeded scenarios gracefully.
- Provide clear error messages to users when AI interactions fail.
- Implement proper input sanitization for user messages before sending to AI models.
- Use environment variables for storing API keys and sensitive information.