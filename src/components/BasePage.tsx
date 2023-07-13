import TopNav from './TopNav'
import SideNav from './SideNav'
import Content from './Content'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const BasePage = () => {
  return (
    <>
      <TopNav />
      <Box display='flex' flexDirection='row' sx={{ height: '100%' }}>
        <SideNav />
        <Content>
          <Outlet />
        </Content>
      </Box>
    </>
  )
}

export default BasePage
