---
applyTo: '**'
---

## Framework

This project uses Next.js v16 as the web framework.

## UI Library

This project uses Mantine UI v8 as the primary UI component library.

- Use Mantine theming system for styling and theming.

## Project conventions

- This is a frontend project that not use server-side rendering (SSR) capabilities of Next.js. All pages should be implemented as client components.
- The authentication flow is handled by an external service. This project only needs to manage authentication tokens (access and refresh tokens) in the client.
- Use transaltion library next-intl, considering update locales when adding new text.
