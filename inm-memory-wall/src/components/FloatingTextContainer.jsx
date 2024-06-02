import React, { useState } from 'react'
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


  return (
    <Box id='text-container' sx={{ width: '100%', height: '100%' }}>
				{/* <FloatingTextComponent text={'Hello'}/>
				<FloatingTextComponent text={'Ini'}/>
				<FloatingTextComponent text={'Sebuah'}/>
				<FloatingTextComponent text={'Uji'}/>
				<FloatingTextComponent text={'Coba'}/>
				<FloatingTextComponent text={'Smoga'}/>
				<FloatingTextComponent text={'Final'}/> */}
        {
          texts.map((text) => (
            <FloatingTextComponent text={text}/>
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