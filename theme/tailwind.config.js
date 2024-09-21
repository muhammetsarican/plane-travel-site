/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.html"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "primary": "#E6DBFF",
        "secondary": "#F6F4F8",
        "primary-white": "#FFFFFF",
        "primary-purple": "#4A0096",
      },
    },
  },
  plugins: [],
}

