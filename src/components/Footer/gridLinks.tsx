import {
  Flex, GridItem, Heading,  
} from '@chakra-ui/react';
import { LinkFooter } from './link';

interface LinkFooterProps {
  title: string;
  link1: string;
  link2: string;
  link3: string;
  link4: string;
  link5: string;
}

export function GridLinks({
  link1, link2, link3, link4, link5, title, 
}: LinkFooterProps) {
  return (
    <GridItem w="200px" h="244px" textAlign={'initial'}>
          <Heading fontWeight={'medium'} fontSize={20} mb={'24px'}>
            {title}
          </Heading>
          <Flex flexDirection={'column'}>
            <LinkFooter text={link1} />
            <LinkFooter text={link2} />
            <LinkFooter text={link3} />
            <LinkFooter text={link4} />
            <LinkFooter text={link5} />
          </Flex>
          
        </GridItem>
  );
}
