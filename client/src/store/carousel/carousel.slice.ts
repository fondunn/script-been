import { ICarouselInitialState } from './carousel.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ICarouselInitialState = {
  selectedIndex: 0
}

export const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    nextSlide: (state, action: PayloadAction<number>) => {
      if (state.selectedIndex >= action.payload - 1) state.selectedIndex = 0
      else state.selectedIndex += 1
      console.log(state.selectedIndex)
    },
    prevSlide: (state, action: PayloadAction<number>) => {
      if (state.selectedIndex === 0) state.selectedIndex = action.payload - 1
      else {
        state.selectedIndex -= 1
      }
    },
    selectSlide: (state, action: PayloadAction<number>) => {
      state.selectedIndex = action.payload
    }
  }
})
