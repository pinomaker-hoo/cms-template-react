// ** Router Imports
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// ** Component Imports
import LoginPage from 'pages/login-page'

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
