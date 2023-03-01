import { cartSlice } from './slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  cart: cartSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type TypeRootState = ReturnType<typeof rootReducer>
