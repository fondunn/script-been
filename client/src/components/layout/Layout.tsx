import React, { FC } from 'react'

import Header from '@/components/layout/Header/Header'
import { IChildrenProps } from '@/types/ChildrenProps'

import styles from './Layout.module.scss'

const Layout: FC<IChildrenProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout