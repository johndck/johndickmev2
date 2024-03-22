/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        h1: "3.2rem", // Set the font size for h1
        h2: "3rem", // Set the font size for h2
        h3: "2rem", // Set the font size for h3
        h4: "1.5rem", // Set the font size for h4
        p: "1.2rem", // Set the font size for p
        pCard: "1.1rem", // Set the font size for project card
        footerP: "0.9rem", // footer fontsize
        badgeP: "0.6rem", // background fontsize
      },
      maxWidth: {
        1280: "1280px",
      },
      gridTemplateColumns: {
        "auto-1fr-auto": "auto 1fr auto",
      },
      width: {
        112: "28rem",
        124: "31rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    listStyleType: {
      disc: "disc",
    },
  },
  plugins: [],
};
