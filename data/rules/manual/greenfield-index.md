---
description: "Greenfield Development Index"
globs: "*"
__meta__type: "guideline"
__meta__repo: "bossjones/zsh-dotfiles"
__meta__tags: ["Development Workflow","LLM-Assisted Coding","Greenfield","Software Development","Best Practices"]
__meta__rate: 8
---
# Greenfield Development Index

Overview of all rules related to the Greenfield development workflow based on Harper Reed's approach.

<rule>
name: greenfield-development-index
description: Entry point for Greenfield development workflow rules
filters:
  # Match any file in the project
  - type: file_extension
    pattern: ".*"
  # Match project initialization events
  - type: event
    pattern: "file_create"

actions:
  - type: suggest
    message: |
      # Greenfield Development with LLM Assistance

      This project follows the Greenfield development workflow outlined by Harper Reed for LLM-assisted software development. The process is divided into three main phases:

      ## Available Rules and Resources

      ### 1. Overall Workflow

      Reference the **greenfield-development-workflow** rule for a complete overview of the three-step process:
      - Step 1: Idea Honing
      - Step 2: Planning
      - Step 3: Execution

      ### 2. Documentation Standards

      Reference the **greenfield-documentation-standards** rule for guidelines on maintaining:
      - spec.md - Project specification
      - prompt_plan.md - Implementation plan
      - todo.md - Progress tracking

      ### 3. Execution Best Practices

      Reference the **greenfield-execution-best-practices** rule for guidance on:
      - Initial project setup
      - Working with LLM-generated code
      - Testing strategy
      - Code quality and maintenance
      - Debugging and problem-solving
      - Iteration cycle

      ## Quick Start

      1. Begin with Step 1: Idea Honing to create your spec.md
      2. Move to Step 2: Planning to generate prompt_plan.md and todo.md
      3. Follow Step 3: Execution to implement your project incrementally
      4. Maintain documentation throughout the process
      5. Follow best practices for code quality and testing

      ## Key Principles

      <quotes>
      "Brainstorm spec, then plan a plan, then execute using LLM codegen. Discrete loops. Then magic."
      </quotes>

      Remember these core principles:
      - Break implementation into small, manageable steps
      - Test thoroughly at each step
      - Document decisions and progress
      - Stay within your plan to avoid getting "over your skis"
      - Take breaks when needed
      - Use LLM assistance for debugging and refining

examples:
  - input: |
      # Starting a new project
      I'm starting a new web application and want to follow best practices.
    output: "Reference the Greenfield development workflow rules for guidance"

metadata:
  priority: high
  version: 1.0
  tags:
    - development-workflow
    - llm-assisted-coding
    - greenfield
    - index
</rule>