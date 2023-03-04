import { FC, useState } from 'react'

import Carousel from '@/components/ui/Catalog/Carousel/Carousel'

import Sorting from '../Sorting/Sorting'
import { EnumSorting } from '../Sorting/sorting.interface'

const Catalog: FC = () => {
  const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.DATE_ASC)
  return (
    <div>
      <div className='text-right mt-10'>
        <Sorting sortType={sortType} setSortType={setSortType} />
      </div>
      <Carousel />
    </div>
  )
}

export default Catalog
