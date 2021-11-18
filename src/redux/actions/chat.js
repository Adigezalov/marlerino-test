import {Client, Message} from '@stomp/stompjs'
import appActions from './app'
import chatTypes from '../types/chat'

const client = new Client({
	debug: function (str) {
		console.log(str)
	},
	onStompError: frame => {
		console.log('Broker reported error: ' + frame.headers['message'])
		console.log('Additional details: ' + frame.body)
	},
	beforeConnect: () => {
		console.log('STOMP: before connect...')
	},
	onDisconnect: () => {
		console.log('STOMP: disconnect...')
	},
	onWebSocketClose: () => {
		console.log('STOMP: Web Socket Close...')
	},
	onUnhandledMessage: () => {
		console.log('STOMP: unhandled message...')
	},
	onUnhandledFrame: () => {
		console.log('STOMP: unhandled frame...')
	},
	brokerURL: 'ws://140.82.32.146/ws2',
	reconnectDelay: 300,
	heartbeatIncoming: 0,
	heartbeatOutgoing: 0,
	connectionTimeout: 0,
	appendMissingNULLonIncoming: true,
	forceBinaryWSFrames: true,
})

const chatActions = {
	connect: () => {
		return async dispatch => {
			try {
				client.connectHeaders = {
					Authorization: localStorage.getItem('accessToken'),
				}

				client.onConnect = frame => {
					console.log('STOMP: onConnect...')
					client.subscribe('/user/queue/replies', message => {
						console.log(message)
					})
					client.subscribe('/user/queue/history', message => {
						console.log(message)
					})
					dispatch(appActions.connect.on())
				}

				client.activate()
			} catch (error) {
				console.log({error})
			}
		}
	},

	// subscribe: () => {
	// 	return async dispatch => {
	// 		try {
	// 			await client.publish({
	// 				destination: '/app/chat/user/ticket/59',
	// 			})
	//
	// 			console.log(test)
	// 		} catch (error) {
	// 			console.log({error})
	// 		}
	// 	}
	// },

	select: select => {
		return {
			type: chatTypes.SELECT,
			payload: select,
		}
	},
}

export default chatActions
