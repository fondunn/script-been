import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { carouselSlice } from '@/store/carousel/carousel.slice'
import { cartSlice } from '@/store/cart/cart.slice'
import { productsSlice } from '@/store/products/products.slice'
import { bindActionCreators } from 'redux'

const rootAction = {
  ...cartSlice.actions,
  ...carouselSlice.actions,
  ...productsSlice.actions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
