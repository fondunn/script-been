import { FC } from 'react'

import styles from './Carousel.module.scss'
import CarouselItem from './CarouselItem/CarouselItem'

import { IProduct } from '@/types/Product'

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <section className={styles.carousel}>
      {products.map(product => (
        <CarouselItem key={product.name} product={product} />
      ))}
    </section>
  )
}

export default Carousel
