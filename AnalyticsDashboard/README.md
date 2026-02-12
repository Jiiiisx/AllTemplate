# 🚀 DevHub – Premium Analytics & Developer Dashboard Template

**DevHub** is a sophisticated, high-performance analytics dashboard designed specifically for developers and maintainers. Built with **React 18**, **Tailwind CSS**, and **Framer Motion**, it offers a seamless blend of aesthetics and functionality.

Whether you're building a community portal, a repository monitor, or an internal team dashboard, DevHub provides the perfect foundation.

---

## ✨ Key Features

- 🌓 **Dynamic Theme System**: Seamless Dark and Light mode support with persistent user preference.
- 🎨 **One-Click Customization**: Change the entire look and feel using the built-in Accent Color picker in the Settings.
- 📊 **Rich Data Visualization**: Beautifully animated charts and heatmaps powered by `Recharts`.
- 🔄 **Dual View Modes**: Switch between "Project Pulse" (Public) and "Maintainer Dashboard" (Private) with a single click.
- 📱 **Fully Responsive**: Optimized for every device, from mobile phones to large desktops.
- ⚡ **Ultra-Fast Performance**: Built on Vite for near-instant HMR and lightning-fast builds.
- 🧩 **Modular Architecture**: Clean, reusable components that make extending the dashboard a breeze.

---

## 🛠️ Built With

- **React 18** – Modern UI library.
- **Vite** – Next-generation frontend tooling.
- **Tailwind CSS** – Utility-first CSS framework.
- **Framer Motion** – Industry-standard animation library.
- **Lucide React** – Clean and consistent iconography.
- **Recharts** – Composable charting library.

---

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

---

## ⚙️ Customization Guide

### Centralized Configuration
You can change the application name, roles, navigation items, and default stats in a single file:
`src/data/config.js`

### Changing the Theme
The accent color is managed via CSS variables. You can easily modify the default color in `src/index.css` or let users choose their own through the Settings page.

```css
:root {
  --accent-color: 99 102 241; /* RGB format */
  --accent-hex: #6366F1;
}
```

---

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components & layouts
├── data/           # Mock data and site configuration
├── pages/          # Full-page view components
└── assets/         # Images, icons, and static files
```

---

## 📚 Documentation

For a more comprehensive guide on advanced customization, system architecture, and deployment strategies, please refer to the **[PREMIUM_GUIDE.md](./PREMIUM_GUIDE.md)** included in this package.

---

## 📄 License

This template is available for purchase on [Gumroad](YOUR_GUMROAD_LINK). Once purchased, you are free to use it for personal and commercial projects.

---

*Crafted with ❤️ by Raji Dev*
