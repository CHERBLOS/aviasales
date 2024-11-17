import { FC } from 'react'

import classNames from './ticketItem.module.scss'

const TicketItem: FC = () => {
  return (
    <li className={classNames.ticket}>
      <span className={classNames['ticket__price']}>13 400 P</span>
      <img className={classNames['ticket__logo']} src="" alt="Logo" />
      <ul className={classNames['ticket__list']}>
        <li className={classNames['ticket__list-item']}>
          <span className={classNames['ticket__list-description']}>MOW - HKT</span>
          <span className={classNames['ticket__list-info']}>MOW - HKT</span>
        </li>
        <li className={classNames['ticket__list-item']}>
          <span className={classNames['ticket__list-description']}>В пути</span>
          <span className={classNames['ticket__list-info']}>21ч 10м</span>
        </li>
        <li className={classNames['ticket__list-item']}>
          <span className={classNames['ticket__list-description']}>2 пересадки</span>
          <span className={classNames['ticket__list-info']}>HKG, JNB</span>
        </li>
      </ul>
      <ul className={classNames['ticket__list']}>
        <li className={classNames['ticket__list-item']}>
          <span className={classNames['ticket__list-description']}>MOW - HKT</span>
          <span className={classNames['ticket__list-info']}>MOW - HKT</span>
        </li>
        <li className={classNames['ticket__list-item']}>
          <span className={classNames['ticket__list-description']}>В пути</span>
          <span className={classNames['ticket__list-info']}>21ч 10м</span>
        </li>
        <li className={classNames['ticket__list-item']}>
          <span className={classNames['ticket__list-description']}>2 пересадки</span>
          <span className={classNames['ticket__list-info']}>HKG, JNB</span>
        </li>
      </ul>
    </li>
  )
}

export default TicketItem
