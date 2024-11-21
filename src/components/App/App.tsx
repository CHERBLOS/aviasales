import { FC, useEffect } from 'react'

import Filter from '../filter'
import SortTabs from '../sortTabs'
import TicketList from '../ticketList'
import logo from '../../assets/logo.png'
import { useAppDispatch } from '../../hooks/redux'
import { fetchSearchId } from '../../store/reducers/ActionCreator'

import classNames from './App.module.scss'

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [dispatch])

  return (
    <div className={classNames.App}>
      <img className={classNames['App__logo']} src={logo} alt="" />
      <div className={classNames['App__container']}>
        <Filter />
        <div className={classNames['App__content']}>
          <SortTabs />
          <TicketList />
        </div>
      </div>
    </div>
  )
}

export default App
