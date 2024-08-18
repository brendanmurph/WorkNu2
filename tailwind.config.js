/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('../images/6.jpg')",
        'image10':"url('../images/image10.jpg')",
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

