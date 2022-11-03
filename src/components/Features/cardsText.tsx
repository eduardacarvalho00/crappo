import { Heading, Box, Text } from '@chakra-ui/react';
import { ButtonForm } from '../Form/button';

interface CardTextProps {
  title: string,
  description: string,
}

export function CardText({ title, description }: CardTextProps) {
  return (
    <Box w={['300px', '454px']} mb={[10, 0]}>
     <Heading
       fontWeight={'bold'}
       fontSize={32}
       mb={'24px'}
      >
        {title}
      </Heading>
      <Text fontWeight={'regular'} fontSize={16} color="gray.300" mb={'32px'}>
        {description}
      </Text>
      <ButtonForm title="Learn More" maxW={'161px'} h={'59px'} />
    </Box>
  );
}
