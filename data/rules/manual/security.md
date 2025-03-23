---
description: "Guidelines for security"
globs: "**/*.{ts,tsx}"
__meta__type: "guideline"
__meta__repo: "mericozkayagan/restaurant-app"
__meta__framework: "NextJS"
__meta__tags: ["Security","Authentication","Authorization","Data Protection","Payment Processing"]
__meta__rate: 9
---
// Pattern: **/*.{ts,tsx}
// Description: Security Best Practices for the Restaurant Management System

# Security Best Practices

You are implementing security features for a restaurant management system that handles user data, payment information, and business operations.

## General Security Principles

- Avoid using `eval()` as it can lead to security vulnerabilities
- Never use `innerHTML` as it can expose your application to XSS attacks
- Always validate and sanitize user input before using it
- Never log sensitive information like passwords
- Implement proper JWT token handling with appropriate expiration
- Use environment variables for secrets and sensitive configuration
- Implement role-based access control for different user types
- Use proper CORS configuration for API endpoints
- Implement rate limiting for authentication endpoints
- Use HTTPS for all communication

## Authentication and Authorization

- Use NextAuth.js for secure authentication
- Store hashed passwords using bcrypt with appropriate salt rounds
- Implement proper session management
- Use secure HTTP-only cookies for session storage
- Validate user permissions before performing actions
- Implement CSRF protection for forms and API endpoints
- Use short-lived access tokens with refresh token rotation

## Data Protection

- Validate all input with Zod schemas
- Implement proper error handling that doesn't leak sensitive information
- Sanitize all user-generated content before displaying
- Use parameterized queries with Prisma to prevent SQL injection
- Implement proper access controls at the database level
- Use encryption for sensitive data at rest
- Implement proper data backups and recovery procedures

## Payment Processing Security

- Use established payment providers (Stripe/PayPal) rather than custom solutions
- Follow PCI DSS guidelines for handling payment information
- Never store complete credit card details
- Implement proper audit logging for payment transactions
- Use idempotency keys to prevent duplicate charges
- Implement proper error recovery for failed payments