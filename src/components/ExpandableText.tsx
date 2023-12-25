import { Button, Text } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

const ExpandableText = ({ children }: Props) => {
  const [expand, setExpand] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (typeof children === 'string' && children.length <= limit) {
    return <Text> {children}</Text>;
  }

  const summary = expand
    ? children
    : (children as string).substring(0, limit) + '...';
  return (
    <Text>
      {summary}
      <Button
        size={'xs'}
        marginLeft={2}
        fontWeight={'bold'}
        colorScheme="yellow"
        onClick={() => setExpand(!expand)}
      >
        {expand ? 'Show Less' : 'Show More'}{' '}
      </Button>
    </Text>
  );
};

export default ExpandableText;
