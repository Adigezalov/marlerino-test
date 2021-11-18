import userTypes from '../types/user'
import authTypes from '../types/auth'

const initialState = {
	user: {},
}

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case userTypes.GET:
			return {...state, user: action.payload}
		case authTypes.LOGOUT:
			return {...initialState}
		default:
			return state
	}
}
