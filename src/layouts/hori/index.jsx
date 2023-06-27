// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import {
  styled,
  AppBar,
  Toolbar as MuiToolbar,
  Menu,
  MenuItem,
  Grid,
  Avatar,
  Button,
} from '@mui/material'

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  boxShadow: 'none',
}))

const AppBarWrapper = styled(AppBar)({
  Index: (theme) => theme.zIndex.drawer + 1,
  boxShadow: 'none',
})

const Hori = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBarWrapper position="fixed">
      <Toolbar sx={{ backgroundColor: 'white' }}>
        <Grid container spacing={6}>
          <Grid item xs={11} sx={{ mt: 3 }} />
          <Grid item xs={1} sx={{ mt: 3 }}>
            <Button onClick={handleClick}>
              <Avatar src="/image/avatar.png" sx={{ width: 50, height: 50 }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBarWrapper>
  )
}

export default Hori
