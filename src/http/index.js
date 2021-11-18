import axios from 'axios'
import auth from '../config/auth'

const api = axios.create({
	baseURL: `${auth.baseURL}/apiv1`,
})

api.interceptors.request.use(config => {
	config.headers.Authorization = 'bearer ' + localStorage.getItem('accessToken')
	return config
})

export default api
