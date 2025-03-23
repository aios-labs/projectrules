---
description: "Apply these rules when creating the project"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "onronder/Fittechs_Flowtechs"
__meta__framework: "React"
__meta__tags: ["SaaS","Data Integration","React","Node.js","Shopify"]
__meta__rate: 7
---
## Project Overview

*   **Type:** cursor_project_rules

*   **Description:** I want to build a SaaS project in which name is FlowTechs is a data integration platform enabling users to:

    *   Connect to e-commerce platforms (starting with Shopify)
    *   Extract and transform data
    *   Export to various destinations
    *   Automate data workflows

*   Core Features

    *   User authentication and management
    *   API integration management
    *   Data transformation engine
    *   Multiple destination support
    *   Automated scheduling system
    *   Real-time monitoring

*   **Primary Goal:** FlowTechs aims to simplify and streamline the ETL process for small to mid-sized ecommerce businesses and Shopify store owners, by providing a secure, low-code, and user-friendly platform that integrates data extraction, real-time transformation preview, automated scheduling, and comprehensive monitoring.

## Project Structure

### Framework-Specific Routing

*   **Directory Rules:**

    *   **React Router 6:** Implements routing through a dedicated `src/routes/` directory, leveraging `createBrowserRouter` for dynamic navigation.
    *   Example: `src/routes/dashboard.jsx` for main dashboard view
    *   Example: `src/routes/auth/login.jsx` for login page routing

### Core Directories

*   **Versioned Structure:**

    *   **frontend (React):** Contains all client-side components and view logic using React.

        *   Example: `src/components` for reusable UI components built with ShadCN/UI patterns
        *   Example: `src/views` for page-specific layouts

    *   **backend (Node.js/Express):** Houses API endpoints and server logic.

        *   Example: `backend/routes` for Express routing definitions
        *   Example: `backend/controllers` for business logic implementations

### Key Files

*   **Stack-Versioned Patterns:**

    *   **Frontend Entry:**

        *   `src/App.jsx` → Main React application incorporating React Router 6 and modern component structure

    *   **Backend Entry:**

        *   `backend/server.js` → Node.js Express server setup enforcing API integration and scheduling logic

## Tech Stack Rules

*   **Version Enforcement:**

    *   **react@latest:** Use React Router 6 with functional components and hooks.
    *   **<express@4.x>:** Follow RESTful API conventions and modular middleware setups.
    *   **postgresql@latest:** Utilize modern SQL practices and secure connection pooling.
    *   **aws_s3@latest:** Enforce secure bucket policies and versioned file storage.
    *   **stripe@latest:** Integrate Stripe for subscription management with best-in-class security practices (PCI DSS compliant).
    *   **shopify_oauth:** Prioritize Shopify OAuth as the default authentication method for secure data extraction.
    *   **shadcn_ui:** Use the ShadCN/UI library to achieve modern, minimalistic UI/UX with dark/light theme support.
    *   **node_cron:** Schedule tasks reliably using cron-like expressions and robust error-handling mechanisms.

## PRD Compliance

*   **Non-Negotiable:**

    *   "FlowTechs is a SaaS data integration platform designed for small to mid-sized e-commerce businesses..."

        *   Enforce high-level security measures such as AES-256 encryption, role-based access control (Admin, Editor, Viewer), and GDPR & CCPA compliance.
        *   Ensure robust, real-time monitoring and error handling as specified in the PRD.
        *   Maintain a dual approach in the data transformation engine with both predefined templates and a visual workflow editor.

## App Flow Integration

*   **Stack-Aligned Flow:**

    *   Example: "User Onboarding and Registration" → Implemented under `src/routes/onboarding.jsx` where users are introduced to FlowTechs, register, and are guided through Shopify OAuth authentication.
    *   Example: "Data Transformation Setup" → Located in `src/routes/transformation.jsx`, integrating both visual and SQL-like rule editing for immediate preview of data changes.

## Best Practices

*   **react**

    *   Utilize functional components with hooks to manage state effectively.
    *   Keep component hierarchy shallow to enhance maintainability.
    *   Maintain a clear separation of concerns between UI and business logic.

*   **nodejs**

    *   Use asynchronous patterns (async/await) to manage I/O effectively.
    *   Separate configuration, middleware, and routing for scalability.
    *   Implement comprehensive logging and error handling.

*   **express**

    *   Structure endpoints following RESTful conventions.
    *   Use middlewares for security, authentication, and error handling.
    *   Keep routes modularized to promote code reuse.

*   **postgresql**

    *   Employ parameterized queries to prevent SQL injection.
    *   Use connection pooling for optimal performance.
    *   Regularly backup and monitor database performance.

*   **aws_s3**

    *   Set up appropriate bucket policies for secure access.
    *   Leverage versioning to maintain backups of critical data.
    *   Monitor access logs for unauthorized activities.

*   **stripe**

    *   Ensure PCI compliance by using Stripe libraries and webhooks securely.
    *   Abstract payment logic to a dedicated service to isolate risks.
    *   Regularly test payment flows and failure cases.

*   **shopify_oauth**

    *   Prioritize OAuth for primary authentication with Shopify.
    *   Maintain secure storage (AES-256 encryption) for tokens.
    *   Provide clear fallback mechanisms for alternative API integrations.

*   **shadcn_ui**

    *   Follow modern design guidelines ensuring responsiveness and accessibility.
    *   Customize UI components to adhere to a minimalistic, modern aesthetic.
    *   Use theme toggling to support dark and light modes effectively.

*   **node_cron**

    *   Use cron expressions that are easily understandable and maintainable.
    *   Implement error and retry logic for scheduled tasks.
    *   Maintain detailed execution logs and history for troubleshooting.

## Rules

*   Derive folder/file patterns directly from tech stack documentation and enforced version rules.
*   If a project uses React Router 6: enforce usage of `src/routes/` with encapsulated components for each route.
*   For Node.js/Express backend: maintain a clear separation between routing, controllers, and middleware.
*   Strictly adhere to security and privacy protocols as outlined in the PRD (AES-256, RBAC, GDPR/CCPA compliance).
*   Never mix version patterns; for example, do not combine file structures from different routing frameworks within the same project.