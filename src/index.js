// ** React Imports
import ReactDOM from 'react-dom/client'

// ** Style Imports
import './style/global.css'
import { ThemeProvider } from '@mui/material'
import theme from 'theme'
import { GlobalStyles } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

// ** Component Imports
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles styles={{ backgroundColor: 'blue' }} />
    <CssBaseline />
    <App />
  </ThemeProvider>,
)
