import React, {useEffect, useRef, useState} from 'react'
import moment from 'moment'
import {useTheme} from '../../theme'
import hexToRgbA from '../../helpers/hexToRgba'
import {CANCELED, DONE, IN_PROGRESS, NEEDS_INFO} from '../../orderSatus'
import Box from '../Box'
import Text from '../Text'
import Label from './Label'
import Icon from './Icon'
import '../../styles/Ticket.css'

const Card = ({openChat, selectTicket, title, place, statusId, created}) => {
	const theme = useTheme()
	const ref = useRef()
	const [cardHeight, setCardHeight] = useState(0)

	useEffect(() => {
		setCardHeight(ref.current.clientHeight / 2)
	}, [ref])

	const background =
		statusId === IN_PROGRESS
			? hexToRgbA(theme.palette.yellow.w100, 0.2)
			: statusId === NEEDS_INFO
			? hexToRgbA(theme.palette.blue.w100, 0.2)
			: statusId === DONE
			? hexToRgbA(theme.palette.green.w100, 0.2)
			: statusId === CANCELED
			? hexToRgbA(theme.palette.red.w100, 0.2)
			: false

	return (
		<div
			className={'ticket-card'}
			ref={ref}
			onClick={() => {
				openChat()
				selectTicket()
			}}
		>
			<Box variant={'variant2'} background={background}>
				<Text variant={'h5'}>{title}</Text>
				<div className={'ticket-card-container'}>
					<Text variant={'p4'} color={theme.palette.black.w100}>
						{place?.place}
					</Text>
					<div className={'ticket-card-point'}>
						<Text variant={'p5'} color={theme.palette.white.w100}>
							&#183;
						</Text>
					</div>
					<Text variant={'p5'} color={theme.palette.white.w100}>
						{moment(created).format('DD.MM.YYYY HH:mm')}
					</Text>
				</div>
			</Box>
			{statusId && <Label statusId={statusId} cardHeight={cardHeight} />}
			<Icon statusId={statusId} cardHeight={cardHeight} />
		</div>
	)
}

export default Card
