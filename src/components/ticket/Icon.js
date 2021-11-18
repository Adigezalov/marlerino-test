import React from 'react'
import {useTheme} from '../../theme'
import {CANCELED, DONE, IN_PROGRESS, NEEDS_INFO} from '../../orderSatus'
import * as icons from '../icons'
import '../../styles/Ticket.css'

const Icon = ({statusId, cardHeight}) => {
	const theme = useTheme()

	const icon =
		statusId === IN_PROGRESS
			? {name: 'progress', color: theme.palette.yellow.w400}
			: statusId === NEEDS_INFO
			? {name: 'question', color: theme.palette.blue.w400}
			: statusId === DONE
			? {name: 'done', color: theme.palette.green.w400}
			: statusId === CANCELED
			? {name: 'cross', color: theme.palette.red.w400}
			: {name: null, color: null}

	return icon.name ? (
		<div className={'ticket-icon'} style={{top: cardHeight - theme.dimensions.ph / 2}}>
			{icons[`${icon.name[0].toUpperCase() + icon.name.slice(1)}`](icon.color)}
		</div>
	) : null
}

export default Icon
