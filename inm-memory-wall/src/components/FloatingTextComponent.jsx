import React from 'react'
import { Box, Typography } from '@mui/material'
import { DvdScreensaver } from 'react-dvd-screensaver'

const FloatingTextComponent = (props) => {
  return (
    <Box sx={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }}>
			<DvdScreensaver speed={1}>
				<Typography sx={{ 
          width: 'fit-content',
          color: 'white',
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