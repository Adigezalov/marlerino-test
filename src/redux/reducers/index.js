import {combineReducers} from 'redux'
import {appReducer} from './app'
import {userReducer} from './user'
import {feedReducer} from './feed'
import {ticketReducer} from './ticket'
import {chatReducer} from './chat'

export const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer,
	feed: feedReducer,
	ticket: ticketReducer,
	chat: chatReducer,
})
