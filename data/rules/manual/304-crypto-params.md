---
description: "ENSURE consistent cryptographic parameters across all environments to PREVENT authentication failures"
globs: ["**/*.rs", "**/*.sql", "**/migrations/*.sql"]
__meta__type: "guideline"
__meta__repo: "Broccode/acci"
__meta__tags: ["Cryptography","Security","Environment Configuration","Testing","Database Migrations"]
__meta__rate: 9
---
# Cryptographic Parameter Consistency

## Context
- When implementing password hashing or other cryptographic operations
- When writing database migrations with pre-computed hashes
- When writing tests that verify cryptographic operations
- When configuring cryptographic parameters across different environments

## Requirements
- All cryptographic parameters MUST be explicitly defined and documented
- Pre-computed hashes in migrations MUST use the same parameters as runtime operations
- Test environments MUST use identical cryptographic parameters as production
- Environment variables for cryptographic parameters MUST be consistently set across all environments
- Default values for cryptographic parameters MUST be explicitly defined and documented
- Changes to cryptographic parameters MUST be reflected in all affected migrations and tests
- Debugging logs MUST include cryptographic parameters for troubleshooting
- Test suites MUST verify cryptographic operations with consistent parameters

## Examples

<example>
// Good: Explicit parameter definition and consistent usage
fn get_argon2_params() -> Params {
    Params::new(
        env::var("ARGON2_MEMORY_SIZE").unwrap_or("19456").parse().unwrap(),
        env::var("ARGON2_ITERATIONS").unwrap_or("2").parse().unwrap(),
        env::var("ARGON2_PARALLELISM").unwrap_or("1").parse().unwrap(),
        None,
    ).expect("Invalid Argon2 parameters")
}

// Migration using same parameters
password_hash := '$argon2id$v=19$m=19456,t=2,p=1$salt$hash';
</example>

<example type="invalid">
// Bad: Inconsistent parameters between environments
// Test environment
let hash = hash_password("password"); // Uses default params

// Migration
password_hash := '$argon2id$v=19$m=4096,t=3,p=4$salt$hash'; // Different params
</example>

## Debugging Guidelines
1. Log cryptographic parameters during hashing operations
2. Log parsed parameters during verification
3. Compare parameters between hashing and verification
4. Verify parameter consistency across all environments
5. Document all parameter changes in CHANGELOG.md