import React from 'react'
import {useSelector} from 'react-redux'
import '../styles/Backdrop.css'

const Backdrop = () => {
	const backdrop = useSelector(state => state.app.backdrop)

	return backdrop ? <div className={'backdrop'} /> : null
}

export default Backdrop
