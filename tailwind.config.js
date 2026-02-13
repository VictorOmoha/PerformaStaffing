/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        performa: {
          purple: '#4C267C',
          'purple-light': '#6B3D99',
          'purple-dark': '#3A1D5F',
          gold: '#FDC503',
          'gold-light': '#FFD402',
          'gold-dark': '#E5B102',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}
