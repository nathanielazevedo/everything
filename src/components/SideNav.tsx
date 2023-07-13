import * as React from 'react'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import {
  Box,
  Drawer as MuiDrawer,
  List,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const drawerWidth = 150

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerToggle = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignSelf: 'flex-end',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  height: `100%`,
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false)

  const handleDrawer = () => {
    open ? setOpen(false) : setOpen(true)
  }

  const getRoute = (text: string) => {
    switch (text) {
      case 'S3 Photo Upload':
        return '/s3-photo-upload'
      case 'WebSocket':
        return '/websocket'
      case 'Gallery':
        return 'gallery'
      case 'Opportunities':
        return 'opportunities'
      case 'Publications':
        return 'publications'
      case 'Logout':
        return '/login'
      default:
        return '/'
    }
  }

  return (
    <Box sx={{ display: 'flex', zIndex: '0' }}>
      <Drawer
        variant='permanent'
        open={open}
        elevation={1}
        PaperProps={{ sx: { position: 'relative' } }}
      >
        <List>
          {[
            'S3 Photo Upload',
            'WebSocket',
            'Opportunities',
            'Publications',
            'Logout',
          ].map((text) => (
            <Link
              to={getRoute(text)}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <DrawerToggle sx={{ marginBottom: '10px' }}>
          <IconButton onClick={handleDrawer} sx={{ color: 'grey.500' }}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerToggle>
      </Drawer>
    </Box>
  )
}
