import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { DvdScreensaver } from 'react-dvd-screensaver'
import { useState } from 'react';

const FloatingTextComponent = (props) => {
  /**
   * Need to make randomiser for speed of text, maybe from 0 - 0.5 sounds goods
   * Implement latest by today (6/4/2024)
   */

  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const opacity = Math.random();
    if (opacity < 0.4) {
      setOpacity(0.4);
    } else {
      setOpacity(opacity);
    }
  }, [])

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1, opacity: `${opacity}` }}>
      <DvdScreensaver freezeOnHover='true' speed={props.speed}>
        <Typography sx={{ 
          width: 'fit-content',
          color: 'black',
          fontSize: '24px',
          fontFamily: 'FloatingText'
        }}>
          {props.text}
        </Typography>
      </DvdScreensaver>
		</Box>
  )
}

export default FloatingTextComponent