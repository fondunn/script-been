import { Dispatch, FC, SetStateAction } from 'react'

import styles from '../Carousel.module.scss'
import { TypeCupSizes } from '@/store/cart/cart.types'
import cn from 'clsx'

const SIZES: TypeCupSizes[] = ['small', 'medium', 'big', 'large']

interface ICarouselVariationsProps {
  selectedSize: TypeCupSizes
  setSelectedSize: Dispatch<SetStateAction<TypeCupSizes>>
}

const CarouselVariations: FC<ICarouselVariationsProps> = ({
  selectedSize,
  setSelectedSize
}) => {
  return (
    <div className={styles.variation}>
      {SIZES.map(size => (
        <button
          key={size}
          className={cn({
            [styles.active]: selectedSize === size
          })}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  )
}

export default CarouselVariations
