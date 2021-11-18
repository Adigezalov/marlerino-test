import appActions from './app'
import feedTypes from '../types/feed'
import api from '../../http'

const feedAction = {
	getAll: () => {
		return async dispatch => {
			try {
				dispatch(appActions.loading.on())
				const response = await api.get(`/feed/`)
				dispatch({
					type: feedTypes.GET_ALL,
					payload: response.data,
				})
				dispatch(appActions.loading.off())
			} catch (error) {
				dispatch(appActions.loading.off())
				console.log({error})
			}
		}
	},
}

export default feedAction
