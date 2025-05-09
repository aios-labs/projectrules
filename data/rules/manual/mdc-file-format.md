---
description: "MDC file format"
globs: "*.*"
__meta__type: "guideline"
__meta__repo: "dotneet/aica"
__meta__tags: ["File Format","Testing","Bun","Jest","Typescript"]
__meta__rate: 7
---
The main purpose of an MDC file is to provide context related to a specific topic.

 - the file extension for MDC files is .mdc.
 - MDC files are stored in the `.cursor/rules` directory.

## mdc file format

An MDC file consists of a header section with two fields:

description: A short description of the file's purpose.
globs: A file-matching pattern.

example of mdc file
```
---
description: Use Bun for testing
globs: *.test.ts
---

This project uses Bun for unit testing.  
To run tests from the command line, use `bun test` or `bun test [path/to/file.test.ts]`.

bun:test has almost jest compatible functions like this.
import { describe, test, expect, beforeEach, afterEach } from "bun:test";
```