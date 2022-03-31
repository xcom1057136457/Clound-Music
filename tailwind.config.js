module.exports = {
  corePlugins: {
    preflight: false
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    screens: {
      xl: '1200px'
    },
    extend: {
      colors: {
        color1: '#cd7c33',
        color2: '#33D6AB',
        color3: '#E6A2BA',
        color4: '#8c6d99'
      }
    }
  },
  plugins: []
}
