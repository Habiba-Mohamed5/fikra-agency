/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-dark': '#0B1120',
        'neon-cyan': '#06b6d4',
        'neon-purple': '#8b5cf6',
      },
      fontFamily: {
        'sans': ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
