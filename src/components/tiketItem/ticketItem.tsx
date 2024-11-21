import { FC } from 'react'

import { ITicket } from '../../types/uiTypes'
import { formatDate, formatFlyTime, formatStops } from '../../functions'

import classNames from './ticketItem.module.scss'

interface TicketItemInterface {
  data: ITicket
}

const TicketItem: FC<TicketItemInterface> = ({ data }) => {
  return (
    <li className={classNames.ticket}>
      <span className={classNames['ticket__price']}>{data.price} P</span>
      <img className={classNames['ticket__logo']} src={`https://pics.avs.io/99/36/${data.carrier}.png}`} alt="Logo" />
      <ul className={classNames['ticket__list']}>
        <li className={classNames['ticket__list-item']}>
          <span
            className={classNames['ticket__list-description']}
          >{`${data.segments[0].origin} - ${data.segments[0].destination}`}</span>
          <span className={classNames['ticket__list-info']}>
            {formatDate(data.segments[0].date, data.segments[0].duration)}
          </span>
        </li>
        <li className={classNames['ticket__list-item']}>
          <span className={classNames['ticket__list-description']}>В пути</span>
          <span className={classNames['ticket__list-info']}>{formatFlyTime(data.segments[0].duration)}</span>
        </li>
        <li className={classNames['ticket__list-item']}>
          <span className={classNames['ticket__list-description']}>{formatStops(data.segments[0].stops.length)}</span>
          <span className={classNames['ticket__list-info']}>{data.segments[0].stops.join(', ')}</span>
        </li>
      </ul>
      <ul className={classNames['ticket__list']}>
        <li className={classNames['ticket__list-item']}>
          <span
            className={classNames['ticket__list-description']}
          >{`${data.segments[1].origin} - ${data.segments[1].destination}`}</span>
          <span className={classNames['ticket__list-info']}>
            {formatDate(data.segments[1].date, data.segments[1].duration)}
          </span>
        </li>
        <li className={classNames['ticket__list-item']}>
          <span className={classNames['ticket__list-description']}>В пути</span>
          <span className={classNames['ticket__list-info']}>{formatFlyTime(data.segments[1].duration)}</span>
        </li>
        <li className={classNames['ticket__list-item']}>
          <span className={classNames['ticket__list-description']}>{formatStops(data.segments[1].stops.length)}</span>
          <span className={classNames['ticket__list-info']}>{data.segments[1].stops.join(', ')}</span>
        </li>
      </ul>
    </li>
  )
}

export default TicketItem
