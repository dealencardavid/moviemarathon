/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Plus Jakarta Sans"', "sans-serif"],
      display: ['"Playfair Display"', "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        // App layout (Menu + Box)
        app: "256px 1fr",
        // Dashboard 2 columns grid
        dashboard: "576px 576px",
      },
      gridTemplateRows: {
        // App section layout
        appsection: "48px 1fr",
      },
      colors: {
        main: {
          50: "#FBE9E7",
          100: "#FEE9D2",
          200: "#FDCDA5",
          300: "#FBAA77",
          400: "#F78855",
          500: "#F3521F",
          600: "#D03616",
          700: "#AE1F0F",
          800: "#8C0D09",
          900: "#74050A",
        },
      },
      dropShadow: {
        main: [
          "0 10px 8px rgb(243,82,31, 0.05)",
          "0 4px 3px rgb(243,82,31, 0.1)",
        ],
      },
    },
  },
  plugins: [],
};
