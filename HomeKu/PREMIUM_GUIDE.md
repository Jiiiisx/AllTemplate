# 📔 HomeKu - Premium Customization Guide

Welcome to the **HomeKu** family! This guide will help you customize your new template in minutes. No advanced coding knowledge required.

## 1. Centralized Configuration
Most of the website's content is controlled through a single file: `src/data/config.ts`.

### Changing Site Identity
Open `src/data/config.ts` and update the `siteConfig` object:
- **name:** Your brand name.
- **tagline:** Your main slogan.
- **whatsappNumber:** For the floating contact button.
- **email:** Your business email.

## 2. Managing Properties
All house listings are stored in `src/data/properties.ts`.
- To add a new property, simply copy an existing object and update the details.
- **Pro Tip:** Use high-quality images (16:9 aspect ratio) for the best visual impact.

## 3. Customizing Colors
HomeKu uses Tailwind CSS for styling. To change the theme colors:
1. Open `src/index.css`.
2. Locate the `:root` (for Dark Mode) and `.light-mode` blocks.
3. Update the hex codes for `--bg-primary` and `--brand-gold` to match your brand colors.

## 4. Deploying to the Web
We recommend using **Vercel** or **Netlify** for the fastest deployment:
1. Connect your GitHub repository.
2. Build Command: `npm run build`
3. Output Directory: `dist`

## 📧 Support
If you encounter any issues or need help with advanced customization, feel free to contact us at `contact@gmail.com`.

Happy building!
