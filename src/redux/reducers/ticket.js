import ticketTypes from '../types/ticket'
import authTypes from '../types/auth'

const initialState = {
	tickets: [],
	archive: [],
}

export const ticketReducer = (state = initialState, action) => {
	switch (action.type) {
		case ticketTypes.GET_ALL:
			return {...state, tickets: action.payload}
		case ticketTypes.GET_ARCHIVE:
			return {...state, archive: action.payload}
		case ticketTypes.SORT_ARCHIVE:
			return {...state, archive: state.archive.sort((a, b) => (a[action.payload] > b[action.payload] ? 1 : -1)).slice()}
		case authTypes.LOGOUT:
			return {...initialState}
		default:
			return state
	}
}
