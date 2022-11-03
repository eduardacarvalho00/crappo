import { Link } from '@chakra-ui/react';

interface LinkProps {
  title: string
}

export function LinkHeader({ title }: LinkProps) {
  return (
      <Link
        fontWeight={'regular'}
        fontSize={[18, 16]}
        pr={['10px', '29px']}
      >
        {title}
      </Link>
  );
}
