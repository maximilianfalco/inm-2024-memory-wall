import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { DvdScreensaver } from 'react-dvd-screensaver'
import { useState } from 'react';

const FloatingTextComponent = (props) => {
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
          fontSize: '1.5em',
        }}>
          {props.text}
        </Typography>
      </DvdScreensaver>
		</Box>
  )
}

export default FloatingTextComponent