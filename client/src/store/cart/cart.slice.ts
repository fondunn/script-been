import {
  IAddToCartPayload,
  ICartInitialState,
  IChangeQuantityPayload
} from './cart.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ICartInitialState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      // const existSize = state.items.some(
      //   item => item.size === action.payload.size
      // )
      const existItemInCart = state.items.some(item => {
        if (
          item.size === action.payload.size &&
          item.product.id === action.payload.product.id
        )
          return true
        else return false
      })

      if (!existItemInCart) {
        state.items.push({ ...action.payload, id: state.items.length })
      } else {
        state.items = state.items.map(item => {
          if (item.product.id === action.payload.product.id) {
            item.quantity++
            return item
          } else return item
        })
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
