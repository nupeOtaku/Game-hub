import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<BsSearch />} />
      <Input
        borderRadius={20}
        variant={`filled`}
        placeholder="Search Games..."

        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
