import {
  HStack, Link, Heading, Image,
} from '@chakra-ui/react';
import logo from '../assets/logo.png';

export function Logo() {
  return (
    <HStack spacing={'16px'}>
      <Image src={logo} />
      <Link>
        <Heading fontWeight={'semibold'} fontSize={18}>CRAPPO</Heading>
      </Link>
    </HStack>
  );
}
