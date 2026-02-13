# 📔 BeanHaven - Premium Customization Guide

Elevate your coffee business with the **BeanHaven** template. This guide will walk you through the essential customization steps.

## 1. Site Configuration
Open `src/constants/siteData.ts`. This is your control center.

### Update Brand Info:
- **name:** Your shop's name (e.g., "BeanHaven").
- **tagline:** Your unique slogan.
- **description:** A brief story about your roastery.

### Contact & WhatsApp:
Update the `contact` object with your real phone number:
```ts
whatsappNumber: "628xxxxxxx", // Use international format
whatsappMessage: "I'd like to order a fresh brew!"
```

## 2. Managing the Menu
Locate the `menu` object in `siteData.ts`.
- You can add, remove, or edit items in the `items` array.
- Each item supports a `title`, `price`, `category`, and `image` URL.

## 3. The "Modern Roast" Aesthetic
BeanHaven uses Tailwind CSS for its bold styling.
To change the primary orange color, open `index.html` and locate the `tailwind.config` script block. Update the `primary` hex code to match your branding.

## 4. Deployment
- **Platform:** We recommend Vercel for the fastest global performance.
- **Build Command:** `npm run build`
- **Output:** `dist` folder.
