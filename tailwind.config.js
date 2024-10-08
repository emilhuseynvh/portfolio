/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ["Space Grotesk"]
      },
      colors: {
        "dark" : '#323232',
        "white_" : '#f4f5f5',
        "card_color" : '#0F0F0F'
      },
      screens: {
        'medium': '919px',
        'base' : '500px',
        'm' : '850px',
        'xs' : '400px',
        'xxs' : '350px',
        'normal' : '750px',
        'xl' : '1100px'
      },
    },
  },
  plugins: [],
}