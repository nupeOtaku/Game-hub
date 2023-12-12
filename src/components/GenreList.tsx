import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import { getCropImageUrl } from '../services/image-url';

const GenreList = () => {
  const { data, isLoading, error } = useGenre();

  if (isLoading) return <Spinner />;
  if (error || !data) return null;

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
            <Text fontSize={'lg'}>{gen.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
