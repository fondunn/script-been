import { IProduct } from './Product'

export type TypeNavigation = 'left' | 'right'

export interface ICarouselItemProps {
  product: IProduct
  index: number
}
