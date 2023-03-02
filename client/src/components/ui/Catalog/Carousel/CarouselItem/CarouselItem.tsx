import { Dispatch, FC, SetStateAction, useState } from 'react'

import styles from '../Carousel.module.scss'
import {
  CarouselButton,
  CarouselNavigationButton
} from '../CarouselButton/CarouselButton'
import CarouselVariations from '../CarouselVariations/CarouselVariations'
import { TypeCupSizes } from '@/store/cart/cart.types'
import cn from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { useActions } from '@/hooks/useActions'
import { useCarousel } from '@/hooks/useCarousel'

import { IProduct } from '@/types/Product'

export type TypeNavigation = 'left' | 'right'

interface ICarouselItemProps {
  product: IProduct
  index: number
}

const CarouselItem: FC<ICarouselItemProps> = ({ product, index }) => {
  const [selectedSize, setSelectedSize] = useState<TypeCupSizes>('medium')
  const { selectedIndex } = useCarousel()
  const { selectSlide } = useActions()
  const selectSlideHandler = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    selectSlide(index)
  }
  const isActive = selectedIndex === index
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={isActive ? { scale: 1.1 } : { scale: 1 }}
      transition={{ type: 'tween', duration: 0.5 }}
      className={cn(styles.item, {
        [styles.active]: isActive
      })}
      aria-label='Select item'
      role='button'
      onClick={e => selectSlideHandler(e)}
    >
      <div>
        <div className='flex items-center gap-2 relative'>
          {isActive && <CarouselNavigationButton direction='left' />}
          <motion.div
            initial={{ scale: 1 }}
            animate={isActive ? { scale: 1.1 } : { scale: 1 }}
            transition={{ type: 'spring', duration: 2 }}
          >
            <Image
              alt={product.name}
              src={product.images[0]}
              width={315}
              height={315}
              className={styles.image}
              draggable={false}
            />
          </motion.div>
          {isActive && <CarouselNavigationButton direction='right' />}
        </div>

        <div className={styles.heading}>
          <div>{product.name}</div>
        </div>
        {isActive ? (
          <>
            <CarouselVariations
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <CarouselButton product={product} selectedSize={selectedSize} />
          </>
        ) : (
          <div className={styles.description}>{product.description}</div>
        )}
      </div>
    </motion.div>
  )
}

export default CarouselItem
