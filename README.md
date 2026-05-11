# Aditya Bhatt Portfolio

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Aditya%20Bhatt-111827?style=for-the-badge&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-16a34a?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-2563eb?style=for-the-badge)

A modern personal portfolio website built with TanStack Start, React, TypeScript, and Tailwind CSS.  
It highlights experience, projects, skills, notes, and contact details in a clean and responsive layout.

## Tech Stack

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TanStack Router](https://img.shields.io/badge/TanStack%20Router-FF4154?style=for-the-badge&logo=reactrouter&logoColor=white)
![TanStack Start](https://img.shields.io/badge/TanStack%20Start-0F172A?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix%20UI-111827?style=for-the-badge)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Deployment-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Project Architecture

```mermaid
flowchart TD
  A[User Browser] --> B[React UI Components]
  B --> C[TanStack Router Routes]
  C --> D[TanStack Start Server Layer]
  D --> E[Cloudflare Runtime]
  B --> F[Tailwind CSS + Radix UI]
```

## Getting Started

### 1) Prerequisites

- Node.js 20+ recommended
- npm 10+ recommended

### 2) Install dependencies

```bash
npm install
```

### 3) Run development server

```bash
npm run dev
```

### 4) Build for production

```bash
npm run build
```

### 5) Preview production build

```bash
npm run preview
```

## Useful Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production assets
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks
- `npm run format` - Format project files with Prettier

## Folder Highlights

- `src/routes` - Route definitions and page-level metadata
- `src/components` - Portfolio sections and reusable UI blocks
- `src/components/ui` - Shared UI primitives
- `src/lib` - Utility and error-handling helpers
- `src/styles.css` - Global styles and theme tokens

## Deployment

This project is configured for Cloudflare-style deployment runtime and can also be hosted on any platform that supports Vite/TanStack Start output.

