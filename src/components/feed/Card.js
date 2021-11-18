import React, {useEffect, useRef, useState} from 'react'
import {useTheme} from '../../theme'
import auth from '../../config/auth'
import cutText from '../../helpers/cutText'
import Box from '../Box'
import Text from '../Text'
import '../../styles/Feed.css'

const IMAGE_SIZE = 80

const Card = ({title, description, customDate, pictureUrl}) => {
	const theme = useTheme()
	const ref = useRef()
	const [cardHeight, setCardHeight] = useState(0)

	useEffect(() => {
		setCardHeight(ref.current.clientHeight / 2)
	}, [ref])

	const more = () => {
		if (description.length > 60 || description.length === 0) {
			return (
				<Text variant={'l3'} color={theme.palette.black.w200}>
					подробнее
				</Text>
			)
		}
	}

	return (
		<div className={'feed-card'} ref={ref}>
			<Box variant={'variant2'}>
				<div className={'feed-card-container'}>
					<Text variant={'h5'}>{title}</Text>
					<div className={'feed-card-description'}>
						<Text variant={'p3'} color={theme.palette.black.w200}>
							{cutText(description, 60)}
							{more()}
						</Text>
					</div>
					<div className={'feed-card-date'}>
						<Text variant={'p4'} color={theme.palette.black.w100}>
							{customDate}
						</Text>
					</div>
				</div>
			</Box>
			<div
				className={'feed-card-image'}
				style={{top: cardHeight - IMAGE_SIZE / 2, width: IMAGE_SIZE, height: IMAGE_SIZE}}
			>
				<img src={`${auth.baseURL}/${pictureUrl}`} alt='feed' />
			</div>
		</div>
	)
}

export default Card
