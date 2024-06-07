import './App.css'
import { Box, ThemeProvider, createTheme } from '@mui/material'

import FractalGradientBg from './components/FractalGradientBg'
import FloatingTextContainer from './components/FloatingTextContainer'

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

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: 'flex' }}>
				<FractalGradientBg/>
				<FloatingTextContainer/>
			</Box>
		</ThemeProvider>
	)
}

export default App
