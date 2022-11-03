import { Box } from '@chakra-ui/react';

interface DecorationProps {
  top?: string | number;
  right?: string;
  left?: string;
  height: string;
}

export function Decoration({
  top, height, right, left, 
}: DecorationProps) {
  return (
    <Box
      bg={'linear-gradient(180.09deg, rgba(255, 255, 255, 0) 0.49%, rgba(255, 255, 255, 0.04) 39.06%, rgba(255, 255, 255, 0) 99.92%)'}
      w={'120px'}
      top={top}
      h={height}
      right={right}
      left={left}
      position={'absolute'}
      css={{
        transform: ' rotate(-120deg)',
      }} />
  );
}
