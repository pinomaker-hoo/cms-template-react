// ** Mui Imports
import { TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const DatePicker = ({ value, handleChange, label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        inputFormat="yyyy.MM.dd"
        value={value}
        onChange={(val) => handleChange(val, 'startDate')}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export default DatePicker
