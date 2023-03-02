import { FC, PropsWithChildren } from 'react'

import cn from 'clsx'

const Heading: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className
}) => {
  return (
    <h1 className={cn('font-bold text-green text-4xl', className)}>
      {children}
    </h1>
  )
}

export default Heading
