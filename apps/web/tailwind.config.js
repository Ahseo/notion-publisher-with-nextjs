const importedConfig = require("../../packages/tailwind-config/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...importedConfig,
  content: [
    "./app/**/*.{html,js,ts,jsx,tsx}",
    "../../packages/notion-editor/**/*.{js,ts,jsx,tsx}",
  ],
};
