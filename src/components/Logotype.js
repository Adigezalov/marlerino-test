import React from 'react'
import {useTheme} from '../theme'
import Logo from './icons/Logo'
import Text from './Text'
import '../styles/Logotype.css'

const Logotype = () => {
	const theme = useTheme()

	return (
		<div className={'logotype'} style={{width: theme.dimensions.width_menu}}>
			<Logo />
			<div>
				<div>
					<Text variant={'h2'} color={theme.palette.black.w400}>
						Тестовое
					</Text>
				</div>
				<div>
					<Text variant={'h4'} color={theme.palette.black.w100}>
						задание
					</Text>
				</div>
			</div>
		</div>
	)
}

export default Logotype
