/* eslint-disable @typescript-eslint/no-var-requires */
const { pick, omit } = require("lodash")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./elements/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
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
        // current: "currentColor",
        // transparent: "transparent",
        //
        // black: "#000000",
        // white: "#ffffff",

        primary: {
          50: "#e3ecff",
          100: "#c8d9ff",
          200: "#a3c0ff",
          300: "#7ea6ff",
          400: "#6293ff",
          500: "#4680ff",
          600: "#3f78ff",
          700: "#376dff",
          800: "#2f63ff",
          900: "#2050ff",
          950: "#1b43d5",
        },

        secondary: {
          50: "#f2f4f5",
          100: "#e1e5e8",
          200: "#bec6ce",
          300: "#9ba8b4",
          400: "#788a99",
          500: "#5b6b79",
          600: "#495662",
          700: "#38424a",
          800: "#262d33",
          900: "#15191c",
          950: "#0c0e10",
        },

        success: {
          50: "#dff2ec",
          100: "#c0e5d9",
          200: "#96d4bf",
          300: "#6bc2a5",
          400: "#4cb592",
          500: "#2ca87f",
          600: "#27a077",
          700: "#21976c",
          800: "#1b8d62",
          900: "#107d4f",
          950: "#0a5736",
        },

        danger: {
          50: "#fadede",
          100: "#f5bebe",
          200: "#ee9393",
          300: "#e76767",
          400: "#e14747",
          500: "#dc2626",
          600: "#d82222",
          700: "#d31c1c",
          800: "#ce1717",
          900: "#c50d0d",
          950: "#a50909",
        },

        warning: {
          50: "#fbedd9",
          100: "#f7dcb3",
          200: "#f2c580",
          300: "#edad4d",
          400: "#e99c26",
          500: "#e58a00",
          600: "#e28200",
          700: "#de7700",
          800: "#da6d00",
          900: "#d35a00",
          950: "#b54d00",
        },

        info: {
          50: "#e2f7f9",
          100: "#c5eff3",
          200: "#9fe4eb",
          300: "#78d9e2",
          400: "#5bd1dc",
          500: "#3ec9d6",
          600: "#38c3d1",
          700: "#30bccc",
          800: "#28b5c6",
          900: "#1ba9bc",
          950: "#148999",
        },

        dark: {
          50: "#e6e8eb",
          100: "#ced2d7",
          200: "#9ea7b1",
          300: "#6e7c89",
          400: "#485059",
          500: "#212529",
          600: "#1a1d21",
          700: "#131618",
          800: "#0d0e10",
          900: "#060607",
          950: "#020303",
        },

        shark: {
          50: "#F0F3F5",
          100: "#E1E8EB",
          200: "#B8C5CC",
          300: "#90A0AB",
          400: "#4F5F6E",
          500: "#1B232D",
          600: "#161E29",
          700: "#0F1621",
          800: "#0A111C",
          900: "#060A14",
          950: "#02050D",
        },
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
