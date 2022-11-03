import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Flex, Heading, Menu, MenuButton, Button, MenuList, MenuItem, Text, Box, Image,
} from '@chakra-ui/react';
import { ButtonForm } from '../Form/button';

export function BannerTrade() {
  return (
    <Flex
      position={'relative'}
      w={'100%'}
      h={['450px', '375px']}
      flexDir={'column'}
      align={'center'}
      bg="blue.800"
      pt={['50px', 0]}
      >
        <Heading
          fontWeight={'bold'}
          fontSize={[30, 40]}
          mb={'24px'}
          textAlign={'center'}
        >
          Check how much you can earn
        </Heading>
        <Text
          color="gray.300"
          fontSize={[16, 18]}
          w={['350px', '622px']}
          textAlign={'center'}
        >
          Let`s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.
        </Text>

      <Box
        position={'absolute'}
        mt={'200px'}
        w={['300px', '942px']}
        h={['450px', '291px']}
        borderRadius={'32px'}
        bg="gray.100"
      >

        <Flex
          color="blue.800"
          fontSize={20}
          h={['230px', '155px']}
          flexDir={['column', 'row']}
          align={'center'}
          justify={'center'}
        >
          <Text w={['-moz-max-content', '450px']} h={['60px', '38px']}>
            Enter your hash rate
          </Text>

          <Box mr={[0, '48px']} mb={['20px', 0]}>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                w={['-moz-max-content', '200px']}
                h={'38px'}
                bg="gray.100"
                fontWeight={'regular'}
              >
                <Text mr={'131px'} fontSize={20}>TH/s</Text>
              </MenuButton>
              <MenuList>
                <MenuItem minH="48px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://placekitten.com/100/100"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <span>Fluffybuns the Destroyer</span>
                </MenuItem>
                <MenuItem minH="40px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://placekitten.com/120/120"
                    alt="Simon the pensive"
                    mr="12px"
                  />
                  <span>Simon the pensive</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <ButtonForm
            maxW={['130px', '147px']}
            h={'59px'}
            title="Calculate"
            color="gray.50"
          />
          
        </Flex>

        <Box h={['200px', '216px']}>

          <Box pl={[0, '48px']} textAlign={['center', 'initial']}>
            <Text
              fontWeight={'medium'}
              fontSize={16}
              color="blue.500"
              mb={'5px'}
            >
              ESTIMATED 24 HOUR REVENUE:
            </Text>
            <Heading
              fontWeight={'bold'}
              fontSize={[30, 32]}
              color="blue.800"
              mb={'5px'}
            >
              0.055 130 59 ETH 
              <span style={{ color: '#3671E9' }}> ($1275)</span>
              
            </Heading>

            <Text
              fontWeight={'regular'}
              fontSize={16}
              color="gray.700"
            >
              Revenue will change based on mining difficulty and Ethereum price.
            </Text>
          </Box>
          
        </Box>

      </Box>
      </Flex>
  );
}
