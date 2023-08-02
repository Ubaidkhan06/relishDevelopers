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
          primary: "#a9f9f1",

          secondary: "#c9303f",

          accent: "#ce1417",

          neutral: "#2a2532",

          "base-100": "#fbfdfd",

          info: "#70d8f5",

          success: "#5de59c",

          warning: "#ec8c0e",

          error: "#e75a6f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
