import {
  Box, Flex, Heading, Icon, Text, 
} from '@chakra-ui/react';

interface NumberProps {
  icon: any,
  title: string,
  description: string,
}

export function NumberInfos({ title, description, icon }: NumberProps) {
  return (
    <Flex w={['320px', '334px']} h={'92px'}>
      <Flex
        bg={'rgba(255, 255, 255, 0.1)'}
        borderRadius={'100%'}
        w={['70px', '80px']}
        h={['70px', '80px']}
        align={'center'}
        justify={'center'}
      >
        <Icon as={icon} w={'32px'} h={'32px'} color="blue.500" />
      </Flex>
      <Box ml={'24px'}>
        <Heading fontWeight={'bold'} fontSize={40}>{title}</Heading>
        <Text fontSize={16} color="gray.300">{description}</Text>
      </Box>
          
    </Flex>
  );
}
