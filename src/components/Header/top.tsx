import {
  Box, Button, Flex, Link, Text,
} from '@chakra-ui/react';
import { LinkHeader } from './links';
import { Logo } from '../logo';

export function TopHeader() {
  return (
    <Flex
      justify={'space-around'}
      flexDirection={['column', 'row']}
      align={'center'}
    >
      <Logo />

    <Flex align={'center'} flexDirection={['column', 'row']}>
      <Box mr={['0px', '52px']} m={['10px', '0px']}>
        <LinkHeader title="Products" />
        <LinkHeader title="Feature" />
        <LinkHeader title="About" />
        <LinkHeader title="Contact" />
      </Box>

      <Flex fontSize={16} align={'center'}>
        <Link fontWeight={'medium'}>
          Login
        </Link>
        <Box
          w={'1px'}
          bg={'gray.200'}
          contentEditable
          mr={'22px'}
          ml={'22px'}
        />
        <Button
          bg="blue.500"
          borderRadius={'32px'}
          _hover={{
            bg: 'blue.400',
          }}
          _active={{
            bg: 'blue.600',
          }}
        >
          <Text fontWeight={'medium'}>Register</Text>
        </Button>
      </Flex>
    
    </Flex>
  </Flex>
  );
}
