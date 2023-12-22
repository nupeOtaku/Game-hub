import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGamesQueryStore from '../store';

const SortSelector = () => {
  const data = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
    { value: 'name', label: 'Name' },
  ];

  const sortOrder = useGamesQueryStore((s) => s.gameQuery.sortOrder);
  const setSortdOrder = useGamesQueryStore((s) => s.setSortOrder);

  const currentSortOrder = data.find((item) => item.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {data.map((item) => (
          <MenuItem
            onClick={() => setSortdOrder(item.value)}
            key={item.value}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
