/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
        spaceage: "spaceage",
      },
      colors: {
        "custom-white": "#ccd6f6",
        "custom-gray":"#8892b0",
        "custom-blue": "#112240",
        "custom-green": "#64ffd9",
        "custom-bg": "#0a192f"
      },
      body: {
        padding: "50px"
      }
    },
    // colors: {
    //   darkBlue: "#0a182f",
    //   blueGrey: "#ccd6f6",
    //   neonGreen: "#64ffda",
    //   myGrey: "#64ffda"
    // }
  },
  plugins: [],
};
