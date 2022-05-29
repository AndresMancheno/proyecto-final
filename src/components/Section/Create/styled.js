import { Card, Row, styled } from '@nextui-org/react';

export const CardSection = styled(Card, {
  transform: 'scale(.95)',
  minHeight: '300px',
  minWidth: '100px',
  margin: '0 auto',

  '@sm': {
    height: '300px',
    width: '300px',
  },

  '&:hover': {
    transform: 'scale(1)',
  },
});

export const StyledRow = styled(Row, {
  display: 'block',

  '@xs': {
    display: 'flex',
  },
});

export const UnorderedList = styled('ul', {
  listStyle: 'circle',
});

export const ListElement = styled('li', {
  cursor: 'pointer',

  '&:hover': {
    fontWeight: 'bold',
  },
});
