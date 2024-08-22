/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('../images/image87.jpg')",
        'image10':"url('../images/image10.jpg')",
        'image17':"url('../images/image17.jpg')",
      },

      screens: {
        'xs': '350px'
      },
      fontFamily: {
        "museo": ['MuseoModerno'], "poppins": ['Poppins']
      }

    },
  },
  plugins: [],
}

