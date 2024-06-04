import React from 'react'
import { Box } from '@mui/material'
import MovingCircle from './MovingCircle'

const FractalGradientBg = () => {
  /**
   * The main idea and codebase is heavily inspired by WeCoded via YouTube
   * Link: https://www.youtube.com/watch?v=Ml-B-W91gtw&t=486s&ab_channel=WeCoded
   */
  return (
    <Box id='main-bg' sx={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      overflow: 'hidden',
    }}>
      <svg>
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
        width: '100vw',
        height: '100vh',
      }}>
        <MovingCircle id='circle0' size='medium' animation='vertical' opacity='1' offset='30'/>
        <MovingCircle id='circle1' size='large' animation='circle' reverse='true' animationDuration='40' opacity='0.8' offset='400'/>
        <MovingCircle id='circle3' size='small' animation='horizontal'/>
        <MovingCircle id='circle4' size='medium' animation='horizontal' opacity='0.3' animationDuration='50'/>
        <MovingCircle id='circle5' size='medium' animation='horizontal' opacity='0.6'/>
      </Box>
    </Box>
  )
}

export default FractalGradientBg