import { FaEthereum } from 'react-icons/fa';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { TbCurrencyLitecoin } from 'react-icons/tb';
import {
  Box, Button, Flex, Heading, HStack, useBreakpointValue, 
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { ButtonForm } from '../Form/button';
import { BannerTrade } from './bannerTrade';
import { Cards } from './cards';

export function Trade() {
  const isWideVersion = useBreakpointValue({
    base: false, 
    lg: true,
  });
  return (
    <Flex
      as="section"
      w={'100%'}
      h={['2300px', '1400px']}
      flexDir={'column'}
      align={'center'}
      bg="gray.100"
    >
      
      <BannerTrade />

      <Box w={['350px', '1400px']} h={'617px'} mt={'316px'}>
        <Heading
          fontWeight={'bold'}
          fontSize={[20, 40]}
          color="blue.800"
          mb={'64px'}
          textAlign="center"
        >
          Trade securely and market the high {isWideVersion && (<br />)}growth cryptocurrencies.
        </Heading>

        <Flex justify={'center'}>
          <HStack spacing={[0, '45px']} flexDir={['column', 'row']}>

            <Cards
              bg="purple.900"
              icon={BsCurrencyBitcoin}
              colorIcon="yellow.500"
              title="Bitcoin"
              colorTitle="gray.50"
              subTitle="BTC"
              description="Digital currency in which a record of transactions is maintained."
              colorDescription="gray.50"
              colorSubTitle="gray.50"
            >
              <ButtonForm title="Start mining" color="gray.50" maxW={'205px'} h={'64px'}>
                  <Box bg="gray.50" borderRadius={'60px'} ml={'24px'} w={'32px'} h={'32px'}> 
                    <ChevronRightIcon color="blue.500" w={7} h={10} pb={'5px'} />
                  </Box>
              </ButtonForm>
            </Cards>

            <Cards
              bg="gray.50"
              icon={FaEthereum}
              colorIcon="blue.400"
              title="Ethereum"
              colorTitle="blue.800"
              subTitle="ETH"
              description="Blockchain technology to create and run decentralized digital applications."
              colorDescription="gray.700"
              colorSubTitle="gray.500"
            >
              <Button w={'64px'} h={'64px'} color="rgba(43, 7, 110, 0.2)" border={'2px'} borderRadius={'100%'}>
                <ChevronRightIcon borderRadius={'32px'} color="blue.500" w={'48px'} h={'48px'} />
              </Button>
            </Cards>

            <Cards
              bg="gray.50"
              icon={TbCurrencyLitecoin}
              colorIcon="green.300"
              title="Ethereum"
              colorTitle="blue.800"
              subTitle="ETH"
              description="Blockchain technology to create and run decentralized digital applications."
              colorDescription="gray.700"
              colorSubTitle="gray.500"
            >
              <Button
                w={'64px'}
                h={'64px'}
                color="rgba(43, 7, 110, 0.2)"
                border={'2px'}
                borderRadius={'100%'}
              >
                <ChevronRightIcon
                  borderRadius={'32px'}
                  color="blue.500"
                  w={'48px'}
                  h={'48px'} 
                />
              </Button>
            </Cards>

          </HStack>

        </Flex>

      </Box>
    </Flex>
  );
}
