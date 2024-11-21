import { format, add } from 'date-fns'

import { filterElems, filterAllEnum } from './types/uiTypes'

export function updateFilter(prevFilter: string[], toggleItem: string): string[] {
  const allSelectedArr = Object.keys(filterElems)

  if (!prevFilter.includes(toggleItem) && (prevFilter.length === 3 || toggleItem === filterAllEnum.ALL)) {
    return allSelectedArr
  }
  if (!prevFilter.includes(toggleItem)) {
    return [...prevFilter, toggleItem]
  }
  if (prevFilter.includes(toggleItem) && toggleItem !== filterAllEnum.ALL) {
    return prevFilter.filter((item) => item !== toggleItem && item !== filterAllEnum.ALL)
  }

  return []
}

export function formatDate(date: string, durationTime: number) {
  const destDate: string = format(new Date(date), 'HH:mm')
  const finishDate: string = format(
    add(new Date(date), {
      minutes: durationTime,
    }),
    'HH:mm'
  )

  return `${destDate} - ${finishDate}`
}

export function formatFlyTime(durationTime: number) {
  const hours = Math.trunc(durationTime / 60)
  const minutes = durationTime % 60 < 10 ? `0${durationTime % 60}` : durationTime % 60
  return `${hours}ч ${minutes}м`
}

export function formatStops(stops: number) {
  switch (stops) {
    case 0:
      return 'Без пересадок'
    case 1:
      return '1 пересадка'
    default:
      return `${stops} пересадки`
  }
}
