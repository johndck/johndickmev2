/** @type {import('tailwindcss').Config} */
export default {
  purge: { content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"] },
  theme: {
    extend: {
      fontFamily: { opensans: ["Open Sans", "sans-serif"] },
    },
    fontSize: {
      h1: "4rem", // Set the font size for h1
      h2: "3rem", // Set the font size for h2
      h3: "2rem", // Set the font size for h3
      p: "1.5rem", // Set the font size for p
    },
    maxWidth: {
      1280: "1280px",
    },
    gridTemplateColumns: {
      "auto-1fr-auto": "auto 1fr auto",
    },
    width: {
      112: "28rem",
    },
  },
  plugins: [],
};
