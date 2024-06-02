import React from 'react'
import { Box } from '@mui/material'

const FractalGradientBg = () => {
  return (
    <Box id='main-bg' sx={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      overflow: 'hidden',
    }}>
      <svg xmlns="http://www.w3.org/2000/svg">
				<defs>
					<filter id="goo">
						<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
						<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>
      <Box sx={{
        filter: 'url(#goo) blur(40px)',
        width: '100%',
        height: '100%',
      }}>
        <div id='circle0'></div>
        <div id='circle1'></div>
        <div id='circle2'></div>
        <div id='circle3'></div>
        <div id='circle4'></div>
      </Box>
    </Box>
  )
}

export default FractalGradientBg