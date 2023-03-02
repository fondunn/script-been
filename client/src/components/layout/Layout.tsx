import { FC, PropsWithChildren } from 'react'

import Header from '@/components/layout/Header/Header'

// import { IChildrenProps } from '@/types/ChildrenProps'
import styles from './Layout.module.scss'
import Meta from './Meta/Meta'

import { ISeo } from '@/types/seo.interface'

// import { ILayout } from '@/types/layout.interface'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />
      <div className={styles.layout}>
        <main>
          <Header />
          <section className={styles.content}>{children}</section>
        </main>
      </div>
    </>
  )
}

export default Layout
