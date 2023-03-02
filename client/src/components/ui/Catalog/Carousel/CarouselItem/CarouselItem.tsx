import { FC } from 'react'

import styles from '../Carousel.module.scss'
import cn from 'clsx'
import Image from 'next/image'

import { IProduct } from '@/types/Product'

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
  const isActive = product.id === 2
  return (
    <div
      className={cn(styles.item, {
        [styles.active]: isActive
      })}
    >
      <div>
        <Image
          alt={product.name}
          src={product.images[0]}
          width={315}
          height={315}
          className={styles.image}
        />

        <div className={styles.heading}>
          <div>{product.name}</div>
        </div>
        {!isActive && (
          <div className={styles.description}>{product.description}</div>
        )}
      </div>
    </div>
  )
}

export default CarouselItem
