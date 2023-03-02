import React, { FC } from 'react'

import { ICartItem } from '../../../../../types/cart-item.interface'
import styles from '../Cart.module.scss'
import CartActions from './CartActions/CartActions'
import { TypeCupSizes } from '@/store/cart/cart.types'
import Image from 'next/image'

import { formatToCurrency } from '@/utils/formatToCurrency'

export const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
  return (
    <div className={styles.item}>
      <Image
        src={item.product.images[0]}
        width={100}
        height={100}
        alt={item.product.name}
      />
      <div>
        <div className={styles.name}>{item.product.name}</div>
        <div className={styles.variation}>
          <div className={styles.variant}>{item.size}</div>
          <div className={styles.variant}>milk</div>
        </div>
        <div className={styles.price}>
          {formatToCurrency(item.product.price)}
        </div>
        <CartActions item={item} />
      </div>
    </div>
  )
}
