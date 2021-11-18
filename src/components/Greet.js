import React from 'react'
import {useSelector} from 'react-redux'
import {useTheme} from '../theme'
import auth from '../config/auth'
import Avatar from './Avatar'
import Text from './Text'
import Box from './Box'
import '../styles/Greet.css'

const AVATAR = 'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg'

const Greet = () => {
	const theme = useTheme()
	const user = useSelector(state => state.user.user)

	return (
		<Box variant={'variant2'} background={theme.palette.white.w400}>
			<div className={'greet'}>
				<Avatar image={user?.userImage ? `${auth.baseURL}/${user.userImage}` : AVATAR} />
				<div style={{marginLeft: 16}}>
					<div>
						<Text variant={'p4'} color={theme.palette.black.w100}>
							Здравствуйте,
						</Text>
					</div>
					<div>
						<Text variant={'h3'} color={theme.palette.black.w400}>
							{user?.firstName ? user.firstName : 'Пользователь'}
						</Text>
					</div>
				</div>
			</div>
		</Box>
	)
}

export default Greet
