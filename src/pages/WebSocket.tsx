import { io } from 'socket.io-client'
import { useEffect, useState } from 'react'
import { Box, Button, Card, TextField, Typography } from '@mui/material'
import PageHeader from '../components/PageHeader'

const socket = io('http://localhost:5001')

function App() {
  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState<string[]>([])

  const sendMessage = () => {
    setMessage('')
    socket.emit('send_message', { message })
  }

  useEffect(() => {
    socket.on('receive_message', (data: { message: string }) => {
      setMessageReceived((previous) => {
        previous.push(data?.message)
        return [...previous]
      })
    })
  }, [])

  return (
    <Box>
      <PageHeader title={'WebSocket Chat'} />
      <Box
        mx='20px'
        mt='10px'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Card
          style={{
            padding: '20px 50px',
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            justifySelf: 'flex-end',
            marginBottom: '20px',
          }}
        >
          <Box>
            <Typography>
              This is an example of uploading a websocket chat using socket.io.
              The backend is a python flask server.
            </Typography>
          </Box>
        </Card>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '50%',
          }}
        >
          <Box
            sx={{
              height: '500px',
              border: 'solid rgba(255, 255, 255, 0.12) 1px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {messageReceived.map((m, i) => (
              <Box
                key={i}
                sx={{
                  border: `solid ${i % 2 ? 'blue' : 'green'} 1px`,
                  alignSelf: i % 2 ? 'flex-start' : 'flex-end',
                  width: 'fit-content',
                  padding: '10px',
                  height: '40px',
                  backgroundColor: i % 2 ? 'blue' : 'green',
                  margin: '5px',
                  borderRadius: '10px',
                }}
              >
                {m}
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TextField
              variant='outlined'
              placeholder='Message...'
              value={message}
              sx={{
                width: '90%',
              }}
              onChange={(event) => {
                setMessage(event.target.value)
              }}
            />
            <Button
              sx={{
                width: '100px',
                height: '50px',
              }}
              variant='contained'
              onClick={sendMessage}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App
