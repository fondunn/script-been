import { IProductsInitialState } from './products.types'
import { products } from '@/data/products.data'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IProductsInitialState = {
  products: products
}

export const productsSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    logProducts: state => {
      console.log(state)
    }
    // prevSlide: (state, action: PayloadAction<{ itemsLength: number }>) => {
    //   console.log('prevSlide')
    //   if (state.selectedIndex === 0)
    //     state.selectedIndex = action.payload.itemsLength - 1
    //   else {
    //     state.selectedIndex -= 1
    //   }
    // },
    // selectSlide: (state, action: PayloadAction<{ index: number }>) => {
    //   state.selectedIndex = action.payload.index
    // }
  }
})
