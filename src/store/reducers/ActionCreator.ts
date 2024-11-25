import { AppDispatch } from '../store'

import { uiSlice } from './uiSlice'

export const fetchSearchId = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(uiSlice.actions.getSearchId())
    const responce = await fetch('https://aviasales-test-api.kata.academy/search').then((res) => res.json())
    dispatch(uiSlice.actions.getSearchIdSuccess(responce.searchId))
  } catch (error) {
    if (error instanceof Error) {
      dispatch(uiSlice.actions.getSearchIdError(error.message))
    } else {
      throw error
    }
  }
}

export const fetchTickets =
  (searchId: string, repeat: boolean = false) =>
  async (dispatch: AppDispatch) => {
    try {
      if (!repeat) dispatch(uiSlice.actions.getTickets())
      const responce = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`).then((res) =>
        res.json()
      )
      dispatch(uiSlice.actions.getTicketsSuccess(responce.tickets))

      if (!responce.stop) {
        dispatch(fetchTickets(searchId, true))
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(uiSlice.actions.getTicketsError(error.message))
      } else {
        throw error
      }
    }
  }
