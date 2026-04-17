# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| When working with Next.js - routing, Server Actions, data fetching | nextjs-15 | /home/adrian/.claude/skills/nextjs-15/SKILL.md |
| When writing React components - no useMemo/useCallback needed | react-19 | /home/adrian/.claude/skills/react-19/SKILL.md |
| When styling with Tailwind - cn(), theme variables, no var() in className | tailwind-4 | /home/adrian/.claude/skills/tailwind-4/SKILL.md |
| When writing TypeScript code - types, interfaces, generics | typescript | /home/adrian/.claude/skills/typescript/SKILL.md |
| When using Zod for validation - breaking changes from v3 | zod-4 | /home/adrian/.claude/skills/zod-4/SKILL.md |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### nextjs-15
- Server Components by default — no directive needed, async by default
- Add 'use client' only for interactivity (useState, useEffect, event handlers)
- Use Server Actions with 'use server' directive for form mutations
- Route handlers in app/api/ — GET/POST exports from same file
- Metadata: export metadata object from page/layout, not <Head>
- Use revalidatePath/revalidateTag for cache invalidation
- Streaming: wrap slow components with <Suspense fallback={<Loading />}>

### react-19
- No useMemo/useCallback — React Compiler handles optimization automatically
- use() hook for promises/context, replaces useEffect for data fetching
- Named imports only: import { useState, useEffect } from "react" — NEVER default import
- ref is a regular prop — no forwardRef needed
- useActionState for form mutations with pending state
- Server Components default, 'use client' only when hooks/event handlers needed

### tailwind-4
- NEVER use var() or hex colors in className — use Tailwind semantic classes
- Use cn() utility (clsx + twMerge) for conditional and merged classes
- cn() pattern: cn("base", condition && "variant", className)
- Dynamic values → style prop: style={{ width: `${x}%` }}
- Static classes → just className="..." — no cn() needed
- Custom theme colors available: brand (#003087), accent (#E8470A), sky (#00AEEF)

### typescript
- Strict mode enabled — no implicit any, no null checks disabled
- Const types pattern: create const object, extract type with typeof
- Flat interfaces: nested objects → dedicated interfaces, not inline
- NEVER use any — use unknown for truly unknown, generics for flexibility
- import type for types only, regular import for values
- Utility types: Pick, Omit, Partial, Required, Record

### zod-4
- BREAKING from v3: z.email(), z.uuid(), z.url() — NOT z.string().email()
- Use 'error' param not 'message' for custom error messages
- z.string().min(1) instead of z.string().nonempty()
- zodResolver from @hookform/resolvers/zod for React Hook Form integration
- safeParse returns { success, data/error } — use this pattern
- Transform during parsing with .transform()

## Project Conventions

No convention files found (no AGENTS.md, .cursorrules, CLAUDE.md, etc.).

## Project-Specific Notes

- App Router structure: app/page.tsx, app/layout.tsx, app/api/
- Component sections: components/sections/ (Hero, Navbar, Formulario, etc.)
- UI primitives: components/ui/ (button, input, checkbox, select, etc.)
- Supabase client: lib/supabase.ts
- Validations: lib/validations.ts (Zod schemas)
- Brand colors in Tailwind: brand, accent, sky, brand-light, surface-alt
