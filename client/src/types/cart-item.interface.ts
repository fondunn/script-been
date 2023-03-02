import { TypeCupSizes } from '@/store/cart/cart.types'

import { IProduct } from '@/types/Product'

export interface ICartItem {
  id: number
  product: IProduct
  quantity: number
  size: TypeCupSizes
}
