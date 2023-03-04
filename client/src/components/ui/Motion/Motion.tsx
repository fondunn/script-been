import { FC, PropsWithChildren } from 'react'

import cn from 'clsx'
import { motion } from 'framer-motion'

export interface IMotionMain {
  isActive: boolean
  activeStyle: string
  inactiveStyle: string
  index: number
  aria: string
  role: string
  onClickHandler: (e: any, index: number) => void
}

const MotionMain: FC<PropsWithChildren<IMotionMain>> = ({
  isActive,
  activeStyle,
  inactiveStyle,
  index,
  onClickHandler,
  aria,
  role,
  children
}) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={isActive ? { scale: 1.1 } : { scale: 1 }}
      transition={{ type: 'tween', duration: 0.5 }}
      className={cn(inactiveStyle, {
        [activeStyle]: isActive
      })}
      aria-label={aria}
      role={role}
      onClick={e => onClickHandler(e, index)}
    >
      {children}
    </motion.div>
  )
}

const MotionWithOpacity: FC<PropsWithChildren<{ duration?: number }>> = ({
  duration = 0.5,
  children
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'tween', duration }}
    >
      {children}
    </motion.div>
  )
}
const MotionWithScale: FC<PropsWithChildren<{ duration?: number }>> = ({
  duration = 0.5,
  children
}) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{ type: 'spring', duration }}
    >
      {children}
    </motion.div>
  )
}

export { MotionMain, MotionWithOpacity, MotionWithScale }
