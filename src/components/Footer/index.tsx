import {
  Box, Flex, Grid, GridItem, Heading, HStack, Icon, Text,
} from '@chakra-ui/react';
import { SiBitcoin, SiMastercard, SiVisa } from 'react-icons/si';
import {
  BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube, 
} from 'react-icons/bs';
import { Logo } from '../logo';
import { GridLinks } from './gridLinks';
import { Payment } from './payment';

export function Footer() {
  return (
    <Flex
      as="footer"
      align={'center'}
      justify={'center'}
      w={'100%'}
      h={['1100px', '552px']}
      flexDirection={['column']}
    >
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}
        gap={[8, 0]}
        justifyItems={'start'}
        w={['300px', '1200px']}
      >

        <GridItem w="50px" h="auto">
          <Logo />
        </GridItem>

        <GridLinks
          title="Quick Link"
          link1="Home"
          link2="Products"
          link3="About"
          link4="Features"
          link5="Contact" 
        />

        <GridLinks
          title="Resources"
          link1="Download Whitepapper"
          link2="Smart Token"
          link3="Blockchain Explorer"
          link4="Crypto API"
          link5="Interest" 
        />

        <GridItem w="350px" h="200px">
          <Heading
            fontWeight={'medium'}
            fontSize={32}
            lineHeight={'45px'}
          >
            We accept following payment systems
          </Heading>
          <Flex>
            <Payment icon={SiVisa} />
            <Payment icon={SiMastercard} />
            <Payment icon={SiBitcoin} />
          </Flex>
         
        </GridItem>
      </Grid> 
      
      <Flex
        w={['300px', '1200px']}
        mt={['50px', '120px']}
        justify={'space-between'}
        flexDirection={['column', 'row']}
        align={'center'}
      >
        <Box>
          <Text fontSize={16}>©2021 CRAPPO. All rights reserved</Text>
        </Box>
        
        <Box fontSize={24}>
          <HStack spacing={5}>
            <Icon as={BsFacebook} />
            <Icon as={BsInstagram} />
            <Icon as={BsYoutube} />
            <Icon as={BsTwitter} />
            <Icon as={BsLinkedin} />
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
}
