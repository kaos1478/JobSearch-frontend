const breakpoints = [
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)'
]

export type ThemeType = typeof theme

const theme = {
  colors: {
    backgroundPrimary: '#FFFDF9',
    backgroundSecondary: '#2c2c2c',
    black: '#222222',
    primary: '#3174ee',
    secondary: '#ff6000',
    textBlack: '#222222',
    textGray: '#333333cc',
    gray: '#ddd',
    lightGray: '#eee',
    white: '#fff'
  },
  fontSizes: {
    large: '1.5rem',
    medium: '1rem',
    small: '.8rem'
  },
  breakpoints
}

export default theme
