/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#014E4E",

          secondary: "#265547",

          accent: "#ce1417",

          neutral: "#014E4E",

          "base-100": "#FFFFFF",

          "base-200": "#F2FFFE",

          "base-300": "#D9F4F1",

          info: "#70d8f5",

          success: "#5de59c",

          warning: "#FFDE8A",

          error: "#e75a6f",

          "warning-focus" : "#FFE39B"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
