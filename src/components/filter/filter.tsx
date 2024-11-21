/* eslint-disable react/jsx-key */
import { FC } from 'react'

import { uiSlice } from '../../store/reducers/uiSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { updateFilter } from '../../functions'
import { filterElems } from '../../types/uiTypes'

import classNames from './filter.module.scss'

const Filter: FC = () => {
  const filterView = useAppSelector((state) => state.uiReducer.filter)
  const dispatch = useAppDispatch()
  const { toggleFilter } = uiSlice.actions

  const onToggleFilter = (event: any) => {
    const newFilterArr = updateFilter(filterView, event.target.id)
    dispatch(toggleFilter(newFilterArr))
  }

  const filterArray = Object.entries(filterElems).map(([key, value]) => {
    return (
      <li key={key} className={classNames['filter__list-item']}>
        <label htmlFor={key} className={classNames['filter__list-label']}>
          <input
            type="checkbox"
            onChange={onToggleFilter}
            className={classNames['filter__list-input']}
            checked={filterView.includes(key)}
            id={key}
          />
          <span className={classNames['filter__list-checkbox']} />
          {value}
        </label>
      </li>
    )
  })

  return (
    <div className={classNames.filter}>
      <h3 className={classNames['filter__caption']}>Количество пересадок</h3>
      <ul className={classNames['filter__list']}>{filterArray}</ul>
    </div>
  )
}

export default Filter
