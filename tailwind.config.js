/* eslint-disable @typescript-eslint/no-var-requires */
const { pick, omit } = require("lodash")
const plugin = require("tailwindcss/plugin")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      full: "100% !important",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      "2xs": "375px",
      // => @media (min-width: 375px) { ... }

      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },

    extend: {
      fontWeight: {
        inherit: "inherit",
      },
      // Goto https://javisperez.github.io/tailwindcolorshades to generate colors
      colors: {
        current: "currentColor",
        transparent: "transparent",

        black: "#000000",
        white: "#ffffff",

        "golden-hour": "#f2b457",
        "black-wash": "#0b0c0f",
        "hooloovoo-blue": "#3656ff",
        "nila-blue": "#0057ff",
        "lanse-blue": "#5249ff",
        "blustering-blue": "#3818fc",
        "blue-genie": "#6b6bfd",
        "dark-void": "#131417",
        trance: "#9097a6",
        charade: "#3b3f45",
        "calla-lily": "#E4E8ED",
        "ruined-smores": "#0F1114",
        "midnight-magic": "#47474a",
        "satin-white": "#ced3db",
        fever: "#ed4a4a",
      },

      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
      },
      animation: {
        slideDown: "slideDown 300ms",
        slideUp: "slideUp 300ms",
        wiggle: "wiggle .75s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    require("tailwindcss-animate"),
    require("tailwindcss-3d"),
    require("tailwindcss-radix")(),
    plugin(({ addVariant }) => {
      addVariant("mac", ".mac &")
      addVariant("windows", ".windows &")
      addVariant("ios", ".ios &")
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
