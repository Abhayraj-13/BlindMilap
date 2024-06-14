// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a2e',
        'dark-card': '#16213e',
        'neon-blue': '#0f0f3a',
        'neon-pink': '#ff0a54',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
