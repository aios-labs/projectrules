---
description: "Integration between Devin Agent and LDD System"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "ShunsukeHayashi/Auto-coder-agent_Cursor_Roo_code"
__meta__tags: ["Integration","Logging","Workflow","Development","Analysis"]
__meta__rate: 8
---
# Devin Agent LDD Integration

## Overview

This document defines how the Devin Agent template with Working Backwards methodology integrates with the existing Log-Driven Development (LDD) system.

## Integration Points

### 1. Logging Structure

The Devin Agent uses the standard logging template with extensions:

```
- Base Template: @logging_template.mdc
- Extensions:
  - working_backwards_analysis
  - step_back_questions
  - prerequisites_chain
  - forward_execution_plan
```

### 2. Memory Bank Integration

The Working Backwards analysis is stored in the Memory Bank:

```
## Active States
### Current Tasks
- ID: {TASK_ID}
- Goal State: {GOAL_STATE}
- Current Step: {CURRENT_STEP}
- Prerequisites: {PREREQUISITES}
```

### 3. SpecStory Integration

Working Backwards methodology enhances story creation:

```
## Requirements
- Derived from Goal State: {GOAL_STATE}
- Prerequisites Chain: {PREREQUISITES_CHAIN}
```

### 4. Cursor Rules Integration

The Devin Agent follows all existing Cursor rules with additional Working Backwards rules:

```
- Always define the goal state first
- Use step-back questioning for all complex tasks
- Document prerequisites for each step
- Create forward execution plans for all tasks
```

## Workflow Integration

### Planning Phase
1. User input is analyzed using intent analysis
2. Goal state is defined
3. Working Backwards analysis is performed
4. Forward execution plan is created

### Execution Phase
1. Tasks are executed according to the forward plan
2. Each step is logged using the standard template
3. Feedback is collected after each step

### Feedback Phase
1. Results are analyzed against the goal state
2. Adjustments are made to the plan if needed
3. Learnings are documented in the Memory Bank

### Optimization Phase
1. The entire process is reviewed
2. Improvements are identified for future tasks
3. Templates and rules are updated as needed