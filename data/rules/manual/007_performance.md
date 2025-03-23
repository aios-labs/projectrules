---
description: "Guidelines and recommendations for optimizing React Native app performance globs: src/**/*.{js,jsx,ts,tsx}"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "bunchtrail/bgarden-mobile"
__meta__framework: "react-native"
__meta__tags: ["Performance","Optimization","React Native","JavaScript","Mobile Development"]
__meta__rate: 7
---
## description:

# React Native Performance Optimization

@context { "type": "performance", "framework": "react-native", "version": "1.0.0" }

## Key Principles

- Prioritize performance throughout the development lifecycle
- Regularly test performance on target devices
- Optimize both JavaScript logic and native components
- Profile the app to find bottlenecks
- Apply incremental improvements and measure their effects

## Rendering Optimization

### Prevent Unnecessary Re-renders

- Use `React.memo` to memoize functional components
- Use `useMemo` to cache computed values
- Use `useCallback` to memoize functions passed to child components

```tsx
import React, { useCallback, useMemo, useState } from 'react';

const ExpensiveComponent = React.memo(({ data }) => {
  return <Text>{data}</Text>;
});


### List Optimization

- Prefer `FlatList` or `SectionList` over `ScrollView` for long lists
- Configure `windowSize`, `initialNumToRender`, and `maxToRenderPerBatch` for performance
- Use `getItemLayout` for faster item measurement
- Provide a unique `keyExtractor` for each item

## JavaScript Optimization

### Hermes JavaScript Engine

- Enable Hermes to improve performance and reduce memory usage on Android

### Avoid Blocking the JS Thread

- Offload heavy computations to separate threads (Web Workers or native modules)
- Defer non-critical tasks using `InteractionManager`