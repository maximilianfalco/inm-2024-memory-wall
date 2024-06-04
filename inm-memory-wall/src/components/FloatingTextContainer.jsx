import React, { useState, useEffect, useRef } from 'react'
import { Box, TextField } from '@mui/material'
import FloatingTextComponent from './FloatingTextComponent'
import useStateRef from 'react-usestateref'

const FloatingTextContainer = () => {
  const allowedText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_+=\\|{}[],.<>/?;:\'\"1234567890'
  const [newText, setNewText] = useState('');
  const [display, setDisplay, displayRef] = useStateRef('none');
  const updateNewText = (newText) => {
    setNewText(newText);
    setDisplay('shown');
    if (newText === '') setDisplay('none');
    return;
  }
  
  const [texts, setTexts] = useState([]);
  const postNewText = () => {
    const floatingTexts = texts;
    floatingTexts.push(newText);
    setNewText('');
    setDisplay('none');
    setTexts(floatingTexts);
  }

  const inputRef = useRef(null);
  const handleKeyDown = (e) => {
    if (displayRef.current === 'none' && allowedText.includes(e.key)) {
      setDisplay('shown')
      updateNewText(e.key)
      inputRef.current.focus();
    }
    inputRef.current.focus();
  }

  const [speed, setSpeed] = useState(0.04);
  useEffect(() => {
    setSpeed(Math.random() * 0.1)
  },[newText])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return (
    <Box id='text-container' sx={{ width: '100%', height: '100%' }}>
      {
        texts.map((text) => (
          <FloatingTextComponent text={text} speed={speed}/>
        ))
      }
      
      <Box sx={{ 
        backgroundColor: '#69854c',
        // p: 1,
        position: 'fixed',
        borderRadius: '1rem',
        width: 'fit-content',
        maxWidth: '300px',
        zIndex: 90,
        display: `${display}`,
      }}>
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
          inputRef={inputRef}
          autoFocus
          fullWidth
          sx={{
            position:'relative',
            zIndex: 2,
            "& fieldset": { border: 'none' },
          }}
          inputProps={{
            style: {fontFamily: 'FloatingText', fontSize: '30px'}
          }}
          >
        </TextField>
      </Box>
		</Box>
  )
}

export default FloatingTextContainer