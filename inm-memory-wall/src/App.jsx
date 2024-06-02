import './App.css'
import { Box, Typography } from '@mui/material'

import FractalGradientBg from './components/FractalGradientBg'
import { DvdScreensaver } from 'react-dvd-screensaver'

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

			<Box id='text-container' sx={{ width: '100%', height: '100%' }}>
				
				<Box sx={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }}>
					<DvdScreensaver speed={1}>
						<Typography sx={{ width: 'fit-content', color: 'red' }}>
							Hello World!
						</Typography>
					</DvdScreensaver>
				</Box>
				
				<Box sx={{ width: '100%', height: '100%', position: 'absolute', zIndex: 2 }}>
					<DvdScreensaver speed={1}>
						<Typography sx={{ width: 'fit-content', color: 'red' }}>
							Hello World!
						</Typography>
					</DvdScreensaver>
				</Box>

			</Box>
		</Box>
	)
}

export default App
