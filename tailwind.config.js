/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dd-light-blue': '#E3F4FE',
        'dd-header-bottom-border': '#19C3FB',
      },
      spacing: {
        'dd-view-height': '90vh',
      },
    },
    fontFamily: {
      bangers: ['Bangers', 'sans-serif'],
    },
  },
  plugins: [],
};
