/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'border-primary': '#dbdbdb',
        'menu-active': '#006edc',
        'menu-hover': '#0000001a',
        'btn-active': '#0068ff',
        'main-border': '#dbdbdb',
        hyperlink: '#0068ff',
        active: '#0068ff',
        error: '#db342e',
        'background-hover': '#f3f5f6',
        'background-selected': '#e5efff'
      },
      spacing: {
        18: '4.5rem',
        82: '21.5rem'
      }
    }
  },
  plugins: []
}
