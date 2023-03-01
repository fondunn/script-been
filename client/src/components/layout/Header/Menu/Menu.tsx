import MenuItem from './MenuItem/MenuItem'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { menu } from './menu.data'

import styles from './Menu.module.scss'

const Menu = () => {
	return (
		<div className={styles.menu}>
			<Link href='/'>
				<Image
					src='/images/logo.png'
					width={100}
					height={100}
					alt='Script Been'
				/>
			</Link>
			<nav>
				<ul>
					{
						menu.map((li) => (
							<MenuItem key={li.name} item={li} />
						))
					}

				</ul>
			</nav>
		</div>
	)
}

export default Menu
