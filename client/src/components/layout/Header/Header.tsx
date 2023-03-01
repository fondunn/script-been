import Cart from './Cart/Cart'
import styles from './Header.module.scss'
import Menu from './Menu/Menu'
import Search from './Search/Search'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Menu />
			<Search />
			<Cart />
		</header>
	)
}

export default Header
