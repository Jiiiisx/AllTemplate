# Brew & Co Coffee Template

Brew & Co is a minimalist React template for coffee shops. It focuses on clean design and performance. The template includes an AI barista assistant to help customers browse the menu.

**What is inside**
- Minimalist design
- AI assistant powered by Google Gemini 2.5 Flash
- Persistent dark mode
- Fully responsive for mobile and desktop
- Content managed through a single file

**How to start**
Make sure you have Node.js installed.

1. Install dependencies
Run npm install in your terminal.

2. AI configuration
Get a free API key from Google AI Studio. Create a file named .env in the root folder and add your key:
VITE_GEMINI_API_KEY=your_key_here

3. Run the project
Run npm run dev to start the local server.

**How to customize**
You can change the site name, prices, images, and contact info in constants.ts. You do not need to edit complex code files.

**Security note**
Since this is a frontend application, your API key is visible in the browser. You should restrict your key to your own domain in the Google Cloud Console to prevent others from using it.

**Deployment**
This template works with Vercel or Netlify. Add your VITE_GEMINI_API_KEY to the environment variables in your hosting dashboard.

---
Designed for a modern coffee experience.
