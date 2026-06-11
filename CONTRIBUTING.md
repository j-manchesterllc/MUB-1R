# Contributing to MUB-1R

Thank you for your interest in contributing to the MUB-1R project! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)

---

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Website & Code
- **Bug fixes** — Fix rendering issues, broken interactions, or incorrect data
- **Performance** — Improve load times, bundle size, or SSR efficiency
- **Accessibility** — Enhance keyboard navigation, screen reader support, ARIA labels
- **Mobile UX** — Improve responsive layouts and touch interactions
- **Documentation** — Improve README, code comments, or setup guides

### Engineering Data
- **Spec verification** — Cross-check published specs against analysis
- **Weight auditing** — Validate weight ledger entries against material data
- **Structural analysis** — Review margin calculations and load cases

### Design
- **UI improvements** — Refine visual hierarchy, spacing, typography
- **Data visualization** — Improve charts, diagrams, and interactive elements
- **Asset creation** — Technical illustrations, diagrams, or renders

## Development Setup

### Prerequisites
- Node.js ≥ 18.x
- Yarn package manager
- PostgreSQL (local or hosted)

### Quick Start

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/mub-1r.git
cd mub-1r/nextjs_space

# Install dependencies
yarn install

# Set up environment
cp .env.example .env
# Edit .env with your DATABASE_URL

# Generate Prisma client & push schema
yarn prisma generate
yarn prisma db push

# Start dev server
yarn dev
```

## Project Structure

```
nextjs_space/
├── app/                 # Next.js App Router pages & API routes
├── components/site/     # All site section components
├── lib/
│   ├── data.ts          # ⚠️ Single source of truth for ALL specs
│   ├── db.ts            # Prisma client
│   └── utils.ts         # Utilities
├── prisma/              # Database schema
└── public/images/       # Static assets
```

> **Important:** All aircraft specifications live in `lib/data.ts`. If you're updating a spec value, change it there — not in individual components.

## Coding Standards

### TypeScript
- Strict mode enabled
- No `any` types — use proper type annotations
- Prefer interfaces over type aliases for object shapes

### Styling
- Tailwind CSS utility classes (no inline styles)
- Custom CSS variables defined in `globals.css`
- Dark theme only — all colors use the CSS variable system

### Components
- Functional components with hooks
- Server components by default; `'use client'` only when needed
- SSR-safe: no `window`/`document` access outside `useEffect`

### Data
- All specs in `lib/data.ts` — the single source of truth
- Never hardcode spec values in components
- Use proper units (metric: kg, m, kW; aviation: kt, nmi)

### Commits
- Use conventional commit messages:
  - `fix:` for bug fixes
  - `feat:` for new features
  - `docs:` for documentation
  - `style:` for formatting changes
  - `refactor:` for code restructuring
  - `perf:` for performance improvements

## Submitting Changes

1. **Fork** the repository
2. **Create a branch** from `main`: `git checkout -b fix/chart-ssr-fallback`
3. **Make your changes** following the coding standards above
4. **Test locally**: ensure `yarn dev` runs without errors and `yarn build` succeeds
5. **Commit** with a clear, conventional message
6. **Push** to your fork and open a **Pull Request**

### Pull Request Checklist

- [ ] Code follows project coding standards
- [ ] `yarn build` passes without errors
- [ ] TypeScript has no type errors (`yarn tsc --noEmit`)
- [ ] Changes are SSR-safe (no hydration mismatches)
- [ ] Spec changes are made in `lib/data.ts` only
- [ ] Mobile layout tested at 390px width
- [ ] PR description explains what and why

## Reporting Bugs

Use the [Bug Report issue template](.github/ISSUE_TEMPLATE/bug_report.md) and include:
- Browser and device information
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots if applicable

## Requesting Features

Use the [Feature Request issue template](.github/ISSUE_TEMPLATE/feature_request.md) and include:
- Clear description of the proposed feature
- Why it benefits the project
- Any technical considerations

---

## Questions?

If you're unsure about anything, open an issue with the **question** label or use the [contact form](https://mub-1r.com/#contact).

Thank you for contributing to the MUB-1R program! ✈️
