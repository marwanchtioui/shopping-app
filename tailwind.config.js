/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    container: {
      center: true,
      padding: "15px",
    },
    colors: {
      accent: "#FF8F9C",
      blackish: "#1b1b1b",
    }
  },
};
export const plugins = [];
