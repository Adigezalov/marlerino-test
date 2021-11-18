import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useTheme} from '../theme'
import appActions from '../redux/actions/app'
import feedAction from '../redux/actions/feed'
import ticketAction from '../redux/actions/ticket'
import chatActions from '../redux/actions/chat'
import Tickets from '../components/ticket/Tickets'
import Feeds from '../components/feed/Feeds'
import Chat from '../components/Chat'

const General = () => {
	const theme = useTheme()
	const dispatch = useDispatch()
	const authorized = useSelector(state => state.app.authorized)
	const connect = useSelector(state => state.app.connect)
	const [visibleChat, setVisibleChat] = useState(false)

	useEffect(() => {
		authorized && dispatch(feedAction.getAll())
		authorized && dispatch(ticketAction.getAll())
		// authorized && dispatch(chatActions.connect())
	}, [authorized])

	const openChat = () => {
		dispatch(appActions.backdrop.on())
		setVisibleChat(true)
	}

	const closeChat = () => {
		dispatch(appActions.backdrop.off())
		setVisibleChat(false)
	}

	return (
		<div style={{display: 'flex', justifyContent: 'space-between', height: '100%', paddingRight: theme.dimensions.ph}}>
			<Tickets openChat={openChat} />
			<Feeds />
			{visibleChat && <Chat closeChat={closeChat} />}
		</div>
	)
}

export default General
