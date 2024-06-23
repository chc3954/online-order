/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#202020",
        foreground: "#FFFFFF",
        highlight: "#E7A644",
        btn: {
          background: "#E7A644",
          "background-hover": "#F0AF0F",
        },
      },
    },
  },
  plugins: [],
};
