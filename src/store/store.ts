import { combineReducers, configureStore } from '@reduxjs/toolkit'

import uiReducer from './reducers/uiSlice'

const rootReducer = combineReducers({
  uiReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
