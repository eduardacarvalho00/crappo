import {
  Box, Flex, Heading, Text, Image, useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { TopHeader } from './top';
import illustration from '../../assets/illustrationHeader.png';
import { Decoration } from '../decoration';
import { ButtonForm } from '../Form/button';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false, 
    lg: true,
  });
  return (
    <Box
      as="header"
      w={'100%'}
      h={'850px'}
      mt={['40px', '60px']}
    >
      <TopHeader />
    
      <Flex
        mt={'51px'}
        justify={'center'}
        flexDirection={['column', 'row']}
        align={'center'}
      > 
        
        <Flex
          h={'auto'}
          w={['320px', '588px']}
          flexDirection={'column'}
          align={'flex-start'}
          mr={['0px', '120px']}
          mb={['25px', '0px']}
        >

          <Flex
            bg={'rgba(255, 255, 255, 0.1)'}
            borderRadius={32}
            fontSize={[14, 16]}
            w={['320px', '365px']}
            h={['30px', '40px']}
            align={'center'}
            mt={['40px', '98px']}
           
          >
            <Text
              bg="gray.50"
              borderRadius={32}
              color="gray.900"
              fontWeight={'medium'}
              w={'113px'}
              h={['25px', '32px']}
              textAlign={'center'}
              lineHeight={['28px', '34px']}
            >
              75% SAVE
            </Text>

            <Text fontWeight={'regular'} textAlign={'center'} pl={['10px', '16px']}>
              For the Black Friday weekend
            </Text>
          </Flex>

          <Box mt={'24px'}>
            <Heading fontWeight={'bold'} fontSize={['40px', '64px']} h={'228px'}>
              Fastest & secure platform to invest in crypto
            </Heading>
            <Text fontWeight={'regular'} color="gray.300" mt={['10px', '24px']} mb={'24px'} fontSize={[14, 16]}>
              Buy and sell cryptocurrencies, trusted by 10M wallets 
              {isWideVersion && (<br />)} with over $30 billion in transactions.
            </Text>
          </Box>

          <ButtonForm
            title="Try for FREE"
            maxW={['170px', '202px']}
            h={['55px', '64px']}
          >
            <Box bg="gray.50" borderRadius={'60px'} ml={'24px'} w={'32px'} h={'32px'}> 
              <ChevronRightIcon color="gray.900" w={7} h={10} pb={'5px'} />
            </Box>
          </ButtonForm>
          
        </Flex>
        <Box w={['300px', 'auto']} position={'relative'}>
          <Image src={illustration} /> 
          {isWideVersion && (
            <>
              <Decoration top={'150px'} height="998px" right="780px" />
              <Decoration top="130px" height="998px" right="150px" />
            </>
            
          )}
            
        </Box>
             
      </Flex>
      </Box>
  );
}
