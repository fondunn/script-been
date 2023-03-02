import { FC } from 'react'

import styles from './Carousel.module.scss'
import CarouselItem, { TypeNavigation } from './CarouselItem/CarouselItem'

import { useProducts } from '@/hooks/useProducts'

const Carousel: FC = () => {
  const { products } = useProducts()

  return (
    <section className={styles.carousel}>
      {products.map((product, index) => (
        <CarouselItem key={product.name} product={product} index={index} />
      ))}
    </section>
  )
}

export default Carousel
