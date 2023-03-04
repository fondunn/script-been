import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/components/ui/Heading/Heading'
import ProductCard from '@/components/ui/ProductCard/ProductCard'
import ProductNavigation from '@/components/ui/ProductNavigation/ProductNavigation'

import { IProductDetails } from '@/types/Product'

const ProductDetails: FC<IProductDetails> = ({ product }) => {
  return (
    <Layout title={product.name} description={product.description}>
      {/* <Heading className='font-black text-center text-4xl'>
        {product.name}
      </Heading> */}
      <p className='font-black text-center text-4xl text-green'>Desctiption</p>
      <div className='flex justify-between'>
        <Breadcrumbs product={product} />
        <ProductNavigation productId={product.id} />
      </div>
      <ProductCard product={product} />
    </Layout>
  )
}

export default ProductDetails
