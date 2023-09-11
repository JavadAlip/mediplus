/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        buttonBgColor:"#0D0F23",
        PrimaryColor:"#0D0F23",
        greenColour:"#0D795C",
        BgColor:"#EEFOFO",
        textColor:"B5BCC5"

      },
      boxShadow:{
        panelShadow:"rgba(17,12,46,0.15) 0px 48px 100px 0px;",
      }
    },
  },
  // theme: {
  //   extend: {},
  // },
  plugins: [],
}

