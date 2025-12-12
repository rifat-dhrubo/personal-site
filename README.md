<div align="center">

# TanStack Enterprise Template

<p align="center">
    A production-ready, feature-rich frontend template built with the TanStack ecosystem, React 19, and Vite.
</p>

[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Lucide React](https://img.shields.io/badge/Lucide_React-FFD700?logo=lucide&logoColor=black)](https://lucide.dev/)
[![Clerk Auth](https://img.shields.io/badge/Clerk-3C3C43?logo=clerk&logoColor=white)](https://clerk.com/)
[![TanStack Router](https://img.shields.io/badge/TanStack_Router-FF7F50?logo=reactrouter&logoColor=white)](https://tanstack.com/router)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?logo=reactquery&logoColor=white)](https://tanstack.com/query)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Orval](https://img.shields.io/badge/Orval-FF9E0F?logo=openapiinitiative&logoColor=white)](https://orval.dev/)

</div>

## Overview

This template provides a robust foundation for building scalable enterprise-grade web applications. It is opinionated and pre-configured with the best tools in the React ecosystem to ensure developer productivity and code quality from day one.

### Key Features

- **Vite Powered**: Blazing fast dev server and optimized builds.
- **Type-Safe Routing**: Full type safety with TanStack Router.
- **Data Fetching**: Powerful server state management with TanStack Query.
- **Modern Styling**: Tailwind CSS v4 and shadcn/ui for beautiful, accessible components.
- **Authentication**: Pre-configured Clerk authentication.
- **API Client**: Auto-generated type-safe API clients using Orval.
- **Feature-Based Architecture**: Scalable folder structure for large applications.
- **CI/CD Ready**: GitHub Actions for deployment and semantic releases.

## Architecture & Philosophy

We follow a set of core principles to ensure consistency and maintainability.

### Feature-Based Structure

We organize code by **feature** rather than by technical type. This keeps related code (components, hooks, queries, routes) together, making it easier to navigate and maintain.

```
src/
├── features/           # Feature modules (e.g., auth, billing, dashboard)
│   ├── components/     # Feature-specific components
│   ├── hooks/          # Feature-specific hooks
│   └── api/            # Feature-specific queries/mutations
├── components/         # Shared UI components (buttons, inputs, etc.)
├── routes/             # Route definitions (file-based routing)
├── generated/          # Auto-generated API code
└── assets/             # Static assets
```

### Styling Strategy

- **Tailwind CSS**: The primary engine for styling.
- **Shadcn UI**: A collection of re-usable components built with Radix UI and Tailwind.
- **Icons**: Optimized SVG workflow. Place SVGs in `src/assets/svg`, and they are automatically hashed and sprite-generated.

### State Management

- **Server State**: Handled exclusively by **TanStack Query**. Avoid putting API data in global stores.
- **Client State**: Use local React state (`useState`) for UI state. For complex global client state, use **Zustand** or **TanStack Store**.

### API Integration

We use **Orval** to generate TypeScript hooks and types directly from your OpenAPI specification. This ensures your frontend is always in sync with your backend.

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- pnpm (v9 or higher)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repo-url>
    cd <your-project-name>
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Setup Environment:**
    Copy `.env.example` to `.env.local` and fill in your keys:
    ```bash
    cp .env.example .env.local
    ```

### Running Locally

```bash
pnpm run dev
```

The app will be available at `http://localhost:3000`.

## Available Scripts

| Script                     | Description                            |
| -------------------------- | -------------------------------------- |
| `pnpm run dev`             | Start the development server           |
| `pnpm run build`           | Build for production                   |
| `pnpm run test`            | Run tests with Vitest                  |
| `pnpm run lint`            | Lint code with ESLint                  |
| `pnpm run format`          | Format code with Prettier              |
| `pnpm run generate`        | Generate API client from OpenAPI spec  |
| `pnpm run lucide:generate` | Optimize and install used Lucide icons |
| `pnpm run commit`          | Commit changes using Commitizen        |

## Workflows

This template comes with GitHub Actions pre-configured:

- **Deploy**: Automatically builds and deploys to AWS S3/CloudFront on push to `main`, `stage`, or `dev`.
- **Release**: Automates versioning and changelog generation using Semantic Release.

## Contributing

1.  Create a feature branch (`git checkout -b feature/amazing-feature`).
2.  Commit your changes (`pnpm run commit`).
3.  Push to the branch (`git push origin feature/amazing-feature`).
4.  Open a Pull Request.
