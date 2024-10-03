/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-noise": "url(/portfolio/noise.svg)",
      },
      fontFamily: {
        sans: ["Space Mono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sunshade: {
          DEFAULT: "#ff9924",
          50: "#fff9ed",
          100: "#fff2d4",
          200: "#ffe2a8",
          300: "#ffcc70",
          400: "#ffaa37",
          500: "#ff9924",
          600: "#f07306",
          700: "#c75707",
          800: "#9e440e",
          900: "#7f3a0f",
          950: "#451b05",
        },
        sinbad: {
          DEFAULT: "#449691",
          50: "#f2f9f8",
          100: "#ddf0ee",
          200: "#bfe2df",
          300: "#97cfca",
          400: "#5fb1ab",
          500: "#449691",
          600: "#3b7f7e",
          700: "#356969",
          800: "#325758",
          900: "#2d494c",
          950: "#1a3032",
        },
        "rob-roy": {
          DEFAULT: "#de9131",
          50: "#fdf9ef",
          100: "#faf1da",
          200: "#f4dfb4",
          300: "#edc985",
          400: "#e5a952",
          500: "#de9131",
          600: "#d07826",
          700: "#ad5e21",
          800: "#8a4b22",
          900: "#703f1e",
          950: "#3c1f0e",
        },
      },
    },
  },
  plugins: [],
};
