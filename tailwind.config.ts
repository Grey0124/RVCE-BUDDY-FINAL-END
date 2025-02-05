import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky: "#3B82F6", // A rich blue
        lamaSkyLight: "#DBEAFE", // Soft sky blue
        lamaPurple: "#8B5CF6", // Vibrant purple
        lamaPurpleLight: "#EDE9FE", // Light lavender
        lamaYellow: "#FBBF24", // Warm golden yellow
        lamaYellowLight: "#FEF3C7", // Soft pastel yellow
      },
      
    },
  },
  plugins: [],
};
export default config;
