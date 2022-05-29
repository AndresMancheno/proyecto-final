import { styled, Text } from '@nextui-org/react';

export const HeaderContainer = styled('div', {
  textAlign: 'center',
  marginTop: '1rem',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
});

export const HeaderTitle = styled(Text, {
  marginRight: '2rem !important',
});

export const StyledSelect = styled('select', {
  width: 'max-content',
});
