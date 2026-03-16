import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#131722",
        cloud: "#f4f6fb",
        cyan: "#2cc8c4",
        coral: "#ff735c"
      }
    }
  },
  plugins: []
};

export default config;
