import React from 'react'
import {useTheme} from '../../theme'
import {CANCELED, DONE, IN_PROGRESS, NEEDS_INFO} from '../../orderSatus'
import '../../styles/Ticket.css'

const LABEL_HEIGHT = 40

const Label = ({statusId, cardHeight}) => {
	const theme = useTheme()

	const color =
		statusId === IN_PROGRESS
			? theme.palette.yellow.w400
			: statusId === NEEDS_INFO
			? theme.palette.blue.w400
			: statusId === DONE
			? theme.palette.green.w400
			: statusId === CANCELED
			? theme.palette.red.w400
			: false

	return (
		<div
			className={'ticket-label'}
			style={{
				top: cardHeight - LABEL_HEIGHT / 2,
				height: LABEL_HEIGHT,
				boxShadow: `0px 0px 24px 4px ${color}`,
				backgroundColor: color,
			}}
		/>
	)
}

export default Label
