/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': "#1d2434",
        'yellow': '#d5b981'
      },
      backgroundImage: {
        'hero-banner': "url('../images/single.jpg')"
      }
    },
  },
  plugins: [],
}

