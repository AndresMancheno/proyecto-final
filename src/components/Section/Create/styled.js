import { Card, styled } from '@nextui-org/react';

export const CardSection = styled(Card, {
  minHeight: '200px',
  margin: '0 auto',

  '@sm': {
    minHeight: '200px',
    maxHeight: '250px',
  },

  '@md': {
    minHeight: '250px',
    width: '300px',
  },
});
