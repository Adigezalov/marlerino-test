import chatTypes from '../types/chat'
import authTypes from '../types/auth'

const initialState = {
	select: {},
}

export const chatReducer = (state = initialState, action) => {
	switch (action.type) {
		case chatTypes.SELECT:
			return {...state, select: action.payload}
		case authTypes.LOGOUT:
			return {...initialState}
		default:
			return state
	}
}
