import ProductDetails from '@/components/screens/ProductDetails/ProductDetails'

import { products } from '@/data/products.data'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { IProduct, IProductDetails } from '@/types/Product'

const ProductDetailsPage: NextPage<IProductDetails> = ({ product }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map(({ slug }) => {
    return {
      params: {
        slug
      }
    }
  })
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<IProductDetails> = async ({
  params
}) => {
  const product =
    products.find(product => product.slug === params?.slug) || ({} as IProduct)

  return {
    props: {
      product
    }
  }
}

export default ProductDetailsPage
