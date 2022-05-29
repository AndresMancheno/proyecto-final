import { styled } from '@nextui-org/react';

export const HeaderContainer = styled('div', {
  background:
    'linear-gradient(90deg, rgba(26,83,92,1) 0%, rgba(76,201,192,1) 26%, rgba(55,203,192,1) 77%)',
  backgroundColor: '$darkBlue',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'space-between',
  padding: '1rem',
});

export const HeaderItemContainer = styled('div', {
  variants: {
    marginLeft: {
      true: {
        marginLeft: '1rem',
      },
    },
    marginRight: {
      true: {
        marginRight: '2rem',
      },
    },
  },
});

export const RightHeaderSide = styled('div', {
  display: 'flex',
  alignItems: 'center',
});
