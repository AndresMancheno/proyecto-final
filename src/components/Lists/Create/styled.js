import { Card, styled } from '@nextui-org/react';

export const CardList = styled(Card, {
  maxHeight: '350px',
  minHeight: '350px',
  margin: '0 auto',

  '@sm': {
    maxHeight: '350px',
    minHeight: '350px',
  },

  '@md': {
    minHeight: '350px',
    maxHeight: '350px',
    minWidth: '400px',
    maxWidth: '400px',
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
