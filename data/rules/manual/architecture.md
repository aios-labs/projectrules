---
description: "architecture for app"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "PMLS3/empire"
__meta__service: "Firebase"
__meta__framework: "NuxtJS"
__meta__tags: ["Modular Architecture","AI","Authentication","CRM","TypeScript"]
__meta__rate: 8
---
# Empire Project Architecture

## Overview

This project follows a modular architecture with two key concepts:
- **Layers**: Core functionality modules shared across multiple applications
- **Workspaces**: End-user applications that consume and combine various layers

## Project Structure

```
empire/
├── layers/               # Shared functionality layers
│   ├── ai/               # AI functionality layer
│   ├── auth/             # Authentication layer
│   ├── crm/              # CRM functionality layer
│   ├── research/         # Research functionality layer
│   └── shared/           # Common UI components and utilities
├── workspaces/           # End-user applications
│   ├── creator/          # Creator workspace
│   └── ...               # Other workspaces
└── types/                # Top-level shared TypeScript types
```

## Layers

### Auth Layer

The authentication layer handles:
- User authentication (Firebase)
- User profile management
- Workspace management and switching
- Session persistence
- Authorization and permissions

Server-side components use Firebase Admin for secure database interactions.

### CRM Layer

The CRM layer provides:
- Customer data management
- Interaction tracking
- Sales pipeline functionality
- Reporting and analytics
- Integration with Auth layer for user context

### Research Layer

The Research layer enables:
- Book research project management
- Example book collection and analysis
- Vector embedding-based semantic search
- AI-powered deep research capabilities
- File management for research documents
- Integration with Firestore for vector search
- Connection to external services (FireCrawl, Perplexity)

### AI Layer

The AI layer provides:
- Embeddings generation across multiple providers
- LLM integrations with function calling
- Context-aware conversations
- Specialized AI agents for different domains
- Utility services for AI processing

### Shared Layer

Contains reusable components across applications:
- UI components
- Design system foundations
- Utility functions
- Shared composables

## Types Organization

We follow a hybrid approach to TypeScript types:

1. **Layer-specific types**: Each layer contains its own `types/` directory for types specific to that layer's implementation
2. **Cross-layer types**: The `shared/types/` directory contains types used across multiple layers
3. **Project-wide types**: Top-level types for global interfaces and models

## Workspace Structure

Each workspace:
- Is a standalone Nuxt.js application
- Imports required layers as dependencies
- May have workspace-specific components and logic
- Maintains consistent UI through the shared layer

## User & Workspace Management

- Users can belong to multiple workspaces
- Each workspace has its own profile for the user
- Workspace context is maintained during user sessions
- User permissions are scoped to specific workspaces

## Vector Database Architecture

- Firestore used for document storage and vector search
- Vector embeddings stored directly in documents using `FieldValue.vector()`
- KNN vector indexes created for semantic search
- Cloud Functions for embedding generation on document changes
- Supported distance metrics: EUCLIDEAN, COSINE, DOT_PRODUCT
- Pre-filtering via composite indexes for category-based search

## LLM Function Integration

- Function declarations for AI agent capabilities
- Specialized handlers for domain-specific operations
- System instructions for context-aware responses
- Integration between research functionality and LLM agents
- Vector-aware context retrieval for enhanced responses

## Server-Side Interactions

- Server routes defined in each layer's `server/` directory
- Firebase Admin SDK used for secure database operations
- API endpoints follow REST conventions
- Server middleware for authentication/authorization

## Development Guidelines

1. Keep layers focused on their specific domain
2. Use the shared layer for any functionality needed across multiple layers
3. Maintain strict typing throughout the application
4. Document public APIs and interfaces
5. Write tests for critical functionality
6. Follow Nuxt.js best practices for component and composable design

## Dependencies

- Nuxt.js 3.15+ for application framework
- Firebase/Firebase Admin for authentication, database, and vector search
- TypeScript for type safety
- LangChain for embeddings and LLM interactions
- FireCrawl for book data scraping
- Perplexity AI for deep research capabilities