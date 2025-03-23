---
description: "Definition of TASKS and tasks"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "AndreRatzenberger/pilot-rules"
__meta__tags: ["Project Management","Documentation","Task Management","Best Practices"]
__meta__rate: 8
---
# Task definition prompt

Tasks in this project are managed systematically to ensure clarity and traceability. Each task is saved in the `.project/tasks` directory, and an index of all tasks is maintained in `.project/TASKS.md` for a quick overview of currently open tasks.

## Task Format

Each task should follow the format below:

- **Unique Task ID:** TASK-NN-descriptive-name (where NN is a sequential number)
- **Description:** A detailed description of the task.
- **Relevant Specification:** Link to the corresponding specification in `.project/specs/`.
- **Acceptance Criteria:** Clear criteria that must be met for the task to be considered complete.
- **Tests:** A list of extensive tests that need to be written and successfully be executed for the task to done
- **Metadata:**
    - **ID:** Unique identifier for the task.
    - **Start Date:** The date when the task was started.
    - **End Date:** The date when the task was completed.
    - **State:** Current state of the task (e.g., open, in_progress, closed).
    - **Estimated Lines of Code:** An estimate of the number of lines of code required.
- **Complexity:** An assessment of the task's complexity.
- **Learnings:** Insights and learnings captured during the implementation of the task.

A task should take a human dev max 1 work day. Tasks that are bigger need to get split!

By adhering to this format, we ensure that all tasks are well-documented, traceable, and manageable throughout the project lifecycle.