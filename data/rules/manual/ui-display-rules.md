---
description: "UI Display"
globs: "src/ui/display.js"
__meta__type: "guideline"
__meta__repo: "MicahFaulkner75/dice-roller"
__meta__tags: ["UI Design","JavaScript","State Management","CSS","Frontend Development"]
__meta__rate: 8
---
# Component Rule Sheet: UI_DISPLAY

## Basic Information
- Priority: HIGH
- Applies To: src/ui/display.js
- Last Updated: 2023-10-15

## Core Requirements
- Display must update immediately after any state change
- Input area must show dice in a grouped and ordered manner (e.g., "2d6 + 1d20")
- Results area must display individual dice results with appropriate color-coding
- Non-standard dice must be specially formatted as "dX=Y" in the results area

## Visual Specifications
- Each die type has a specific color scheme (d4=red, d6=blue, d8=green, etc.)
- Results appear in a 4-column grid layout
- Total value is prominently displayed with larger font
- Modifiers are shown with explicit + or - signs (even for +0)

## Behavior Rules
- Results area should clear before displaying new results
- Non-standard dice should display first, followed by standard dice
- Percentile dice results should display as two separate numbers (tens and ones)
- Order of dice must be preserved from input to output display

## Implementation Notes
- Use state API functions instead of direct state access
- Separate display logic from animation logic
- Ensure proper DOM updates to avoid flickering
- Use CSS classes for die-specific styling

## Validation Criteria
- UI updates correctly after all types of state changes
- Mixed dice pools display correctly with preserved order
- Modifiers display correctly in all cases (+, -, zero)
- Percentile results display correctly as two dice