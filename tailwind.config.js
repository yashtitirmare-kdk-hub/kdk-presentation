/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body:    ["'DM Sans'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        navy: { 900: "#0a0f2e", 800: "#0f1640", 700: "#1a2255" },
        gold: { 400: "#f5c842", 500: "#e8b800", 600: "#c99b00" },
      },
      animation: {
        "float":       "float 5s ease-in-out infinite",
        "spin-slow":   "spin-cw 40s linear infinite",
        "spin-slow-r": "spin-ccw 28s linear infinite",
        "pulse-slow":  "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float:    { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        "spin-cw":  { to: { transform: "rotate(360deg)" } },
        "spin-ccw": { to: { transform: "rotate(-360deg)" } },
      },
    },
  },
  plugins: [],
};
