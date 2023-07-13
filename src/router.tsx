import BasePage from './components/BasePage'
import { Routes, Route } from 'react-router-dom'
import Info from './components/Info'
import WebSocket from './pages/WebSocket'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<BasePage />}>
        <Route path='s3-photo-upload' element={<Info />} />
        <Route path='websocket' element={<WebSocket />} />
      </Route>
    </Routes>
  )
}

export default Router
