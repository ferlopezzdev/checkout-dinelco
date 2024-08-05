import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '940px',
      },
      fontFamily: {
        primary: ["Poppins", 'sans-serif'],
        secondary: ["Kanit", 'sans-serif']
      },
      colors: {
        'primary': '#8754B6',
        'secondary': '#EE3754',
        'secondaryOpaque': '#DC4858',
        'light': '#E3C6D8',
        'error': '#FF0000'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      grow: {
        "0%": {
          transform: 'scale(0)',
          opacity: '1',
        },
        '100%': {
          transform: 'scale(1)',
          opacity: '0',
        },
      },
    },
    animation: {
      grow: 'grow 0.5s ease-out',
    }
  },
  plugins: [],
};
export default config;
