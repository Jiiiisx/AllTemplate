
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-gold': '#C5A25D',
        'brand-dark': '#000000',
        'brand-light': '#F9F7F2',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        background: 'var(--bg-primary)',
        surface: 'var(--card-bg)',
        'border-theme': 'var(--border-primary)',
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
