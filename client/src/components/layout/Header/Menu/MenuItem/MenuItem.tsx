import { FC } from 'react'

import Link from 'next/link'
import { IMenuLink } from './MenuItem.d';

interface IMenuItem {
	item: IMenuLink
}

const MenuItem: FC<IMenuItem> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>{item.name}</Link>
		</li>
	)
}

export default MenuItem
