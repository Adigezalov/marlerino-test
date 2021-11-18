import React, {useState} from 'react'
import '../styles/TextField.css'
import {useTheme} from '../theme'

const TextField = ({placeholder}) => {
	const theme = useTheme()

	return (
		<input
			type='text'
			className={'text_field'}
			style={{borderColor: theme.palette.white.w100, backgroundColor: theme.palette.white.w400, ...theme.typography.h4}}
			placeholder={placeholder}
		/>
	)
}

export default TextField
