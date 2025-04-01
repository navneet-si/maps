const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

// tailwind.config.js
module.exports = {
  content: ['./index.html', // Add other file types as needed
  './src/**/*.{js,jsx}', './node_modules/flowbite/**/*.js', ".flowbite-react/class-list.json"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'), flowbiteReact],
};