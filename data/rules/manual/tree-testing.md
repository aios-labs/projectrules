---
description: "Guidelines for tree-testing"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "jam3gw/deep-research-assistant"
__meta__tags: ["Testing","Python","Visualization","Automation","Accessibility"]
__meta__rate: 8
---
# Tree Visualization Testing Guidelines

This document outlines the guidelines for testing the tree visualization component of the personal-assistant project.

## Test Script Usage

The `test_tree_visualization.py` script provides a standalone way to test the tree visualization without running the full RAG process:

```bash
# Run the test script
python3 test_tree_visualization.py

# View the generated tree
open output/test_tree.html
```

## Test Cases

When testing the tree visualization, include the following test cases:

### 1. Basic Tree Structure

Test a simple tree with a root node and a few children:

```python
def create_basic_tree():
    root = {
        'id': str(uuid.uuid4()),
        'question': 'Root question?',
        'depth': 0,
        'needs_breakdown': True,
        'children': [
            {
                'id': str(uuid.uuid4()),
                'question': 'Child question 1?',
                'depth': 1,
                'needs_breakdown': False,
                'answer': 'Answer to child question 1',
                'sources': [{'title': 'Source 1', 'url': 'https://example.com/1'}]
            },
            {
                'id': str(uuid.uuid4()),
                'question': 'Child question 2?',
                'depth': 1,
                'needs_breakdown': False,
                'answer': 'Answer to child question 2',
                'sources': [{'title': 'Source 2', 'url': 'https://example.com/2'}]
            }
        ]
    }
    return root
```

### 2. Deep Tree Structure

Test a tree with multiple levels of nesting:

```python
# Create a tree with depth 0, 1, 2, and 3 nodes
# Verify that level indicators match the logical depth
# Check that visual nesting is consistent
```

### 3. Edge Cases

Test edge cases such as:

- Nodes without children
- Nodes without answers
- Nodes without sources
- Very long question text
- HTML content in answers
- Missing properties

## Visual Verification

When visually verifying the tree:

1. **Level Indicators**: Check that level indicators (Level 0, Level 1, etc.) match the logical depth
2. **Visual Nesting**: Verify that the visual nesting (indentation) is consistent
3. **Styling**: Ensure that styling is applied correctly based on depth
4. **Expansion/Collapse**: Test that nodes expand and collapse correctly
5. **Source Links**: Verify that source links are displayed and clickable

## Automated Testing

Consider adding automated tests:

```python
def test_tree_visualization():
    # Create a sample tree
    tree = create_sample_tree()

    # Generate the visualization
    html = generate_tree_visualization(tree)

    # Verify that the HTML contains expected elements
    assert '<span class="depth-indicator">Level 0</span>' in html
    assert '<span class="depth-indicator">Level 1</span>' in html
    assert '<span class="depth-indicator">Level 2</span>' in html

    # Verify that data-depth attributes are set correctly
    assert 'data-depth="0"' in html
    assert 'data-depth="1"' in html
    assert 'data-depth="2"' in html

    # Verify that sources are included
    assert '<div class="sources">' in html
    assert '<a href="https://example.com/' in html
```

## Browser Compatibility

Test the tree visualization in multiple browsers:

- Chrome
- Firefox
- Safari
- Edge

## Performance Considerations

For large trees:

- Test with a large number of nodes (50+)
- Check rendering performance
- Consider lazy loading or pagination for very large trees

## Accessibility

Ensure the tree visualization is accessible:

- Use semantic HTML
- Include proper ARIA attributes
- Ensure keyboard navigation works
- Test with screen readers