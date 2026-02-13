# 📔 NusaTravel - Premium Customization Guide

This guide covers everything you need to transform **NusaTravel** into your own brand.

## 1. Branding & Content
Everything is managed in `src/data/config.ts`.
- **siteConfig:** Change your logo name and hero text.
- **destinations:** Update the "Discover Wonders" grid.
- **packages:** Manage your tour offerings and prices.

## 2. Global Colors (Tailwind v4)
In this template, we use the latest **Tailwind v4** standard.
To change colors, open `src/index.css` and look for the `@theme` block:
```css
@theme {
  --color-primary: #ffffff;    /* Base Background */
  --color-secondary: #064e3b;  /* Brand Color (Emerald) */
  --color-accent: #10b981;     /* Highlights */
}
```

## 3. SEO Optimization
Open `index.html` and update:
- `<title>`
- `<meta name="description">`
- OpenGraph tags for social media sharing.

## 4. Performance Tips
- **Images:** Always use `.webp` format for local images to keep the site fast.
- **Icons:** We use `lucide-react`. You can find 1000+ icons at [lucide.dev](https://lucide.dev).

---
*For support, email us at: contact@gmail.com*
