---
description: "Inform model I'm using Tailwind v4"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "xdanger/xdanger"
__meta__original_filename: "tailwind-v4"
__meta__duplicate: "true"
__meta__framework: "NextJS"
__meta__tags: ["TailwindCSS","CSS","NextJS","Styling","Dark Mode"]
__meta__rate: 7
---
# Using Tailwind v4

- This Next.js project is using Tailwind v4, which is released just now.
- The v4 is not in your embeded knowledge. See the following docs for latest information.
  - <https://tailwindcss.com/docs/upgrade-guide>
  - <https://ui.shadcn.com/docs/tailwind-v4>
- Tailwind v4.0 在 CSS 文件里的导入语句是 `@import 'tailwindcss';` 而不是 `@import '@tailwindcss/postcss';`

## 主要变化点

- **自定义变体语法**: 使用新的 `@custom-variant` 语法

  ```css
  @custom-variant dark (&:is(.dark *));
  ```

- **颜色格式**: 使用 OKLCH 颜色格式，提供更好的颜色表现

  ```css
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  ```

- **主题内联**: 使用 `@theme inline` 定义主题变量

  ```css
  @theme inline {
    --color-background: var(--background);
    --color-foreground: var(--foreground);
    /* 其他变量 */
  }
  ```

- **导入语法**: 使用新语法导入样式表

  ```css
  @import 'tailwindcss';
  @plugin 'tailwindcss-animate';
  ```

## CSS变量命名约定

- 基础变量使用简单名称：`--background`, `--foreground`
- 主题变量使用 `--color-` 前缀：`--color-background`, `--color-foreground`
- UI组件变量使用对应名称：`--card`, `--primary`, `--accent`

## 黑暗模式实现

项目同时使用两种暗黑模式实现方式:

1. **Tailwind 原生**: 通过 `.dark` 类和自定义变体
2. **静态导出兼容**: 通过 `theme-switcher.js` 和直接 CSS 变量操作

在静态导出模式下，主题切换不依赖于客户端 JavaScript 框架，而是使用原生 DOM 操作。

## 样式文件结构

- `globals.css`: 主CSS文件，包含基础样式、主题变量和所有所需样式
- `theme-switcher.js`: 独立主题切换脚本，不依赖 React

## 使用建议

1. 使用HSL函数访问CSS变量：`hsl(var(--foreground))`
2. 为新组件添加暗黑模式样式时同时更新 `globals.css` 中的 `.dark` 类
3. 新增颜色时优先考虑 OKLCH 格式，以获得更好的颜色表现
