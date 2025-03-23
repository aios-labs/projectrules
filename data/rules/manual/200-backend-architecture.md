---
description: "ENFORCE a modular NestJS backend architecture with defined patterns"
globs: "packages/backend/**"
__meta__type: "guideline"
__meta__repo: "bluelight-hub/app"
__meta__framework: "NestJS"
__meta__tags: ["Backend","Architecture","TypeScript","NestJS","Modular Design"]
__meta__rate: 8
---
# Backend Architektur

## Context
- Gilt für alle Arbeiten im Backend-Bereich (`packages/backend/**`)
- NestJS-Projektstruktur, modulare Organisation

## Requirements
1. **Modulare Struktur**
   - Neue Features in `src/modules/<feature>/`
   - Klare Trennung von Controller, Service, Repository
2. **Code-Standards**
   - TypeScript strict mode
   - Dependency Injection
   - Einheitliche Fehlerbehandlung & Validierung
   - Tests für neue Funktionalität
3. **Entity-Management**
   - Nach modulbasiertem Ansatz in `entities/` ablegen
4. **Dokumentation**
   - JSDoc für Funktionen & Klassen
   - OpenAPI/Swagger für API-Endpunkte
5. **Technologie-Stack**
   - NestJS, TypeORM (SQLite), Jest, consolas-Logger

## Examples

<example>
# Typische Struktur
src/modules/
  └── user/
      ├── entities/
      │   └── user.entity.ts
      ├── user.controller.ts
      ├── user.service.ts
</example>