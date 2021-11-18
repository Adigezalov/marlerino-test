import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authActions from './redux/actions/auth'
import Container from './components/Container'
import Header from './components/Header'
import Menu from './components/Menu'
import Content from './components/Content'
import Main from './components/Main'
import Backdrop from './components/Backdrop'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(authActions.login('user2', 321))
	}, [])

	return (
		<>
			<Container>
				<Header />
				<Main>
					<Menu />
					<Content />
				</Main>
			</Container>
			<Backdrop />
		</>
	)
}

export default App
