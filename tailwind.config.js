module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'vue-primary': '#3fb27f',
        'vue-secondary': '#32475b',
        'vue-accent': '#42b983',
        tailwind: '#0eadee',
        pinia: '#ffd859'
      },
      transitionDuration: {
        0: '0ms',
        2000: '2s',
        3000: '3s',
        5000: '5s',
        10000: '10s'
      },
      animation: {
        'pulse-3s': 'pulse 3s infinite'
      }
    }
  },
  plugins: []
}
