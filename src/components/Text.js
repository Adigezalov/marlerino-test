import React from 'react'
import {useTheme} from '../theme'
import '../styles/Text.css'

const Text = ({variant, color, children}) => {
	const theme = useTheme()
	color = color || theme.palette.black.w400

	return (
		<p className={'text'} style={{...theme.typography[variant], color}}>
			{children}
		</p>
	)
}

export default Text
