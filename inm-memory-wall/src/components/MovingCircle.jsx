import { Box, keyframes } from '@mui/material'
import React from 'react'

const MovingCircle = (props) => {
  // Circle Stats
  let size = '80%'
  if (props.size === 'small') {
    size = '80% / 2';
  } else if (props.size === 'medium') {
    size = '80%'
  } else if (props.size === 'large') {
    size = '80% * 2'
  } else if (props.size === 'xlarge') {
    size = '80% * 4'
  }

  let reverse = '';
  if (props.reverse === 'true') {
    reverse = 'reverse';
  } else {
    reverse = '';
  }

  let animation = 'moveInCircle';
  if (props.animation === 'circle') {
    animation = 'moveInCircle';
  } else if (props.animation === 'horizontal') {
    animation = 'moveHorizontal';
  } else if (props.animation === 'vertical') {
    animation = 'moveVertical';
  }

  let animationDuration = '20';
  if (props.animationDuration) animationDuration = props.animationDuration;

  let opacity = '0.8';
  if (props.opacity) opacity = props.opacity;
  
  let offset = '10'
  if (props.offset) offset = props.offset;

  return (
    <Box sx={{
        position: 'absolute',
        background: `radial-gradient(circle at center, rgba(var(--bright-yellow), ${opacity}) 0, rgba(var(--bright-yellow), 0) 50%) no-repeat`,
        width: `calc(${size})`,
        height: `calc(${size})`,
        animation: `${animation} ${animationDuration}s ${reverse} infinite`,
        transformOrigin: `calc(50% - ${offset}px)`,
        opacity: 1,
        // border: 1,
      }}
    >
      
    </Box>
  )
}

export default MovingCircle