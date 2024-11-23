import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D4F42", // Deep green
        background: "#EDE6D6", // Soft neutral
        accent: "#C55A11", // Warm accent
      },
    },
  },
  plugins: [],
};

export default config;
