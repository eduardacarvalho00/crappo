import { Button, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ButtonProps {
  title: string,
  children?: ReactNode,
  maxW: string | string[];
  h: string | string[];
  color?: string,
}

export function ButtonForm({
  title, children, maxW, h, color,
}: ButtonProps) {
  return (
    <Button
      bg="blue.500"
      borderRadius={'32px'}
      w={maxW}
      h={h}
      _hover={{
        bg: 'blue.400',
      }}
      _active={{
        bg: 'blue.600',
      }}
    >
      <Text fontWeight={'medium'} fontSize={18} color={color}>{title}</Text>
      
      {children}
    </Button>
  );
}
