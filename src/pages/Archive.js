import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useTheme} from '../theme'
import ticketAction from '../redux/actions/ticket'
import GeneralCard from '../components/GeneralCard'
import TextField from '../components/TextField'
import Button from '../components/Button'
import Box from '../components/Box'
import CardArchive from '../components/ticket/CardArchive'
import '../styles/Archive.css'

const SORT_BUTTONS = [
	{
		id: 1,
		title: 'По дате',
	},
	{
		id: 2,
		title: 'По алфавиту',
	},
]

const Archive = () => {
	const dispatch = useDispatch()
	const archives = useSelector(state => state.ticket.archive)
	const theme = useTheme()
	const [dropdown, setDropdown] = useState(false)
	const [sort, setSort] = useState(0)
	const authorized = useSelector(state => state.app.authorized)

	useEffect(() => {
		authorized && dispatch(ticketAction.getArchive())
	}, [authorized])

	useEffect(() => {
		sort === 0 && dispatch(ticketAction.sortArchive('modified'))
		sort === 1 && dispatch(ticketAction.sortArchive('title'))
	}, [sort])

	const showDropdown = () => {
		setDropdown(!dropdown)
	}

	const selectSort = index => {
		setSort(index)
		setDropdown(false)
	}

	return (
		<div className={'archive'} style={{paddingRight: theme.dimensions.ph}}>
			<GeneralCard width={'100%'}>
				<div className={'archive-header'}>
					<div className={'archive-search'}>
						<TextField placeholder={'Search'} />
					</div>
					<div className={'archive-button'}>
						<Button
							iconLeft={'sort'}
							iconRight={dropdown ? 'hide' : 'show'}
							active
							text={SORT_BUTTONS[sort].title}
							onClick={showDropdown}
						/>
						{dropdown && (
							<div className={'archive-dropdown'}>
								<Box variant={'variant2'} shadow>
									{SORT_BUTTONS.map(({id, title}, index) => {
										return (
											<Button
												key={id}
												text={title}
												mb={10}
												onClick={() => {
													selectSort(index)
												}}
											/>
										)
									})}
								</Box>
							</div>
						)}
					</div>
				</div>
				<div className={'archive-list'}>
					{archives.map(archive => {
						return <CardArchive key={archive.id} {...archive} />
					})}
				</div>
			</GeneralCard>
		</div>
	)
}

export default Archive
