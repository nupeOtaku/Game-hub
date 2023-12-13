import { Image, ImageProps } from '@chakra-ui/react';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import bullseye from '../assets/bulls-eye.webp';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: bullseye, alt: 'Exceptional', boxSize: '35px' },
    4: { src: thumbsUp, alt: 'Recommended', boxSize: '25px' },
    5: { src: meh, alt: 'Meh', boxSize: '25px' },
  };

  if (rating < 3) return null;

  return <Image marginTop={3} {...emojiMap[rating]} />;
};

export default Emoji;
