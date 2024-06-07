import React from 'react'
import { Box } from '@mui/material';

import KUTE from 'kute.js'

const MorphingBlob = () => {
  const svgPaths = [
		'M120.6 -125.6C146.9 -94.3 152.5 -47.1 149.1 -3.4C145.6 40.3 133.3 80.6 106.9 122.1C80.6 163.6 40.3 206.3 0.9 205.4C-38.4 204.4 -76.8 159.8 -101.8 118.3C-126.8 76.8 -138.4 38.4 -154.6 -16.1C-170.7 -70.7 -191.4 -141.4 -166.4 -172.8C-141.4 -204.1 -70.7 -196 -11.8 -184.3C47.1 -172.5 94.3 -156.9 120.6 -125.6',
		'M175.5 -175.7C225.2 -125.9 261.6 -62.9 265.5 3.9C269.4 70.7 240.8 141.4 191.1 166.4C141.4 191.4 70.7 170.7 16.6 154.1C-37.5 137.5 -75 125 -122.6 100C-170.3 75 -228.1 37.5 -241 -12.8C-253.8 -63.2 -221.7 -126.3 -174 -176.2C-126.3 -226 -63.2 -262.5 -0.1 -262.4C62.9 -262.3 125.9 -225.5 175.5 -175.7',
		'M141 -151.8C166 -116 158 -58 157.2 -0.8C156.3 56.3 162.7 112.7 137.7 148C112.7 183.3 56.3 197.7 9.5 188.1C-37.2 178.6 -74.5 145.1 -124.5 109.8C-174.5 74.5 -237.2 37.2 -239.7 -2.5C-242.2 -42.2 -184.4 -84.4 -134.4 -120.2C-84.4 -156 -42.2 -185.5 7.9 -193.4C58 -201.3 116 -187.6 141 -151.8',
		'M148.7 -133.8C195.5 -101.8 238.2 -50.9 244.3 6C250.3 62.9 219.5 125.9 172.7 169.2C125.9 212.5 62.9 236.3 4 232.3C-54.9 228.3 -109.8 196.5 -134.8 153.2C-159.8 109.8 -154.9 54.9 -162.8 -7.9C-170.7 -70.7 -191.4 -141.4 -166.4 -173.4C-141.4 -205.4 -70.7 -198.7 -9.9 -188.8C50.9 -178.9 101.8 -165.8 148.7 -133.8',
		'M131.9 -154.4C158.3 -105.6 158.1 -52.8 155.4 -2.7C152.7 47.4 147.4 94.8 121.1 125.4C94.8 156.1 47.4 170 6 164C-35.4 158 -70.7 132 -120.7 101.4C-170.7 70.7 -235.4 35.4 -251.7 -16.4C-268.1 -68.1 -236.2 -136.2 -186.2 -185.1C-136.2 -233.9 -68.1 -263.5 -7.7 -255.8C52.8 -248.1 105.6 -203.3 131.9 -154.4',
		'M159.6 -149.9C194.3 -124.9 201.1 -62.5 191.2 -9.9C181.3 42.7 154.7 85.3 120 119.5C85.3 153.7 42.7 179.3 -13.9 193.2C-70.5 207.1 -140.9 209.3 -190.9 175.1C-240.9 140.9 -270.5 70.5 -270.2 0.2C-270 -70 -240 -140 -190 -165C-140 -190 -70 -170 -3.8 -166.2C62.5 -162.5 124.9 -174.9 159.6 -149.9',
		'M139.9 -140.7C182.2 -97.6 218.1 -48.8 226.6 8.5C235.1 65.8 216.2 131.5 173.9 156.5C131.5 181.5 65.8 165.8 4.5 161.3C-56.8 156.8 -113.6 163.6 -163.6 138.6C-213.6 113.6 -256.8 56.8 -262.2 -5.4C-267.6 -67.6 -235.3 -135.3 -185.3 -178.5C-135.3 -221.6 -67.6 -240.3 -9.4 -230.9C48.8 -221.5 97.6 -183.9 139.9 -140.7',
	]

	const largeBlobPath0 = 'M156.9 -299.1C191.9 -251.6 200.7 -186.3 230.4 -133.5C260.1 -80.7 310.5 -40.3 343.8 19.2C377.1 78.7 393.1 157.5 363.6 210.6C334.1 263.7 259.1 291.2 190.9 291.2C122.7 291.2 61.3 263.7 -3.5 269.8C-68.3 275.9 -136.7 315.5 -192.5 308.3C-248.4 301.2 -291.8 247.4 -311.1 188.2C-330.4 129 -325.7 64.5 -317.9 4.5C-310.1 -55.5 -299.3 -111 -271.3 -155.3C-243.4 -199.6 -198.5 -232.7 -150.4 -272.7C-102.3 -312.6 -51.2 -359.3 4.9 -367.8C61 -376.3 122 -346.6 156.9 -299.1';
	const largeBlobPath1 = 'M228 -472.9C243.4 -344.9 167.7 -193.5 246.9 -91.7C326 10 559.9 62.1 584.6 103.8C609.3 145.5 424.8 176.9 304.5 198.8C184.3 220.7 128.2 233.2 50.8 325.6C-26.6 418 -125.3 590.4 -162 570.9C-198.7 551.3 -173.4 339.8 -219.1 224.6C-264.7 109.4 -381.3 90.5 -420.4 40C-459.6 -10.6 -421.3 -92.7 -399.6 -200C-377.8 -307.3 -372.7 -439.7 -308.9 -545.5C-245.1 -651.4 -122.5 -730.7 -8.1 -718.1C106.3 -705.4 212.7 -600.9 228 -472.9';

	const tween = KUTE.fromTo(
		'#blob0', 
		{ path: svgPaths[5]},
		{ path: largeBlobPath1},
		{ repeat: 90, duration: 7500, yoyo: true}
	).start();

  return (
    <Box sx={{ position: 'fixed'	}}>
			<svg id="visual" viewBox="0 0 1200 600" width="100%" height="700" version="1.1">
				<g transform="translate(464.0168995955081 294.64325196780436)">
					<path id='blob0' 
						d="M120.6 -125.6C146.9 -94.3 152.5 -47.1 149.1 -3.4C145.6 40.3 133.3 80.6 106.9 122.1C80.6 163.6 40.3 206.3 0.9 205.4C-38.4 204.4 -76.8 159.8 -101.8 118.3C-126.8 76.8 -138.4 38.4 -154.6 -16.1C-170.7 -70.7 -191.4 -141.4 -166.4 -172.8C-141.4 -204.1 -70.7 -196 -11.8 -184.3C47.1 -172.5 94.3 -156.9 120.6 -125.6" 
						fill="none" 
						stroke="#BBBBBB" 
						strokeWidth="35"
					></path>
				</g>
			</svg>
		</Box>
  )
}

export default MorphingBlob