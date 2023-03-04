import { Button, useToast } from '@chakra-ui/react'
import { FC } from 'react'

import { colorPalette } from '@/config/colorPalette'
import { TypeCupSizes } from '@/store/cart/cart.types'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { useActions } from '@/hooks/useActions'
import { useProducts } from '@/hooks/useProducts'

import { IProduct } from '@/types/Product'

interface IAddToCartButtonProps {
  product: IProduct
  selectedSize: TypeCupSizes
}

const AddToCartButton: FC<IAddToCartButtonProps> = ({
  product,
  selectedSize
}) => {
  const { addToCart } = useActions()
  const toast = useToast()
  const onAddToCart = () => {
    addToCart({ product, quantity: 1, size: selectedSize })
    toast({
      title: 'Success.',
      description: 'Product was added to cart',
      status: 'success',
      duration: 3000,
      isClosable: true
    })
  }

  return (
    <div className='text-center'>
      <Button
        color={colorPalette.green}
        onClick={() => onAddToCart()}
        className='tracking-widest'
        marginTop={10}
        borderRadius={20}
        fontWeight={500}
        textTransform='uppercase'
        fontSize={12}
      >
        Add to basket
      </Button>
    </div>
  )
}
type TypeDirection = 'left' | 'right'
interface ICustomNavigationButtonProps {
  direction: TypeDirection
}

const CustomNavigationButton: FC<ICustomNavigationButtonProps> = ({
  direction
}) => {
  const { products } = useProducts()
  const { prevSlide, nextSlide } = useActions()
  const itemsLength = products.length

  const onClickHandler = (e: any, cb: (il: number) => void) => {
    e.stopPropagation()
    e.preventDefault()
    cb(itemsLength)
  }

  return (
    <>
      {direction === 'left' ? (
        <Button
          onClick={e => onClickHandler(e, prevSlide)}
          variant='ghost'
          position='absolute'
          fontSize={50}
          padding={0}
          rounded='xl'
          _hover={{
            backgroundColor: '#084f2f75'
          }}
          left={0}
          zIndex={24}
        >
          <ChevronLeftIcon color='white' />
        </Button>
      ) : (
        <Button
          onClick={e => onClickHandler(e, nextSlide)}
          variant='ghost'
          fontSize={50}
          padding={0}
          rounded='xl'
          _hover={{
            backgroundColor: '#084f2f75'
          }}
          position='absolute'
          right={0}
          zIndex={24}
        >
          <ChevronRightIcon color='white' />
        </Button>
      )}
    </>
  )
}

export { AddToCartButton, CustomNavigationButton }
