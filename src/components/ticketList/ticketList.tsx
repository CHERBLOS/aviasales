import { FC, useEffect } from 'react'

import TicketItem from '../tiketItem'
import MoreBtn from '../moreBtn'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchTickets } from '../../store/reducers/ActionCreator'
import { filterTickets } from '../../functions'

import classNames from './ticketList.module.scss'

const TicketList: FC = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.uiReducer)

  useEffect(() => {
    if (state.searchId) dispatch(fetchTickets(state.searchId))
  }, [dispatch, state.searchId])

  const renderTickets = state.ticketList.length
    ? filterTickets(state.ticketList, state.filter, state.sort)
        .slice(0, state.renderedTickets)
        .map((data) => <TicketItem key={`${data.carrier}${Date.now()}${data.segments[0].date}`} data={data} />)
    : []

  const ticketList =
    renderTickets.length && !state.isLoading ? <ul className={classNames['tickets__list']}>{renderTickets}</ul> : null

  const noTickets =
    !renderTickets.length && !state.isLoading ? (
      <div className={classNames['tickets__alert']}>По вашим параметрам билетов не нашлось!</div>
    ) : null
  const spiner = state.isLoading && <div className={classNames['tickets__spiner']} />

  const moreButton = renderTickets.length && !state.isLoading ? <MoreBtn /> : null

  return (
    <div className={classNames.tickets}>
      {ticketList}
      {noTickets}
      {spiner}
      {moreButton}
    </div>
  )
}

export default TicketList
