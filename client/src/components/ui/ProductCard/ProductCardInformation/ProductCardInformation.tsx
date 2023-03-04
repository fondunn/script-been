import { FC } from 'react'

import styles from '../ProductCard.module.scss'
import Image from 'next/image'

import { IProductDetails } from '@/types/Product'

const ProductCardInformation: FC<IProductDetails> = ({ product }) => {
  return (
    <div className={styles.description}>
      <h1>{product.name}</h1>
      <div>
        <p>{product.description}</p>
      </div>
      {product.images.map(image => (
        <button key={image}>
          <Image src={image} alt='' width={50} height={50} />
        </button>
      ))}
    </div>
  )
}

export default ProductCardInformation
