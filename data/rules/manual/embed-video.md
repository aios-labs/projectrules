---
description: "Follow this rule when adding embedding videos or gifs in the documentation files."
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "langfuse/langfuse-docs"
__meta__service: "Cloudflare"
__meta__tags: ["Video Embedding","Documentation","Cloudflare","Web Development","Best Practices"]
__meta__rate: 8
---
## General rules

We use the components from [Video.tsx](mdc:components/Video.tsx) across our documentation to embed videos in the docs.

You can use the gifStyle flag for short videos, they will autoplay and look like gifs.

Always include a placeholder for the dimensions, thereby the user can add these to reduce layout shift.

<CloudflareVideo> is available globally without adding an import

## Examples

Example

```
<CloudflareVideo
  videoId="<videoid>"
  aspectRatio={16 / 9}
  title="<title>"
/>
```

Example gifmode

```
<CloudflareVideo
  videoId="<videoid>"
  aspectRatio={16 / 9}
  gifStyle
/>
```