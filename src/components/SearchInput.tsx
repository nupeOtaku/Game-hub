import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGamesQueryStore from '../store';

const SearchInput = () => {
  const setSearchText = useGamesQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (ref.current) {
      setSearchText(ref.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<BsSearch />} />
        <Input
          borderRadius={20}
          variant={`filled`}
          placeholder="Search Games..."
          ref={ref}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
