import React from 'react'
import { Box, Typography } from '@mui/material'
import { DvdScreensaver } from 'react-dvd-screensaver'

const FloatingTextComponent = (props) => {
  /**
   * Need to make randomiser for speed of text, maybe from 0 - 0.5 sounds goods
   * Implement latest by today (6/4/2024)
   */

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }}>
      <DvdScreensaver freezeOnHover='true' speed={props.speed}>
        <Typography sx={{ 
          width: 'fit-content',
          color: 'black',
          fontSize: '20px',
          fontFamily: 'FloatingText'
        }}>
          {props.text}
        </Typography>
      </DvdScreensaver>
		</Box>
  )
}

export default FloatingTextComponent