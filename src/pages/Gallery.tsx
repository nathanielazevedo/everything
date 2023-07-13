import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
const url = 'https://s3-photos-upload.s3.us-west-1.amazonaws.com/'

export default function StandardImageList({ images }: { images: string[] }) {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {images &&
        images.map((image) => (
          <ImageListItem key={image}>
            <img src={url + image} loading='lazy' />
          </ImageListItem>
        ))}
    </ImageList>
  )
}
