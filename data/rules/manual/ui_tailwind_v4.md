---
description: "Troubleshooting issues with v4 tailwind styling"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "fearnworks/graphcap_prototype"
__meta__framework: "Tailwind"
__meta__tags: ["CSS","Styling","TailwindCSS","Web Development","UI"]
__meta__rate: 7
---
Changes from v3
Here's a comprehensive list of all the breaking changes in Tailwind CSS v4.0.

Our upgrade tool will handle most of these changes for you automatically, so we highly recommend using it if you can.

Removed @tailwind directives
In v4 you import Tailwind using a regular CSS @import statement, not using the @tailwind directives you used in v3:

CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "tailwindcss";
Removed deprecated utilities
We've removed any utilities that were deprecated in v3 and have been undocumented for several years. Here's a list of what's been removed along with the modern alternative:

Deprecated	Replacement
bg-opacity-*	Use opacity modifiers like bg-black/50
text-opacity-*	Use opacity modifiers like text-black/50
border-opacity-*	Use opacity modifiers like border-black/50
divide-opacity-*	Use opacity modifiers like divide-black/50
ring-opacity-*	Use opacity modifiers like ring-black/50
placeholder-opacity-*	Use opacity modifiers like placeholder-black/50
flex-shrink-*	shrink-*
flex-grow-*	grow-*
overflow-ellipsis	text-ellipsis
decoration-slice	box-decoration-slice
decoration-clone	box-decoration-clone
Renamed utilities
We've renamed the following utilities in v4 to make them more consistent and predictable:

v3	v4
shadow-sm	shadow-xs
shadow	shadow-sm
drop-shadow-sm	drop-shadow-xs
drop-shadow	drop-shadow-sm
blur-sm	blur-xs
blur	blur-sm
backdrop-blur-sm	backdrop-blur-xs
backdrop-blur	backdrop-blur-sm
rounded-sm	rounded-xs
rounded	rounded-sm
outline-none	outline-hidden
ring	ring-3
Updated shadow, radius, and blur scales
We've renamed the default shadow, radius and blur scales to make sure every utility has a named value. The "bare" versions still work for backward compatibility, but the <utility>-sm utilities will look different unless updated to their respective <utility>-xs versions.

To update your project for these changes, replace all the v3 utilities with their v4 versions:

HTML
<input class="shadow-sm" />
<input class="shadow-xs" />
<input class="shadow" />
<input class="shadow-sm" />
Renamed outline utility
The outline-none utility previously didn't actually set outline-style: none, and instead set an invisible outline that would still show up in forced colors mode for accessibility reasons.

To make this more clear we've renamed this utility to outline-hidden and added a new outline-none utility that actually sets outline-style: none.

To update your project for this change, replace any usage of outline-none with outline-hidden:

HTML
<input class="focus:outline-none" />
<input class="focus:outline-hidden" />
Default ring width change
In v3, the ring utility added a 3px ring. We've changed this in v4 to be 1px to make it consistent with borders and outlines.

To update your project for this change, replace any usage of ring with ring-3:

HTML
<input class="ring ring-blue-500" />
<input class="ring-3 ring-blue-500" />
Container configuration
In v3, the container utility had several configuration options like center and padding that no longer exist in v4.

To customize the container utility in v4, extend it using the @utility directive:

CSS
@utility container {
  margin-inline: auto;
  padding-inline: 2rem;
}
Default border color
In v3, the border-* and divide-* utilities used your configured gray-200 color by default. We've changed this to currentColor in v4 to make Tailwind less opinionated and match browser defaults.

To update your project for this change, make sure you specify a color anywhere you're using a border-* or divide-* utility:

<div class="border border-gray-200 px-2 py-3 ...">
  <!-- ... -->
</div>
Alternatively, add these base styles to your project to preserve the v3 behavior:

CSS
@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentColor);
  }
}
Default ring width and color
We've changed the width of the ring utility from 3px to 1px and changed the default color from blue-500 to currentColor to make things more consistent the border-*, divide-*, and outline-* utilities.

To update your project for these changes, replace any use of ring with ring-3:

<button class="focus:ring ...">
<button class="focus:ring-3 ...">
  <!-- ... -->
</button>
Then make sure to add ring-blue-500 anywhere you were depending on the default ring color:

<button class="focus:ring-3 focus:ring-blue-500 ...">
  <!-- ... -->
</button>
Alternatively, add these theme variables to your CSS to preserve the v3 behavior:

CSS
@theme {
  --default-ring-width: 3px;
  --default-ring-color: var(--color-blue-500);
}
Note though that these variables are only supported for compatibility reasons, and are not considered idiomatic usage of Tailwind CSS v4.0.

Preflight changes
We've made a couple small changes to the base styles in Preflight in v4:

New default placeholder color
In v3, placeholder text used your configured gray-400 color by default. We've simplified this in v4 to just use the current text color at 50% opacity.

You probably won't even notice this change (it might even make your project look better), but if you want to preserve the v3 behavior, add this CSS to your project:

CSS
@layer base {
  input::placeholder,
  textarea::placeholder {
    color: var(--color-gray-400);
  }
}
Buttons use the default cursor
Buttons now use cursor: default instead of cursor: pointer to match the default browser behavior.

If you'd like to continue using cursor: pointer by default, add these base styles to your CSS:

CSS
@layer base {
  button:not(:disabled),
  [role="button"]:not(:disabled) {
    cursor: pointer;
  }
}
Adding custom utilities
In v3, any custom classes you defined within @layer utilities would get picked up by Tailwind as a true utility class and would automatically work with variants like hover, focus, or lg.

In v4 we are using native cascade layers and no longer hijacking the @layer at-rule, so we've introduced the @utility API as a replacement:

CSS
@layer utilities {
  .tab-4 {
    tab-size: 4;
  }
}
@utility tab-4 {
  tab-size: 4;
}
Learn more about registering custom utilities in the adding custom utilities documentation.

Variant stacking order
In v3, stacked variants were applied from right to left, but in v4 we've updated them to apply left to right to look more like CSS syntax.

To update your project for this change, reverse the order of any order-sensitive stacked variants in your project:

HTML
<ul class="py-4 first:*:pt-0 last:*:pb-0">
<ul class="py-4 *:first:pt-0 *:last:pb-0">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
You likely have very few of these if any—the direct child variant (*) and any typography plugin variants (prose-headings) are the most likely ones you might be using, and even then it's only if you've stacked them with other variants.

Variables in arbitrary values
In v3 you were able to use CSS variables as arbitrary values without var(), but recent updates to CSS mean that this can often be ambiguous, so we've changed the syntax for this in v4 to use parentheses instead of square brackets.

To update your project for this change, replace usage of the old variable shorthand syntax with the new variable shorthand syntax:

HTML
<div class="bg-[--brand-color]"></div>
<div class="bg-(--brand-color)"></div>
Hover styles on mobile
In v4 we've updated the hover variant to only apply when the primary input device supports hover:

CSS
@media (hover: hover) {
  .hover\:underline:hover {
    text-decoration: underline;
  }
}
This can create problems if you've built your site in a way that depends on touch devices triggering hover on tap. If this is an issue for you, you can override the hover variant with your own variant that uses the old implementation:

CSS
@custom-variant hover (&:hover);
Generally though we recommend treating hover functionality as an enhancement, and not depending on it for your site to work since touch devices don't truly have the ability to hover.

Transitioning outline-color
The transition and transition-color utilities now include the outline-color property.

This means if you were adding an outline with a custom color on focus, you will see the color transition from the default color. To avoid this, make sure you set the outline color unconditionally, or explicitly set it for both states:

HTML
<button class="transition hover:outline-2 hover:outline-cyan-500"></button>
<button class="outline-cyan-500 transition hover:outline-2"></button>
Disabling core plugins
In v3 there was a corePlugins option you could use to completely disable certain utilities in the framework. This is no longer supported in v4.

Using the theme() function
Since v4 includes CSS variables for all of your theme values, we recommend using those variables instead of the theme() function whenever possible:

CSS
.my-class {
  background-color: theme(colors.red.500);
  background-color: var(--color-red-500);
}
For cases where you still need to use the theme() function (like in media queries where CSS variables aren't supported), you should use the CSS variable name instead of the old dot notation:

CSS
@media (width >= theme(screens.xl)) {
@media (width >= theme(--breakpoint-xl)) {
  /* ... */
}
Using a JavaScript config file
JavaScript config files are still supported for backward compatibility, but they are no longer detected automatically in v4.

If you still need to use a JavaScript config file, you can load it explicitly using the @config directive:

CSS
@config "../../tailwind.config.js";
Theme values in JavaScript
In v3 we exported a resolveConfig function that you could use to turn your JavaScript-based config into a flat object that you could use in your other JavaScript.

We've removed this in v4 in hopes that people can use the CSS variables we generate directly instead, which is much simpler and will significantly reduce your bundle size.

For example, the popular Motion library for React lets you animate to and from CSS variable values:

JSX
<motion.div animate={{ backgroundColor: "var(--color-blue-500)" }} />
If you need access to a resolved CSS variable value in JS, you can use getComputedStyle to get the value of a theme variable on the document root:

spaghetti.js
let styles = getComputedStyle(document.documentElement);
let shadow = styles.getPropertyValue("--shadow-xl");
Using @apply with Vue, Svelte, or CSS modules
In v4, stylesheets that are bundled separately from your main CSS file (e.g. CSS modules files, <style> blocks in Vue, Svelte, or Astro, etc.) do not have access to theme variables, custom utilities, and custom variants defined in other files.

To make these definitions available in these contexts, use @reference to import them without duplicating any CSS in your bundle:

Vue
<template>
  <h1>Hello world!</h1>
</template>
<style>
  @reference "../../app.css";
  h1 {
    @apply text-2xl font-bold text-red-500;
  }
</style>
Alternatively, you can use your CSS theme variables directly instead of using @apply at all, which will also improve performance since Tailwind won't need to process these styles:

Vue
<template>
  <h1>Hello world!</h1>
</template>
<style>
  h1 {
    color: var(--text-red-500);
  }
</style>