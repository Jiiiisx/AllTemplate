
# HomeKu - Luxury Real Estate Listing Engine (AI-Powered)

HomeKu is a high-end, editorial-style React template designed for luxury real estate agencies and independent brokers. It combines sophisticated aesthetic design with modern functionality, including a built-in AI copywriter.

## ✨ Key Features

- **💎 Luxury Editorial Design:** Dark mode aesthetics with gold accents and high-end typography.
- **🚀 Dynamic Engine:** Fully data-driven components. Update your listings in one single file.
- **🤖 AI Property Copilot:** Integrated Google Gemini AI to generate sophisticated property descriptions automatically.
- **📱 Fully Responsive:** Optimized for desktop, tablet, and mobile viewing.
- **🔍 Smart Filtering:** Functional location and price range filtering system.
- **📄 Dynamic Property Pages:** Automatically generated detail pages for every listing with galleries and amenities.

## 🛠 Tech Stack

- **Framework:** React 19 (TypeScript)
- **Styling:** Tailwind CSS
- **Routing:** React Router Dom v7
- **AI Integration:** Google Generative AI (Gemini)
- **Bundler:** Vite

## 🚀 Quick Start

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## 📝 How to Customize

### 1. Update Property Data
You don't need to dig through complex components. All property data is centralized in:
`data/properties.ts`
Simply add, remove, or edit the objects in the `properties` array to update the entire website.

### 2. Enable AI Concierge
This template features a sophisticated AI Assistant powered by Google Gemini.
1. Get a free API key at [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Create a `.env` file in the root directory (you can copy `.env.example`).
3. Add your key: `VITE_GEMINI_API_KEY=your_actual_key_here`.
4. Restart your development server.

## 🌐 Deployment
This project is optimized for **Vercel** or **Netlify**.
- Push your code to GitHub.
- Connect your repository to Vercel.
- It will automatically deploy and provide an SSL-secured URL.

---
Created with ❤️ for luxury real estate professionals.
Available on Gumroad.
