import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#000000',
      800: '#111111',
      700: '#828282',
      600: '#CFCFCF',
      500: '#BDBDBD',
      300: '#E0E0E0',
      200: '#F2F2F2', 
      100: '#F8F9FB',
      50: '#FFFFFF', 
    },
    blue: {
      800: '#0D0D2B',
      700: '#35068C',
      500: '#3671E9',
      400: '#1181E8',
      100: '#42FFFF',
    },
    purple: {
      900: '#2B076E',
      800: '#491F98',
    },
    yellow: {
      500: '#F9AA4B',
    },
    green: {
      300: '#59C19C',
    },
  },
  fonts: {
    heading: 'Rubik',
    body: 'Rubik',

  },
  styles: {
    global: {
      'html::-webkit-scrollbar': {
        bg: 'blackAlpha.300',
        w: '2',
      },
      'html::-webkit-scrollbar-thumb': {
        background: 'blue.500',
        borderRadius: '5px',
      },
      body: {
        bg: 'blue.800',
        color: 'gray.50',
      },
      '*': {
        scrollBehavior: 'smooth',
      },
    },
  },
});
