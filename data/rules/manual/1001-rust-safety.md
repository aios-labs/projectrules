---
description: "ENFORCE safe Rust practices and proper usage of unsafe code"
globs: ["**/*.rs"]
__meta__type: "guideline"
__meta__repo: "DataScienceBioLab/squirrel"
__meta__tags: ["Rust","Memory Safety","Unsafe Code","Programming Best Practices","Static Analysis"]
__meta__rate: 8
---
# Rust Safety Standards

## Context
- When writing Rust code that requires unsafe blocks
- When working with raw pointers
- When implementing unsafe traits
- When dealing with memory safety

## Requirements
- Minimize unsafe code usage - prefer safe abstractions
- Document all unsafe blocks with safety invariants
- Use safe abstractions over unsafe code when possible
- Follow the "unsafe superpowers" principle
- Implement proper bounds checking
- Use const generics for compile-time safety
- Follow the principle of least privilege
- Document memory safety guarantees

## Examples
<example>
// Good: Safe abstraction over unsafe code
pub struct SafeVec<T> {
    inner: Vec<T>,
}

impl<T> SafeVec<T> {
    pub fn new() -> Self {
        Self {
            inner: Vec::new(),
        }
    }

    // Safe public API
    pub fn push(&mut self, value: T) {
        self.inner.push(value);
    }

    // Internal unsafe implementation
    unsafe fn internal_unsafe_operation(&mut self) {
        // Safety: We maintain invariants here
        // 1. The vector is properly initialized
        // 2. All indices are bounds-checked
        // 3. Memory is properly aligned
        // ... unsafe implementation ...
    }
}
</example>

<example type="invalid">
// Bad: Unnecessary unsafe code
pub struct UnsafeVec<T> {
    ptr: *mut T,
    len: usize,
}

impl<T> UnsafeVec<T> {
    pub fn push(&mut self, value: T) {
        unsafe {
            // Safety: No bounds checking, no alignment verification
            *self.ptr.add(self.len) = value;
            self.len += 1;
        }
    }
}
</example>

## Best Practices
1. Always document safety invariants
2. Use safe abstractions when possible
3. Minimize unsafe code surface area
4. Validate all unsafe preconditions
5. Implement proper error handling
6. Use const generics for safety
7. Follow memory safety rules
8. Document unsafe requirements
9. Test unsafe code thoroughly
10. Review unsafe code carefully

## Technical Metadata
- Category: Rust Safety
- Priority: High
- Dependencies:
  - Rust compiler
  - Memory safety tools
  - Static analysis tools
- Validation Requirements:
  - Safety documentation
  - Unsafe block validation
  - Memory safety checks

<version>1.0</version>