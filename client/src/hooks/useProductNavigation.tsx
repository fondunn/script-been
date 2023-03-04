import { useProducts } from './useProducts'

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

  const prev = prevSlug()
  const next = nextSlug()
  return {
    slugPrev: prev,
    slugNext: next
  }
}
