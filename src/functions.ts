import { format, add } from 'date-fns'

import { filterElems, filterAllEnum, ITicket, sortElems } from './types/uiTypes'

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

const stops = {
  noStop: 0,
  oneStop: 1,
  twoStop: 2,
  threeStop: 3,
}

export function filterTickets(tickets: ITicket[], stopsArr: string[], sort: string) {
  const filteredArr = filterByStops(tickets, stopsArr)
  const sortedArr = sortForTabs(filteredArr, sort)
  return sortedArr
}

export function filterByStops(tickets: ITicket[], stopsArr: string[]) {
  if (stopsArr.includes('all')) return tickets

  const newStopsArr: number[] = []
  for (let [key, value] of Object.entries(stops)) {
    if (stopsArr.includes(key)) newStopsArr.push(value)
  }

  return tickets.filter(
    (item) => newStopsArr.includes(item.segments[0].stops.length) || newStopsArr.includes(item.segments[1].stops.length)
  )
}

const optimalValue = (price: number, duration: number) => price + 12.5 * duration

const sortForTabs = (array: ITicket[], sort: string): ITicket[] => {
  switch (sort) {
    case sortElems.CHEAP:
      return [...array].sort((i: ITicket, j: ITicket) => i.price - j.price)
    case sortElems.FAST:
      return [...array].sort(
        (i: ITicket, j: ITicket) =>
          i.segments[0].duration + i.segments[1].duration - (j.segments[0].duration + j.segments[1].duration)
      )
    case sortElems.OPTIMAL:
      return [...array].sort(
        (i: ITicket, j: ITicket) =>
          optimalValue(i.price, i.segments[0].duration + i.segments[1].duration) -
          optimalValue(j.price, j.segments[0].duration + j.segments[1].duration)
      )
    default:
      return array
  }
}
