import { FC } from 'react'

import styles from '../ProductCard.module.scss'
import Image from 'next/image'

import { formatToCurrency } from '@/utils/formatToCurrency'

import { IProductDetails } from '@/types/Product'

const ProductCardImage: FC<IProductDetails> = ({ product }) => {
  return (
    <div className={styles.image}>
      <Image
        src={product.images[0]}
        alt={product.name}
        width={250}
        height={250}
      />
      <div>
        <span>{formatToCurrency(product.price)}</span>
      </div>
    </div>
  )
}

export default ProductCardImage
