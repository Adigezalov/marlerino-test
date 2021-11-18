import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useTheme} from '../theme'
import '../styles/Main.css'

const Main = ({children}) => {
	const theme = useTheme()
	const headerHeight = useSelector(state => state.app.headerHeight)
	const [windowHeight, setWindowHeight] = useState(window.innerHeight)

	useEffect(() => {
		onResizeWindow()
	}, [])

	const onResizeWindow = () => {
		window.onresize = () => {
			setWindowHeight(window.innerHeight)
		}
	}

	const style = {
		minHeight: windowHeight - headerHeight - theme.dimensions.pv * 2,
		maxHeight: windowHeight - headerHeight - theme.dimensions.pv * 2,
		paddingTop: theme.dimensions.pv,
	}

	return (
		<div className={'main'} style={style}>
			{children}
		</div>
	)
}

export default Main
