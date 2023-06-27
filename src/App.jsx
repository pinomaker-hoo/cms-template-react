import DatePicker from 'components/date-picker'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import dayjs from 'dayjs'
import FileUploaderSingle from 'components/uploader/fileUploader'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FileUploaderSingle setData={() => null} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
