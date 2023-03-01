import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/react'
import { FC, useRef, useState } from 'react'

import styles from './Cart.module.scss'
import { CartItem } from './CartItem/CartItem'

import { useCart } from '@/hooks/useCart'

import { formatToCurrency } from '@/utils/formatToCurrency'

const Cart: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const focusRef = useRef<HTMLButtonElement>(null)
  const closeHandler = () => {
    setIsOpen(false)
  }

  const { cart, total } = useCart()

  return (
    <div className={styles['wrapper-cart']}>
      <button
        className={styles.heading}
        onClick={() => setIsOpen(!isOpen)}
        ref={focusRef}
      >
        <span className={styles.badge}>{cart.length}</span>
        <span className={styles.text}>MY BASKET</span>
      </button>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={closeHandler}
        finalFocusRef={focusRef}
      >
        <DrawerOverlay />
        <DrawerContent aria-label='modal window'>
          <DrawerCloseButton />
          <DrawerHeader>My Basket</DrawerHeader>

          <DrawerBody>
            <div className={styles.cart}>
              {cart.length ? (
                cart.map(el => <CartItem key={el.product.id} item={el} />)
              ) : (
                <div>Basket is empty</div>
              )}
            </div>
          </DrawerBody>
          <DrawerFooter
            justifyContent='space-between'
            borderTopColor={'#F7F4F0'}
            borderTopWidth={1}
          >
            <div className={styles.footer}>
              <div>Total:</div>
              <div>{formatToCurrency(total)}</div>
            </div>
            <Button colorScheme='green'>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Cart
