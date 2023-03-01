import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { cartSlice } from '@/store/slice'
import { bindActionCreators } from 'redux'

const rootAction = {
  ...cartSlice.actions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
