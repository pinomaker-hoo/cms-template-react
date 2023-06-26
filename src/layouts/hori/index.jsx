// ** MUI Imports
import {
  styled,
  AppBar,
  Toolbar as MuiToolbar,
  Typography,
  Breadcrumbs,
  Grid,
  Avatar,
  Link,
} from '@mui/material'

// ** Nav Imports
import navListItem from 'layouts/nav'

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
  return (
    <AppBarWrapper position="fixed">
      <Toolbar sx={{ backgroundColor: 'white' }}>
        <Grid container spacing={6}>
          <Grid item xs={11} sx={{ mt: 3 }} />
          <Grid item xs={1} sx={{ mt: 3 }}>
            <Avatar src="/broken-image.jpg" />
          </Grid>
          <Grid item xs={1.5} />
          <Grid item xs={4}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                MUI
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Core
              </Link>
              <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBarWrapper>
  )
}

export default Hori
