/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#50f89a", //color variable beacuse it was need repeatedlt to writing agin and again we add do amendmend here in tailwond configuration
      },
      fontFamily: {
        soraVarible: ["Sora", "sans-serif"], // defined font family variable for Sora. Sora variable was used in figma but in google I found Sora.
        publicSans: ["Public Sans", "sans-serif"], // defined font family variable for public sans
      },
    },
  },
  plugins: [],
};
