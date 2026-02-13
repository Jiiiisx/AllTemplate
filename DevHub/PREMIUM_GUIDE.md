# 💎 DevHub Premium User Guide

Thank you for choosing **DevHub**! This guide will help you set up, customize, and deploy your new dashboard like a pro.

---

## 1. Introduction
DevHub is a premium React dashboard template crafted for developers. It uses a modern stack focusing on performance, modularity, and high-end aesthetics.

## 2. Setting Up Your Project
After downloading the files, follow these steps:
1.  **Extract** the zip file to your working directory.
2.  Open your terminal in the project folder and run:
    ```bash
    npm install
    ```
3.  Launch the development server:
    ```bash
    npm run dev
    ```

## 3. Customizing the Identity
All global settings are centralized in `src/data/config.js`. Open this file to change:
-   **App Name**: Change `DevHub` to your project name.
-   **Admin Profile**: Update the name, role, and avatar URL.
-   **Navigation**: Add or remove links in the sidebar easily.

## 4. Theme & Color System
DevHub features a dynamic theme system powered by CSS Variables.
-   **Default Color**: Modify `--accent-color` in `src/index.css` to change the primary brand color.
-   **User Control**: Users can change their own accent colors via the **Settings** page, which are saved automatically to their browser's local storage.

## 5. Integrating Real Data
Currently, the app uses mock data located in `src/data/`. To connect to a real backend:
1.  Replace the static arrays in `src/data/` with `fetch` or `axios` calls.
2.  We recommend using **React Query** or **SWR** for efficient data fetching.

## 6. Deployment Guide
Ready to go live?
1.  Run the build command:
    ```bash
    npm run build
    ```
2.  Upload the contents of the `dist/` folder to any static hosting provider like **Vercel**, **Netlify**, or **GitHub Pages**.

## 7. Support
If you encounter any issues or have questions, feel free to contact us through our Gumroad profile.

---

*“Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs*

**Happy Coding!**
