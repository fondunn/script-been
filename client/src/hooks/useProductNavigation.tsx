import { useProducts } from './useProducts'

import { IProduct, IProductDetails } from '@/types/Product'

export const useProductNavigation = (productId: number) => {
  const { products } = useProducts()

  const prevSlug = () =>
    productId > 1
      ? String(products.find(i => i.id === productId - 1)?.slug)
      : String(products[products.length - 1].slug)

  const nextSlug = () =>
    products.some(item => item.id === productId + 1)
      ? String(products[0].slug)
      : String(products.find(i => i.id === productId + 1)?.slug)

  const prevName = () =>
    productId > 1
      ? String(products.find(i => i.id === productId - 1)?.name)
      : String(products[products.length - 1].name)

  const nextName = () =>
    products.some(item => item.id === productId + 1)
      ? String(products[0].name)
      : String(products.find(i => i.id === productId + 1)?.name)

  const prev = prevSlug()
  const next = nextSlug()
  const namePrev = prevName()
  const nameNext = nextName()
  return {
    slugPrev: prev,
    slugNext: next,
    nameNext,
    namePrev
  }
}
