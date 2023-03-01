import { IProduct } from '@/types/Product'

export const products: IProduct[] = [
  {
    id: 1,
    description:
      'This blend of sweetened premium matcha green tea, milk and ice—topped off with sweetened whipped cream—inspires a delicious boost and good green vibes.',
    name: 'Matcha Crème Frappuccino',
    price: 9,
    images: [
      '/products/co-1-t.webp',
      '/products/co-2-t.webp',
      '/products/co-3-t.webp'
    ],
    reviews: []
  },
  {
    id: 2,
    description:
      'Hot chocolate taken to a new level—flavors of caramelized white chocolate combined with steamed milk and finished with whipped cream, festive holiday sugar sparkles and crispy white pearls.',
    name: 'Toasted White Hot Chocolate',
    price: 5,
    images: ['/products/co-2-t.webp'],
    reviews: []
  },
  {
    id: 3,
    description: `Summer's favorite berry is the star of this delicious Frappuccino® Blended Beverage—a blend of ice, milk and strawberry puree layered on top of a splash of strawberry puree and finished with vanilla whipped cream.`,
    name: 'Strawberry Crème Frappuccino',
    price: 6.95,
    images: ['/products/co-3-t.webp'],
    reviews: []
  },
  {
    id: 4,
    description: `Caramel syrup meets coffee, milk and ice for a rendezvous in the blender, while whipped cream and buttery caramel sauce layer the love on top. To change things up, try it affogato-style with a hot espresso shot poured right over the top.`,
    name: 'Caramel Frappuccino',
    price: 5.95,
    images: ['/products/co-4-t.webp'],
    reviews: []
  },
  {
    id: 5,
    description: `This tropical-inspired pick-me-up—crafted with sweet mango and dragonfruit flavors and hand-shaken with creamy coconutmilk, ice and a scoop of real diced dragonfruit--creates a refreshing and surprising delight in the fall.`,
    name: 'Dragon Drink',
    price: 5,
    images: ['/products/co-5-t.webp'],
    reviews: []
  }
]
