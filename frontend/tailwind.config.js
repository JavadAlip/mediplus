/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        buttonBgColor:"#20297D",
        primaryColor:"#20297D",
        greenColor:"#02DDA2",
        bgColor:"#EEFOFO",
        textColor:"B5BCC5"

      },
      boxShadow:{
        panelShadow:"rgba(17,12,46,0.15) 0px 48px 100px 0px;",
      }
    },
  },
  plugins: [],
}

