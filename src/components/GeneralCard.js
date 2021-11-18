import React from 'react'
import Box from './Box'
import Text from './Text'
import '../styles/GeneralCard.css'

const GeneralCard = ({title, width, children}) => {
	return (
		<div className={'general-card'} style={{width}}>
			<Box variant={'variant1'}>
				<div className={'general-card-container'}>
					{title ? (
						<div className={'general-card-title'}>
							<Text variant={'h2'}>{title}</Text>
						</div>
					) : null}
					{children}
				</div>
			</Box>
		</div>
	)
}

export default GeneralCard
