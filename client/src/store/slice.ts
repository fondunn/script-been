import {
  IAddToCartPayload,
  IChangeQuantityPayload,
  IInitialState
} from './types'
import { cart } from '@/data/cart.data'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IInitialState = {
  items: cart
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      const id = state.items.length
      state.items.push({ ...action.payload, id })
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(
        item => item.product.id !== action.payload.id
      )
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const { id, type } = action.payload
      const item = state.items.find(item => item.id === id)
      if (item) type === 'increase' ? item.quantity++ : item.quantity--
    }
  }
})
