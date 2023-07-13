import AppBar from '@mui/material/AppBar'
import { DarkMode, LightMode } from '@mui/icons-material'
import { Box, IconButton, Typography, useTheme } from '@mui/material'

function TopNav() {
  const theme = useTheme()

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        height: '50px',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '0 25px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        position: 'relative',
      }}
    >
      <Typography
        variant='subtitle1'
        sx={{
          minWidth: 'fit-content',
        }}
      >
        Nate Azevedo
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <IconButton
          sx={{
            justifySelf: 'flex-end',
          }}
        >
          {theme.palette.mode === 'dark' ? (
            <DarkMode sx={{ fontSize: '25px' }} />
          ) : (
            <LightMode sx={{ color: 'black', fontSize: '25px' }} />
          )}
        </IconButton>
      </Box>
    </AppBar>
  )
}

export default TopNav
