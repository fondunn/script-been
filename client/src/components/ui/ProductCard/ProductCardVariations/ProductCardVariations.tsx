import { FC, useState } from 'react'

import styles from '../ProductCard.module.scss'
import { TypeCupSizes } from '@/store/cart/cart.types'

import { AddToCartButton } from '@/ui/AddToCartButton/AddToCartButton'
import RatingStar from '@/ui/RatingStar/RatingStar'
import SizeVariations from '@/ui/SizeVariations/SizeVariations'

import { IProductDetails } from '@/types/Product'

const ProductCardVariations: FC<IProductDetails> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<TypeCupSizes>('medium')
  return (
    <div className={styles.variations}>
      <RatingStar />
      <SizeVariations
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <AddToCartButton product={product} selectedSize={selectedSize} />
    </div>
  )
}

export default ProductCardVariations
