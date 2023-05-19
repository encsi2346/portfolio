module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        secondary: '#3bace2'
      },
      backgroundImage: {
        siteLight: "url('./Assets/about.png')",
        siteDark: "url('./Assets/site-bg.jpg')",
        about: "url('./Assets/undraw_business.svg')",
      },
    },
  },
  plugins: [],
};
