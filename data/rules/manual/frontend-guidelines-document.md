---
description: "Frontend Guideline Document"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "lxfschr/sat-quiz-app"
__meta__framework: "React"
__meta__tags: ["Frontend","Real-time Communication","UI Design","React","TypeScript"]
__meta__rate: 8
---
# Frontend Guideline Document

## 1. Introduction

Our **SAT Word Quiz Show** uses a **three-screen** model to deliver a fun, educational experience:

1.  **Public Shared Screen (Game Board)**: Shown on a large display/TV, featuring the current question, hints, animations, and scoreboard.
2.  **Player Screen**: Each participant’s personal device for inputting answers.
3.  **Host Control Screen**: The host’s interface for managing rounds, revealing hints, and controlling when to show correctness or final scores.

The goal is to create a **highly interactive**, **real-time** environment where teenagers can learn SAT vocabulary through an engaging, quiz-show-style format. This document outlines the **frontend architecture, design principles, and technical practices** needed to achieve that vision.

## 2. Frontend Architecture

1.  **Core Framework**: **React**

    *   Chosen for its **component-based** architecture, robust ecosystem, and easy integration with real-time data.
    *   **Hooks** (e.g., `useState`, `useEffect`, `useContext`) to manage local UI logic and side effects.
    *   Encouraged to use **TypeScript** (if feasible) to improve developer productivity and code quality.

2.  **UI Component Library**: **HeadlessUI + Tailwind**

    *   For all UI components such as buttons, inputs, menus, etc.
    *   Style using the aesthetic described in the product-requirements-document.

3.  **Real-Time Communication**

    *   The UI must reflect state changes (new questions, scoreboard updates, hint reveals) with minimal delay.
    *   Rely on **WebSockets** (via Supabase Realtime or [Socket.io](mdc:http:/Socket.io)) to broadcast changes and maintain synchronization across all three screens.

4.  **Folder & Component Structure**

    *   **/components**: Shared UI elements (e.g., buttons, modals, scoreboard widgets).

    *   **/screens**:

        *   **/PublicScreen**: Main game board.
        *   **/PlayerScreen**: Input and question display for individual players.
        *   **/HostScreen**: Host’s management interface (hints, reveal correctness, progress to next round).

    *   **/hooks**: Reusable logic for real-time data subscription, scoreboard updates, etc.

    *   **/utils**: Helper functions (e.g., format timers, orchestrate audio triggers).

## 3. Design & Branding Principles

1.  **Teen-Focused Aesthetic**

    *   Vibrant but not childish. Aim for **modern, clean** visuals with readable typography.
    *   Avoid overly “cartoonish” elements; incorporate subtle animations and color schemes that resonate with high school audiences.

2.  **Accessibility & Simplicity**

    *   Meet **WCAG** guidelines for color contrast and text size. Some teens may have visual or reading difficulties.
    *   Provide clear CTAs and large tap targets, especially on mobile (Player Screens).

3.  **Consistent Brand Elements**

    *   Standard color palette for backgrounds, highlights, and text, ensuring uniformity across screens.
    *   Use a **theming system** (e.g., via CSS variables or a SASS color map) so the scoreboard, question panels, and host controls share the same look and feel.

4.  **Audio & Visual Engagement**

    *   Dynamic sound effects for correct/incorrect answers (cue a short “fanfare” for correct or “buzz” for incorrect).
    *   Looping background music or countdown timers for tension. Let the host toggle volume or switch off music if desired.

## 4. Styling & Theming

1.  **CSS Methodology**

    *   **CSS Modules** or **styled-components** to scope styles at the component level. Alternatively, SASS with a **BEM** approach for clarity and maintainability.

2.  **Theme Variables**

    *   Variables for primary/secondary colors, font sizes, spacing units. Keep them in a single file (`/styles/_variables.scss` or a theme config) for easy editing.

3.  **Responsive Layout**

    *   **Mobile-First** breakpoints for smaller screens (Player device), scaling up to large displays (Public Screen).
    *   Be mindful that the **Public Shared Screen** might be 1080p or higher, so design for large or wide aspect ratios.

## 5. Component Structure & Best Practices

1.  **Reusable UI Components**

    *   **Buttons, Card Containers, Modal Overlays** that can adapt to different screens with minimal styling changes.

2.  **Game-Specific Components**

    *   **QuestionPanel**: Renders current question and optional hints.
    *   **LockInButton**: Displays status if the player has locked in or not.
    *   **Scoreboard**: Can appear on the **Public Screen** in a larger, animated form, or a minimal form on Player/Host screens.

3.  **Host Controls**

    *   A dedicated **ControlBar** or **ControlPanel** for toggling hints, revealing correctness, and progressing to next question.
    *   Ensure the host’s component architecture is separate from the player logic.

## 6. State Management

1.  **Global vs. Local State**

    *   Use local React state for straightforward UI toggles (e.g., a dropdown’s open/close status).

    *   Store **game session** and **player states** in a global store or within a React context. For instance:

        *   `GameContext` for round number, question index, scoreboard.
        *   Could integrate a library like **Redux** or **Zustand** if the state complexity grows.

2.  **Real-Time Synchronization**

    *   Subscribe to **WebSocket** channels that broadcast new questions, scoreboard updates, or hint reveals.
    *   Ensure the Player and Public Screen UIs automatically rerender on relevant events (i.e., `onMessage` from the server updates the shared `gameState` in context).

## 7. Routing & Navigation

1.  **Top-Level Routes**

    *   **/public/:sessionCode** → Public Shared Screen for the current game session.
    *   **/player/:sessionCode** → Player’s screen for that session.
    *   **/host/:sessionCode** → Host’s control interface.

2.  **URL-Based**

    *   Use **React Router** or a Next.js-based approach for dynamic routes.
    *   The 4-character session code can be part of the path or a query param.

3.  **Handling Invalid Codes**

    *   If a user enters an invalid or expired session code, redirect to an error or “Session Not Found” screen with a prompt to create or join another session.

## 8. Performance Optimization

1.  **Lazy Loading & Code Splitting**

    *   Use dynamic imports (e.g., `React.lazy`) to load the scoreboard animations only when needed.

2.  **Asset Management**

    *   Minimize large audio files; use compressed formats (mp3, ogg).
    *   Leverage sprite sheets for animations rather than multiple individual image files where possible.

3.  **Caching & Preloading**

    *   Preload essential game assets (fonts, primary sounds) during the lobby/waiting state so gameplay is smooth once started.

4.  **Real-Time Event Efficiency**

    *   Throttle or debounce some events if the user’s actions (e.g., repeated hint requests) might spam the server or block rendering.

## 9. Testing & QA

1.  **Unit Tests**

    *   Use **Jest** or **Vitest** with React Testing Library to ensure each component (QuestionPanel, Scoreboard, HostControl) behaves as expected.

2.  **Integration Tests**

    *   Validate that the **Public Screen** updates when the host reveals a hint, or that players can see correct/incorrect feedback in real time.

3.  **End-to-End Tests**

    *   Use **Cypress** or **Playwright** to simulate actual user flows:

        1.  Player joins with a session code
        2.  Host starts game, reveals hints, checks scoreboard
        3.  Player locks in answers, sees final result.

4.  **Cross-Browser & Device Testing**

    *   Verify on Chrome, Firefox, Safari, and mobile browsers.
    *   Ensure the UI scales well on big screens and older devices.

## 10. Additional Frontend Recommendations

1.  **Consistent Development Practices**

    *   **ESLint** + **Prettier** for code style and formatting.
    *   Enforce commit hooks (e.g., Husky) to run lint and tests.

2.  **Audio Toggle & Volume Control**

    *   Provide a simple UI element to mute or reduce volume (particularly if used in a classroom).

3.  **Internationalization (Future)**

    *   While primarily English-based for SAT vocab, structure text strings so translation can be added if needed.

4.  **Edge Cases**

    *   Handle scenario where no host is present (or the host disconnects). Provide graceful failover or pause.
    *   Manage session state if the Public Screen refreshes or loses connectivity.

## 11. Conclusion

These **Frontend Guidelines** aim to ensure a **cohesive**, **high-performance**, and **engaging** experience for all users—players, hosts, and spectators. By leveraging **React** for structure, and robust **real-time** state handling, we create a quiz show environment that **teenagers** find motivating, **teachers/hosts** find manageable, and **developers** can easily maintain and iterate upon.