import DatePicker from 'components/date-picker'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import dayjs from 'dayjs'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<DatePicker value={dayjs()} handleChange={() => null} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
