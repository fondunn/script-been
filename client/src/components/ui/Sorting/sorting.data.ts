import { EnumSorting, ISortingItem } from './sorting.interface'

export const sortingData: ISortingItem[] = [
  {
    label: 'Newest',
    value: EnumSorting.DATE_ASC
  },
  {
    label: 'Oldest',
    value: EnumSorting.DATE_DESC
  },
  {
    label: 'Price: high to low',
    value: EnumSorting.PRICE_ASC
  },
  {
    label: 'Price: low to high',
    value: EnumSorting.PRICE_DESC
  }
]
