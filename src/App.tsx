import './App.css'
import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import MuiButton from './components/MuiButton'
import MuiTypography from './components/MuiTypography'
import { CssBaseline } from '@mui/material'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#242424',
    },
    text: {
      primary: 'rgba(196, 213, 233, 0.87)',
    },
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline/>
      <MuiButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <MuiTypography />
    </ThemeProvider>
  )
}

export default App
