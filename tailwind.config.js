/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors"

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"]
    },
    extend: {
      // Font Monserrat
      colors:{

        purple: "#990099",
        sky_blues: "#33CCCC",
        
        success: {
          DEFAULT: "#3CE776",
          dark: "#03A33A",
        },
        warning: "#FFE175",
        danger: "#CA1212",
        
        // #42D9D9 100 %
        // #42D9D9 0 %
        
        gray: {
          // Paso 0$ #91969A
        
          // hr #C8C8C8

          light: "#F2F2F2",
          medium: "#E6E6E6", // Disabled Button 
          dark: "#808080",   // Disabled Button text / Some text / Input 
          ...colors.gray,
        },
        
        black: "#000000", // Input Focus
        white: "#FFFFFF",
        
      },
      fontSize: {
        "sm": ["1.2rem", {
          lineHeight: "1.8rem",
        }],
        "base": ["1.6rem", {
          lineHeight: "1.95rem",
        }],
        "lg": ["1.8rem", {
          lineHeight: "2.4rem",
        }],
        "xl": ["2.4rem", {
          lineHeight: "3.2rem",
        }],
        "2xl": ["4rem", {
          lineHeight: "4rem",
        }],
      },
    },
  },
  plugins: [],
}
