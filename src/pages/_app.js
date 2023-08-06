import { CssBaseline, ThemeProvider } from '@mui/material';
// Themes
import { lightTheme } from '@/themes';
// Styles
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ lightTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
