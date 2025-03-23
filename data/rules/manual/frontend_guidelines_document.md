---
description: "Apply these rules when making changes to the project"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "SiriusYou/ZhongYi-NaiCha"
__meta__tags: ["Frontend Development","Mobile Apps","Design Principles","State Management","Performance Optimization"]
__meta__rate: 7
---
Update this rule if user requested changes to the project requirement, etc.
# Frontend Guideline Document

This document outlines the essential guidelines for the frontend of the 中医奶茶养生 App (TCM Milk Tea Wellness App). It covers everything from architecture and design principles to styling, component structure, state management, routing, performance optimization, and testing. The aim is to provide clear guidance to developers and designers while marrying traditional Chinese medicinal aesthetics with modern, user-friendly interfaces.

## Frontend Architecture

The frontend is implemented as native applications for both iOS and Android. Key characteristics include:

*   **Native Mobile Apps:**

    *   iOS uses standard native frameworks (Swift/SwiftUI/UIKit) and Android leverages Kotlin/Java (Android SDK/Jetpack components).
    *   This approach allows us to fully utilize platform-specific features such as native routing, animations, and offline capabilities.

*   **Modular and Lightweight Design:**

    *   The app is divided into modular components that can be developed, tested, and updated independently.
    *   Offline content caching is implemented to enable effective use even when a network connection is not available.

*   **Scalability and Maintainability:**

    *   Each feature (e.g., personalized recommendations, knowledge center, community interaction) is built as a self-contained module.
    *   Code reuse and clear separation of concerns contribute to easier maintenance and scalability in future releases.

*   **Performance:**

    *   The architecture supports performance with asynchronous data fetching, lazy loading of resources (images, videos) and smooth transitions between screens.
    *   Emphasis is placed on reducing load times and providing seamless user experiences across diverse network conditions.

## Design Principles

The frontend design is guided by several core principles to ensure a delightful and accessible user experience:

*   **Usability:**

    *   Prioritize intuitive interfaces that allow users to easily navigate between features such as personalized recommendations, health profiles, and community interactions.
    *   Minimalistic design reduces on-screen clutter.

*   **Accessibility:**

    *   Interfaces are designed to be accessible to a wide audience, with considerations for font size, contrast, and touch-friendly interactions.
    *   Support for both Chinese and English interfaces ensures linguistic accessibility.

*   **Responsiveness:**

    *   Although the primary target is mobile, layouts are adapted for various screen sizes and orientations.
    *   Smooth animations and transitions improve overall interaction quality.

*   **Visual Harmony:**

    *   The design bridges traditional Chinese elements with modern aesthetics, offering a culturally resonant yet sleek look and feel.

## Styling and Theming

The style of the app is carefully crafted to reflect its dual emphasis on Traditional Chinese Medicine and modern milk tea culture:

*   **Styling Approach:**

    *   We follow a blend of modern flat design enhanced with subtle glassmorphism effects. This creates an aesthetic that is both sleek and inviting.
    *   Consistent use of colors, fonts, and spacing ensures a unified appearance across the app.

*   **CSS Methodologies & Tools:**

    *   For consistency, a naming convention inspired by BEM (Block Element Modifier) can be adopted for organizing styles.
    *   Use of pre-processors or styling frameworks (where applicable in shared web components) ensures maintainability. In native development, similar principles are followed by organizing resource files and using style guides provided by iOS and Android platforms.

*   **Theming:**

    *   A centralized theming system ensures the brand’s traditional yet modern look. Themes incorporate primary, secondary, accent, and neutral colors throughout the app.

*   **Color Palette:**

    *   Primary: Warm Earth Tone (#8B6F4E) – reflects the traditional aspect.
    *   Secondary: Soft Beige (#F5F1E7) – offers a neutral backdrop.
    *   Accent: Vibrant Turquoise (#00B4D8) – adds a modern, energetic pop.
    *   Optional Accent: Rich Red (#FF6B6B) – for highlights and calls to action.
    *   Neutral: Dark Gray (#333333) – used for text and essential UI elements.

*   **Fonts:**

    *   A clean sans-serif font such as "Noto Sans" is recommended for its readability.
    *   For elements that call for traditional flair, subtle calligraphic accents can be introduced using fonts like "Noto Serif TC".

## Component Structure

The application relies on a component-based architecture to ensure that UI elements are reusable and easily maintainable:

*   **Modular Components:**

    *   Each screen and widget (e.g., user profiles, recipe details, community posts) is built as an independent component.
    *   Components are organized based on functionality (e.g., authentication, content display, navigation).

*   **Reusability and Maintainability:**

    *   Reusable components reduce code duplication and make the maintenance process straightforward.
    *   A well-defined directory structure groups similar components together, streamlining development workflows.

*   **Platform-Specific Architecture:**

    *   For iOS, components might be managed via SwiftUI views while on Android, similar principles are followed using fragments or Jetpack Compose components.

## State Management

Maintaining state across the application is crucial for ensuring that the user experience remains consistent:

*   **Native State Handling:**

    *   For iOS, state management can occur through Combine or even SwiftUI’s inherent state mechanisms.
    *   On Android, ViewModel and LiveData (or Kotlin StateFlow) are leveraged to hold and manage UI-related state.

*   **Data Synchronization:**

    *   The state is synchronized with the backend via API calls and updated in real time to reflect user interactions (e.g., health profile changes, new recipe selections).
    *   Offline mode is supported by caching state data locally until a connection is re-established.

## Routing and Navigation

Managing navigation is handled using native routing and navigation systems on both platforms:

*   **Navigation Controllers:**

    *   iOS employs the Navigation Controller, enabling hierarchical navigation through screens with built-in support for smooth transitions.
    *   Android uses similar navigation components (such as Navigation Component framework in Jetpack) to manage screen transitions and deep linking.

*   **User Flow Consistency:**

    *   Navigation patterns are consistent across various sections: User Center, Recommendation System, Knowledge Center, Recipe Guidance, and Community features.
    *   A clear, hierarchical structure ensures that users can intuitively move between modules such as account settings, personalized content, and community interactions.

## Performance Optimization

Ensuring optimal performance is a key goal of the frontend architecture. Strategies include:

*   **Lazy Loading:**

    *   Only load resources (images, videos, peripheral modules) when needed, reducing initial load times.

*   **Caching:**

    *   Offline content caching ensures that essential information (DIY guides, recipes, health tips) is quickly accessible without repeated network calls.

*   **Asynchronous Operations:**

    *   API requests and data fetching are performed asynchronously, ensuring that UI remains responsive during background processes.

*   **Optimized Rendering:**

    *   Native UI components are used to minimize overhead, and careful profiling helps identify and address performance bottlenecks.

## Testing and Quality Assurance

Quality is at the heart of this project, with a robust testing strategy in place:

*   **Unit Testing:**

    *   Business logic and functions are thoroughly tested on both platforms using XCTest for iOS and JUnit or similar frameworks for Android.

*   **UI Testing:**

    *   Automated UI tests ensure that navigation flows, transitions, and user interactions perform as expected. For iOS, XCTest UI tests are used; on Android, Espresso is used.

*   **Integration and End-to-End Testing:**

    *   Cross-component integration tests and end-to-end tests (potentially facilitated by tools like Appium) ensure that all modules work harmoniously together.

*   **Continuous Integration:**

    *   Automated testing is integrated into the CI pipeline, ensuring regressions are caught early and quality is continuously maintained.

## Conclusion and Overall Frontend Summary

This guideline encapsulates the frontend setup for the 中医奶茶养生 App, uniting traditional design elements with contemporary mobile technology:

*   A native mobile approach for iOS and Android ensures high performance, excellent device integration, and offline capabilities.
*   Design principles of usability, accessibility, and responsiveness lead to an interface that is culturally sensitive and modern.
*   The styling and theming are carefully calibrated with a modern flat design enhanced by glassmorphism touches, using an earthy and vibrant color palette paired with clean typography.
*   The component-based architecture and rigorous state management ensure the app remains modular, scalable, and maintainable.
*   Native routing, lazy loading, and thorough testing strategies safeguard a seamless and reliable user experience.

These guidelines are crafted to support the project’s core mission of merging TCM with modern wellness trends, creating an engaging, efficient, and trustworthy experience for urban health-conscious users and milk tea enthusiasts alike.