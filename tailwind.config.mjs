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
        primary: "rgba(var(--color-primary))",
        muted: "rgba(var(--color-muted))",
      },
      gridTemplateColumns: {
        subgrid: "subgrid",
      },
    },
  },
  plugins: [require("daisyui")],
};
