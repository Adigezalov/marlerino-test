import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Switch, Router, useHistory, Route, useLocation} from 'react-router-dom'
import appActions from '../redux/actions/app'
import General from '../pages/General'
import Archive from '../pages/Archive'
import '../styles/Content.css'

const Content = () => {
	let location = useLocation()
	const history = useHistory()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(appActions.url(location.pathname))
	}, [location, dispatch])

	return (
		<div className={'content'}>
			<Router history={history}>
				<Switch>
					<Route exact path='/'>
						<General />
					</Route>
					<Route exact path='/archive'>
						<Archive />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default Content
