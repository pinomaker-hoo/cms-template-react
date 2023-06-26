// ** MUI Imports
import { ListItemText, List, ListItem, ListItemIcon } from '@mui/material'

const SubMenu = ({ listItems }) => {
  return (
    <List>
      {listItems.map((listItem, index) => (
        <ListItem key={index} sx={{ color: 'white', ml: 5 }}>
          <ListItemIcon sx={{ color: 'white' }}>
            {listItem.listIcon}
          </ListItemIcon>
          <ListItemText primary={listItem.listText} sx={{ color: 'white' }} />
        </ListItem>
      ))}
    </List>
  )
}

export default SubMenu
