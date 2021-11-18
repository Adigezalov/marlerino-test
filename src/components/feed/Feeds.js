import React from 'react'
import {useSelector} from 'react-redux'
import GeneralCard from '../GeneralCard'
import Card from './Card'

const Feeds = () => {
	const feeds = useSelector(state => state.feed.feeds)

	return (
		<GeneralCard title={'Новости'} width={540}>
			<div className={'feed-list'}>
				{feeds.map(feed => {
					return <Card key={feed.id} {...feed} />
				})}
			</div>
		</GeneralCard>
	)
}

export default Feeds
