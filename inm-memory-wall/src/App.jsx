import './App.css'
import { Box, ThemeProvider, createTheme, Button, IconButton, Typography } from '@mui/material'

import FractalGradientBg from './components/FractalGradientBg'
import FloatingTextContainer from './components/FloatingTextContainer'
import GitHubIcon from './assets/github-mark-dark.png'

import Higuen from './assets/fonts/Higuen.otf'

const theme =	createTheme({
	typography: {
		fontFamily: 'Higuen'
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@font-face {
					font-family: 'Higuen',
					src: local('Higuen'), url(${Higuen}) format(otf);
				}
			`,
		}
	}
})

const githubLink = 'https://github.com/maximilianfalco/inm-2024-memory-wall'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: 'flex' }}>
				<IconButton
					title='Source Code'
					onClick={() => { window.open(githubLink) }} 
					sx={{ 
						position: 'fixed', 
						zIndex: 9999999999999, 
						bottom: '5px', 
						left: '5px',
						backgroundColor: 'transparent',
						width: 'fit-content',
						opacity: 0.75, 
						'&:hover': {
							backgroundColor: 'transparent',
							opacity: 0.95, 	
						}
					}}
				>
					<img src={GitHubIcon} alt='Source Code' style={{ width: '30px', height: 'auto' }}/>
				</IconButton>
				<FractalGradientBg/>
				<FloatingTextContainer/>
			</Box>
		</ThemeProvider>
	)
}

export default App
