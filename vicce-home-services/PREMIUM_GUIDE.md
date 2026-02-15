# Vicce Home Services - Premium Customization Guide

Welcome to your new premium template! This guide will help you customize the content quickly and efficiently.

## 🚀 The "Magic" File
The most important file in this project is:
`src/constants/siteData.ts`

**99% of the content on the landing page can be changed here.**

### What you can change in `siteData.ts`:
- **Global Info**: Site name, logo text, address, phone, email, and social media links.
- **Hero Section**: Tagline, titles, description, button text, and main image.
- **Services**: All service titles, descriptions, and icons.
- **About Us**: Feature lists and descriptions.
- **Pricing Calculator**: The hourly rates for each service.
- **Portfolio**: All images, titles, and categories for your work.
- **Testimonials**: Customer quotes, names, roles, and avatars.
- **FAQ**: All questions and answers.

## 🎨 Changing Colors
The colors are controlled via Tailwind CSS in:
`tailwind.config.js`

Look for the `vicce` object under `colors`:
- `cream`: Background color
- `charcoal`: Text and dark section colors
- `accent`: Gold/Bronze accent color

## 🖼️ Changing Images
We use Unsplash URLs by default. To use your own images:
1. Upload your images to the `public/` folder.
2. Update the paths in `siteData.ts` (e.g., change `https://unsplash...` to `/my-image.jpg`).

## 🛠️ Tech Stack
- React + TypeScript
- Tailwind CSS (v4)
- Framer Motion (Animations)
- Lenis (Smooth Scroll)
- Lucide React (Icons)

---
Thank you for choosing Vicce! If you like this template, please leave a rating on the marketplace.
