const importedConfig = require("../../packages/tailwind-config/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...importedConfig,
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
};
