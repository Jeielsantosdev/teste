/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        "orange-button":'#ff561e'
      }
    },
    boxShadow:{
      navbar : "0px 10px 8px px0 rgba(3, 3, 4, 0.3), 0 1px 2px -1px rgba(3,3,4,0.03)",
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    
  ],
}

