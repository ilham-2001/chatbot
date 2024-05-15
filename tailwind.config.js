/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'three-color-gradient': 'linear-gradient(to top, #FFD996, #FFB9A3, #F3B0A7)',
      }
    },
  },
  plugins: [],
}