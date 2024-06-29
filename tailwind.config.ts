/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#202020",
        white: "#FFFFFF",
        highlight: "#E7A644",
        highlightdark: "#DA9A2A",
      },
    },
  },
  plugins: [],
};
