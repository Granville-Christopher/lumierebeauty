/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salon: {
          bg: '#FAF6F2', // Soft Cream
          card: '#FFFFFF', // Pure White
          text: '#2D2825', // Deep Charcoal
          accent: '#b76e79', // Rose Gold
          'accent-glow': '#d69fa5', // Lighter Rose Gold
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
