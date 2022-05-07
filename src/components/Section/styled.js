import { Card, styled, Text } from '@nextui-org/react';

export const TitleSectionContainer = styled('div', {
  marginTop: '2rem',
  marginRight: '2rem',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
});

export const GridSectionContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1,1fr)',
  gridTemplateRows: 'minmax(100px,auto)',
  gridGap: '20px',
  marginTop: '5rem',
  marginLeft: '3rem',
  marginRight: '3rem',

  '@sm': {
    gridTemplateColumns: 'repeat(2,1fr)',
  },

  '@md': {
    gridTemplateColumns: 'repeat(3,1fr)',
  },
  '@lg': {
    gridTemplateColumns: 'repeat(4,1fr)',
  },
});

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
