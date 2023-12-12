import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenre';
import { getCropImageUrl } from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenre();

  if (isLoading) return <Spinner />;
  if (error || !data) return null;

  const handleGenre = (genre: Genre) => {
    onSelectGenre(genre);
  };

  return (
    <List>
      {data?.map((gen) => (
        <ListItem key={gen.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={'32px'}
              borderRadius={'8px'}
              src={getCropImageUrl(gen.image_background)}
            />
            <Button
              onClick={() => handleGenre(gen)}
              variant={'link'}
              fontSize={'lg'}
            >
              {gen.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
