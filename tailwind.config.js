/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'inner-nav':'inset 0px 0px 5px -2px rgba(0, 173, 181);',
        'nav':'0px 0px 5px -2px rgba(0, 173, 181);',
      },
    },
    colors:{
      'primary': '#00ADB5',
      'black': '#1E1E1E',
      'secondary': '#393E46',
      'info': '#0097FA',
      'white': '#EEEEEE',
    }
  },
  plugins: [],
}
