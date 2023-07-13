import { Box, Typography } from '@mui/material'

type PageHeaderProps = {
  title: string
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      width='100%'
      justifyContent='space-between'
      padding={'20px 25px 0 20px'}
      alignItems='flex-end'
    >
      <Typography variant='h6' fontWeight='bold' alignSelf='flex-end'>
        {title}
      </Typography>
    </Box>
  )
}

export default PageHeader
