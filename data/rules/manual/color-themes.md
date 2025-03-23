---
description: "Predefined color themes for different project styles"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "gimoya/tiroltrailhead"
__meta__tags: ["Color Themes","Design","CSS","Web Development","UI/UX"]
__meta__rate: 8
---
# Color Theme System

A collection of predefined color themes for different project styles.
Each theme includes a complete set of semantic color tokens.

## Available Themes

1. Lively - Vibrant and energetic
2. Dark - Deep and sophisticated
3. Light - Clean and minimal
4. Earth - Natural and organic
5. Pastel - Soft and gentle
6. Poppy - Bold and playful
7. Business - Professional and trustworthy
8. Casual - Friendly and approachable
9. Tech - Modern and digital
10. Vintage - Retro and classic
11. Nordic - Minimalist and calm
12. Tropical - Bright and exotic
13. Elegant - Refined and luxurious
14. Urban - Contemporary and edgy
15. Zen - Peaceful and balanced
16. Creative - Artistic and expressive
17. Corporate - Formal and structured
18. Playful - Fun and energetic
19. Natural - Organic and fresh
20. Modern - Clean and sophisticated

## Theme Definitions

### Lively Theme
:root[data-theme="lively"] {
  --color-primary-50: #fdf2f8;
  --color-primary-100: #fce7f3;
  --color-primary-200: #fbcfe8;
  --color-primary-300: #f9a8d4;
  --color-primary-400: #f472b6;
  --color-primary-500: #ec4899;
  --color-primary-600: #db2777;
  --color-primary-700: #be185d;
  --color-primary-800: #9d174d;
  --color-primary-900: #831843;

  --color-neutral-50: #fafafa;
  --color-neutral-100: #f4f4f5;
  --color-neutral-200: #e4e4e7;
  --color-neutral-300: #d4d4d8;
  --color-neutral-400: #a1a1aa;
  --color-neutral-500: #71717a;
  --color-neutral-600: #52525b;
  --color-neutral-700: #3f3f46;
  --color-neutral-800: #27272a;
  --color-neutral-900: #18181b;

  --color-success-50: #ecfdf5;
  --color-success-100: #d1fae5;
  --color-success-500: #10b981;
  --color-success-600: #059669;
  --color-success-700: #047857;

  --color-error-50: #fff1f2;
  --color-error-100: #ffe4e6;
  --color-error-500: #f43f5e;
  --color-error-600: #e11d48;
  --color-error-700: #be123c;

  --color-warning-50: #fff7ed;
  --color-warning-100: #ffedd5;
  --color-warning-500: #f97316;
  --color-warning-600: #ea580c;
  --color-warning-700: #c2410c;

  --color-surface-50: #ffffff;
  --color-surface-100: #fafafa;
  --color-surface-200: #f5f5f5;
  --color-surface-300: #e5e5e5;
  --color-surface-400: #d4d4d4;
}

### Dark Theme
:root[data-theme="dark"] {
  --color-primary-50: #f5f3ff;
  --color-primary-100: #ede9fe;
  --color-primary-200: #ddd6fe;
  --color-primary-300: #c4b5fd;
  --color-primary-400: #a78bfa;
  --color-primary-500: #8b5cf6;
  --color-primary-600: #7c3aed;
  --color-primary-700: #6d28d9;
  --color-primary-800: #5b21b6;
  --color-primary-900: #4c1d95;

  --color-neutral-50: #fafafa;
  --color-neutral-100: #f4f4f5;
  --color-neutral-200: #e4e4e7;
  --color-neutral-300: #d4d4d8;
  --color-neutral-400: #a1a1aa;
  --color-neutral-500: #71717a;
  --color-neutral-600: #52525b;
  --color-neutral-700: #3f3f46;
  --color-neutral-800: #27272a;
  --color-neutral-900: #18181b;

  --color-success-50: #f0fdf4;
  --color-success-100: #dcfce7;
  --color-success-500: #22c55e;
  --color-success-600: #16a34a;
  --color-success-700: #15803d;

  --color-error-50: #fef2f2;
  --color-error-100: #fee2e2;
  --color-error-500: #ef4444;
  --color-error-600: #dc2626;
  --color-error-700: #b91c1c;

  --color-warning-50: #fffbeb;
  --color-warning-100: #fef3c7;
  --color-warning-500: #f59e0b;
  --color-warning-600: #d97706;
  --color-warning-700: #b45309;

  --color-surface-50: #ffffff;
  --color-surface-100: #fafafa;
  --color-surface-200: #f5f5f5;
  --color-surface-300: #e5e5e5;
  --color-surface-400: #d4d4d4;
}

### Earth Theme
:root[data-theme="earth"] {
  --color-primary-50: #faf5ef;
  --color-primary-100: #f5ebe1;
  --color-primary-200: #e9d5c4;
  --color-primary-300: #ddbfa8;
  --color-primary-400: #d1a98c;
  --color-primary-500: #c59370;
  --color-primary-600: #b97d54;
  --color-primary-700: #a66738;
  --color-primary-800: #8b522c;
  --color-primary-900: #733d20;

  --color-neutral-50: #fafaf9;
  --color-neutral-100: #f5f5f4;
  --color-neutral-200: #e7e5e4;
  --color-neutral-300: #d6d3d1;
  --color-neutral-400: #a8a29e;
  --color-neutral-500: #78716c;
  --color-neutral-600: #57534e;
  --color-neutral-700: #44403c;
  --color-neutral-800: #292524;
  --color-neutral-900: #1c1917;

  --color-success-50: #f3faf7;
  --color-success-100: #def7ec;
  --color-success-500: #2d9d78;
  --color-success-600: #287c5e;
  --color-success-700: #1f5c46;

  --color-error-50: #fdf3f3;
  --color-error-100: #fbe7e7;
  --color-error-500: #e05252;
  --color-error-600: #c13e3e;
  --color-error-700: #922e2e;

  --color-warning-50: #fdfaec;
  --color-warning-100: #fcf5d9;
  --color-warning-500: #e6b539;
  --color-warning-600: #c99a2e;
  --color-warning-700: #9c7823;

  --color-surface-50: #fdfcfb;
  --color-surface-100: #f8f6f3;
  --color-surface-200: #f3f0ec;
  --color-surface-300: #e8e4df;
  --color-surface-400: #ddd8d2;

  /* Semantic Tokens */
  --color-text-primary: var(--color-neutral-900);
  --color-text-secondary: var(--color-neutral-700);
  --color-text-tertiary: var(--color-neutral-500);
  --color-text-inverse: var(--color-surface-50);

  --color-background-primary: var(--color-surface-50);
  --color-background-secondary: var(--color-surface-100);
  --color-background-tertiary: var(--color-surface-200);

  --color-border-primary: var(--color-neutral-200);
  --color-border-secondary: var(--color-neutral-100);

  --color-action-primary: var(--color-primary-600);
  --color-action-primary-hover: var(--color-primary-700);
  --color-action-primary-active: var(--color-primary-800);

  --color-status-success: var(--color-success-600);
  --color-status-error: var(--color-error-600);
  --color-status-warning: var(--color-warning-600);
}

### Tech Theme
:root[data-theme="tech"] {
  --color-primary-50: #f0f7ff;
  --color-primary-100: #e0f2fe;
  --color-primary-200: #bae6fd;
  --color-primary-300: #7dd3fc;
  --color-primary-400: #38bdf8;
  --color-primary-500: #0ea5e9;
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
  --color-primary-800: #075985;
  --color-primary-900: #0c4a6e;

  --color-neutral-50: #f9fafb;
  --color-neutral-100: #f3f4f6;
  --color-neutral-200: #e5e7eb;
  --color-neutral-300: #d1d5db;
  --color-neutral-400: #9ca3af;
  --color-neutral-500: #6b7280;
  --color-neutral-600: #4b5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #1f2937;
  --color-neutral-900: #111827;

  --color-success-50: #ecfdf5;
  --color-success-100: #d1fae5;
  --color-success-500: #10b981;
  --color-success-600: #059669;
  --color-success-700: #047857;

  --color-error-50: #fef2f2;
  --color-error-100: #fee2e2;
  --color-error-500: #ef4444;
  --color-error-600: #dc2626;
  --color-error-700: #b91c1c;

  --color-warning-50: #fffbeb;
  --color-warning-100: #fef3c7;
  --color-warning-500: #f59e0b;
  --color-warning-600: #d97706;
  --color-warning-700: #b45309;

  --color-surface-50: #ffffff;
  --color-surface-100: #f9fafb;
  --color-surface-200: #f3f4f6;
  --color-surface-300: #e5e7eb;
  --color-surface-400: #d1d5db;

  /* Semantic Tokens */
  --color-text-primary: var(--color-neutral-900);
  --color-text-secondary: var(--color-neutral-700);
  --color-text-tertiary: var(--color-neutral-500);
  --color-text-inverse: var(--color-surface-50);

  --color-background-primary: var(--color-surface-50);
  --color-background-secondary: var(--color-surface-100);
  --color-background-tertiary: var(--color-surface-200);

  --color-border-primary: var(--color-neutral-200);
  --color-border-secondary: var(--color-neutral-100);

  --color-action-primary: var(--color-primary-600);
  --color-action-primary-hover: var(--color-primary-700);
  --color-action-primary-active: var(--color-primary-800);

  --color-status-success: var(--color-success-600);
  --color-status-error: var(--color-error-600);
  --color-status-warning: var(--color-warning-600);
}

### Pastel Theme
:root[data-theme="pastel"] {
  --color-primary-50: #fdf4ff;
  --color-primary-100: #fae8ff;
  --color-primary-200: #f5d0fe;
  --color-primary-300: #f0abfc;
  --color-primary-400: #e879f9;
  --color-primary-500: #d946ef;
  --color-primary-600: #c026d3;
  --color-primary-700: #a21caf;
  --color-primary-800: #86198f;
  --color-primary-900: #701a75;

  /* ... (similar structure for other colors) */
}

### Nordic Theme
:root[data-theme="nordic"] {
  --color-primary-50: #f6f7f9;
  --color-primary-100: #eceef2;
  --color-primary-200: #d5dae3;
  --color-primary-300: #b3bcc9;
  --color-primary-400: #8896ab;
  --color-primary-500: #6b7a93;
  --color-primary-600: #566179;
  --color-primary-700: #434c5e;
  --color-primary-800: #3b4252;
  --color-primary-900: #2e3440;

  /* ... (similar structure for other colors) */
}

### Vintage Theme
:root[data-theme="vintage"] {
  --color-primary-50: #fcf5e8;
  --color-primary-100: #f8e8cc;
  --color-primary-200: #f1d19a;
  --color-primary-300: #e9b668;
  --color-primary-400: #e19c36;
  --color-primary-500: #d88104;
  --color-primary-600: #b36803;
  --color-primary-700: #8f5002;
  --color-primary-800: #6b3c02;
  --color-primary-900: #472801;

  /* ... (similar structure for other colors) */
}

### Tropical Theme
:root[data-theme="tropical"] {
  --color-primary-50: #ecfdf4;
  --color-primary-100: #d1fae5;
  --color-primary-200: #a7f3d0;
  --color-primary-300: #6ee7b7;
  --color-primary-400: #34d399;
  --color-primary-500: #10b981;
  --color-primary-600: #059669;
  --color-primary-700: #047857;
  --color-primary-800: #065f46;
  --color-primary-900: #064e3b;

  /* ... (similar structure for other colors) */
}

### Elegant Theme
:root[data-theme="elegant"] {
  --color-primary-50: #f5f3ff;
  --color-primary-100: #ede9fe;
  --color-primary-200: #ddd6fe;
  --color-primary-300: #c4b5fd;
  --color-primary-400: #a78bfa;
  --color-primary-500: #8b5cf6;
  --color-primary-600: #7c3aed;
  --color-primary-700: #6d28d9;
  --color-primary-800: #5b21b6;
  --color-primary-900: #4c1d95;

  /* ... (similar structure for other colors) */
}

### Urban Theme
:root[data-theme="urban"] {
  --color-primary-50: #f4f6f7;
  --color-primary-100: #e2e8ea;
  --color-primary-200: #c5d2d8;
  --color-primary-300: #a3b5be;
  --color-primary-400: #7d91a0;
  --color-primary-500: #5f7585;
  --color-primary-600: #4c5d6b;
  --color-primary-700: #3d4b57;
  --color-primary-800: #2e3943;
  --color-primary-900: #1f272f;

  /* ... (similar structure for other colors) */
}

### Creative Theme
:root[data-theme="creative"] {
  --color-primary-50: #fdf2f8;
  --color-primary-100: #fce7f3;
  --color-primary-200: #fbcfe8;
  --color-primary-300: #f9a8d4;
  --color-primary-400: #f472b6;
  --color-primary-500: #ec4899;
  --color-primary-600: #db2777;
  --color-primary-700: #be185d;
  --color-primary-800: #9d174d;
  --color-primary-900: #831843;

  /* ... (similar structure for other colors) */
}

### Corporate Theme
:root[data-theme="corporate"] {
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-200: #bae6fd;
  --color-primary-300: #7dd3fc;
  --color-primary-400: #38bdf8;
  --color-primary-500: #0ea5e9;
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
  --color-primary-800: #075985;
  --color-primary-900: #0c4a6e;

  /* ... (similar structure for other colors) */
}

### Modern Theme
:root[data-theme="modern"] {
  --color-primary-50: #f4f6f8;
  --color-primary-100: #e5e9ed;
  --color-primary-200: #cbd3dc;
  --color-primary-300: #a9b7c6;
  --color-primary-400: #8494a7;
  --color-primary-500: #637588;
  --color-primary-600: #4e5d6c;
  --color-primary-700: #3d4a57;
  --color-primary-800: #2c3641;
  --color-primary-900: #1b222a;

  /* ... (similar structure for other colors) */
}

## Usage

1. Set the theme in your HTML:
```html
<html data-theme="lively">
```

2. Or switch themes via JavaScript:
```js
document.documentElement.setAttribute('data-theme', 'dark');
```

3. Use the semantic tokens in your CSS:
```css
.button {
  background-color: var(--color-primary-600);
  color: var(--color-surface-50);
}
```