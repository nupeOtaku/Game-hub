import { Badge } from '@chakra-ui/react';

interface Props {
  score?: number;
}

const CriticScore = ({ score }: Props) => {
  if (!score) return null;
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge
      fontSize={'14px'}
      paddingX={2}
      borderRadius={'px'}
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
