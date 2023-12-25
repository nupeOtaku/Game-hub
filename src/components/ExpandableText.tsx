import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expand, setExpand] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) {
    return <Text> {children}</Text>;
  }

  const summary = expand ? children : children.substring(0, limit) + '...';
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
