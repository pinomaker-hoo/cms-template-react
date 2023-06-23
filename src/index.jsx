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
import UseLayout from 'layouts'

// ** Redux Imports
import { store } from 'store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ backgroundColor: 'blue' }} />
      <CssBaseline />
      <UseLayout children={<App />} />
    </ThemeProvider>
  </Provider>,
)
