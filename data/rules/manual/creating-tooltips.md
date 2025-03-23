---
description: "How to implement a flexible, reusable tooltip system similar to the one used in the Nexus Content Curator userscript. This tooltip system provides a clean, consistent way to display additional information when users hover over elements."
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "loregamer/rpghq-userscripts"
__meta__tags: ["Javascript","DOM Manipulation","UI/UX","Web Development","Frontend"]
__meta__rate: 8
---
# Tooltip Implementation Guide

This document explains how to implement a flexible, reusable tooltip system similar to the one used in the Nexus Content Curator userscript. This tooltip system provides a clean, consistent way to display additional information when users hover over elements.

## Table of Contents

1. [Overview](#overview)
2. [Core Components](#core-components)
3. [Implementation Steps](#implementation-steps)
4. [Tooltip Positioning Logic](#tooltip-positioning-logic)
5. [Usage Examples](#usage-examples)
6. [Customization Options](#customization-options)
7. [Performance Considerations](#performance-considerations)

## Overview

The tooltip system consists of:
- A single, reusable tooltip element that's positioned dynamically
- Helper functions for formatting tooltip content
- Event handlers for showing, positioning, and hiding the tooltip
- Smart positioning logic to keep tooltips within viewport bounds

This approach is efficient because it uses a single DOM element for all tooltips rather than creating multiple tooltip elements.

## Core Components

### 1. The Tooltip Element

```javascript
// Create tooltip element early in script execution
const tooltip = document.createElement("div");
tooltip.style.cssText = `
  position: fixed;
  display: none;
  background: #000;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  max-width: min(600px, 80vw);
  min-width: 200px;
  width: auto;
  box-shadow: 0 3px 12px rgba(0,0,0,0.5);
  z-index: 10000;
  pointer-events: none;
  border: 1px solid #333;
  line-height: 1.3;
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

// Add tooltip to document body
if (document.body) {
  document.body.appendChild(tooltip);
} else {
  document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(tooltip);
  });
}
```

### 2. Text Formatting Helper

```javascript
function formatTooltipText(text, additionalInfo = "") {
  // Split very long words to prevent overflow
  const wordWrapText = text.replace(/(\S{30})/g, "$1\u200B");

  const formattedText = wordWrapText
    .replace(/\\n/g, "\n")
    .replace(/\((.*?)\)/g, '<span style="font-size: 0.85em;">($1)</span>');

  return (
    additionalInfo
      ? `<div style="font-size: 14px; margin: 0; padding: 0;">${formattedText}</div><div style="font-size: 12px; color: #aaa; margin-top: 4px; border-top: 1px solid #444; padding-top: 4px;">${additionalInfo}</div>`
      : `<div style="font-size: 14px; margin: 0; padding: 0;">${formattedText}</div>`
  ).trim();
}
```

### 3. Positioning Logic

```javascript
function updateTooltipPosition(e) {
  const offset = 15; // Distance from cursor
  const padding = 20; // Padding from viewport edges

  // Get viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Get tooltip dimensions
  const tooltipRect = tooltip.getBoundingClientRect();

  // Calculate initial position
  let x = e.clientX + offset;
  let y = e.clientY + offset;

  // If tooltip is wider than half the viewport, center it horizontally
  if (tooltipRect.width > viewportWidth / 2) {
    x = Math.max(padding, (viewportWidth - tooltipRect.width) / 2);
  }
  // Otherwise, check horizontal positioning
  else if (x + tooltipRect.width > viewportWidth - padding) {
    x = e.clientX - tooltipRect.width - offset;
    if (x < padding) {
      x = padding;
    }
  }

  // If tooltip is taller than half the viewport, position at top
  if (tooltipRect.height > viewportHeight / 2) {
    y = padding;
  }
  // Otherwise, check vertical positioning
  else if (y + tooltipRect.height > viewportHeight - padding) {
    y = e.clientY - tooltipRect.height - offset;
    if (y < padding) {
      y = padding;
    }
  }

  // Apply final position
  tooltip.style.left = x + "px";
  tooltip.style.top = y + "px";
}
```

## Implementation Steps

1. **Create the tooltip element** early in your script execution
2. **Append it to the document body** (with fallback for when body isn't ready)
3. **Define helper functions** for formatting and positioning
4. **Attach event handlers** to elements that should trigger tooltips

## Tooltip Positioning Logic

The positioning logic handles several scenarios:

1. **Default positioning**: Places tooltip to the bottom-right of the cursor
2. **Viewport edge detection**: Prevents tooltips from going off-screen
3. **Large tooltip handling**: Centers very wide tooltips or positions very tall ones at the top
4. **Responsive behavior**: Adjusts based on viewport size and tooltip dimensions

## Usage Examples

### Basic Usage

```javascript
// Element that triggers the tooltip
const triggerElement = document.createElement("span");
triggerElement.textContent = "Hover me";

// Define tooltip handlers
const showTooltip = (e) => {
  tooltip.innerHTML = formatTooltipText("This is a tooltip");
  tooltip.style.display = "block";
  updateTooltipPosition(e);
};

const hideTooltip = () => {
  tooltip.style.display = "none";
};

// Attach event listeners
triggerElement.addEventListener("mouseover", showTooltip);
triggerElement.addEventListener("mousemove", updateTooltipPosition);
triggerElement.addEventListener("mouseout", hideTooltip);
```

### With Visual Feedback

```javascript
const indicator = document.createElement("span");
indicator.textContent = "ℹ️";
indicator.style.transition = "transform 0.2s";

const showTooltip = (e) => {
  // Add visual feedback when showing tooltip
  indicator.style.transform = "scale(1.2)";
  tooltip.innerHTML = formatTooltipText("Tooltip with visual feedback");
  tooltip.style.display = "block";
  updateTooltipPosition(e);
};

const hideTooltip = () => {
  // Reset visual feedback
  indicator.style.transform = "scale(1)";
  tooltip.style.display = "none";
};

indicator.addEventListener("mouseover", showTooltip);
indicator.addEventListener("mousemove", updateTooltipPosition);
indicator.addEventListener("mouseout", hideTooltip);
```

### With Additional Info Section

```javascript
const button = document.createElement("button");
button.textContent = "More Info";

const showTooltip = (e) => {
  tooltip.innerHTML = formatTooltipText(
    "Main tooltip content",
    "Click to learn more" // Additional info section
  );
  tooltip.style.display = "block";
  updateTooltipPosition(e);
};

const hideTooltip = () => {
  tooltip.style.display = "none";
};

button.addEventListener("mouseover", showTooltip);
button.addEventListener("mousemove", updateTooltipPosition);
button.addEventListener("mouseout", hideTooltip);
```

## Customization Options

### Tooltip Styling

You can customize the tooltip appearance by modifying the CSS in the tooltip creation:

```javascript
tooltip.style.cssText = `
  /* Your custom styles here */
  background: #2a2a2a;
  color: #f0f0f0;
  border-radius: 8px;
  /* etc. */
`;
```

### Positioning Behavior

Adjust the positioning behavior by modifying the `offset` and `padding` values:

```javascript
function updateTooltipPosition(e) {
  const offset = 10; // Smaller offset from cursor
  const padding = 30; // Larger padding from viewport edges
  // ...rest of function
}
```

### Content Formatting

Customize the content formatting by modifying the `formatTooltipText` function:

```javascript
function formatTooltipText(text, additionalInfo = "") {
  // Your custom formatting logic here
  // ...
}
```

## Performance Considerations

1. **Single tooltip element**: Using one tooltip element for all tooltips reduces DOM nodes
2. **Event delegation**: For many tooltip triggers, consider using event delegation
3. **Throttling**: For performance-sensitive applications, consider throttling the `mousemove` event handler
4. **Content preparation**: Prepare complex tooltip content in advance rather than on hover

```javascript
// Example of throttling the mousemove handler
function throttle(func, limit) {
  let inThrottle;
  return function(e) {
    if (!inThrottle) {
      func(e);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

element.addEventListener("mousemove", throttle(updateTooltipPosition, 16)); // ~60fps
```

---

This tooltip implementation provides a flexible, efficient way to add tooltips to any element in your userscript or web application. By using a single, reusable tooltip element with smart positioning logic, you can create a consistent tooltip experience across your entire interface.