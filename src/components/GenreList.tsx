import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenre';
import { getCropImageUrl } from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenre();

  if (isLoading) return <Spinner />;
  if (error || !data) return null;

  const handleGenre = (genre: Genre) => {
    onSelectGenre(genre);
  };

  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((gen: Genre) => (
          <ListItem
            key={gen.id}
            paddingY={'5px'}
            className={gen.id === selectedGenreId ? 'active' : ''}
          >
            <HStack>
              <Image
                boxSize={'32px'}
                borderRadius={'8px'}
                src={getCropImageUrl(gen.image_background)}
                objectFit={'cover'}
              />
              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
                fontWeight={gen.id === selectedGenreId ? 'bold' : 'normal'}
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
    </>
  );
};

export default GenreList;
