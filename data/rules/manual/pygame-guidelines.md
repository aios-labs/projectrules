---
description: "Pygame guidelines"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "joselc/life-sim-second-approach"
__meta__tags: ["Game Development","Pygame","Software Architecture","Testing","Performance"]
__meta__rate: 9
---
# Pygame Architectural Separation Rules

## Core Game Logic Separation
ALWAYS keep core game logic completely independent of Pygame.
NEVER import pygame in domain or use case layers.
ALWAYS define game state models without any Pygame dependencies.
NEVER reference Pygame surfaces, rects, or other Pygame-specific structures in core game logic.
ALWAYS ensure game logic works with unit tests that don't require Pygame initialization.

## Interface Definition
ALWAYS define abstract interfaces for rendering, input handling, and audio in the domain layer.
NEVER leak Pygame implementation details through these interfaces.
ALWAYS use platform-agnostic data structures for communication between layers.
NEVER pass Pygame events directly to game logic; translate them to domain events first.

## Pygame Implementation Layer
ALWAYS implement Pygame-specific code in the outermost layer only.
NEVER allow Pygame event handling to directly modify game state.
ALWAYS create adapter classes that translate between Pygame and core game concepts.
NEVER implement game rules or state changes in rendering classes.

## Rendering Architecture
ALWAYS separate rendering logic into its own module/package.
NEVER mix rendering code with game state updates.
ALWAYS implement the Renderer interface defined in the domain layer.
NEVER allow rendering code to directly modify game state.
ALWAYS pass immutable view models to rendering components.

## Input Handling
ALWAYS create an InputHandler adapter that translates Pygame events to game commands.
NEVER directly couple Pygame key constants to game actions in core logic.
ALWAYS define game actions/commands as domain-specific enums or classes.
NEVER expose Pygame event objects beyond the input handling layer.

## Resource Management
ALWAYS create a ResourceManager to handle loading and caching Pygame assets.
NEVER access Pygame assets directly from game logic.
ALWAYS reference game assets through abstract identifiers, not Pygame-specific objects.
NEVER initialize Pygame resources in domain or use case classes.

## Testing Strategy
ALWAYS make core game logic testable without Pygame initialization.
NEVER require a Pygame display to test game rules.
ALWAYS mock rendering interfaces for testing game logic.
NEVER create test dependencies between core logic and Pygame components.

## Dependency Flow
ALWAYS ensure dependencies flow inward - Pygame adapters depend on game logic, not vice versa.
NEVER allow game logic to call Pygame adapters directly.
ALWAYS use dependency injection for providing adapters to the application.
NEVER use service locators or global state to access Pygame functionality.

## Communication Pattern
ALWAYS use the Observer pattern or events to notify rendering layer of state changes.
NEVER have game logic poll the rendering layer.
ALWAYS pass complete view models to rendering layer rather than incremental updates.
NEVER create bidirectional dependencies between game logic and rendering.

## Performance Considerations
ALWAYS separate game update logic from rendering logic to allow different update frequencies.
NEVER block game logic on rendering operations.
ALWAYS design game state to be efficiently serializable for saving/loading.
NEVER couple game timing logic to Pygame's timing mechanisms.