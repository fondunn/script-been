import { Dispatch, FC, SetStateAction } from 'react'

import { TypeCupSizes } from '@/store/cart/cart.types'
import cn from 'clsx'

import styles from '@/ui/Catalog/Carousel/Carousel.module.scss'

const SIZES: TypeCupSizes[] = ['small', 'medium', 'big', 'large']

interface ISizeVariationsProps {
  selectedSize: TypeCupSizes
  setSelectedSize: Dispatch<SetStateAction<TypeCupSizes>>
}

const SizeVariations: FC<ISizeVariationsProps> = ({
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

export default SizeVariations
