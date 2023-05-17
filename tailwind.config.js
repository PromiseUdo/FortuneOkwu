module.exports = {
  content: ['./*.{html, ejs, js}', './views/*.ejs'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkBlue: 'rgb(10, 25, 47)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
        primary: 'rgb(100, 255, 218)',
        grayTextColor: 'rgb(136, 146, 176)',
        grayHeadingColor: 'rgb(204, 214, 246)',
        projectDescBgColor: 'rgb(17, 34, 64)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        opensans: ['Source Code Pro', 'monospace'],
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('../images/logo.png')",
        'logo-light-mode': "url('../images/logo-light-mode.svg')",
        'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}
