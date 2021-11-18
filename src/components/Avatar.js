import React from 'react'
import '../styles/Avatar.css'

const Avatar = ({image}) => {
	return (
		<div className='avatar'>
			<img src={image} alt='avatar' style={{width: '100%'}} />
		</div>
	)
}

export default Avatar
