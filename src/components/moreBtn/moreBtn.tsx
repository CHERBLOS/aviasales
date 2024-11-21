import { FC } from 'react'

import { uiSlice } from '../../store/reducers/uiSlice'
import { useAppDispatch } from '../../hooks/redux'

import classNames from './moreBtn.module.scss'

const MoreBtn: FC = () => {
  const dispatch = useAppDispatch()

  const onToggleClick = () => {
    dispatch(uiSlice.actions.getMoreTickets())
  }

  return (
    <button onClick={onToggleClick} className={classNames.button}>
      Показать ещё 5 билетов!
    </button>
  )
}

export default MoreBtn
