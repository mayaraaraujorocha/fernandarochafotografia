# Copilot Instructions for AI Agents

## Project Overview
This project appears to be focused on frontend development with React 19.2, leveraging modern hooks, Server Components, Actions, and TypeScript. The architecture and conventions are tailored for high performance, accessibility, and modern developer experience.

## Key Conventions & Patterns
- **React 19.2 First**: Use the latest React features, including `<Activity>`, `useEffectEvent()`, and Performance Tracks.
- **Server Components**: Prefer React Server Components (RSC) for data fetching and reducing bundle size when possible.
- **Actions API**: Use Actions for form handling and progressive enhancement.
- **Concurrent Rendering**: Default to concurrent rendering patterns (`startTransition`, `useDeferredValue`).
- **TypeScript**: All code should be strongly typed, leveraging React 19's improved type inference.
- **Performance**: Rely on React Compiler optimizations; avoid manual memoization unless necessary.
- **Accessibility**: Follow WCAG 2.1 AA standards by default.
- **Testing**: Use React Testing Library, Jest, or Vitest for comprehensive test coverage.
- **Modern Tooling**: Prefer Vite, Turbopack, ESLint, and Prettier for builds and linting.

## Developer Workflows
- **Build**: Use Vite or Turbopack for local development and production builds.
- **Test**: Run tests with Jest, Vitest, or React Testing Library.
- **Lint/Format**: Use ESLint and Prettier for code quality and formatting.
- **Accessibility**: Validate UI with accessibility tools and manual keyboard navigation.

## File/Directory References
- `.github/agents/expert-react-frontend-engineer.agent.md`: Contains detailed agent instructions and project-specific React/TypeScript conventions.
- `designer.md`: (No project-specific conventions found; update if this file is used for architecture or workflow documentation.)

## Integration Points
- **Design Systems**: Integrate with Microsoft Fluent UI, Material UI, or Shadcn/ui as needed.
- **State Management**: Use React Context, Zustand, or Redux Toolkit based on complexity.

## Examples
- Use `use()` and `useFormStatus` for modern data and form patterns.
- Prefer Server Components for data-fetching boundaries.
- Write tests colocated with components using React Testing Library.

---

For more details, see `.github/agents/expert-react-frontend-engineer.agent.md`.
