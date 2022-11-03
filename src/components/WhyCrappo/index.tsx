import {
  Box, Flex, Heading, HStack, Image, Text, useBreakpointValue,
} from '@chakra-ui/react';
import { BsGraphUp, BsFillPersonFill } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import { NumberInfos } from './numbersInfos';
import illustration from '../../assets/illustrationWhyCrappo.png';
import { ButtonForm } from '../Form/button';
import { Decoration } from '../decoration';

export function WhyCrappo() {
  const isWideVersion = useBreakpointValue({
    base: false, 
    lg: true,
  });
  return (
    <Flex
      as="section"
      w={'100%'}
      h={'865px'}
      mt={['200px', '100px']}
      flexDir={'column'}
      align={'center'}
    >

      <Flex justify={'center'} align={'center'}>
        <HStack spacing={[0, '150px']} flexDir={['column', 'row']}>
          <NumberInfos icon={BsGraphUp} title="$30B" description="Digital Currency Exchanged" />
          <NumberInfos icon={BsFillPersonFill} title="10M+" description="Trusted Wallets Investor" />
          <NumberInfos icon={BiWorld} title="195" description="Countries Supported" />
        </HStack>
      </Flex>

      <Flex
        align={'flex-start'}
        flexDir={['column', 'row']}
        maxW={['340px', '1402px']}
        h={'auto'}
        mt={['50px', '177px']}
        position={'relative'}
      >
        
          <Image src={illustration} mr={[0, '10px']} />
          {isWideVersion && (
            <Decoration right={'1090px'} height={'600px'} />
          )}
          
          <Flex
            flexDir={'column'}
            w={['350px', '480px']}
            h={'408px'}
            ml={[0, '141px']}
            pl={['10px', 0]}
          >
            
            <Box>
              <Heading
                fontWeight={'bold'}
                fontSize={40}
                mb={'24px'}
              >
                Why you should choose {isWideVersion && (<br />)} CRAPPO
              </Heading>
              <Text fontSize={16} fontWeight={'regular'} mb={'31px'}>
                Experience the next generation cryptocurrency {isWideVersion && (<br />)} platform. No financial borders, extra fees, and fake <br /> reviews.
              </Text>
            </Box>
            <ButtonForm maxW={'165px'} h={'60px'} title="Learn More" />
            
          </Flex>
        
      </Flex>
    </Flex>
  );
}
