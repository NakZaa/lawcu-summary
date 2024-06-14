import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#de5c8e",
          "primary-content": "#ffffff",
          secondary: "#f8e1ea",
          "secondary-content": "#151213",
          accent: "#ed64a6",
          "accent-content": "#ffffff",
          neutral: "#1a202c",
          "neutral-content": "#cccdd1",
          "base-100": "#ffffff",
          "base-200": "#dedede",
          "base-300": "#bebebe",
          "base-content": "#161616",
          info: "#f687b3",
          "info-content": "#ffffff",
          success: "#68d391",
          "success-content": "#ffffff",
          warning: "#ed8936",
          "warning-content": "#ffffff",
          error: "#fc8181",
          "error-content": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
