import {
  Flex, Box, Heading, Text, Input, HStack, Button, Image, useBreakpointValue,
} from '@chakra-ui/react';
import bitcoinVector from '../../assets/bitcoinVector.png';
import ethereumVector from '../../assets/ethereumVector.png';

export function StartMining() {
  const isWideVersion = useBreakpointValue({
    base: false, 
    lg: true,
  });
  return (
    <Flex
      w={'100%'}
      h={'392px'}
      bg={'linear-gradient(180deg, #2B076E 0%, #0D0D2B 100%)'}
      justify={'center'}
      align={'center'}
    >
      <Flex
        w={['300px', '1200px']}
        h={['390px', '216px']}
        justify={'space-evenly'}
        flexDirection={['column', 'row']}
        align={'center'}
        bg="blue.500"
        borderRadius={16}
      >
        
        <Box w={['250px', '501px']} h={'120px'} position={'relative'}>
          {isWideVersion && (
            <Image src={ethereumVector} position={'absolute'} bottom={'-48px'} />
          )}
          
          <Heading
            fontWeight={'bold'}
            fontSize={[20, 32]}
            mb={'16px'}
          >
            Start mining now
          </Heading>
          
          <Text fontWeight={'regular'} fontSize={16}>
            Join now with CRAPPO to get the latest news <br /> and start mining now
          </Text>
        </Box>

        <Box w={'566px'} h={'55px'} position={'relative'}>
          {isWideVersion && (
            <Image src={bitcoinVector} position={'absolute'} left={'450px'} />
          )}
          
          <HStack spacing={[0, 10]} flexDirection={['column', 'row']}>
            <Input
              w={['250px', '374px']}
              variant="flushed"
              placeholder="Enter your email"
              mb={[6, 0]} 
            />
            <Button borderRadius={'3xl'} w={'152px'} h={'55px'} colorScheme={'whiteAlpha'}>
              <Text color="blue.800" fontSize={18} fontWeight={'medium'}>Subscribe</Text>
            </Button>
          </HStack>
         
        </Box>
      </Flex>
    </Flex>
  );
}
