import { styled, Text } from '@nextui-org/react';

export const TitleList = styled('div', {
  marginTop: '2rem',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',

  variants: {
    addMarginRight: {
      true: {
        marginRight: '2rem',
      },
    },
  },
});

export const GridListContainer = styled('div', {
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
    gridTemplateColumns: 'repeat(3,1fr)',
  },
});

export const GreetingUser = styled(Text, {
  textAlign: 'center',
  marginTop: '2rem !important',
  marginBottom: '2rem !important',
});
