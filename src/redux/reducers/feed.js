import feedTypes from '../types/feed'
import authTypes from '../types/auth'

const initialState = {
	feeds: [],
}

export const feedReducer = (state = initialState, action) => {
	switch (action.type) {
		case feedTypes.GET_ALL:
			return {...state, feeds: action.payload}
		case authTypes.LOGOUT:
			return {...initialState}
		default:
			return state
	}
}
