import { Card, CardBody, Heading, Image, HStack } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { name, background_image } = game;
  console.log(game);

  return (
    <Card borderRadius={10} overflow={'hidden'} boxShadow={'lg'}>
      <Image src={background_image} />
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
