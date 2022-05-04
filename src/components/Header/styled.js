import { styled, Text } from '@nextui-org/react';

export const HeaderContainer = styled('div', {
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

export const GreetingUser = styled(Text, {
  textAlign: 'center',
  marginTop: '2rem !important',
});
