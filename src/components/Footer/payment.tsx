import { Center, Icon } from '@chakra-ui/react';

interface PaymentProps {
 icon: any;
}

export function Payment({ icon }: PaymentProps) {
  return (
    <Center
      h={'64px'}
      w={['60px', '96px']}
      bg="rgba(224, 224, 224, 0.05)"
      borderRadius={8}
      mt={'40px'}
      mr={[7, 5]}
    >
      <Icon as={icon} color="gray.50" fontSize={50} />
    </Center>
  );
}
