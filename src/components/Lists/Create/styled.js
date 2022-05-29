import { Card, styled } from '@nextui-org/react';

export const CardList = styled(Card, {
  height: '350px',
  margin: '0 auto',

  '@sm': {
    height: '350px',
  },

  '@md': {
    height: '350px',
    width: '400px',
  },
});

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'inherit',
  gap: '1rem',
});

export const RowInfo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const StyledList = styled('ul', {
  listStyleType: 'circle',
});

export const ListElement = styled('li', {
  cursor: 'pointer',
});
