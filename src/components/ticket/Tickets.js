import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Card from './Card'
import GeneralCard from '../GeneralCard'
import chatActions from '../../redux/actions/chat'

const Tickets = ({openChat}) => {
	const dispatch = useDispatch()
	const tickets = useSelector(state => state.ticket.tickets)

	const selectTicket = ticket => {
		dispatch(chatActions.select(ticket))
	}

	return (
		<GeneralCard title={'Действующие заявки'} width={540}>
			<div className={'ticket-list'}>
				{tickets.map(ticket => {
					return <Card key={ticket.id} openChat={openChat} selectTicket={() => selectTicket(ticket)} {...ticket} />
				})}
			</div>
		</GeneralCard>
	)
}

export default Tickets
