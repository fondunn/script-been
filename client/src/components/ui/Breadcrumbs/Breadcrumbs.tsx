import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { FC } from 'react'

import Link from 'next/link'

import { IProductDetails } from '@/types/Product'

const Breadcrumbs: FC<IProductDetails> = ({ product }) => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href='/'>
          Features
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage={true}>
        <span className='cursor-default text-beige'>{product.name}</span>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default Breadcrumbs
