import appActions from './app'
import userTypes from '../types/user'
import api from '../../http'

const userAction = {
	get: () => {
		return async dispatch => {
			try {
				dispatch(appActions.loading.on())
				const response = await api.get(`/info/`)
				// console.log(response)
				dispatch({
					type: userTypes.GET,
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

export default userAction
