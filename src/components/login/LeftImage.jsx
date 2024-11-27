import React from 'react'
import { Box } from '@mui/material'

function LeftImage({ imageUrl }) {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%'
      }}
      className='login-left-image'
    >
    </Box>
  )
}

export default LeftImage
