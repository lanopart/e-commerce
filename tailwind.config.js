module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'front-page': "url('https://cdn.create.vista.com/api/media/medium/287444912/stock-photo-few-small-paper-bags-toy?token=')"
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
