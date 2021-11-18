import React, {useState} from 'react'
import {useTheme} from '../theme'
import * as icons from './icons'
import '../styles/Button.css'

const Button = ({iconLeft, iconRight, text, mb = 0, onClick, active = false, disabled = false, secondary = false}) => {
	const theme = useTheme()
	const [hover, setHover] = useState(false)

	const activeBgc = secondary ? theme.palette.blue.w300 : theme.palette.blue.w400
	const hoverBgc = secondary ? theme.palette.blue.w100 : theme.palette.blue.w300
	const disabledBgc = secondary ? theme.palette.white.w100 : theme.palette.blue.w100

	const activeTc = theme.palette.white.w400
	const hoverTc = secondary ? theme.palette.black.w400 : theme.palette.white.w400
	const disabledTc = theme.palette.black.w400

	const backgroundColor = disabled ? disabledBgc : active ? activeBgc : hover ? hoverBgc : 'transparent'
	const color = disabled ? disabledTc : active ? activeTc : hover ? hoverTc : theme.palette.black.w200

	return (
		<div
			className={'button'}
			style={{marginBottom: mb, backgroundColor, color}}
			onMouseEnter={() => {
				setHover(true)
			}}
			onMouseLeave={() => {
				setHover(false)
			}}
			onClick={onClick}
		>
			<div className={'button-left'}>
				{iconLeft ? (
					<div className={'button-icon-left'}>{icons[`${iconLeft[0].toUpperCase() + iconLeft.slice(1)}`](color)}</div>
				) : null}
				<p style={active ? theme.typography.h5 : theme.typography.p4}>{text}</p>
			</div>
			{iconRight ? (
				<div className={'button-icon-right'}>{icons[`${iconRight[0].toUpperCase() + iconRight.slice(1)}`](color)}</div>
			) : null}
		</div>
	)
}

export default Button
