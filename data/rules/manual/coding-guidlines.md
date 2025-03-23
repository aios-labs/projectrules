---
description: "Guidelines for coding-guidlines"
globs: "/*.ts,/.tsx,**/.css"
__meta__type: "guideline"
__meta__repo: "calvin22580/myresearch"
__meta__framework: "NextJS"
__meta__tags: ["Coding Standards","Project Structure","Typescript","React","NextJS"]
__meta__rate: 7
---
# Frontend & Backend Guidelines

This rule establishes coding standards and architectural patterns for My-Research.ai.

## When to Apply
Apply when writing or reviewing code to ensure consistency with project standards.

## File Patterns
**/*.ts
**/*.tsx
**/*.css


## 1. Project Structure

### 1.1 Directory Structure

my-research.ai/
├── app/                            # Next.js App Router
│   ├── (auth)/                     # Auth-related routes
│   │   ├── sign-in/[[...sign-in]]/ # Clerk sign-in pages
│   │   └── sign-up/[[...sign-up]]/ # Clerk sign-up pages
│   ├── (dashboard)/                # Protected application routes
│   │   ├── conversations/          # Conversation pages
│   │   ├── profile/                # User profile pages
│   │   └── subscription/           # Subscription pages
│   ├── (marketing)/                # Public marketing pages
│   │   ├── building-regulations/   # Domain-specific landing pages
│   │   ├── health-safety/
│   │   └── ...
│   ├── api/                        # API routes
│   │   ├── assistant/              # Pinecone Assistant endpoints
│   │   ├── credits/                # Credit management endpoints
│   │   ├── pdfs/                   # PDF management endpoints
│   │   └── webhooks/               # External service webhooks
│   ├── error.tsx                   # Global error page
│   ├── layout.tsx                  # Root layout
│   ├── not-found.tsx               # 404 page
│   └── page.tsx                    # Homepage
├── components/                     # React components
│   ├── auth/                       # Auth-related components
│   ├── chat/                       # Chat interface components
│   ├── citations/                  # Citation-related components
│   ├── credits/                    # Credit display components
│   ├── layout/                     # Layout components
│   ├── marketing/                  # Marketing page components
│   ├── pdf/                        # PDF viewer components
│   ├── profile/                    # Profile components
│   ├── providers/                  # Context providers
│   ├── subscription/               # Subscription components
│   └── ui/                         # Shadcn UI components
├── db/                             # Database setup and schema
│   ├── migrations/                 # Drizzle migrations
│   ├── schema/                     # Database schema definitions
│   │   ├── citations.ts
│   │   ├── conversations.ts
│   │   ├── index.ts
│   │   ├── messages.ts
│   │   ├── pdfs.ts
│   │   ├── subscription_plans.ts
│   │   ├── user_credits.ts
│   │   ├── user_preferences.ts
│   │   └── users.ts
│   └── db.ts                       # Database client
├── hooks/                          # Custom React hooks
│   ├── use-assistant.ts
│   ├── use-chat.ts
│   ├── use-credits.ts
│   └── ...
├── lib/                            # Utility functions and shared code
│   ├── actions/                    # Server actions
│   ├── auth/                       # Auth utilities
│   ├── blob/                       # Blob storage utilities
│   ├── chat/                       # Chat utilities
│   ├── citations/                  # Citation utilities
│   ├── credits/                    # Credit management
│   ├── pdf/                        # PDF utilities
│   ├── pinecone/                   # Pinecone client
│   ├── seo/                        # SEO utilities
│   └── state/                      # Client state management
├── public/                         # Static assets
│   ├── fonts/
│   └── images/
├── scripts/                        # Utility scripts
│   └── upload-pdf.ts
├── styles/                         # Global styles
│   ├── globals.css
│   └── ...
├── types/                          # TypeScript type definitions
│   ├── assistant.ts
│   ├── chat.ts
│   └── ...

### 1.2 File Naming Conventions

- **Directories**: Use kebab-case for directory names (e.g., `user-profile/`)
- **React Components**: Use PascalCase (e.g., `ChatMessage.tsx`)
- **Utility Functions**: Use kebab-case (e.g., `format-date.ts`)
- **Hooks**: Use camelCase with `use` prefix (e.g., `useCredits.ts`)
- **Types**: Use PascalCase (e.g., `UserProfile.ts`)
- **Route Handlers**: Use kebab-case (e.g., `route.ts` within appropriate directories)

## 2. Coding Standards

### 2.1 TypeScript Guidelines

- Use TypeScript for all files
- Define explicit return types for functions
- Prefer interfaces over types for object shapes
- Use type inference where appropriate
- Avoid `any` type; use `unknown` when type is uncertain
- Create dedicated type files for shared types
- Use Zod for API input validation

// Good example
interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): Promise<User> {
  // Implementation
}

// Bad example
function getUser(id): any {
  // Implementation
}****

// Good example
interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): Promise<User> {
  // Implementation
}

// Bad example
function getUser(id): any {
  // Implementation
}

### 2.2 React Component Structure

// Component file structure
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { Message } from '@/types/chat';

// Types at the top
interface ChatMessageProps {
  message: Message;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
}

// Component definition
export function ChatMessage({
  message,
  isSelected = false,
  onSelect
}: ChatMessageProps) {
  // State
  const [isExpanded, setIsExpanded] = useState(false);

  // Handlers
  const handleSelect = () => {
    if (onSelect) {
      onSelect(message.id);
    }
  };

  // Derived values
  const messageClasses = cn(
    'p-4 rounded-lg',
    message.role === 'user' ? 'bg-primary/10' : 'bg-secondary/10',
    isSelected && 'ring-2 ring-primary'
  );

  // Return JSX
  return (
    <div className={messageClasses} onClick={handleSelect}>
      <div className="font-medium">
        {message.role === 'user' ? 'You' : 'Assistant'}
      </div>
      <div className="mt-1">
        {message.content}
      </div>
      {message.citations?.length > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Hide citations' : 'Show citations'}
        </Button>
      )}
    </div>
  );
}


### 2.3 Code Formatting Standards

- Use 2 spaces for indentation
- Use semicolons at the end of statements
- Use single quotes for strings
- Always use parentheses for arrow functions
- Place imports in logical groups (React, external, internal)
- Use trailing commas in multi-line objects and arrays
- Use ESLint and adhere to its rules

## 3. Frontend Architecture

### 3.1 Component Hierarchy


Layout Components
└── Page Components
    └── Feature Components
        └── UI Components

- **Layout Components**: Provide structure (e.g., `DashboardLayout`)
- **Page Components**: Correspond to routes (e.g., `ConversationPage`)
- **Feature Components**: Implement specific features (e.g., `ChatInterface`)
- **UI Components**: Reusable, presentational components (e.g., `Button`)

### 3.2 Component Guidelines

- Use functional components with hooks
- Keep components focused on a single responsibility
- Limit component size (consider splitting if > 200 lines)
- Separate logic from presentation where possible
- Use composition over inheritance
- Use React Server Components by default, only add `"use client"` when necessary

// Server Component (default)
export function UserProfile({ userId }: { userId: string }) {
  // This can directly use server-side data
  return <div>...</div>;
}

// Client Component (only when needed)
"use client";

import { useState } from 'react';

export function MessageInput({ onSend }: { onSend: (text: string) => void }) {
  const [text, setText] = useState('');
  // ...
}

### 3.3 State Management

- Use **React Context** for shared state within feature boundaries
- Use **Zustand** for global application state
- Follow these patterns for Zustand stores:

// lib/state/use-conversation-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Message {
  id: string;
  content: string;
  // ...
}

interface ConversationState {
  messages: Message[];
  activeConversationId: string | null;
  isLoading: boolean;

  // Actions
  setActiveConversation: (id: string | null) => void;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
}

export const useConversationStore = create<ConversationState>()(
  persist(
    (set) => ({
      messages: [],
      activeConversationId: null,
      isLoading: false,

      setActiveConversation: (id) => set({ activeConversationId: id }),
      addMessage: (message) => set((state) => ({
        messages: [...state.messages, message]
      })),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: 'conversation-storage',
    }
  )
);

### 3.4 CSS and Styling

- Use Tailwind CSS for styling
- Follow a mobile-first approach
- Use the `cn` utility for conditional classes
- Create reusable component styles with Shadcn UI
- Add custom styles in appropriate CSS files
- Follow semantic color naming in theme

// Good example
<div className="mt-4 p-4 rounded-lg bg-card text-card-foreground">
  <h3 className="text-lg font-medium">Card Title</h3>
  <p className="mt-2 text-sm text-muted-foreground">Card content</p>
</div>

// Bad example (hard-coded colors)
<div className="mt-4 p-4 rounded-lg bg-white dark:bg-gray-800">
  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Card Title</h3>
  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Card content</p>
</div>


## 4. Backend Architecture

### 4.1 API Routes vs Server Actions

- Use **API Routes** for:
    - Endpoints called from client-side code
    - Webhooks from external services
    - Long-running operations
    - Operations that don't fit into the React component tree
- Use **Server Actions** for:
    - Form submissions
    - Direct data mutations from components
    - Operations with clear ownership in the component tree

// API Route Example (app/api/messages/route.ts)
export async function POST(request: Request) {
  const { conversationId, content } = await request.json();

  // Validate input, check permissions, etc.

  // Process request
  const message = await processMessage(conversationId, content);

  return Response.json({ message });
}

// Server Action Example (lib/actions/messages.ts)
"use server";

import { z } from "zod";

const messageSchema = z.object({
  conversationId: z.string(),
  content: z.string().min(1),
});

export async function sendMessage(formData: FormData) {
  const { conversationId, content } = messageSchema.parse({
    conversationId: formData.get("conversationId"),
    content: formData.get("content"),
  });

  // Process message
  const message = await processMessage(conversationId, content);

  return { message };
}

### 4.2 Database Access Patterns

- Use the repository pattern for database access
- Create specific query functions for each use case
- Handle transactions explicitly where needed
- Use prepared statements for all queries
- Implement proper error handling for database operations

// Good approach with repository pattern
// lib/repositories/conversation-repository.ts
import { db } from "@/db/db";
import { conversations, messages } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getConversationById(id: string) {
  return db.query.conversations.findFirst({
    where: eq(conversations.id, id),
    with: {
      messages: true,
    },
  });
}

export async function createConversation(userId: string, title: string) {
  const [conversation] = await db.insert(conversations)
    .values({
      id: crypto.randomUUID(),
      userId,
      title,
    })
    .returning();

  return conversation;
}

### 4.3 Error Handling

- Use a consistent error response format
- Define custom error classes for different error types
- Implement global error handling middleware
- Log errors appropriately
- Return user-friendly error messages

// lib/errors.ts
export class ApiError extends Error {
  code: string;
  status: number;

  constructor(code: string, message: string, status: number = 400) {
    super(message);
    this.code = code;
    this.status = status;
    this.name = 'ApiError';
  }
}

export class NotFoundError extends ApiError {
  constructor(resource: string) {
    super('NOT_FOUND', `The requested ${resource} was not found`, 404);
  }
}

// Usage in API route
try {
  const conversation = await getConversationById(id);

  if (!conversation) {
    throw new NotFoundError('conversation');
  }

  return Response.json({ conversation });
} catch (error) {
  if (error instanceof ApiError) {
    return Response.json({
      error: {
        code: error.code,
        message: error.message,
      }
    }, { status: error.status });
  }

  console.error('Unexpected error:', error);
  return Response.json({
    error: {
      code: 'INTERNAL_ERROR',
      message: 'An unexpected error occurred',
    }
  }, { status: 500 });
}

## 5. Key Features Implementation Guidelines

### 5.1 Chat Interface

- Implement virtualized message list for performance
- Use optimistic updates for better UX
- Batch message loading with pagination
- Implement proper scroll restoration
- Handle citation clicks with a state machine approach

// Example state machine for citation handling
type CitationState =
  | { status: 'inactive' }
  | { status: 'previewing', citationId: string }
  | { status: 'viewing', citationId: string, pdfId: string, page: number };

const [citationState, setCitationState] = useState<CitationState>({
  status: 'inactive'
});

// State transitions
function handleCitationHover(citationId: string) {
  setCitationState({ status: 'previewing', citationId });
}

function handleCitationClick(citationId: string, pdfId: string, page: number) {
  setCitationState({ status: 'viewing', citationId, pdfId, page });
}

function handleCitationClose() {
  setCitationState({ status: 'inactive' });
}

### 5.2 PDF Viewer Implementation

- Load PDFs incrementally (page by page)
- Implement efficient caching strategy for viewed PDFs
- Use Web Workers for text search and positioning
- Pre-render pages surrounding the current visible page
- Implement viewport-based rendering for large documents

// Basic approach for PDF rendering optimization
function PdfViewer({ pdfId, initialPage }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(initialPage || 1);
  const [scale, setScale] = useState<number>(1.0);

  // Calculate which pages to render (+/- 1 from current)
  const pagesToRender = [
    Math.max(1, currentPage - 1),
    currentPage,
    Math.min(numPages, currentPage + 1)
  ].filter((page, index, self) => self.indexOf(page) === index);

  return (
    <div className="pdf-viewer">
      {pagesToRender.map(pageNumber => (
        <PdfPage
          key={pageNumber}
          pdfId={pdfId}
          pageNumber={pageNumber}
          scale={scale}
          isActive={pageNumber === currentPage}
        />
      ))}
    </div>
  );
}

### 5.3 Credit System Implementation

- Use optimistic UI with server validation
- Implement credit checking before expensive operations
- Use client-side caching for credit balance (with TTL)
- Handle free tier refreshes with proper timing
- Implement graceful degradation for credit-limited users

// Example credit middleware
async function withCreditCheck(
  handler: (req: Request) => Promise<Response>,
  creditCost: number = 1
) {
  return async (req: Request) => {
    const { userId } = auth();

    if (!userId) {
      return Response.json({
        error: { code: 'UNAUTHORIZED', message: 'Unauthorized' }
      }, { status: 401 });
    }

    const hasCredits = await checkCreditAvailability(userId, creditCost);

    if (!hasCredits) {
      return Response.json({
        error: {
          code: 'INSUFFICIENT_CREDITS',
          message: 'Insufficient credits for this operation'
        }
      }, { status: 403 });
    }

    return handler(req);
  };
}

### 5.4 Real-time UI Updates

- Use client-side state for immediate feedback
- Implement optimistic updates with rollback
- Use React's `useTransition` for smooth transitions
- Add proper loading and error states for all operations
- Consider implementing a retry mechanism for failed operations

## 6. Performance Optimization

### 6.1 Frontend Performance

- Use React Server Components where possible
- Implement code splitting with dynamic imports
- Optimize images with Next.js Image component
- Minimize client-side JavaScript
- Implement proper lazy loading
- Use Suspense for loading states

// Code splitting example
import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import('@/components/pdf/pdf-viewer'), {
  loading: () => <div className="h-screen animate-pulse bg-muted"></div>,
  ssr: false, // Disable server-side rendering for this component
});

### 6.2 Backend Performance

- Use Edge Runtime for API routes where appropriate
- Implement caching for expensive operations
- Use connection pooling for database access
- Optimize database queries with proper indexes
- Implement request batching where applicable

// Edge function example
export const runtime = 'edge';

export async function GET(request: Request) {
  // This runs on the Edge, closer to the user
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  // Process query...

  return Response.json({ results });
}

## 7. Security Guidelines

### 7.1 Authentication and Authorization

- Always use Clerk for authentication
- Implement proper authorization checks
- Protect all sensitive routes and API endpoints
- Use proper CSRF protection
- Implement rate limiting

## 7. Security Guidelines

### 7.1 Authentication and Authorization

- Always use Clerk for authentication
- Implement proper authorization checks
- Protect all sensitive routes and API endpoints
- Use proper CSRF protection
- Implement rate limiting

### 7.2 Data Security

- Never expose sensitive data to the client
- Validate all user inputs
- Implement proper data sanitization
- Use prepared statements for database queries
- Follow the principle of least privilege

## 8. Testing Strategy

### 8.1 Testing Approach

- Implement a combination of unit, integration, and E2E tests
- Use React Testing Library for component tests
- Use Vitest for unit tests
- Use Playwright for E2E tests
- Implement proper mocking for external dependencies

// Component test example
import { render, screen, fireEvent } from '@testing-library/react';
import { MessageInput } from './message-input';

describe('MessageInput', () => {
  it('calls onSend when form is submitted', () => {
    const onSend = vi.fn();
    render(<MessageInput onSend={onSend} />);

    const input = screen.getByPlaceholderText('Type your message...');
    fireEvent.change(input, { target: { value: 'Hello world' } });

    const button = screen.getByRole('button', { name: /send/i });
    fireEvent.click(button);

    expect(onSend).toHaveBeenCalledWith('Hello world');
  });
});

## 9. Deployment Guidelines

### 9.1 Environment Configuration

- Use environment variables for configuration
- Never commit secrets to the repository
- Use different environments for development, staging, and production
- Follow the principle of environment parity

### 9.2 Vercel Deployment

- Configure proper preview environments
- Implement environment-specific variables
- Set up proper monitoring and logging
- Configure proper edge caching
- Implement proper error handling and reporting

## 10. AI Development Guidelines (for Cursor)

### 10.1 Prompting Strategy

- Be specific about file paths and component names
- Reference established patterns when requesting new code
- Provide clear requirements for functionality
- Always specify proper TypeScript types
- Request component hierarchy and composition

Example Prompt:
"Create a ChatMessage component that displays a message from either the user or assistant. The component should:
1. Be located at components/chat/chat-message.tsx
2. Accept props for message content, role (user/assistant), and optional citations
3. Display citations as clickable inline numbers
4. Implement hover state for citations
5. Follow our established styling patterns with Tailwind
6. Be fully typed with TypeScript
7. Follow the component structure outlined in our guidelines"

### 10.2 Iterative Development

- Start with basic implementation, then enhance
- Implement core functionality first, then add refinements
- Use a step-by-step approach for complex features
- Build upon existing patterns and components
- Test frequently at each implementation stage