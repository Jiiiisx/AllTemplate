# 📔 DevHub - Premium Customization Guide

Welcome to **DevHub**. This guide will help you configure your developer dashboard to fit your specific workflow.

## 1. Centralized Data Control
The "brain" of DevHub is located in `src/data/`. Update these files to change the dashboard content:
- **config.js:** Global settings and branding.
- **repos.js:** Update your project list and repository stats.
- **tasks.js:** Manage your active development sprints.
- **docs.js:** Organize your technical documentation categories.
- **workspaces.js:** Configure team or project environments.

## 2. UI Customization
DevHub uses a "Developer-First" aesthetic.
- **Theme:** To change the primary accent color (defaulting to a tech-blue/emerald), update `tailwind.config.js`.
- **Layout:** The sidebar and navigation logic can be found in `src/components/layout/`.

## 3. Integrating Real Data
While this template comes with mock data, it is designed for easy API integration. You can replace the static imports in the `data` folder with `fetch` calls or `axios` requests to your real backend or GitHub API.

## 4. Deployment
- **Platform:** Vercel (Recommended), Netlify, or Cloudflare Pages.
- **Build Command:** `npm run build`
- **Output:** `dist` folder.

---
*For support, email us at: contact@gmail.com*
