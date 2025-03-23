---
description: "ENFORCE efficient performance practices in Rust code"
globs: ["**/*.rs"]
__meta__type: "guideline"
__meta__repo: "DataScienceBioLab/squirrel"
__meta__tags: ["Rust","Performance","Memory Management","Optimization","Best Practices"]
__meta__rate: 9
---
# Rust Performance Standards

## Context
- When optimizing Rust code
- When working with memory allocations
- When implementing data structures
- When dealing with I/O operations

## Requirements
- Minimize unnecessary allocations
- Use appropriate data structures
- Implement proper memory management
- Profile code before optimization
- Use appropriate collection types
- Implement efficient algorithms
- Consider cache locality
- Use appropriate string types
- Implement proper error handling
- Document performance characteristics

## Examples
<example>
// Good: Efficient memory usage
pub struct EfficientBuffer {
    data: Vec<u8>,
    capacity: usize,
}

impl EfficientBuffer {
    pub fn with_capacity(capacity: usize) -> Self {
        Self {
            data: Vec::with_capacity(capacity),
            capacity,
        }
    }

    pub fn push(&mut self, value: u8) {
        if self.data.len() < self.capacity {
            self.data.push(value);
        }
    }
}

// Good: Efficient string handling
pub fn process_string(input: &str) -> String {
    let mut result = String::with_capacity(input.len());
    for c in input.chars() {
        if c.is_ascii_alphabetic() {
            result.push(c);
        }
    }
    result
}
</example>

<example type="invalid">
// Bad: Inefficient memory usage
pub struct InefficientBuffer {
    data: Vec<u8>,
}

impl InefficientBuffer {
    pub fn new() -> Self {
        Self {
            data: Vec::new(), // No capacity specified
        }
    }

    pub fn push(&mut self, value: u8) {
        self.data.push(value); // May cause reallocations
    }
}

// Bad: Inefficient string handling
pub fn inefficient_process_string(input: &str) -> String {
    let mut result = String::new(); // No capacity specified
    for c in input.chars() {
        if c.is_ascii_alphabetic() {
            result.push(c);
        }
    }
    result
}
</example>

## Best Practices
1. Pre-allocate when size is known
2. Use efficient data structures
3. Profile before optimizing
4. Consider cache effects
5. Minimize allocations
6. Use appropriate types
7. Implement efficient algorithms
8. Document performance
9. Benchmark critical paths
10. Follow optimization guidelines

## Technical Metadata
- Category: Rust Performance
- Priority: High
- Dependencies:
  - criterion = "0.5"
  - iai = "0.1"
  - perf-event = "0.4"
- Validation Requirements:
  - Performance benchmarks
  - Memory profiling
  - Cache analysis

<version>1.0</version>