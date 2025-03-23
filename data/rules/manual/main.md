---
description: "Project documentation"
globs: "*"
__meta__type: "guideline"
__meta__repo: "goosewin/inverview-agent"
__meta__service: "Vercel"
__meta__framework: "NextJS"
__meta__tags: ["Typescript","NextJS","Vercel","Authentication","Database"]
__meta__rate: 8
---
# InterviewAgent

## General Guidelines
- **Runtime:** Always use `bun` as the runtime environment.
- **Language & Framework:** Code must be written in TypeScript using Next.js 15.
- **Code Quality:** Follow ESLint/Prettier conventions; maintain modular, decoupled code with clear folder structure.
- **Documentation:** Comment non-trivial logic; include inline documentation for third-party integrations.

## Frontend Best Practices
- **UI Architecture:** Use Next.js 15 with app router; leverage shadcn/ui for consistent design.
- **Monaco Editor:** 
  - Integrate Monaco Editor for the coding panel with proper language configurations and themes.
  - Ensure the editor is responsive and optimized for performance.
- **State Management:** Use React hooks effectively; isolate UI state from API data.

## Authentication & Security
- **Clerk Integration:** 
  - Embed Clerk’s components and API calls for secure user authentication.
  - Protect routes and API endpoints accordingly.
- **Sensitive Data:** Use environment variables for API keys and secrets.

## API & Backend Guidelines
- **Next.js API Routes:** 
  - Build robust endpoints for session management, audio recording, cheating logs, transcription, and summary generation.
- **Database Integration:** 
  - Connect to Neon using official libraries; define clear data models for interview sessions, chat logs, audio, and code submissions.
- **Error Handling:** Implement comprehensive error checks and logging.

## Third-Party Service Integrations
- **AI Chat:** Integrate with ChatGPT/Mastra.ai API for dynamic, context-aware conversation.
- **Audio Recording:** 
  - Use the MediaRecorder API to capture candidate audio.
  - Ensure synchronization with AI text logs.
- **Transcription Service:** 
  - Connect asynchronously to a transcription API (AssemblyAI/Deepgram) for processing recorded audio.
- **Email Notifications:** Integrate Resend for automated email delivery.
- **Cheating Detection:** 
  - Use the Page Visibility API to detect tab/window changes.
  - Optionally capture keystroke events for additional monitoring.

## Testing & Debugging
- **Unit Testing:** Write tests for critical functions (e.g., API endpoints, audio processing).
- **Integration Testing:** Create sample flows for login, interview session, and summary generation.
- **Debugging:** Use structured logging and error reporting for quick issue resolution.

## Deployment
- **Vercel Deployment:** Ensure the project is deployable on Vercel with optimized build configurations.
- **Performance Optimization:** Focus on minimizing latency in UI updates and API responses.

## Docs
- https://orm.drizzle.team/docs/
- https://neon.tech/docs/
- https://nextjs.org/docs/
- https://sdk.vercel.ai/docs/
- https://posthog.com/docs/

---
*Follow these rules strictly to ensure code generation is efficient and aligned with our tech stack and project requirements.*