/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        primary: "rgb(var(--color-primary))",
        muted: "rgb(var(--color-muted))",
        base: "rgb(var(--backgroundColor-default))",
      },
      gridTemplateColumns: {
        subgrid: "subgrid",
      },
    },
  },
  plugins: [require("daisyui")],
};
