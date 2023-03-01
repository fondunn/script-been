import { FC } from 'react'
import styles from './Search.module.scss'

import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

const Search: FC = () => {


	return (<div className={styles.search}>
		<InputGroup >
			<InputLeftElement pointerEvents='none' children={<SearchIcon color='gray.500' />} />
			<Input
				variant='flushed'
				type='search'
				placeholder='Search'
				_focus={{
					boxShadow: 'none',
					ring: 0
				}}
				_focusVisible={{
					borderColor: '#008D64'
				}}
			/>
		</InputGroup>
	</div>)
}

export default Search
