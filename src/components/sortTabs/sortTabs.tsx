import { FC } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { sortElems } from '../../types/uiTypes'
import { uiSlice } from '../../store/reducers/uiSlice'

import classNames from './sortTabs.module.scss'

// type eventType = React.KeyboardEvent<HTMLElement> | undefined | React.MouseEvent<HTMLElement, MouseEvent>
const SortTabs: FC = () => {
  const state = useAppSelector((state) => state.uiReducer)
  const dispatch = useAppDispatch()
  const { toggleSort } = uiSlice.actions

  const onToggleSort = (evt: any): void => {
    dispatch(toggleSort(evt.target.innerHTML))
  }

  return (
    <ul className={classNames['sort__list']}>
      <li
        onClick={onToggleSort}
        onKeyDown={onToggleSort}
        role="menuitem"
        className={
          state.sort === sortElems.CHEAP
            ? `${classNames['sort__list-item']} ${classNames['sort__list-item--active']}`
            : classNames['sort__list-item']
        }
      >
        Самый дешевый
      </li>
      <li
        onClick={onToggleSort}
        onKeyDown={onToggleSort}
        role="menuitem"
        className={
          state.sort === sortElems.FAST
            ? `${classNames['sort__list-item']} ${classNames['sort__list-item--active']}`
            : classNames['sort__list-item']
        }
      >
        Самый быстрый
      </li>
      <li
        onClick={onToggleSort}
        onKeyDown={onToggleSort}
        role="menuitem"
        className={
          state.sort === sortElems.OPTIMAL
            ? `${classNames['sort__list-item']} ${classNames['sort__list-item--active']}`
            : classNames['sort__list-item']
        }
      >
        Оптимальный
      </li>
    </ul>
  )
}

export default SortTabs
