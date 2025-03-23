---
description: "Standard format for TAIPs"
globs: "taip-*.md"
__meta__type: "guideline"
__meta__repo: "TransactionAuthorizationProtocol/TAIPs"
__meta__tags: ["Standards","Documentation","UUID","CAIP","TAIP"]
__meta__rate: 7
---
Follow the guidelines on in [taip-template.md](mdc:taip-template.md)

Make sure that all example messages follow the correct standards. Eg:

- asset should always be CAIP-19
- settlement addresses should always be CAIP-10 and match the CAIP-2 of the assets CAIP-19
- `id` and `thid` should always be UUIDv4s and show proper threading in examples.

All links should be reference style links and also be listed in the References section below. Links to other TAIPs should follow the format [TAIP-X] and have a reference to the local path with the other references.