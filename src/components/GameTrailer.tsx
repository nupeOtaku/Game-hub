import { Spinner } from '@chakra-ui/react';
import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId?: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading } = useTrailers(gameId);

  const first = data?.results[0];

  if (isLoading) return <Spinner />;

  return first ? (
    <video src={first.data[480]} controls poster={first.preview} />
  ) : null;
};

export default GameTrailer;
