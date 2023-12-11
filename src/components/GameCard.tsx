import { Card, CardBody, Heading, Image, HStack } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import { getCropImageUrl } from '../services/image-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { name, background_image } = game;
  console.log(getCropImageUrl(background_image));

  return (
    <Card borderRadius={10} overflow={'hidden'} boxShadow={'lg'}>
      <Image src={getCropImageUrl(background_image)} />
      <CardBody>
        <Heading fontSize={'2xl'}>{name}</Heading>
        <HStack justifyContent={'space-between'} marginTop={5}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform) || []}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
