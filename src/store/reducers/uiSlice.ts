import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { sortElems } from '../../types/uiTypes'

interface uiState {
  sort: string
  filter: string[]
  isLoading: boolean
  error: string
}

const initialState: uiState = {
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
  },
})

export default uiSlice.reducer
