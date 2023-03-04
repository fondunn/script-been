import { FC, useState } from 'react'

import {
  MotionMain,
  MotionWithOpacity,
  MotionWithScale
} from '@/components/ui/Motion/Motion'

import SizeVariations from '../../../SizeVariations/SizeVariations'
import styles from '../Carousel.module.scss'
import { TypeCupSizes } from '@/store/cart/cart.types'
import Image from 'next/image'
import Link from 'next/link'

import {
  AddToCartButton,
  CustomNavigationButton
} from '@/ui/AddToCartButton/AddToCartButton'

import { useActions } from '@/hooks/useActions'
import { useCarousel } from '@/hooks/useCarousel'

import { ICarouselItemProps } from '@/types/carousel.item.interface'

const CarouselItem: FC<ICarouselItemProps> = ({ product, index }) => {
  const [selectedSize, setSelectedSize] = useState<TypeCupSizes>('medium')

  const { selectedIndex } = useCarousel()
  const { selectSlide } = useActions()

  const selectSlideHandler = (e: any, index: number) => {
    e.stopPropagation()
    e.preventDefault()
    selectSlide(index)
  }
  const isActive = selectedIndex === index
  return (
    <MotionMain
      isActive={isActive}
      activeStyle={styles.active}
      inactiveStyle={styles.item}
      index={index}
      role='button'
      aria='Select item'
      onClickHandler={selectSlideHandler}
    >
      <div>
        <div className='flex items-center gap-2 relative'>
          {isActive && (
            <MotionWithOpacity>
              <CustomNavigationButton direction='left' />
            </MotionWithOpacity>
          )}
          <MotionWithScale>
            <Image
              alt={product.name}
              src={product.images[0]}
              width={315}
              height={315}
              className={styles.image}
              draggable={false}
            />
          </MotionWithScale>
          {isActive && (
            <MotionWithOpacity>
              <CustomNavigationButton direction='right' />
            </MotionWithOpacity>
          )}
        </div>

        <div className={styles.heading}>
          <div>{product.name}</div>
        </div>
        {isActive ? (
          <MotionWithOpacity duration={0.3}>
            <SizeVariations
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <AddToCartButton product={product} selectedSize={selectedSize} />
            <Link href={`/product/${product.slug}`} className={styles.link}>
              More information
            </Link>
          </MotionWithOpacity>
        ) : (
          <div className={styles.description}>{product.description}</div>
        )}
      </div>
    </MotionMain>
  )
}

export default CarouselItem
