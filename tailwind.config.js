/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#199A8E",
        "second-main": "#432C81",
        secondary: "#7B6BA8",
        background: "#FCFBF9",

        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
