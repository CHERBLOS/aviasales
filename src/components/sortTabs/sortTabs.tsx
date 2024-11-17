import { FC } from 'react'

import classNames from './sortTabs.module.scss'

const SortTabs: FC = () => {
  return (
    <ul className={classNames['sort__list']}>
      <li className={`${classNames['sort__list-item']} ${classNames['sort__list-item--active']}`}>Самый дешевый</li>
      <li className={classNames['sort__list-item']}>Самый быстрый</li>
      <li className={classNames['sort__list-item']}>Оптимальный</li>
    </ul>
  )
}

export default SortTabs
