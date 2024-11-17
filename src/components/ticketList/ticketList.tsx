import { FC } from 'react'

import TicketItem from '../tiketItem'
import MoreBtn from '../moreBtn'

import classNames from './ticketList.module.scss'

const TicketList: FC = () => {
  return (
    <div className={classNames.tickets}>
      <ul className={classNames['tickets__list']}>
        <TicketItem />
        <TicketItem />
        <TicketItem />
      </ul>
      <MoreBtn />
    </div>
  )
}

export default TicketList
