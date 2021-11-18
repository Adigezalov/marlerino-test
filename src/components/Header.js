import React, {useEffect, useRef} from 'react'
import {useDispatch} from 'react-redux'
import {useTheme} from '../theme'
import appActions from '../redux/actions/app'
import Logotype from './Logotype'
import Greet from './Greet'
import '../styles/Header.css'

const Header = () => {
	const theme = useTheme()
	const dispatch = useDispatch()
	const headerHeightRef = useRef()

	useEffect(() => {
		headerHeightRef.current && dispatch(appActions.headerHeight(headerHeightRef.current.clientHeight))
	}, [headerHeightRef, dispatch])

	return (
		<div className={'header'} ref={headerHeightRef}>
			<div className={'header-container'} style={{paddingRight: theme.dimensions.ph}}>
				<Logotype />
				<Greet />
			</div>
		</div>
	)
}

export default Header
