/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/dist/img/hero.png')",
      },
    },
  },
  plugins: [],
  colors:{
    'Blue': '#60a5fa',
    'Gray': '#4b5563',
    'Neutral': '#fafafa'
  }
}

