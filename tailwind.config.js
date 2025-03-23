// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',  // Add other file types as needed
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
