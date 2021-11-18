import appTypes from '../types/app'
import authTypes from '../types/auth'

const initialState = {
	url: null,
	headerHeight: 0,
	backdrop: false,
	loading: false,
	authorized: false,
	connect: false,
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case appTypes.SET_URL:
			return {...state, url: action.payload}
		case appTypes.SET_HEIGHT_HEADER:
			return {...state, headerHeight: action.payload}
		case appTypes.BACKDROP:
			return {...state, backdrop: action.payload}
		case appTypes.LOADING:
			return {...state, loading: action.payload}
		case appTypes.AUTHORIZED:
			return {...state, authorized: action.payload}
		case appTypes.CONNECT:
			return {...state, connect: action.payload}
		case authTypes.LOGOUT:
			return {...state, authorized: false, connect: false}
		default:
			return state
	}
}
