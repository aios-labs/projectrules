---
description: "Performance optimization and best practices for Next.js applications"
globs: "**/*.{ts,tsx,js,jsx}"
__meta__type: "guideline"
__meta__repo: "wyattowalsh/AI-Tools"
__meta__framework: "NextJS"
__meta__tags: ["Performance Optimization","Best Practices","NextJS","Web Development","SEO"]
__meta__rate: 9
---
## Server Components

### Usage Guidelines
- Use React Server Components by default
- Add 'use client' only when necessary
- Keep client-side code minimal
- Leverage server-side rendering

### Optimization
- Implement proper component splitting
- Use streaming where appropriate
- Optimize data fetching
- Minimize client-side JavaScript

## Data Fetching

### Server Actions
- Use Next.js server actions for mutations
- Implement proper error handling
- Optimize database queries
- Cache responses appropriately

### API Routes
- Use API routes for client-side requests
- Implement proper rate limiting
- Handle errors gracefully
- Cache responses when possible

## Image Optimization

### Next.js Image
- Use Next.js Image component
- Implement proper sizing
- Use appropriate formats
- Optimize loading strategies

### Asset Management
- Optimize static assets
- Use proper image formats
- Implement lazy loading
- Consider responsive images

## JavaScript Optimization

### Code Splitting
- Use dynamic imports
- Implement route-based splitting
- Split large components
- Monitor bundle sizes

### Bundle Optimization
- Minimize dependencies
- Remove unused code
- Implement proper tree shaking
- Monitor bundle analysis

## Animation Performance

### Framer Motion
- Use `willChange` appropriately
- Optimize animation performance
- Use hardware acceleration
- Monitor frame rates

### CSS Animations
- Use CSS transforms
- Implement proper triggers
- Monitor animation impact
- Consider battery life

## Caching

### Static Generation
- Use static generation where possible
- Implement ISR when needed
- Configure revalidation
- Monitor cache hit rates

### API Caching
- Implement proper cache headers
- Use stale-while-revalidate
- Configure cache duration
- Monitor cache effectiveness

## Loading States

### Implementation
- Use suspense boundaries
- Implement loading skeletons
- Show progress indicators
- Handle errors gracefully

### Optimization
- Minimize layout shift
- Implement proper fallbacks
- Use streaming where possible
- Monitor loading metrics

## Monitoring

### Performance Metrics
- Monitor Core Web Vitals
- Track client-side metrics
- Monitor server response times
- Track error rates

### Tools
- Use Lighthouse
- Implement Analytics
- Monitor error tracking
- Use performance profiling

## SEO Optimization

### Meta Tags
- Implement proper meta tags
- Use dynamic metadata
- Optimize for social sharing
- Monitor SEO metrics

### Content
- Implement proper heading structure
- Use semantic HTML
- Optimize content loading
- Monitor crawl stats

## Error Handling

### Client Side
- Implement error boundaries
- Show meaningful errors
- Log client-side errors
- Monitor error rates

### Server Side
- Handle server errors gracefully
- Implement proper logging
- Monitor error patterns
- Implement recovery strategies

## Testing

### Performance Testing
- Test loading performance
- Monitor memory usage
- Test animation performance
- Monitor API response times

### Load Testing
- Implement load testing
- Monitor server performance
- Test concurrent users
- Monitor resource usage

## Documentation

### Performance Guidelines
- Document optimization strategies
- Provide performance budgets
- Document testing procedures
- Keep metrics updated

### Monitoring
- Document monitoring setup
- Track performance changes
- Document optimization results
- Keep documentation current