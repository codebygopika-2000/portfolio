/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: { 950: '#070b14', 900: '#0b1120', 800: '#111a2e', 700: '#1c2740' },
        accent: { DEFAULT: '#7c9cff', soft: '#a5b8ff' },
      },
    },
  },
  plugins: [],
}
