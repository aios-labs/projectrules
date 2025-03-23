---
description: "Apply this rule when discussing, planning, or implementing core architecture components of the PepperPy framework or when adding new functionality that must integrate with the existing architecture"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "felipepimentel/pepperpy-ai"
__meta__framework: "PepperPy"
__meta__tags: ["Python","AI","Architecture","Domain-Driven Design","Clean Architecture"]
__meta__rate: 9
---
# PepperPy Framework Architecture

## Overview

PepperPy is a modular Python framework for building AI-powered applications, with a focus on clean architecture and domain-driven design principles. This rule provides the core understanding of the framework's architecture, module organization, and design patterns.

## Project Structure

The framework is organized into vertical domains, each responsible for a specific business capability:

```
pepperpy/
├── llm/                  # Language Model Domain
│   ├── __init__.py
│   ├── provider.py      # Core LLM interfaces
│   └── providers/       # LLM implementations
│
├── rag/                  # RAG Domain
│   ├── __init__.py
│   ├── provider.py      # Core RAG interfaces
│   └── providers/       # RAG implementations
│
├── storage/             # Storage Domain
│   ├── __init__.py
│   ├── provider.py      # Core storage interfaces
│   └── providers/       # Storage implementations
│
├── core/               # Core Framework
│   ├── __init__.py
│   ├── capabilities/   # Capability management
│   ├── errors/        # Error definitions
│   └── base/          # Base classes
│
├── cli/                # Command Line Interface
│   ├── __init__.py
│   └── commands/       # CLI commands
│
├── workflow/           # Workflow Engine
│   ├── __init__.py
│   └── providers/      # Workflow implementations
│
├── hub/                # PepperHub Integration
│   ├── __init__.py
│   └── providers/      # Hub implementations
│
├── agents/             # Agent Framework
│   ├── __init__.py
│   └── providers/      # Agent implementations
│
├── cache/              # Caching System
│   ├── __init__.py
│   └── providers/      # Cache implementations
│
└── utils/              # Shared Utilities
    ├── __init__.py
    ├── logging/
    ├── config/
    └── helpers/
```

## Domain Organization

Each domain follows these principles:

1. **Vertical Slicing**: Each module represents a cohesive business domain
2. **Module Independence**: Loose coupling between modules
3. **Clean Interfaces**: Public interfaces exposed via `__init__.py`
4. **Implementation Privacy**: Internal details kept private
5. **Pragmatic Structure**: Structure grows based on actual needs

## Core Design Principles

### 1. Domain-Driven Design

- Clear domain boundaries with self-contained modules
- Domain-specific language and interfaces
- Domain entities, value objects, and services
- Aggregates with clear boundaries

### 2. Clean Architecture

- Separation of concerns with distinct layers
- Dependency inversion (dependencies point inward)
- Interface segregation for clean APIs
- Explicit and controlled dependencies

### 3. Provider Pattern

All major framework capabilities follow the provider pattern:

```python
# Core provider interface
class BaseProvider(Protocol):
    """Base provider interface for framework capabilities."""

    def capabilities(self) -> Set[str]:
        """Return the set of capabilities supported by this provider."""
        ...

# Domain-specific provider (e.g., LLM)
class LLMProvider(BaseProvider):
    """Provider interface for language models."""

    async def generate(self, prompt: str, **kwargs) -> str:
        """Generate text from a prompt."""
        ...

    async def generate_stream(self, prompt: str, **kwargs) -> AsyncIterator[str]:
        """Stream generated text from a prompt."""
        ...

# Implementation example
class OpenAIProvider(LLMProvider):
    """OpenAI implementation of LLMProvider."""

    def __init__(self, model_name: str, **kwargs):
        self.model_name = model_name
        self.client = OpenAI(**kwargs)

    async def generate(self, prompt: str, **kwargs) -> str:
        # Implementation details
        ...
```

### 4. Capability System

The framework uses a capability system to define and discover provider features:

```python
# Define capabilities
class LLMCapabilities(str, Enum):
    GENERATE = "generate"
    STREAM = "stream"
    EMBEDDING = "embedding"
    FUNCTION_CALLING = "function_calling"

# Check for capabilities
if LLMCapabilities.STREAM in provider.capabilities():
    # Use streaming capability
    async for chunk in provider.generate_stream(prompt):
        # Process streaming chunks
        ...
```