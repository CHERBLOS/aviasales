/* eslint-disable @typescript-eslint/no-explicit-any */
export enum uiActions {
  CHANGE_SORT = 'CHANGE_SORT',
  TOGGLE_FILTER = 'TOGGLE_FILTER',
}

export enum filterAllEnum {
  ALL = 'all',
  NO_STOPS = 'noStop',
  ONE_STOP = 'oneStop',
  TWO_STOP = 'twoStop',
  THREE_STOP = 'threeStop',
}

export enum sortElems {
  CHEAP = 'Самый дешевый',
  FAST = 'Самый быстрый',
  OPTIMAL = 'Оптимальный',
}

export const filterElems = {
  all: 'Все',
  noStop: 'Без пересадок',
  oneStop: '1 пересадка',
  twoStop: '2 пересадки',
  threeStop: '3 пересадки',
}

export type filterTypes = {
  all: boolean
  noStops: boolean
  oneStop: boolean
  twoStop: boolean
  threeStop: boolean
}

export interface uiState {
  sort: string | undefined
  filter: filterTypes | undefined
  loading: boolean
  error: null | string
}

interface uiSortAction {
  type: 'CHANGE_SORT'
  payload?: {
    sort: string
  }
}

interface uiFilterAction {
  type: 'TOGGLE_FILTER'
  payload?: {
    filter: filterTypes
  }
}

export type uiAction = uiSortAction | uiFilterAction
