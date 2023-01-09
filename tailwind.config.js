/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
    extend: {
      // colors: {
      //   brightRed: " hsl(12, 88%, 59%",
      //   brightRedlight: "hsl(12,88%,69%)",
      //   brightRedSupLight: " hsl(12, 88%, 95%",
      //   darkBlue: "hsl(228,88%,23%)",
      //   darkGreyishblue: " hsl(227, 12%, 61%",
      //   veryDarkBlue: "hsl(233,2%,13%)",
      //   veryPaleRed: "hsl(13,10%,96%)",
      //   veryLightGray: "hsl(0,0%,98%)",
      // },
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [],
};
