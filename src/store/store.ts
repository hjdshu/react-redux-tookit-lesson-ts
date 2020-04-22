import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit'
import appSlice from './appSlice'


const store = configureStore({
  reducer: combineReducers({
    app: appSlice
  })
})

export default store

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>