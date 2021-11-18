import React from 'react'
import {useSelector} from 'react-redux'
import {useTheme} from '../theme'
import {Close} from './icons'
import Box from './Box'
import Text from './Text'
import TextField from './TextField'
import Button from './Button'
import '../styles/Chat.css'

const CHAT_WIDTH = 480
const CHAT_HEIGHT = 640

const Chat = ({closeChat}) => {
	const theme = useTheme()
	const select = useSelector(state => state.chat.select)

	return (
		<div
			className={'chat'}
			style={{
				top: window.innerHeight / 2 - CHAT_HEIGHT / 2,
				left: window.innerWidth / 2 - CHAT_WIDTH / 2,
				width: CHAT_WIDTH,
				height: CHAT_HEIGHT,
			}}
		>
			<Box variant={'variant1'} shadow>
				<div className={'chat-wrapper'}>
					<div className={'chat-content'}>
						<div className={'chat-top'}>
							<Text variant={'h3'}>{select.title}</Text>
							<div className={'chat-close'} onClick={() => closeChat()}>
								<Close color={theme.palette.black.w400} />
							</div>
						</div>
						<div className={'chat-container'}>Тут что-то будет, как только получу данные с сервера</div>
					</div>
					<div className={'chat-footer'}>
						<div className={'chat-text'}>
							<TextField placeholder={'Сообщение'} />
						</div>
						<Button iconRight={'up'} active />
					</div>
				</div>
			</Box>
		</div>
	)
}

export default Chat
