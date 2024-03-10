/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('../images/heroimage.jpg')",
      },
      screens: {
        'xs': '350px'
      },
    },
  },
  plugins: [],
}

