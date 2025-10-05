# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website built with Nuxt 3 and Tailwind CSS. This is a simple static site showcasing personal background, projects, and interests.

## Development Commands

```bash
# Install dependencies (required before first run)
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Generate static site
yarn generate

# Linting
yarn lint          # Check for linting issues
yarn lint:fix      # Auto-fix linting issues

# Formatting
yarn format        # Format all files with Prettier
yarn format:check  # Check formatting without making changes
```

## Architecture

### Framework

- **Nuxt 3** with Vue 3 Composition API
- **Tailwind CSS** for styling with Typography plugin
- Static site generation (SSG) for deployment

### Project Structure

- `pages/` - File-based routing (index.vue, about.vue, contact.vue, projects.vue)
- `components/` - Reusable Vue components (Header.vue, Footer.vue)
- `default.vue` - Root layout (note: should be in layouts/ directory for Nuxt 3 conventions)
- `assets/styles/` - Global CSS including Tailwind directives
- `nuxt.config.ts` - Nuxt configuration with app metadata and module setup

### Configuration Files

- `.eslintrc.js` - ESLint config with Vue 3 and Nuxt recommended rules
- `.prettierrc` - Prettier formatting rules (semi, singleQuote, etc.)
- `tailwind.config.ts` - Tailwind with Typography plugin enabled

## CI/CD

- **GitHub Actions** runs on PRs to master branch (.github/workflows/ci.yml)
- CI checks: linting and formatting
- **Deployment**: Netlify (automatic on push)

## Node Version

Requires Node.js >= 22.0.0 (see .nvmrc and package.json engines)

## Code Style

- Vue 3 Composition API preferred
- Multi-word component name rule disabled in ESLint
- Console/debugger warnings only in production
- Prettier enforced with specific rules (single quotes, semicolons, 80 char width)
