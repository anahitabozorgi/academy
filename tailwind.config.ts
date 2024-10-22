import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1A3254",
        secondary: "#A9D0D5",
        tertiary: "#B9F6CA",

      },
      screens: {
        'xs': '410px',
        'md': '680px',
        'lg': '1010px',
        'xl': '1354px',
        '2xl': '1625px',

      },
    },
  },
  plugins: [],
};
export default config;
