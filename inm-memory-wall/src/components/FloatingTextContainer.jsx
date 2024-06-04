import React, { useState, useEffect } from 'react'
import { Box, TextField } from '@mui/material'
import FloatingTextComponent from './FloatingTextComponent'

const FloatingTextContainer = () => {
  const [newText, setNewText] = useState('');
  const updateNewText = (newText) => {
    setNewText(newText);
    return;
  }
  const [texts, setTexts] = useState([]);
  const postNewText = () => {
    const floatingTexts = texts;
    floatingTexts.push(newText);
    setNewText('');
    setTexts(floatingTexts);
  }

  const [speed, setSpeed] = useState(0.04);
  useEffect(() => {
    setSpeed(Math.random() * 0.1)
  },[newText])

  return (
    <Box id='text-container' sx={{ width: '100%', height: '100%' }}>
      {
        texts.map((text) => (
          <FloatingTextComponent text={text} speed={speed}/>
        ))
      }
      
      <TextField 
        variant='outlined'
        autoComplete='off' 
        value={newText}
        onChange={event => {
          updateNewText(event.target.value)
        }}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            postNewText();
          } 
        }}
        focused 
        sx={{ position:'relative', zIndex: 2}}>
        Hello
      </TextField>
		</Box>
  )
}

export default FloatingTextContainer