import { ICartItem } from '@/types/cart-item.interface'

export interface ICartInitialState {
  items: ICartItem[]
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
  type: 'increase' | 'decrease'
}

export type TypeCupSizes = 'small' | 'medium' | 'big' | 'large'
