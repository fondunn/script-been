export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  slug: string
  //    TODO: add reviews interface
  reviews: []
  images: string[]
}

export interface IProductDetails {
  product: IProduct
}
