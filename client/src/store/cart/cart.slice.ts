import {
  IAddToCartPayload,
  ICartInitialState,
  IChangeQuantityPayload
} from './cart.types'
import { cart } from '@/data/cart.data'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ICartInitialState = {
  items: cart
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      const existSize = state.items.some(
        item => item.size === action.payload.size
      )
      if (!existSize) {
        state.items.push({ ...action.payload, id: state.items.length })
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const { id, type } = action.payload
      const item = state.items.find(item => item.id === id)
      if (item) type === 'increase' ? item.quantity++ : item.quantity--
    }
  }
})
