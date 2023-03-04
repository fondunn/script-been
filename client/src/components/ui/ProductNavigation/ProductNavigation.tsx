import { Button } from '@chakra-ui/react'
import { FC } from 'react'

import styles from './ProductNavigation.module.scss'
import { LINKS } from '@/config/links'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'

import { useProductNavigation } from '@/hooks/useProductNavigation'

const ProductNavigation: FC<{ productId: number }> = ({ productId }) => {
  const { slugPrev, slugNext } = useProductNavigation(productId)

  return (
    <nav className={styles.nav}>
      <Link href={`/${LINKS.product}/${slugPrev}`}>
        <ChevronLeftIcon fontSize={30} />
      </Link>
      <span className='cursor-default'>Navigate</span>
      <Link href={`/${LINKS.product}/${slugNext}`}>
        <ChevronRightIcon fontSize={30} />
      </Link>
    </nav>
  )
}

export default ProductNavigation
