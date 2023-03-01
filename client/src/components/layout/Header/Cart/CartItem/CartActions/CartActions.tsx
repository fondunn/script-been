import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'

import { AddIcon, MinusIcon } from '@chakra-ui/icons'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/types/cart-item.interface'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
  const { cart } = useCart()
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10
    })
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()
  const { removeFromCart, changeQuantity } = useActions()
  return (
    <div className='mt-3'>
      <HStack>
        <Button
          {...dec}
          onClick={() => changeQuantity({ id: item.id, type: 'decrease' })}
        >
          <MinusIcon fontSize={13} />
        </Button>
        <Input
          {...input}
          focusBorderColor='green.400'
          readOnly
          _hover={{ cursor: 'default' }}
          value={cart.find(i => i.id === item.id)?.quantity}
        />
        <Button
          {...inc}
          onClick={() => changeQuantity({ id: item.id, type: 'increase' })}
        >
          <AddIcon fontSize={13} />
        </Button>
      </HStack>
      <Button
        variant='unstyled'
        color='#F23C3D'
        marginTop={4}
        size='sm'
        opacity={0.8}
        onClick={() => removeFromCart({ id: item.id })}
      >
        Remove
      </Button>
    </div>
  )
}

export default CartActions
