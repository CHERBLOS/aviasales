import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { sortElems, ITicket } from '../../types/uiTypes'

interface uiState {
  searchId: string
  ticketList: [] | ITicket[]
  renderedTickets: number
  sort: string
  filter: string[]
  isLoading: boolean
  error: string
}

const initialState: uiState = {
  searchId: '',
  ticketList: [],
  renderedTickets: 5,
  sort: sortElems.CHEAP,
  filter: ['all', 'noStop', 'oneStop', 'twoStop', 'threeStop'],
  isLoading: false,
  error: '',
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSort(state, action: PayloadAction<string>) {
      state.sort = action.payload
    },
    toggleFilter(state, action: PayloadAction<string[]>) {
      state.filter = action.payload
    },
    getSearchId(state) {
      state.isLoading = true
    },
    getMoreTickets(state) {
      state.renderedTickets += 5
    },
    getSearchIdSuccess(state, action: PayloadAction<string>) {
      state.searchId = action.payload
      state.isLoading = false
      state.error = ''
    },
    getSearchIdError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    getTickets(state) {
      state.isLoading = true
    },
    getTicketsSuccess(state, action: PayloadAction<ITicket[]>) {
      state.isLoading = false
      state.error = ''
      state.ticketList = action.payload.concat(state.ticketList)
    },
    getTicketsError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default uiSlice.reducer
