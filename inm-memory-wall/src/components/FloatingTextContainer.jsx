import React, { useState, useEffect, useRef } from 'react'
import { Box, IconButton, TextField } from '@mui/material'
import FloatingTextComponent from './FloatingTextComponent'
import useStateRef from 'react-usestateref'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';

const FloatingTextContainer = () => {
  const allowedText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_+=\\|{}[],.<>/?;:\'\"1234567890'
  const [newText, setNewText, newTextRef] = useStateRef('');
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
    floatingTexts.push(newTextRef.current);
    setNewText('');
    setDisplay('none');
    setTexts(floatingTexts);
  }

  const inputRefTextInput = useRef(null);
  const handleKeyDown = (e) => {
    if (displayRef.current === 'none' && allowedText.includes(e.key)) {
      setDisplay('shown')
      updateNewText(e.key)
    }
    if (newTextRef.current !== '' && e.key === 'Enter') {
      postNewText();
    }
    inputRefTextInput.current.focus();
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

  /**
   * Style Constants
   */
  const inputStyles = {
    style: {fontFamily: 'FloatingText', fontSize: '30px', color: '#FFFFE4'}
  }

  return (
    <Box id='text-container' sx={{ width: '100%', height: '100%' }}>
      {
        texts.map((text) => (
          <FloatingTextComponent text={text} speed={speed}/>
        ))
      }
      
      <Box sx={{ 
        backgroundColor: '#725588',
        bottom: '8px',
        left: 'calc(50% - 150px)',
        position: 'fixed',
        borderRadius: '1rem',
        width: '300px',
        zIndex: 90,
        display: `${display}`,
      }}>
        <TextField 
          variant='outlined'
          autoComplete='off' 
          value={newText}
          onChange={event => { updateNewText(event.target.value) }}
          fullWidth
          inputRef={inputRefTextInput}
          inputProps={inputStyles}
          sx={{
            position:'relative',
            zIndex: 2,
            "& fieldset": { border: 'none' },
          }}
          autoFocus={true}
          focused
          >
        </TextField>
      </Box>
      <Box sx={{
        position: 'fixed',
        zIndex: 9000000
      }}>
        <IconButton>
          <ReplayRoundedIcon/>
        </IconButton>
      </Box>
		</Box>
  )
}

export default FloatingTextContainer