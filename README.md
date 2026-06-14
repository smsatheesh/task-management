# Task Management — React + Vite

This repository is a small Task Management application built with React and Vite. The project is intentionally minimal and focuses on a clean component structure, predictable state flows, and a straightforward developer experience.

## Business functionality (high level)

The app models a simple project -> tasks relationship and includes the following user-facing capabilities:

- Projects: create, list, and select projects to scope tasks.
- Tasks: for the selected project you can add new tasks (title, description), mark tasks complete, and view a task list.
- Empty state handling: friendly fallback UI when there are no projects or no tasks for the selected project.
- Modal-based forms: task creation uses a modal to keep the flow focused and lightweight.

This is suitable for a small-team personal task tracker or as the front-end shell for a more advanced backend-driven workflow.

Implementation notes (developer summary):

- Built with React + Vite for fast HMR during development.
- Componentized UI in `src/components` with small, testable pieces (Button, Input, Modal, Header).
- Project-related components live under `src/components/features/project` (Project, SelectedProject, FallBackProject).
- Task-related components live under `src/components/features/task` (Tasks, NewTask).
- Layout components (e.g., `SideBar`) keep navigation and project selection separate from task views.

## Project structure (key files)

- `src/main.jsx` — app bootstrap and root render.
- `src/App.jsx` — top-level app container and routing/feature wiring.
- `src/index.css` & `tailwind.config.js` — styling using Tailwind CSS.
- `src/components/shared/ui` — reusable UI primitives (Button, Input, Modal, Paragraph).
- `src/components/features` — feature folders for `project` and `task` with their views and small helpers.

Refer to the code for exact component responsibilities — the structure is intentionally shallow so new contributors can navigate easily.

## Local setup & run

Prerequisites

- Node.js (LTS) — v16+ recommended. Confirm with `node -v`.
- npm, yarn, or pnpm (the instructions below use npm; substitute `yarn` or `pnpm` if you prefer).

Install dependencies

```bash
# from the repository root
npm install
```

Development server

```bash
# start Vite dev server with HMR
npm run dev
```

Build for production

```bash
npm run build

# optionally preview the built site locally
npm run preview
```

Notes on npm scripts

These commands assume standard Vite scripts exist in `package.json` (`dev`, `build`, `preview`). If your `package.json` differs, run the equivalent script (for example `npm run start` or `vite`).

Environment and ports

- By default Vite serves on port 5173. To change it, set the `PORT` environment variable before `npm run dev` or configure `vite.config.js`.

## Development tips from a senior React perspective

- Keep components small and focused: if a component is >200 lines, consider splitting.
- Prefer composition over prop drilling; use small wrapper components in `shared/ui` for consistent behaviour.
- Add unit tests for logic-heavy components (task filtering, status toggles) and small integration tests for forms/modal flows.
- When adding global state, prefer React Context for small apps or a lightweight state manager if the state graph grows.

## Contributing

- Open a feature branch from `main` (e.g., `feat/task-filter`) and create a concise PR describing the change.
- Run linters and local tests before creating a PR (add `npm run lint` / `npm test` if available).

## Where to look next

- `src/components/features/project/Project.jsx` — project list and selection.
- `src/components/features/task/Tasks.jsx` and `NewTask.jsx` — task list and creation flow (modal).

If you want, I can add a short developer checklist, or create basic unit tests and an npm script for linting — tell me which you'd prefer.

---
Requirements coverage:

- Update `README.md` with business functionality: Done
- Add local setup & run instructions: Done (includes install, dev, build, preview, and notes)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
