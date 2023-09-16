/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        buttonBgColor:"#20297D",
        primaryColor:"#20297D",
        greenColor:"#05D79E",
        bgColor:"#EEFOFO",
        textColor:"#848687"
        

      },
      boxShadow:{
        panelShadow:"rgba(17,12,46,0.15) 0px 48px 100px 0px;",
      }
    },
  },
  plugins: [],
}

