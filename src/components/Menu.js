import React from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useTheme} from '../theme'
import Button from './Button'
import Footer from './Footer'
import '../styles/Menu.css'

const Menu = () => {
	const theme = useTheme()
	const history = useHistory()
	const url = useSelector(state => state.app.url)

	const style = {
		width: theme.dimensions.width_menu,
		paddingLeft: theme.dimensions.ph,
		paddingRight: theme.dimensions.ph * 0.7,
	}

	const onClickItem = path => {
		history.push(path)
	}

	return (
		<div className={'menu'} style={style}>
			<div className={'menu-container'}>
				<Button
					iconLeft={'home'}
					size={'small'}
					text={'Главная'}
					secondary
					onClick={() => onClickItem('/')}
					mb={10}
					active={url === '/'}
				/>
				<Button
					iconLeft={'archive'}
					size={'small'}
					text={'Архив заявок'}
					secondary
					onClick={() => onClickItem('/archive')}
					mb={10}
					active={url === '/archive'}
				/>
			</div>
			<Footer />
		</div>
	)
}

export default Menu
