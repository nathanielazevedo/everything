import './App.css'
import Router from './router'
import { theme } from './theme'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import { Box, CssBaseline, createTheme } from '@mui/material'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={createTheme(theme)}>
        <Box
          display='flex'
          flexDirection='column'
          sx={{ height: '100vh', width: '100vw' }}
        >
          <CssBaseline />
          <Router />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
