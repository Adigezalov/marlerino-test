import appActions from './app'
import ticketTypes from '../types/ticket'
import api from '../../http'

const ticketAction = {
	getAll: () => {
		return async dispatch => {
			try {
				dispatch(appActions.loading.on())
				const response = await api.get(`/user/tickets/`)
				dispatch({
					type: ticketTypes.GET_ALL,
					payload: response.data,
				})
				dispatch(appActions.loading.off())
			} catch (error) {
				dispatch(appActions.loading.off())
				console.log({error})
			}
		}
	},

	getArchive: () => {
		return async dispatch => {
			try {
				dispatch(appActions.loading.on())
				const response = await api.get(`/user/tickets/archive`)
				dispatch({
					type: ticketTypes.GET_ARCHIVE,
					payload: response.data,
				})
				dispatch(appActions.loading.off())
			} catch (error) {
				dispatch(appActions.loading.off())
				console.log({error})
			}
		}
	},

	sortArchive: field => {
		return {
			type: ticketTypes.SORT_ARCHIVE,
			payload: field,
		}
	},
}

export default ticketAction
