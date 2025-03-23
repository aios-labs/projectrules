---
description: "Guidelines for playbook-seo-accesibility"
globs: "*.slim"
__meta__type: "guideline"
__meta__repo: "sinfin/playbook"
__meta__framework: "Ruby on Rails"
__meta__tags: ["Accessibility","SEO","Slim Templates","Web Development","Ruby on Rails"]
__meta__rate: 7.5
---

You are an expert in web accessibility (a11y) and SEO optimization, specifically for Slim templates in Ruby on Rails applications.

Semantic HTML Structure
- Use proper HTML5 semantic elements:
  - `header` for page headers and important introductory content
  - `nav` for navigation menus
  - `main` for primary content
  - `article` for independent, self-contained content
  - `section` for thematic grouping of content
  - `aside` for complementary content
  - `footer` for page footer and related content
- Implement proper heading hierarchy (h1-h6)
- Use `figure` and `figcaption` for images with captions
- Utilize `time` element for dates and timestamps

Accessibility Attributes
- Add ARIA landmarks where semantic HTML is insufficient
- Include proper ARIA roles, states, and properties
- Ensure all interactive elements are keyboard accessible
- Set `aria-current` for active navigation items
- Use `aria-expanded` for collapsible elements
- Add `aria-label` or `aria-labelledby` for elements needing context
- Implement `aria-describedby` for additional descriptions

Form Accessibility
- Associate labels with form controls using `for` attribute
- Add descriptive placeholder text when necessary
- Include error messages with `aria-invalid` and `aria-describedby`
- Group related form elements with `fieldset` and `legend`
- Use `required` attribute and aria-required for mandatory fields

Image Optimization
- Always include meaningful alt text for images
- Use empty alt="" for decorative images
- Implement responsive images with srcset and sizes
- Add loading="lazy" for images below the fold
- Include width and height attributes to prevent layout shifts

Link and Button Best Practices
- Write descriptive link text (avoid "click here" or "read more")
- Add title attributes for links needing additional context
- Ensure sufficient color contrast for text and backgrounds
- Make clickable areas large enough (minimum 44x44px)
- Use button elements for interactive controls

SEO Optimization
- Implement proper meta tags:
  - title with appropriate length (50-60 characters)
  - description with compelling content (150-160 characters)
  - robots directives when needed
- Use canonical URLs for duplicate content
- Implement Open Graph and Twitter Card meta tags
- Structure data with appropriate Schema.org markup
- Use rel="nofollow" for external links when appropriate

Content Structure
- Place important content at the beginning of the document
- Use descriptive IDs and data attributes
- Implement skip navigation links
- Structure content with appropriate lists (ul, ol, dl)
- Use tables only for tabular data with proper headers

Performance Considerations
- Minimize inline styles and scripts
- Implement critical CSS when necessary
- Use async or defer for non-critical scripts
- Optimize font loading with font-display property
- Consider print stylesheets for printer-friendly versions

Mobile and Responsive Design
- Ensure proper viewport configuration
- Use relative units (rem, em) for text sizing
- Implement proper touch targets for mobile devices
- Test focus indicators at all viewport sizes
- Consider reduced motion preferences

Documentation and Resources
- WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Schema.org: https://schema.org/
- Google SEO Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide