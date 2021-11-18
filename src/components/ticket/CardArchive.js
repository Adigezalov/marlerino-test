import React from 'react'
import moment from 'moment'
import {useTheme} from '../../theme'
import Box from '../Box'
import Text from '../Text'

const CardArchive = ({id, title, description, supportedByUser, ticketType, modified}) => {
	const theme = useTheme()

	return (
		<div className={'archive-card'}>
			<Box variant={'variant2'}>
				<div className={'archive-card-date'}>
					<Text variant={'p4'} color={theme.palette.white.w100}>
						№{id} - {moment(modified).format('DD.MM.YYYY HH:mm')}
					</Text>
				</div>
				<Text variant={'h3'}>{title}</Text>
				<div className={'archive-card-data'}>
					<Text variant={'p4'} color={theme.palette.black.w400}>
						{ticketType.title}
					</Text>
					<Text variant={'p4'} color={theme.palette.black.w400}>
						Выполнил: {supportedByUser?.fullName}
					</Text>
				</div>
			</Box>
		</div>
	)
}

export default CardArchive
