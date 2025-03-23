---
description: "This rule provides guidance for setting up a Prisma ORM connection with PostgreSQL in a Next.js application."
globs: "**/*"
__meta__type: "setup"
__meta__repo: "McCarthyFinch/webinar-project"
__meta__original_filename: "prisma"
__meta__duplicate: "true"
__meta__service: "PostgreSQL"
__meta__framework: "NextJS"
__meta__tags: ["Prisma","ORM","Database","PostgreSQL","NextJS"]
__meta__rate: 8
---
# Prisma Database Connection Setup

This rule provides guidance for setting up a Prisma ORM connection with PostgreSQL in a Next.js application.

## Basic Setup

1. Install required dependencies:
```bash
npm install @prisma/client
npm install prisma --save-dev
```

2. Initialize Prisma in your project:
```bash
npx prisma init
```

3. Configure your database connection in the `.env` file:
```
DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase"
```

4. For production environments, use a more secure connection string:
```
DATABASE_URL="postgresql://username:password@host:port/database"
```

## Schema Configuration

Update your `prisma/schema.prisma` file with your database models:

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Define your models here
model Note {
  id        String   @id @default(uuid())
  title     String
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Database Operations

After defining your schema:

1. Create migrations and apply them to your database:
```bash
npx prisma migrate dev --name init
```

2. Generate the Prisma client:
```bash
npx prisma generate
```

## Using Prisma in Your Application

Create a dedicated file for your Prisma client to ensure singleton pattern:

```typescript
// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

## Using in API Routes

```typescript
// app/api/notes/route.ts
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const notes = await prisma.note.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    })
    return NextResponse.json(notes)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch notes' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json()
    const note = await prisma.note.create({
      data: {
        title,
        content,
      },
    })
    return NextResponse.json(note, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create note' }, { status: 500 })
  }
}
```

## Troubleshooting

1. If you encounter connection issues, verify your database credentials and ensure your database server is running.
2. For SSL connection issues, you may need to modify your connection string:
```
DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"
```
3. If Prisma client generation fails, try removing the `node_modules/.prisma` folder and regenerating:
```bash
rm -rf node_modules/.prisma
npx prisma generate
```

## Schema Evolution

As your application evolves, you'll need to update your schema. Create a new migration after schema changes:

```bash
npx prisma migrate dev --name add_user_relation
```