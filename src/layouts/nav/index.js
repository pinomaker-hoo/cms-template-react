// ** Icon Imports
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import AdbIcon from '@mui/icons-material/Adb'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import ApprovalIcon from '@mui/icons-material/Approval'

const navListItem = [
  {
    listIcon: <AccessibilityNewIcon />,
    listText: '홈',
    href: '/',
    isSubMenuOpen: false,
  },
  {
    listIcon: <AdbIcon />,
    listText: '이력서',
    subMenuItems: [
      {
        listIcon: <AdbIcon />,
        listText: '하위 메뉴 1',
        href: '/',
      },
      {
        listIcon: <AdbIcon />,
        listText: '하위 메뉴 2',
        href: '/',
      },
    ],
    isSubMenuOpen: false,
  },
  {
    listIcon: <AirportShuttleIcon />,
    listText: '포트폴리오',
    subMenuItems: [
      {
        listIcon: <AirportShuttleIcon />,
        listText: '하위 메뉴 1',
        href: '/',
      },
      {
        listIcon: <AirportShuttleIcon />,
        listText: '하위 메뉴 2',
        href: '/',
      },
    ],
    isSubMenuOpen: false,
  },
  {
    listIcon: <ApprovalIcon />,
    listText: '연락처',
    isSubMenuOpen: false,
    href: '/',
  },
]

export default navListItem
