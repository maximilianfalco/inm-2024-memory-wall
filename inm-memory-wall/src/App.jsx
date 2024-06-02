import './App.css'
import { Box } from '@mui/material'

import FractalGradientBg from './components/FractalGradientBg'
import { DvdScreensaver } from 'react-dvd-screensaver'
import MorphingBlob from './components/MorphingBlob'
import FloatingTextContainer from './components/FloatingTextContainer'

function App() {
	return (
		<Box sx={{ display: 'flex' }}>
			<FractalGradientBg/>
			{/* <Box sx={{
        filter: 'url(#goo) blur(20px)',
        width: '100%',
        height: '100%',
      }}>
				<MorphingBlob/>
			</Box> */}
			<FloatingTextContainer/>
		</Box>
	)
}

export default App
