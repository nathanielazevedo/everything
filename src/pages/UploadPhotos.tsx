/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react'
import AWS from 'aws-sdk'
import Gallery from './Gallery'
import { Box, Button } from '@mui/material'

const S3_BUCKET = 's3-photos-upload'
const REGION = 'us-west-1'

AWS.config.update({
  accessKeyId: process.env.AKEY,
  secretAccessKey: process.env.ACCESS,
  signatureVersion: 'v4',
})

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
})

const UploadPhotos = () => {
  const [selectedFile, setSelectedFile] = useState<File>()
  const [images, setImages] = useState<any>()

  useEffect(() => {
    listAlbums()
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target && e?.target?.files) setSelectedFile(e.target.files[0])
  }

  const uploadFile = (file: any) => {
    const params = {
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    }

    myBucket.putObject(params).send((err) => {
      if (err) console.log(err)
    })
  }

  function listAlbums() {
    myBucket.listObjectsV2({ Bucket: S3_BUCKET }, function (err, data) {
      if (err) {
        console.log(err.message)
      } else {
        const imageKeys =
          data.Contents &&
          data?.Contents.map((image) => {
            return image.Key
          })
        imageKeys && setImages(imageKeys)
      }
    })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <Box>
        <input type='file' onChange={(e) => handleFileInput(e)} />
        <Button onClick={() => uploadFile(selectedFile)}>Upload to S3</Button>
      </Box>
      <Gallery images={images} />
    </Box>
  )
}

export default UploadPhotos
