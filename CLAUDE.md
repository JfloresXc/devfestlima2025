# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DevFest Lima 2025 is an Angular 20 application with Server-Side Rendering (SSR) support, using Tailwind CSS v4 for styling.

## Code and Language Conventions

- **Code language**: All code (files, variables, functions, classes) must be written in English
- **UI language**: All user-facing text and interface content must be in Spanish
- **SEO Considerations**: Always consider SEO best practices when making changes:
  - Use semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
  - Include proper `alt` attributes for all images
  - Use proper heading hierarchy (h1, h2, h3, etc.)
  - Add `aria-label` and ARIA attributes for accessibility
  - Ensure meaningful `<title>` tags and meta descriptions
  - Use descriptive link text instead of "click here"
  - Implement proper OpenGraph and Twitter Card meta tags
- **Component structure**:
  - Use inline templates (template inside .ts file)
  - Only two files per component: `.ts` and `.css`
  - NO `.html` files
  - NO `.spec.ts` test files

## Development Commands

- **Start dev server**: `npm start` or `ng serve` (runs on http://localhost:4200/)
- **Build**: `npm run build` (outputs to `dist/`)
- **Build (watch mode)**: `npm run watch`
- **Run tests**: `npm test` (uses Karma + Jasmine)
- **Run SSR server**: `npm run serve:ssr:devfestlima2025`
- **Generate component**: `ng g c [path/component-name] --skip-tests --inline-template`
  - Always use `--skip-tests` flag (no test files)
  - Always use `--inline-template` flag (no .html files)
  - Example: `ng g c components/home/hero --skip-tests --inline-template`

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Data Fetching with rxResource

**ALWAYS use `rxResource` for HTTP data fetching** instead of manual subscriptions. It provides automatic SSR support and state management.

### Basic Usage

```typescript
import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MyService } from '@services/my.service';

@Component({
  // ...
})
export class MyComponent {
  private myService = inject(MyService);

  // Define resource
  dataResource = rxResource({
    loader: () => this.myService.getData()
  });

  // Access data directly or create computed values if needed
  data = computed(() => this.dataResource.value()?.docs ?? []);
}
```

**DO NOT create separate signals for `isLoading` or `error`** - use `dataResource.isLoading()` and `dataResource.error()` directly in templates.

### Benefits

✅ **SSR Compatible**: Works seamlessly with Server-Side Rendering
✅ **Automatic State**: Handles loading, error, and data states
✅ **Signals-based**: Integrates with Angular's reactivity system
✅ **Zoneless Ready**: Works with zoneless change detection

### Template Usage

```typescript
template: `
  @if (dataResource.isLoading()) {
    <div>Loading...</div>
  }

  @if (dataResource.error()) {
    <div>Error: {{ dataResource.error() }}</div>
  }

  @if (dataResource.value()?.docs; as items) {
    @for (item of items; track item.id) {
      <div>{{ item.name }}</div>
    }
  }
`
```

Or use computed values for cleaner templates:

```typescript
template: `
  @if (dataResource.isLoading()) {
    <div>Loading...</div>
  }

  @if (data(); as items) {
    @for (item of items; track item.id) {
      <div>{{ item.name }}</div>
    }
  }
`
```

**DO NOT use manual `.subscribe()` for data fetching unless absolutely necessary.**

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

## Architecture

### Angular Configuration

- **Angular version**: 20.0.0
- **TypeScript**: Strict mode enabled with all strict flags
- **Change detection**: Zoneless (`provideZonelessChangeDetection()`)
- **Hydration**: Client hydration with event replay enabled
- **Component prefix**: `app`

### SSR Setup

- Uses `@angular/ssr` with Express server
- Entry points:
  - Browser: `src/main.ts`
  - Server: `src/main.server.ts`
  - SSR entry: `src/server.ts`
- Output mode: `server` (generates both client and server bundles)

### Styling

- **Tailwind CSS v4** with PostCSS plugin
- Global styles in `src/styles.css`
- Prettier configured with Angular HTML parser

#### Using Tailwind in Component CSS Files

When using `@apply` in component `.css` files, you **MUST** add `@reference "tailwindcss";` at the top:

```css
@reference "tailwindcss";

.my-class {
  @apply flex items-center gap-4;
}
```

#### Custom CSS Variables

CSS variables are defined in `src/styles.css` under `@theme`. **DO NOT** use them as Tailwind utility classes. Use `var()` syntax instead:

**Colors:**
- `var(--color-core-blue)` → #4285f4
- `var(--color-core-green)` → #34a853
- `var(--color-core-yellow)` → #f9ab00
- `var(--color-core-red)` → #ea4335
- `var(--color-halftone-blue)` → #57caff
- `var(--color-halftone-green)` → #5cdb6d
- `var(--color-halftone-yellow)` → #ffd427
- `var(--color-halftone-red)` → #ff7daf
- `var(--color-pastel-blue)` → #c3ecf6
- `var(--color-pastel-green)` → #ccf6c5
- `var(--color-pastel-yellow)` → #ffe7a5
- `var(--color-pastel-red)` → #f8d8d8
- `var(--color-white)` → #f0f0f0
- `var(--color-black)` → #1e1e1e

**Typography:**
- `var(--font-headline)` → Google Sans (Headlines - Bold)
- `var(--font-subhead)` → Roboto Mono (Subheads - Light)
- `var(--font-body)` → Google Sans (Body - Normal)
- `var(--font-weight-headline)` → 700
- `var(--font-weight-subhead)` → 300
- `var(--font-weight-body)` → 400

**Example usage:**

```css
@reference "tailwindcss";

.hero-title {
  font-family: var(--font-headline);
  font-weight: var(--font-weight-headline);
  @apply text-6xl mb-4;
}

.cta-button {
  background-color: var(--color-core-red);
  @apply px-6 py-3 rounded-full;
}

.cta-button:hover {
  background-color: var(--color-core-green);
}
```

### Application Structure

```
src/app/
├── pages/                    # Page components (routed)
├── components/               # Feature components (organized by feature)
├── models/                   # TypeScript interfaces and types
├── services/                 # HTTP services and business logic
├── shared/
│   └── components/          # Shared/reusable components
└── app.routes.ts
```

- Standalone components architecture (no NgModules)
- Routing configured in `src/app/app.routes.ts`
- App config in `src/app/app.config.ts` (client) and `src/app/app.config.server.ts` (server)
- Root component: `App` in `src/app/app.ts`

### Path Aliases

TypeScript path aliases are configured in `tsconfig.app.json`:

- `@app/*` → `src/app/*`
- `@pages/*` → `src/app/pages/*`
- `@components/*` → `src/app/components/*`
- `@shared/*` → `src/app/shared/*`
- `@models/*` → `src/app/models/*`
- `@services/*` → `src/app/services/*`

**Always use these aliases** instead of relative paths (`../../`)

## Build Budgets

- Initial bundle: 500kB warning, 1MB error
- Component styles: 4kB warning, 8kB error
