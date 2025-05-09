---
description: "Test-driven development guidelines for implementing cursor rules functionality"
globs: ["**/*.ts", "**/*.tsx", "**/*.test.ts"]
__meta__type: "guideline"
__meta__repo: "turlockmike/hataraku"
__meta__tags: ["Test-driven development","Typescript","Testing","Implementation","Rules"]
__meta__rate: 8
---
<rule>
name: cursor_rules_tdd
description: Test-driven development approach for implementing cursor rules functionality
filters:
  - type: file_extension
    pattern: "\\.(ts|tsx|test\\.ts)$"
  - type: content
    pattern: "(?s)CursorRule|CursorRuleManager"

actions:
  - type: suggest
    message: |
      When implementing cursor rules, follow these test-driven development guidelines:

      1. Core Types:
      ```typescript
      interface CursorRule {
        name: string;
        description: string;
        glob?: string[];
        instructions: string[];
        metadata?: Record<string, unknown>;
      }

      interface CursorRuleManager {
        addRule(rule: CursorRule): Promise<void>;
        getRuleByName(name: string): Promise<CursorRule | null>;
        getRulesByGlob(filePath: string): Promise<CursorRule[]>;
        listRules(): Promise<CursorRule[]>;
        removeRule(name: string): Promise<boolean>;
      }
      ```

      2. Test Structure:
      ```typescript
      // Basic Operations
      describe('CursorRuleManager - Basic Operations', () => {
        test('should create and retrieve a rule by name');
        test('should return null for non-existent rule');
      });

      // Glob Pattern Matching
      describe('CursorRuleManager - Glob Matching', () => {
        test('should retrieve rules matching file path');
        test('should return empty array for non-matching path');
      });

      // Rule Management
      describe('CursorRuleManager - Management', () => {
        test('should list all rules');
        test('should remove existing rule');
      });
      ```

      3. Implementation Steps:
         - Create core interfaces in src/core/rules/types.ts
         - Implement manager in src/core/rules/manager.ts
         - Add tests in src/core/rules/__tests__/
         - Integrate with agent system in src/core/agent.ts

      4. File Structure:
         ```
         src/
         ├── core/
         │   └── rules/
         │       ├── __tests__/
         │       │   └── manager.test.ts
         │       ├── types.ts
         │       ├── manager.ts
         │       └── index.ts
         ```

examples:
  - input: |
      // Bad: Test file in wrong location
      rules/__tests__/manager.test.ts

      // Good: Test file in correct location
      src/core/rules/__tests__/manager.test.ts
    output: "Correctly structured test implementation"

  - input: |
      // Bad: Missing test categories
      describe('CursorRuleManager', () => {
        test('should work');
      });

      // Good: Properly categorized tests
      describe('CursorRuleManager - Basic Operations', () => {
        test('should create and retrieve a rule by name');
      });
    output: "Correctly structured test suite"

metadata:
  priority: high
  version: 1.0
  categories: ["testing", "implementation", "rules"]
</rule>