---
title: Environment Variables
description: Getting started with create-t3-app
layout: ../../../layouts/MainLayout.astro
---

## Environment Variable Validation

Create-T3-App uses [zod](https://github.com/colinhacks/zod) for environment variable validation at runtime _and_ buildtime by providing additional files (scaffolded with generic environment variables for the chosen libraries):

📂 src/env

┣ 📜 server.mjs

┣ 📜 client.mjs

┣ 📜 schema.mjs
<br></br>

A `z.object` is used as a schema, with each object key representing an environment variable and value representing a `z` method for validation. Each time a new environment variable is needed, it must be added to _both_ .env[.local/.production etc] as well as `env-schema.mjs`.

# Files

## schema.mjs

This is the file that contains the Zod schemas, and by default, contains two exported schemas, `serverSchema` and `clientSchema`, as well as a `clientEnv` object.

### Server Schema

Specify your server-side environment variables schema here.

```typescript
export const serverSchema = z.object({
  // FOO: z.string(),
});
```

### Client Schema

Specify your client-side environment variables schema here.
To expose them to the client, prefix them with `NEXT_PUBLIC_`.

```typescript
export const clientSchema = z.object({
  // NEXT_PUBLIC_BAR: z.string(),
});
```

### clientEnv Object

You can't destruct `process.env` as a regular object, so you have to do
it manually here. This is because Next.js evaluates this at build time,
and only used environment variables are included in the build.

```typescript
export const clientEnv = {
  // NEXT_PUBLIC_BAR: process.env.NEXT_PUBLIC_BAR,
};
```

## server.mjs

This is the file that performs the validation on server-only environment variables (those which aren't prefixed with `NEXT_PUBLIC`), using the `z.object` schema from `schema.mjs`. It is imported into `next.config.mjs` to use for buildtime validation. This file likely shouldn't be modified unless you know what you're doing.

## client.mjs

Similar to `server.mjs`, this file performs the validation on client-side environment variables (those which are prefixed with `NEXT_PUBLIC`).

## Type-safe Environment Variables

To utilise the schema containing environment variables in your code editor, you should import `{ env }` from either `/env/server.mjs` or `/env/client.mjs` depending where they are being used. The `env` object is a type-safe parsed result of the relevant schema, allowing for auto-completion of environment variables in your code editor.
