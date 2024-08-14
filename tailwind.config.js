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
        "#5C4529":"#5C4529",
        "#3FC66E":"#3FC66E",
        "#FFF4E7":"#FFF4E7",
        "#A08D76":"#A08D76"
      },
      borderRadius:{
        "126px":"126px",
      },
      screens:{
        "990px":"990px",
        "1180px":"1180px",
        "800px":"800px",
        "600px":"600px",
        "670px":"670px",
      },
      margin:{
        "50px":"50px"
      }
    },
  },
  plugins: [],
}