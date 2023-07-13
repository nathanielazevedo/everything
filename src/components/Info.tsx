import UploadPhotos from '../pages/UploadPhotos'
import PageHeader from './PageHeader'
import { Card, Typography, Box } from '@mui/material'

function Main() {
  return (
    <>
      <PageHeader title={'S3 Photo Upload'} />
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
              This is an example of uploading a photo to an S3 bucket and
              fetching all photos from the bucket.
            </Typography>
          </Box>
        </Card>
      </Box>
      <UploadPhotos />
    </>
  )
}

export default Main
