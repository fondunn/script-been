export enum EnumSorting {
  PRICE_ASC = 'Hightest price',
  PRICE_DESC = 'Lowest price',
  DATE_ASC = 'Newest',
  DATE_DESC = 'Oldest'
}

export interface ISortingItem {
  label: 'Price: high to low' | 'Price: low to high' | 'Newest' | 'Oldest'
  value: EnumSorting
}
