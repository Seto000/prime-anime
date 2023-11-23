import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgBlue1: "#00050d",
      },
      textColor: {
        muted: "#AAAAAA",
      },
      colors: {
        blue1: "#00050d",
      },
    },
    boxShadow: {
      custom: "0 4px 8px 2px rgba(0,5,13,.5)",
    },
  },
  plugins: [],
};
export default config;
