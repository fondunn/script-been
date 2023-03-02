import { FC } from 'react'

import Carousel from '@/components/ui/Catalog/Carousel/Carousel'

import { IProduct } from '@/types/Product'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <div>
      <Carousel products={products} />
    </div>
  )
}

export default Catalog
