/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        schibsted: ["Schibsted Grotesk", "sans-serif"],
        chivo: ["Chivo Mono", "monospace"],
      },
      colors: {
        red: {
          950: "#470808",
          900: "#910A0B",
          800: "#AB0909",
          700: "#CF0705",
          600: "#F90A08",
          500: "#FA3939",
          400: "#FB6E6E",
          300: "#FDA5A5",
          200: "#FECACA",
          100: "#FFE2E0",
          50: "#FEF2F2",
        },
        yellow: {
          950: "#451B03",
          900: "#78350F",
          800: "#92400D",
          700: "#B4540A",
          600: "#D6770B",
          500: "#FCAB10",
          400: "#FBBF24",
          300: "#FBCC4C",
          200: "#FDDE8A",
          100: "#FEEFC7",
          50: "#FFFAEB",
        },
      },
      keyframes: {
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
