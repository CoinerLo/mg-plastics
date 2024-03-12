import { createTheme } from '@mui/material/styles'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#252525'
    },
    text: {
      primary: 'rgba(255, 255, 255, .8)',
    },
  },
  typography: {
    fontFamily: outfit.style.fontFamily,
    h1: {
      textAlign: 'center'
    },
    h3: {
      textAlign: 'center'
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      // tablet: 640,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
})

theme.typography.h1 = {
  textAlign: 'center',
  fontSize: '6rem',
  [theme.breakpoints.down('tablet')]: {
    fontSize: '3rem',
  },
};

theme.typography.h3 = {
  textAlign: 'center',
  fontSize: '3rem',
  [theme.breakpoints.down('tablet')]: {
    fontSize: '2rem',
  },
};

theme.typography.h5 = {
  textAlign: 'center',
  fontSize: '1.5rem',
  [theme.breakpoints.down('tablet')]: {
    fontSize: '1rem',
  },
};

export default theme;
