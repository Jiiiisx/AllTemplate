# Aurora | Premium Designer Portfolio Template

Aurora is a high-end, futuristic portfolio template designed for elite creative professionals. Built with React, Tailwind CSS, and Framer Motion, it features immersive WebGL backgrounds, smooth cinematic scrolling, and 3D interactive elements that set a new standard for digital presence.

## ✨ Key Features

- **Immersive Aurora Shader:** Stunning WebGL-powered aurora backgrounds using OGL/GLSL for a truly futuristic aesthetic.
- **Cinematic Smooth Scroll:** Integrated with Lenis for a "heavy" and premium scrolling experience typical of high-end design agencies.
- **Interactive 3D Tilt:** Project cards feature advanced 3D parallax effects that respond dynamically to cursor movement.
- **Monumental Branding:** A giant, cinematic footer and hero section designed for strong personal branding.
- **Futuristic 404 Experience:** A meticulously designed "Void" page for missing routes, ensuring total design immersion.
- **Ultra-Responsive:** Optimized for every device, from high-res desktop monitors to mobile screens.
- **Developer-Friendly:** Clean, modular code with a centralized configuration file for instant personalization.

## 🛠️ Tech Stack

- **Frontend:** React.js (TypeScript)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **3D/Shaders:** Three.js & OGL (WebGL)
- **Icons:** Lucide React

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-link>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Personalization (The Easy Way)

You don't need to dig through complex code to change the content. Simply open `src/data/config.ts` and update the `siteData` object.

```typescript
export const siteData = {
  name: "YOUR NAME",
  fullName: "YOUR FULL NAME",
  role: "YOUR ROLE",
  // Change colors, projects, testimonials, and more...
};
```

### Performance Mode
If you want a lighter version for older devices, you can toggle `lowPerformanceMode: true` in the config file. This replaces the WebGL shaders with elegant static gradients.

## 📦 What's Included?

- Full Source Code (React + Vite)
- Reusable UI Components
- Pre-configured Framer Motion Animations
- Custom GLSL Shaders
- Comprehensive Documentation

---

**Designed for designers who want to stand out.**
Created with 🖤 for the Gumroad Creative Community.