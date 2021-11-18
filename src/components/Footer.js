import React from 'react'
import {useDispatch} from 'react-redux'
import {useTheme} from '../theme'
import authActions from '../redux/actions/auth'
import Button from './Button'
import Text from './Text'
import '../styles/Footer.css'

const Footer = () => {
	const dispatch = useDispatch()
	const theme = useTheme()

	const logout = () => {
		dispatch(authActions.logout())
	}

	return (
		<div style={{paddingBottom: theme.dimensions.ph / 2, flex: 0, marginTop: theme.dimensions.ph / 2}}>
			<Button iconLeft={'exit'} size={'small'} text={'Выход'} secondary onClick={logout} />
			<div style={{paddingLeft: 18, marginTop: theme.dimensions.ph / 2}}>
				<Text variant={'p4'} color={theme.palette.white.w400}>
					Версия 1.0.1
				</Text>
			</div>
		</div>
	)
}

export default Footer
