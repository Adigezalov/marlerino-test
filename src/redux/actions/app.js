import appTypes from '../types/app'

const appActions = {
	url: url => {
		return {
			type: appTypes.SET_URL,
			payload: url,
		}
	},

	headerHeight: height => {
		return {
			type: appTypes.SET_HEIGHT_HEADER,
			payload: height,
		}
	},

	backdrop: {
		on: () => {
			return {
				type: appTypes.BACKDROP,
				payload: true,
			}
		},
		off: () => {
			return {
				type: appTypes.BACKDROP,
				payload: false,
			}
		},
	},

	loading: {
		on: () => {
			return {
				type: appTypes.LOADING,
				payload: true,
			}
		},
		off: () => {
			return {
				type: appTypes.LOADING,
				payload: false,
			}
		},
	},

	authorized: {
		on: () => {
			return {
				type: appTypes.AUTHORIZED,
				payload: true,
			}
		},
		off: () => {
			return {
				type: appTypes.AUTHORIZED,
				payload: false,
			}
		},
	},

	connect: {
		on: () => {
			return {
				type: appTypes.CONNECT,
				payload: true,
			}
		},
		off: () => {
			return {
				type: appTypes.CONNECT,
				payload: false,
			}
		},
	},
}

export default appActions
