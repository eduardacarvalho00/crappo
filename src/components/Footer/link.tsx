import { Link } from '@chakra-ui/react';

interface LinkFooterProps {
  text: string;
}

export function LinkFooter({ text }: LinkFooterProps) {
  return (
    <Link fontWeight={'regular'} fontSize={16} lineHeight={'40px'}>{text}</Link>
  );
}
