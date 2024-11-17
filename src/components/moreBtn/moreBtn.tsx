import { FC } from 'react'

import classNames from './moreBtn.module.scss'

const MoreBtn: FC = () => {
  return <button className={classNames.button}>Показать ещё 5 билетов!</button>
}

export default MoreBtn
