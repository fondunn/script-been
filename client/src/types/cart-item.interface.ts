import { IProduct } from '@/types/Product'

export interface ICartItem {
  id: number
  product: IProduct
  quantity: number
}
