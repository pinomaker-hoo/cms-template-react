// ** Mui Imports
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContentText,
} from '@mui/material'

const BasicModal = ({ state, closeEvent, message, title }) => {
  return (
    <Dialog
      open={state}
      disableEscapeKeyDown
      onClose={(event, reason) => {
        if (reason !== 'backdropClick') {
          closeEvent()
        }
      }}
      fullWidth
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContentText>{message}</DialogContentText>
      <DialogActions>
        <Button onClick={closeEvent}>확인</Button>
      </DialogActions>
    </Dialog>
  )
}

export default BasicModal
