# Implementation Plan for Project Rules App

This plan outlines the features and components we need to build for an app that aggregates project rules from markdown files. The app uses the Next.js App Router (create-next-app) and Nuqs for state management (for a cart feature) and includes filtering by Service, Framework, and Type. Users can add rules to a cart and then download them in bulk as a ZIP (with IDE-specific file extension transformation if needed).

---

## 1. Data Acquisition & Parsing

- **Task:** Read and parse markdown files from the `/data/rules` folder.
- **Details:**
  - The files reside in two subfolders:
    - `/data/rules/manual` for manually added rules.
    - `/data/rules/external` for externally synced rules.
  - Each markdown file should include front-matter with at least these fields:
    - `description`
    - `service`
    - `framework` (e.g., remix, astro, nextjs)
    - `type` (e.g., feature, rule, setup, starter)
    - `globs` (if needed)
- **Checklist:**
  - [ ] Use Node’s `fs/promises` in a server component or a helper module to read files.
  - [ ] Use `gray-matter` to parse each `.md` file.
  - [ ] Consolidate the parsed data into an array of rule objects (with `slug`, metadata, and markdown content).

---

## 2. App Router Pages & Routing

### **Home Page (`/app/page.jsx`)**

- **Task:** List all rules with summary information and provide filtering UI.
- **Details:**
  - Display rule title, description, and key metadata (service, framework, type).
  - Include filters (dropdowns or checkboxes) for:
    - **Service**
    - **Framework**
    - **Type**
  - Each rule should have an "Add to Cart" button/icon.
- **Checklist:**
  - [ ] Create `/app/page.jsx` that reads rule data and renders a list.
  - [ ] Build filter components for Service, Framework, and Type.
  - [ ] Integrate filtering logic to dynamically update the list.
  - [ ] Add an "Add to Cart" button for each rule.

### **Rule Detail Page (`/app/rules/[slug]/page.jsx`)**

- **Task:** Show detailed content for a selected rule.
- **Details:**
  - Use dynamic routing to load the rule based on its `slug`.
  - Render markdown content using a library like `react-markdown`.
- **Checklist:**
  - [ ] Create dynamic route under `/app/rules/[slug]/page.jsx`.
  - [ ] Fetch the corresponding rule data by `slug`.
  - [ ] Render markdown content properly.

### **Cart / Bulk Download Page (`/app/download/page.jsx`)**

- **Task:** Provide a cart view where users can see selected rules and initiate a bulk download.
- **Details:**
  - Display current cart contents managed via Nuqs.
  - Allow removal of items from the cart.
  - Include an IDE selection (e.g., Cursor AI, Windsurf, GithubCopilot).
  - Add a “Download All” button that triggers an API call.
- **Checklist:**
  - [ ] Create `/app/download/page.jsx` to show cart items.
  - [ ] Integrate IDE selection UI.
  - [ ] Add controls for removing items and clearing the cart.
  - [ ] Add a “Download All” button to trigger the API request.

---

## 3. Client-Side Cart Management with Nuqs

- **Task:** Use Nuqs to manage the cart state globally.
- **Details:**
  - Set up a Nuqs store (initialize in a provider component or in the root layout).
  - The store should hold an array of rule identifiers (slugs) and include actions:
    - **Add Item**
    - **Remove Item**
    - **Clear Cart**
- **Checklist:**
  - [ ] Initialize a Nuqs store for the cart.
  - [ ] Implement actions to add, remove, and clear items.
  - [ ] Hook up "Add to Cart" buttons in the Home and Detail pages to update the store.
  - [ ] In the Cart Page, read the cart state and display items.

---

## 4. Filtering Enhancements

- **Task:** Enhance the filtering mechanism with additional criteria.
- **Details:**
  - Build filter components for:
    - **Service**
    - **Framework**
    - **Type**
  - Ensure the filters work in combination (multi-criteria filtering).
- **Checklist:**
  - [ ] Create UI components (dropdowns, checkboxes) for each filter.
  - [ ] Implement logic to filter the rule list based on selected criteria.
  - [ ] Test filtering interactions to ensure smooth UX.

---

## 5. API Endpoint for Bulk Download

- **Task:** Create an API route to handle bulk download requests.
- **Details:**
  - The API should accept a POST request containing:
    - List of rule slugs (from the cart).
    - Target IDE selection.
  - For each rule:
    - Locate the markdown file.
    - If the IDE requires it, transform the file extension from `.md` to `.mdc`.
  - Use a library like `archiver` to bundle selected files into a ZIP.
  - Return the ZIP file in the response.
- **Checklist:**
  - [ ] Create an API route at `/app/api/download/route.js`.
  - [ ] Parse the incoming request for selected rule slugs and IDE.
  - [ ] Retrieve and (if necessary) transform each file.
  - [ ] Bundle the files into a ZIP using `archiver`.
  - [ ] Serve the ZIP file as the API response.
  - [ ] Test the endpoint with sample payloads.

---

## 6. Testing & Code Integration

- **Task:** Test all components and integrate the solution.
- **Details:**
  - Ensure that data parsing, filtering, cart management, and ZIP download work as expected.
  - Write unit tests for parsing functions, filtering logic, and the API endpoint.
- **Checklist:**
  - [ ] Test file parsing and metadata extraction.
  - [ ] Verify filtering functionality across different criteria.
  - [ ] Validate cart actions via Nuqs.
  - [ ] Test the API endpoint for ZIP generation.
  - [ ] Ensure integration between UI and API works seamlessly.

---

Follow this checklist step by step to build out the app. Each section is self-contained, so you can track progress easily and ensure every feature is implemented correctly. Let me know if you need further clarifications or adjustments!