# Brew & Co - Artisanal Coffee Landing Page Template (v2)

Brew & Co is a premium, high-conversion landing page template designed specifically for coffee roasters, artisanal cafes, and specialty food brands. Built with React 19, Vite, and Tailwind CSS.

## ✨ Features
- **Modern & Minimalist Aesthetic:** Focused on high-quality imagery and clean typography.
- **Fully Responsive:** Optimized for desktop, tablet, and mobile devices.
- **Centralized Configuration:** Edit all text, images, and links in one single file (`constants.ts`).
- **Interactive Shop UI:** Ready-to-use product cards with cart functionality.
- **AI Brew Assistant:** Integrated AI-powered assistant to help users choose their perfect brew.
- **Performance Optimized:** Uses modern web standards for fast loading times.

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS version)
- npm or yarn

### Installation
1. Clone the repository or download the source code.
2. Navigate to the project directory:
   ```bash
   cd v2
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure your environment:
   Create a `.env.local` file and add your Gemini API Key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
5. Run development server:
   ```bash
   npm run dev
   ```

## 🛠 Customization

This template is designed to be easily customized without touching the core React components.

### 1. Change Content
Open `src/constants.ts` and update the `SITE_CONFIG` object. You can change:
- Brand Name
- Hero Headlines & Images
- Product List
- Testimonials
- Social Media Links

### 2. Change Colors & Fonts
Open `index.html` and modify the `tailwind.config` section. You can update the `espresso`, `clay`, and `cream` hex codes to match your brand.

## 📄 License
This template is intended for commercial use. Please ensure you have the rights to any images used in production.