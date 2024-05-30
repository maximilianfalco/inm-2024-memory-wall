import './App.css'
import { Box } from '@mui/material'

import KUTE from 'kute.js'
import FractalGradientBg from './components/FractalGradientBg'
import MorphingBlob from './components/MorphingBlob'


function App() {
	return (
		<Box sx={{ display: 'flex' }}>
			<p>
				Hello World
				Hello World
				Hello World
				Hello World
			</p>
			<FractalGradientBg/>
			<Box sx={{
        filter: 'url(#goo) blur(20px)',
        width: '100%',
        height: '100%',
      }}>
				<MorphingBlob/>
			</Box>
		</Box>
	)
}

export default App
