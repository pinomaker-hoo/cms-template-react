// ** React Imports
import { Fragment, useState } from 'react'

// ** Mui Imports
import {
  Divider,
  List,
  ListItemIcon,
  Drawer,
  styled,
  ListItemText,
  Box,
  Avatar,
  ListItem,
} from '@mui/material'

// ** Component Imports
import navListItem from 'layouts/nav'
import Hori from 'layouts/hori'
import SubMenu from 'layouts/subMenu'
import theme from 'theme'

const DrawerPaper = styled(Drawer)({
  width: 400,
})

const SidebarWrapper = styled('div')(({ theme }) => ({
  width: 400,
  flexShrink: 0,
}))

const VerticalNavigation = () => {
  const [listItems, setListItems] = useState(navListItem)

  const handleSubMenuToggle = (index) => {
    const updatedListItems = [...listItems]
    updatedListItems[index].isSubMenuOpen =
      !updatedListItems[index].isSubMenuOpen
    setListItems(updatedListItems)
  }

  return (
    <SidebarWrapper>
      <Hori />
      <DrawerPaper variant="permanent">
        <Box
          component="div"
          sx={{ width: 250, backgroundColor: '#C63327', height: '100%' }}
        >
          <Avatar
            src="https://i.ibb.co/rx5DFbs/avatar.png"
            alt="Juaneme8"
            sx={{
              margin: '0.5rem auto',
              padding: '1rem',
              width: theme.spacing(13),
              height: theme.spacing(13),
            }}
          />
          <Divider />
          <List>
            {listItems.map((listItem, index) => (
              <Fragment key={index}>
                <ListItem
                  sx={{ color: 'white' }}
                  onClick={() => handleSubMenuToggle(index)}
                >
                  <ListItemIcon sx={{ color: 'white', ml: 3 }}>
                    {listItem.listIcon}
                  </ListItemIcon>
                  <ListItemText
                    primary={listItem.listText}
                    sx={{ color: 'white' }}
                  />
                </ListItem>
                {listItem.isSubMenuOpen && listItem.subMenuItems && (
                  <SubMenu listItems={listItem.subMenuItems} />
                )}
              </Fragment>
            ))}
          </List>
        </Box>
      </DrawerPaper>
    </SidebarWrapper>
  )
}

export default VerticalNavigation
