import axios from 'axios'
import auth from '../../config/auth'
import authTypes from '../types/auth'
import appActions from './app'
import userAction from './user'

const authActions = {
	login: (username, password) => {
		return async dispatch => {
			try {
				dispatch(appActions.loading.on())
				const baseAuth = btoa(`${auth.clientId}:${auth.secretId}`)
				const response = await axios({
					method: 'POST',
					baseURL: auth.baseURL,
					url: '/oauth/token',
					headers: {
						Authorization: `Basic ${baseAuth}`,
					},
					params: {
						grant_type: 'password',
						username,
						password,
						scope: 'read',
					},
				})

				if (response.status === 200) {
					localStorage.setItem('accessToken', response.data.access_token)
					localStorage.setItem('refreshToken', response.data.refresh_token)
					dispatch(appActions.authorized.on())
					dispatch(userAction.get())
				}
				dispatch(appActions.loading.off())
			} catch (error) {
				dispatch(appActions.loading.off())
				console.log({error})
			}
		}
	},

	logout: () => {
		return async dispatch => {
			try {
				localStorage.removeItem('accessToken')
				localStorage.removeItem('refreshToken')
				dispatch({
					type: authTypes.LOGOUT,
				})
			} catch (error) {
				console.log({error})
			}
		}
	},
}

export default authActions
