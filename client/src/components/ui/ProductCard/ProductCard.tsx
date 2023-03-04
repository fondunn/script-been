import { FC } from 'react'

import styles from './ProductCard.module.scss'
import ProductCardImage from './ProductCardImage/ProductCardImage'
import ProductCardInformation from './ProductCardInformation/ProductCardInformation'
import ProductCardVariations from './ProductCardVariations/ProductCardVariations'

import { IProductDetails } from '@/types/Product'

const ProductCard: FC<IProductDetails> = ({ product }) => {
  return (
    <div className={styles.card}>
      <ProductCardInformation product={product} />
      <ProductCardImage product={product} />
      <ProductCardVariations product={product} />
    </div>
  )
}

export default ProductCard
