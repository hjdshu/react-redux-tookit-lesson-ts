import { configureStore, combineReducers, ThunkAction, Action, applyMiddleware } from '@reduxjs/toolkit'
import appSlice from './appSlice'

// 模块
const store = configureStore({
  reducer: combineReducers({
    app: appSlice
  })
})

export default store

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>