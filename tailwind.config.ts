import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"], // Add JetBrains Mono
      },
      colors: {
        darkGreen: "#064e3b", // Custom dark green color
      },
    },
  },
  plugins: [],
};

export default config;
