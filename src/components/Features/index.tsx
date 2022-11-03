import {
  Box, Heading, Flex, Text, Icon, Image, StatHelpText, StatArrow, Stat, useBreakpointValue, 
} from '@chakra-ui/react';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import graphic from '../../assets/bitcoinGraphic.png';
import graphicStatistc from '../../assets/graphicStatistic.png';
import graphicTable from '../../assets/tableFeatures.png';
import { CardText } from './cardsText';

export function Features() {
  const isWideVersion = useBreakpointValue({
    base: false, 
    lg: true,
  });
  return (
    <Flex
      as="section"
      w={'100%'}
      h={['2200px', '1874px']}
      bg="purple.900"
      flexDir={'column'}
      align={'center'}
    >
      <Heading
        fontWeight={'bold'}
        fontSize={[30, 40]}
        textAlign={'center'}
        p={['40px', '100px']}
      >
        Market sentiments, portfolio, and run {isWideVersion && (<br />)}the infrastructure of your choice
      </Heading>

      <Flex align={'center'} flexDirection={['column', 'row']}>
        <CardText
          title="Invest Smart"
          description="Get full statistic information about the behaviour of buyers and sellers will help you to make the decision." 
        />

        <Box
          w={['300px', '580px']}
          h={'298px'}
          borderRadius={'32px'}
          bg="blue.700"
          ml={[0, '100px']}
          position={'relative'}
        >
          
          <Flex
            w={'100%'}
            justify={'space-around'}
            align={'center'}
            mt={'40px'}
          >
            <Flex flexDir={'row'} align={'center'}>

              <Icon
                as={BsCurrencyBitcoin}
                fontSize={[40, 50]}
                mr={'16px'}
                bg="yellow.500"
                borderRadius={'100%'} 
              />

                <Flex flexDir={'column'}>
            
                  <Flex align={'center'}>
                    <Heading fontWeight={'bold'} fontSize={24} mr={2}>Bitcoin</Heading>
                    <Text fontWeight={'semibold'} fontSize={16} color="gray.600">BTC</Text>
                  </Flex>

                  <Text fontSize={14} color="gray.200" fontWeight={'regular'}>0.00080 BTC</Text>
                </Flex>
            </Flex>
            <Text fontSize={14} fontWeight={'medium'} color="blue.100">+125%</Text>
          </Flex>
          <Image src={graphic} ml={10} mt={'15px'} w={['230px', 'auto']} />

          <Box
            bg="purple.800"
            w={['120px', '178px']}
            h={'184px'}
            borderRadius={'16px'}
            ml={[5, '64px']}
            p={'16px'}
          >
            <Heading fontWeight={'semibold'} fontSize={[18, 20]} pt={3}>Increase in Trade</Heading>
            <Stat mt={'16px'}>
              <StatHelpText fontWeight={'bold'} fontSize={[20, 24]}>
                +75%
                <StatArrow type="increase" ml={4} />
              </StatHelpText>
            </Stat>
            <Text fontSize={16} color="gray.200">Sell option</Text>
          </Box>

          <Box
            bg="purple.800"
            w={['130px', '169px']}
            h={'84px'}
            borderRadius={'16px'}
            ml={'64px'}
            p={['13px', '16px']}
            textAlign={'center'}
            position={'absolute'}
            left={['100px', '300px']}
            bottom={'-40px'}
          >
            <Heading fontWeight={'bold'} fontSize={[20, 24]}>$15.32</Heading>
            
            <Text fontSize={16} color="gray.200">Price in dollar</Text>
          </Box>
        </Box>

      </Flex>

      <Flex align={'center'} mt={'204px'} flexDirection={['column', 'row']}>
        <Box
          w={['300px', '710px']}
          h={['300px', '453px']}
          mr={[0, '89px']}
          borderRadius={31}
        >
          <Image src={graphicStatistc} h={['270px', '100%']} />
        </Box>

        <CardText
          title="Detailed Statistics"
          description="View all mining related information in realtime, at any point at any location and decide which polls you want to mine in." 
        />
      </Flex>

      <Flex align={'center'} mt={'131px'} flexDirection={['column', 'row']}>
        <CardText 
          title="Grow your profit and track your investments" 
          description="Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments."
        />
        {isWideVersion && (
          <Box>
            <Image src={graphicTable} p={[3, 0]} />
          </Box>
        )}
        
      </Flex>

    </Flex>
  );
}
