# 📔 AnalyticsDashboard - Premium Customization Guide

Build your next SaaS tool faster with **AnalyticsDashboard**. This guide will help you set up and customize the dashboard to fit your needs.

## 1. Centralized Data Management
Open `src/data/`. You will find several files controlling the dashboard content:
- **statsData.js:** Update the main metric cards (Users, Revenue, etc.).
- **notifications.js:** Manage the system-wide notification feed.
- **config.js:** Control branding and general application settings.

## 2. Working with Charts
This template uses professional charting libraries. To update the data points, look into `src/components/RevenueChart.jsx` or `src/components/CodeHeatmap.jsx`. Data can be passed via props or fetched from your API.

## 3. Theming & Styling
The dashboard uses Tailwind CSS for its clean look.
- **Colors:** Update `tailwind.config.js` to change the primary brand color.
- **Layout:** The layout is managed in `src/components/layout/`.

## 4. Deployment
- **Platform:** Vercel, Netlify, or AWS Amplify.
- **Build Command:** `npm run build`
- **Output:** `dist` folder.

---
*For support, email us at: contact@gmail.com*
