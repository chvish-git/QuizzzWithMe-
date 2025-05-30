/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'baby-pink': '#FFD1DC',
        'baby-blue': '#BFEFFF',
        'lavender': '#E6E6FA',
        'mint': '#98FF98',
        'peach': '#FFDAB9',
        'periwinkle': '#CCCCFF',
        'lilac': '#C8A2C8',
        'pale-yellow': '#FFFFE0',
        'mauve': '#E0B0FF',
        'turquoise': '#AFEEEE',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};