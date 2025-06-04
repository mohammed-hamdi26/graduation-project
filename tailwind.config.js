/** @type {import('tailwindcss').Config } */

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
        background: "#f4f2ee",
        paragraph: "#555555 ",

        foreground: "var(--foreground)",
      },
      animation: {
        error: "error 2s  infinite",
        "pulse-logo": "pulseLogo 0.6s ease-in-out infinite",
      },
      keyframes: {
        error: {
          "0%, 100%": {
            transform: "translateY(50px)",
            // "animation-timing-function": "cubic-bezier(0.5,0,1,1)",
          },
          "50%": {
            transform: "translateY(-50px)",
            // "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
        pulseLogo: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};
