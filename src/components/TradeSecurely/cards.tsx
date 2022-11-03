import {
  Flex, Icon, Heading, Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

interface CardsProps {
  bg: string;
  icon: any;
  colorIcon: string;
  colorTitle: string;
  title: string;
  subTitle: string;
  colorSubTitle: string;
  description: string;
  colorDescription: string;
  children: ReactElement;
}

export function Cards({
  bg, children, description, icon, title, subTitle, colorTitle, colorIcon, colorDescription, colorSubTitle,
}: CardsProps) {
  return (
    <Flex
      flexDir={'column'}
      align={'center'}
      w={['320px', '370px']}
      h={'430px'}
      bg={bg}
      borderRadius={'16px'}
      mb={[0, 10]}
    >
      <Flex
        justify={'center'}
        align={'center'}
        borderRadius={'100%'}
        w={'80px'}
        h={'80px'}
        mt={'48px'}
        bg={colorIcon} 
      >
        <Icon
          w={'45px'}
          h={'45px'}
          as={icon}
          color="gray.50"
        />
      </Flex>
      
      <Flex mt={'48px'} align={'center'}>
        <Heading
          fontWeight={'bold'}
          fontSize={32}
          color={colorTitle}
        >
          {title}
        </Heading>
        <Text
          fontWeight={'medium'}
          fontSize={'18'}
          pl={'8px'}
          color={colorSubTitle}
        >
          {subTitle}
        </Text>
      </Flex>

      <Text
        w={'322px'}
        textAlign={'center'}
        mt={'16px'}
        mb={'30px'}
        fontWeight={'regular'}
        fontSize={16}
        color={colorDescription}
        lineHeight={'28px'}
      > 
        {description}
      </Text>  
      {children}
    </Flex>
  );
}
