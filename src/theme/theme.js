// 1. Import `createTheme`
import { createTheme } from '@nextui-org/react';

export const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      darkBlue: '#1A5D75',
      yellow: '#FFCB77',
      snow: '#FEF9EF',
      error: '#FE6D73',
      gradient:
        'radial-gradient(circle, rgba(244,137,141,1) 0%, rgba(66,139,166,1) 100%)',
    },
    space: {},
    fonts: {},
  },
});
