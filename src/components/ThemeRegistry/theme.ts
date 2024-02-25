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
})

export default theme;
