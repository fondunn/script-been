import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Dispatch, FC, SetStateAction } from 'react'

import { sortingData } from './sorting.data'
import { EnumSorting } from './sorting.interface'
import { ChevronDownIcon } from '@chakra-ui/icons'

export interface ISorting {
  sortType: EnumSorting
  setSortType: Dispatch<SetStateAction<EnumSorting>>
}

const Sorting: FC<ISorting> = ({ sortType, setSortType }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {/* {sortType} */}
        {sortingData.find(sort => sort.value === sortType)?.label}
      </MenuButton>
      <MenuList>
        {sortingData.map(({ label, value }) => (
          <MenuItem key={label} onClick={() => setSortType(value)}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default Sorting
