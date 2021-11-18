import React from 'react'
import {useTheme} from '../theme'
import '../styles/Container.css'

const Container = ({children}) => {
	const theme = useTheme()

	const style = {
		paddingTop: theme.dimensions.pv,
		paddingBottom: theme.dimensions.pv,
		backgroundColor: theme.palette.background,
	}

	return (
		<div className={'container'} style={style}>
			{children}
		</div>
	)
}

export default Container
