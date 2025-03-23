---
description: "Active on Thymeleaf ,  HTML ,  CSS , tailwind ,  Alpine and Javascript"
globs: "**/*.html, **/*.ts, **/*.css, **/*.js"
__meta__type: "guideline"
__meta__repo: "fhabumugisha/discipliner"
__meta__framework: "Tailwind"
__meta__tags: ["Thymeleaf","HTML","CSS","Alpine.js","Javascript"]
__meta__rate: 7
---

# Cursor AI Rules for HTML, CSS, JAVASCRIPT, Thymeleaf, Tailwind 4, and Alpine.js Frontend

## General Guidelines
- Act as an **experienced frontend developer** using **Thymeleaf, Tailwind CSS 4, and Alpine.js**.
- Write **clean, semantic HTML** using Thymeleaf templates.
- Use **Tailwind CSS 4** for styling and avoid inline styles unless necessary.
- Use **Alpine.js** for interactive UI behavior instead of heavy JavaScript frameworks.
- Keep code **accessible (ARIA attributes)** and **mobile-friendly (responsive design)**.
- Use  webjars and frontend-maven-plugin for web dependenciens ( alpine, htmx, tailwind) management

- Use io.github.wimdeblauwe(htmx-spring-boot-thymeleaf) htmx maven plugin

## HTML Structure
- Use **Thymeleaf syntax** (`th:text`, `th:if`, `th:each`, etc.) for dynamic content.
- Organize UI in components in `/templates/fragments/` and use `th:replace` or `th:insert`.
- Use **layout fragments** for `header.html`, `footer.html`, and `base.html`.
- Use Thymeleaf fragments and Thymeleaf layout decorator
- Use always labels from message properties in the UI ( forms, tables, etc)
- Ensure labels and UI text use message properties instead of hardcoded text.
- Avoid hardcoded text in Thymeleaf templates. Use `#{key}` from message properties instead.
-  Follow best practices, especially in internationalized applications, it's better to use message properties for these labels.
- Internationalize all messages. Use text from messages.properties , messages_en.properties and messages_fr.properties
- Keep consistance of html elements like header, buttons alignment form fields styling
-  Use Thymeleaf's URL building mechanism for href URLs

## Tailwind CSS 4 Rules
- Use Tailwind's **utility classes** instead of writing custom CSS.
- Use **dark mode** support (`dark:` prefix).
- Prefer `@apply` in a `styles.css` file for repeated styles.
- Use **Flexbox (`flex`, `justify-between`)** and **Grid (`grid`, `gap-4`)** for layouts.

## Alpine.js Guidelines
- Use **x-data** for component state.
- Use **x-show / x-bind / x-on** for interactivity.
- Keep logic inside `@click` or `x-init`, avoiding inline JavaScript.
- Use `x-transition` for smooth animations.

## Example Code Snippets
### Base Layout (`base.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title th:text="${title}">App</title>
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@4.x/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
    <header th:replace="fragments/header :: header"></header>

    <main class="container mx-auto p-4">
        <section th:replace="${content}"></section>
    </main>

    <footer th:replace="fragments/footer :: footer"></footer>
</body>
</html>
```
### Button Component

```html
<button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        x-data="{ clicked: false }"
        @click="clicked = !clicked"
        :class="clicked ? 'bg-green-600' : 'bg-blue-600'">
    Click Me
</button>
```