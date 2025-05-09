---
description: "Code Style & Structure specifics"
globs: "**/*.{ts,tsx}"
__meta__type: "guideline"
__meta__repo: "stacksjs/bunfig"
__meta__tags: ["Code Style","Typescript","Error Handling","Module Organization","JSDoc"]
__meta__rate: 9
---
## Code Style Guidelines

- Write concise, functional code with proper types
  ```ts
  // Good
  function mergeConfigs<T>(base: T, override: Partial<T>): T {
    return { ...base, ...override }
  }

  // Avoid
  class ConfigMerger {
    merge(base: any, override: any) {
      return Object.assign({}, base, override)
    }
  }
  ```

- Use Bun native modules when available
  ```ts
  // Good
  import { file } from 'bun'
  const config = await file('config.json').json()

  // Avoid
  import { readFile } from 'fs/promises'
  const config = JSON.parse(await readFile('config.json', 'utf-8'))
  ```

- Use descriptive variable names with proper prefixes
  ```ts
  // Good
  const isConfigValid = validateConfig(config)
  const hasCustomOptions = Boolean(options.custom)
  const shouldUseDefaults = !configExists || isConfigEmpty

  // Avoid
  const valid = check(cfg)
  const custom = options.custom ? true : false
  const defaults = !exists || empty
  ```

- Write proper JSDoc comments for public APIs
  ```ts
  /**
   * Loads configuration from a file or remote endpoint
   * @param options - Configuration options
   * @param options.name - Name of the config file
   * @param options.cwd - Working directory (default: process.cwd())
   * @returns Resolved configuration object
   * @throws {ConfigError} When config loading fails
   * @example
   * ```ts
   * const config = await loadConfig({
   *   name: 'myapp',
   *   defaultConfig: { port: 3000 }
   * })
   * ```
   */
  async function loadConfig<T>(options: Config<T>): Promise<T>
  ```

- Use proper module organization
  ```ts
  // config.ts
  export { loadConfig } from './loader'
  export type { Config, ConfigOptions } from './types'
  export { ConfigError } from './errors'
  ```

- Follow consistent error handling patterns
  ```ts
  // Good
  const result = await loadConfig(options).catch(error => {
    console.error('Config loading failed:', error)
    return options.defaultConfig
  })

  // Avoid
  try {
    const result = await loadConfig(options)
  } catch (e) {
    console.log('Error:', e)
  }
  ```

- Use proper type assertions
  ```ts
  // Good
  const config = result as Config
  if (!isValidConfig(config))
    throw new Error('Invalid config')

  // Avoid
  const config = result as any
  ```