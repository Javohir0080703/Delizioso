/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "40px":"40px",
        "80px":"80px"
      },
      lineHeight:{
        "46px":"46px",
        "88px":"88px"
      },
      colors:{
        "#311F09":"#311F09",
        "#123968":"#123968",
        "#D0CCC7":"#D0CCC7",
        "#FF8A00":"#FF8A00",
        "#FF3838":"#FF3838",
        "#3FA72F":"#3FA72F",
        "#5C4529":"#5C4529"
      },
      borderRadius:{
        "126px":"126px"
      }
    },
  },
  plugins: [],
}