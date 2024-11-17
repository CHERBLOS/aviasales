import { FC } from 'react'

import classNames from './filter.module.scss'

const Filter: FC = () => {
  return (
    <div className={classNames.filter}>
      <h3 className={classNames['filter__caption']}>Количество пересадок</h3>
      <ul className={classNames['filter__list']}>
        <li className={classNames['filter__list-item']}>
          <label htmlFor="all" className={classNames['filter__list-label']}>
            <input type="checkbox" className={classNames['filter__list-input']} checked={true} name="" id="all" />
            <span className={classNames['filter__list-checkbox']} />
            Все
          </label>
        </li>
        <li className={classNames['filter__list-item']}>
          <label htmlFor="all1" className={classNames['filter__list-label']}>
            <input type="checkbox" className={classNames['filter__list-input']} name="" id="all1" />
            <span className={classNames['filter__list-checkbox']} />
            Без пересадок
          </label>
        </li>
        <li className={classNames['filter__list-item']}>
          <label htmlFor="all2" className={classNames['filter__list-label']}>
            <input type="checkbox" className={classNames['filter__list-input']} name="" id="all2" />
            <span className={classNames['filter__list-checkbox']} />2 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Filter
