import { FC, useEffect } from 'react'

import TicketItem from '../tiketItem'
import MoreBtn from '../moreBtn'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchTickets } from '../../store/reducers/ActionCreator'

import classNames from './ticketList.module.scss'

const TicketList: FC = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.uiReducer)

  useEffect(() => {
    if (state.searchId) dispatch(fetchTickets(state.searchId))
  }, [dispatch, state.searchId])

  const tickets = state.ticketList.length
    ? state.ticketList
        .slice(0, state.renderedTickets)
        .map((data) => <TicketItem key={`${data.carrier}${Date.now()}${data.segments[0].date}`} data={data} />)
    : 'No data'

  return (
    <div className={classNames.tickets}>
      <ul className={classNames['tickets__list']}>{tickets}</ul>
      <MoreBtn />
    </div>
  )
}

export default TicketList
