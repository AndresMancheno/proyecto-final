import { styled } from '@nextui-org/react';

export const StyledTable = styled('table', {
  margin: '0 auto',
  marginTop: '2rem',

  '@smMax': {
    display: 'block',
    overflowX: 'scroll',
  },
});

export const NoTaskContainer = styled('div', {
  textAlign: 'center',
  marginTop: '1rem',
});
