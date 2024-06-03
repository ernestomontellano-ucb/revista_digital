/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors:{
      "rosa":{
        "400":"#D72386",
        "300":"#E15AA4",
        "200":"#EB91C3",
        "100":"#F5C8E1"
      },
      "mostaza":{
        "400":"#F2A950",
        "300":"#F2A950",
        "200":"#F5BF7C",
        "100":"#FCEAD3"
      },
      "magenta":{
        "400":"#F24171",
        "300":"#F57194",
        "200":"#F9A0B8",
        "100":"#FCD0DC"
      },
      "naranja":{
        "400":"#F2695C",
        "300":"#F58F85",
        "200":"#F9B4AE",
        "100":"#FCDAD6"
      },
      "azul":{
        "400":"#0C2059",
        "300":"#495883",
        "200":"#8690AC",
        "100":"#C2C7D6"
      }
    },
    spacing:{
      "1":"5px",
      "2":"7px",
      "3":"9px",
      "4":"12px",
      "5":"16px",
      "6":"21px",
      "7":"28px",
      "8":"38px",
      "9":"51px",
      "10":"67px",
      "11":"90px"
    },
    fontFamily:{
      "sans":["Poppins", "sans-serif"]
    },
    fontSize:{
      "xxxsm":"5px",
      "xxsm":"7px",
      "xsm":"9px",
      "sm":"12px",
      "base":"16px",
      "xl":"21px",
      "2xl":"28px",
      "3xl":"38px",
      "4xl":"51px",
      "5xl":"67px",
      "6xl":"90px"
    },
    extend: {},
  },
  plugins: [],
}

