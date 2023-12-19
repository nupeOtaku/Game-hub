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
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
        {data?.results.map((gen) => (
          <ListItem
            key={gen.id}
            paddingY={'5px'}
            className={gen.id === selectedGenre?.id ? 'active' : ''}
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
                fontWeight={gen.id === selectedGenre?.id ? 'bold' : 'normal'}
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
