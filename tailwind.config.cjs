/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      colors: {
      'jet': '#312F2F',
      'pine-green':'#157A6E',
      'khaki':'#BEB7A4',
      'jasper':'#D5573B'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [            {
      mytheme: {
        primary: "#EE5622",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#313628",
      },
    },],
  },
}