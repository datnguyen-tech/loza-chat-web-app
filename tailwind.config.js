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
        description: '#72808e',
        hyperlink: '#0068ff',
        active: '#0068ff',
        'btn-sub': '#e5e7eb',
        'btn-disabled': '#abcdff',
        label: '#001a33',
        'bg-sub': '#e5e7eb',
        'name-chat': '#394e60',
        error: '#db342e'
      },
      spacing: {
        18: '4.5rem',
        82: '21.5rem'
      }
    }
  },
  plugins: []
}
