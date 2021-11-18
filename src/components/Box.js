import React from 'react'
import {useTheme} from '../theme'
import '../styles/Box.css'

const Box = ({variant, background, shadow, children}) => {
	const theme = useTheme()

	const backgroundColor = background
		? background
		: variant === 'variant1'
		? theme.palette.white.w400
		: theme.palette.white.w300

	const borderRadius = variant === 'variant1' ? 24 : 16

	const boxShadow = shadow
		? '0px 8px 22px -6px rgba(18, 20, 23, 0.12), 0px 14px 64px -4px rgba(18, 20, 23, 0.12)'
		: null

	const padding =
		variant === 'variant1'
			? {paddingTop: 32, paddingRight: 32, paddingLeft: 32}
			: {paddingTop: 24, paddingRight: 24, paddingBottom: 24, paddingLeft: 24}

	const style = {borderRadius, backgroundColor, boxShadow, ...padding}

	return (
		<div className={'box'} style={style}>
			{children}
		</div>
	)
}

export default Box
